

# WhereTo: A Collaborative Location Ranking Application

## Overview

WhereTo is a collaborative ranking application designed to help users evaluate and score different living locations based on various criteria. Users can create private groups, invite friends, and collectively rank locations on an interactive map. The application aims to provide a comprehensive view of different places based on sub-categories such as cost of living, culture, food, and more.

## Technologies Used

- **Frontend**: React, Tailwind CSS, Framer Motion
- **Backend**: AWS Services (DynamoDB, Lambda, API Gateway)
- **Mapping**: Leaflet.js

## Architecture

### Frontend

- **React**: For building the user interface.
- **Tailwind CSS**: For styling.
- **Framer Motion**: For animations.

### Backend

- **DynamoDB**: Utilizes single table design for storing data.
- **Lambda**: Handles CRUD operations.
- **API Gateway**: Manages API calls.

### Mapping

- **Leaflet.js**: Provides the interactive mapping functionality.

## Getting Started

### Prerequisites

- Node.js
- AWS CLI

### Installation

1. Clone the repository from the `dev` branch.
    ```bash
    git clone -b dev https://github.com/your-repo-link.git
    ```
2. Navigate to the project directory.
    ```bash
    cd WhereTo
    ```
3. Install dependencies.
    ```bash
    npm install
    ```
4. Start the development server.
    ```bash
    npm run dev
    ```

## Contributors

- Madison Evans
- Gehrig Barnes
- Keino Chichester
- George Elkik
- Christopher Choute

## Status

The project is currently in development. All ongoing work is being done in the `dev` branch.
