# Candidate Search Application

## Description

The **Candidate Search Application** is a web application that allows employers to search for potential candidates on GitHub and save them to a list of potential hires. This application leverages the GitHub API to fetch candidate data and provides a simple interface for employers to browse through candidates, accept or reject them, and view the list of accepted candidates. The project is built with **React** and **TypeScript** for a robust and type-safe development experience.

## User Story

```md
AS AN employer  
I WANT a candidate search application  
SO THAT I can hire the best candidates  
```

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [License](#license)

## Installation

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/Candidate-Search.git
   cd Candidate-Search
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `environment` folder and add your GitHub Personal Access Token:

   ```bash
   VITE_GITHUB_TOKEN=your_personal_access_token
   ```

   > Note: Follow the instructions [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token) to create a fine-grained personal access token.

4. Start the application:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3001` to see the app in action.

## Usage

1. **Candidate Search Page**: When the page loads, the information for one candidate is displayed. You can either save the candidate to the list of potential candidates by clicking the "+" button or skip the candidate by clicking the "-" button.

2. **Potential Candidates Page**: This page displays the list of all accepted candidates. You can view each candidate's details, such as their name, username, location, avatar, email, company, and GitHub URL. 

3. **Persistent Storage**: The list of saved candidates is stored in `localStorage`, so it persists even after refreshing the page.

## Features

- Fetches candidate data from the GitHub API.
- Displays candidate information, including name, username, location, avatar, email, and company.
- Allows users to accept or reject candidates.
- Saves accepted candidates to a list stored in `localStorage`.
- Displays a list of saved candidates with detailed information.
- Provides a message when no more candidates are available for review or when no candidates have been accepted.

## Deployment

The application is deployed on Render. You can visit the live application here: [Candidate Search Application](https://your-render-app-url.com)

To deploy this application to Render, follow the instructions on [Render's deployment guide](https://coding-boot-camp.github.io/full-stack/render/render-deployment-guide).

## Screenshots

### Candidate Search Page

![Candidate Search Page](src\assets\images\13-01-candidate_search_homepage.png)

### Potential Candidates Page

![Potential Candidates Page](src\assets\images\13-02-candidate_search_potential_candidates.png)

## License

Distributed under the MIT License. See `LICENSE` for more information.