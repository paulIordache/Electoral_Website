import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import './results.css';

const VoteResultsChart = () => {
    const [chartData, setChartData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [counties, setCounties] = useState([]);
    const [selectedCounty, setSelectedCounty] = useState('Total');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const chartRef = useRef();

    useEffect(() => {
        fetch('https://localhost:7072/api/VoteResults')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (!Array.isArray(data)) {
                    throw new Error('Data is not an array');
                }
                console.log('Fetched Data:', data); // Debug statement
                setChartData(data);
                const uniqueCounties = Array.from(new Set(data.map(d => d.countyName).filter(Boolean)));
                console.log('Unique Counties:', uniqueCounties); // Debug statement
                setCounties(['Total', ...uniqueCounties.sort()]);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching vote results:', error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (selectedCounty === 'Total') {
            setFilteredData(chartData);
        } else {
            setFilteredData(chartData.filter(d => d.countyName === selectedCounty));
        }
    }, [selectedCounty, chartData]);

    useEffect(() => {
        if (!loading && !error) {
            const svg = d3.select(chartRef.current);
            svg.selectAll('*').remove();

            svg.attr('width', 800)
                .attr('height', 400)
                .style('background-color', '#ffffff')
                .style('margin-top', '10px')
                .style('overflow', 'visible');

            const margin = { top: 60, right: 30, bottom: 60, left: 150 };
            const width = +svg.attr('width') - margin.left - margin.right;
            const height = +svg.attr('height') - margin.top - margin.bottom;

            const candidateVotes = d3.rollup(
                filteredData,
                v => d3.sum(v, d => d.totalVotes),
                d => d.candidateName
            );

            const sortedData = Array.from(candidateVotes.entries()).sort((a, b) => b[1] - a[1]);
            const candidates = sortedData.map(d => d[0]);

            const y = d3.scaleBand()
                .domain(candidates)
                .range([margin.top, height])
                .padding(0.1);

            const x = d3.scaleLinear()
                .domain([0, d3.max(sortedData, d => d[1])])
                .nice()
                .range([margin.left, width]);

            const colors = d3.scaleOrdinal()
                .domain(candidates)
                .range(d3.schemeCategory10);

            svg.append('g')
                .attr('transform', `translate(0,${margin.top})`)
                .call(d3.axisLeft(y).tickSize(0))
                .selectAll('text')
                .attr('fill', d => colors(d));

            svg.append('g')
                .attr('transform', `translate(0,${height + margin.top})`)
                .call(d3.axisBottom(x))
                .append('text')
                .attr('y', 40)
                .attr('x', width / 2)
                .attr('text-anchor', 'middle')
                .attr('fill', 'black')
                .text('Total Votes');

            svg.selectAll('.bar')
                .data(sortedData)
                .enter().append('rect')
                .attr('class', 'bar')
                .attr('y', d => y(d[0]))
                .attr('x', x(0))
                .attr('width', d => x(d[1]) - x(0))
                .attr('height', y.bandwidth())
                .attr('fill', d => colors(d[0]));

            svg.selectAll('.total-votes')
                .data(sortedData)
                .enter().append('text')
                .attr('class', 'total-votes')
                .attr('x', d => x(d[1]) - 10)
                .attr('y', d => y(d[0]) + y.bandwidth() / 2)
                .attr('dy', '.35em')
                .attr('text-anchor', 'end')
                .attr('fill', 'white')
                .text(d => `${d[1]} votes`);
        }
    }, [filteredData, loading, error]);

    if (loading) {
        return <div>Loading chart...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="vote-results-chart">
            <h2>Vote Results Chart</h2>
            <select onChange={(e) => setSelectedCounty(e.target.value)} value={selectedCounty} style={{ maxHeight: '150px', overflowY: 'hidden' }}>
                {counties.map(county => (
                    <option key={county} value={county}>{county}</option>
                ))}
            </select>
            <svg ref={chartRef}></svg>
        </div>
    );
};

export default VoteResultsChart;
