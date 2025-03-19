import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import MainArticle from '../components/MainArticle';
import SecondaryArticle from '../components/SecondaryArticle';
import ArticleList from '../components/ArticleList';
import PrimaryFooter from '../components/PrimaryFooter';
import SecondaryFooter from '../components/SecondaryFooter';
import './Home.css';
import simion from '../pictures/simion.jpg';
import protest from '../pictures/protest.jpg';
import debate from '../pictures/dezbatere.jpg';
import candidate from '../pictures/vote.jpg';
import rally from '../pictures/campaign.jpg';
import voting from '../pictures/votee.jpg';

function Home() {
    return (
        <div className="home-container">
            
            <main className="main-content">
                <MainArticle
                    title="Romanian Presidential Campaign Intensifies Ahead of Election"
                    content={[
                        "With the presidential election on the horizon, Romania is abuzz with political activity. Leading candidate George Simion, known for his nationalist rhetoric and advocacy for unification with Moldova, has been touring the country to garner support.",
                        "Opponents criticize Simion's approach, arguing that his policies could isolate Romania on the international stage. As debates heat up, citizens are urged to scrutinize each candidate's platform carefully.",
                        "The election results are poised to significantly impact Romania's direction in the European Union and its relations with neighboring countries."
                    ]}
                    image={simion}
                    altText="Candidate George Simion addressing supporters"
                />
                <MainArticle
                    title="Economic Policies Take Center Stage in Presidential Debates"
                    content={[
                        "Economic policies have become a focal point in the presidential debates, with candidates presenting their plans to boost Romania's economy. Key issues include job creation, tax reforms, and foreign investments.",
                        "Leading candidates have outlined their strategies to address economic challenges and promote sustainable growth. Voters are encouraged to evaluate the feasibility and impact of these proposals.",
                        "The outcome of the election will shape Romania's economic landscape for years to come."
                    ]}
                    image={candidate}
                    altText="Candidates debating economic policies"
                />
                <ArticleList />

                <section className="secondary-articles">
                    <SecondaryArticle
                        title="Romanian Presidential Election: Key Candidates"
                        timestamp="10m ago"
                        image={protest}
                    />
                    <SecondaryArticle
                        title="Election Campaigns Heat Up Across Counties"
                        timestamp="20m ago"
                        image={debate}
                    />
                    <SecondaryArticle
                        title="Candidates Address Environmental Concerns"
                        timestamp="30m ago"
                        image={rally}
                    />
                    <SecondaryArticle
                        title="Voter Turnout Expected to Reach Record Highs"
                        timestamp="40m ago"
                        image={voting}
                    />
                </section>
            </main>
            <PrimaryFooter />
            <SecondaryFooter />
        </div>
    );
}

export default Home;
