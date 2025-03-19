# 🎮 Electoral Website

This is a web application built using React, JSX, C#, ASP.NET, and PostgreSQL. The website provides a platform to view election results, explore candidates, and visualize election data with interactive graphs. It is designed with a theme inspired by NYTimes.

## ✨ Features

- 📰 **Home Page**: Displays the latest news related to the election.
- 🗋l **Candidates List**: A page where you can view a list of candidates.
- 🛂 **PostgreSQL Database**: A database to store candidates and election data.
- 📊 **Interactive Graph**: Allows users to choose counties and view the number of votes for each candidate.
- 🔢 **All Votes Section**: A section in the graph that aggregates the votes from all counties.

## 🛠 Tech Stack

- **Frontend**:
  - ⛓️ React
  - ✏️ JSX
  - 🎨 CSS (styled to match the NYTimes theme)

- **Backend**:
  - 🏠 ASP.NET Core (C#)
  - 🛋️ PostgreSQL database for storing election and candidate data

- **Libraries & Tools**:
  - 📉 React-Chart.js (or any chart library used for the graph)
  - 🔐 JWT for authentication
  - 🔄 Axios for making API requests from the frontend

## 🔌 API Integration

The backend API makes requests to the PostgreSQL database to retrieve candidate data, election results, and other relevant information.

### 🔑 Key API Endpoints

- **📥 GET /api/candidates**: Retrieves a list of all candidates.
- **📍 GET /api/votes/{county}**: Retrieves vote counts for a specific county.
- **📛 GET /api/votes/all**: Retrieves the aggregated vote counts from all counties.

These API endpoints interact with the PostgreSQL database to fetch election data and send it to the frontend.

## 🚀 Setup

### ⚡ Prerequisites

Make sure you have the following installed on your machine:

- 🟢 **[Node.js](https://nodejs.org/)**: For running the React app.
- 🔵 **[.NET Core SDK](https://dotnet.microsoft.com/)**: For running the ASP.NET backend.
- 🟡 **[PostgreSQL](https://www.postgresql.org/)**: For the database.

---

### 🏠 Frontend Setup

1. **Clone the repository** 📥  
   ```bash
   git clone https://github.com/yourusername/electoral-website.git
   cd electoral-website
   ```

2. **Install dependencies** 📦  
   ```bash
   npm install
   ```

3. **Start the React development server** 🚀  
   ```bash
   npm start
   ```
   This will run the React app at **`http://localhost:3000`**.

---

### 🔧 Backend Setup

1. **Restore the required packages** 📦  
   ```bash
   dotnet restore
   ```

2. **Start the backend server** 🚀  
   ```bash
   dotnet run
   ```
   The backend will now be running on **`http://localhost:5000`**.

---

## 🎯 Usage

1. 📰 Navigate to the **Home Page** to see the latest election news.
2. 📋l Visit the **Candidates List** to view available candidates.
3. 📊 Use the **graph** to choose counties and see vote counts for each candidate.
4. 🔢 The **"All" section** on the graph shows the total votes from all counties.

---

## 🤝 Contributing

Feel free to open issues or submit pull requests to contribute to this project.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

