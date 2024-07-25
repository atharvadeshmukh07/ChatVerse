# ChatVerse

ChatVerse is a real-time chat application built using React and Firebase. It supports user authentication, image sharing, and emoji sharing functionalities.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)

## Features

- User Authentication (Signup/Login)
- Real-time messaging
- Image sharing
- Emoji sharing
- User blocking
- Logout functionality

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**

    ```sh
    git clone https://github.com/atharvadeshmukh07/ChatVerse.git
    cd ChatVerse
    ```

2. **Install dependencies**

    ```sh
    npm install
    ```

3. **Add Firebase Configuration**

    Create a `.env` file in the root directory of your project and add your Firebase configuration:

    ```plaintext
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id
    ```

4. **Start the development server**

    ```sh
    npm start
    ```

    The application will be available at `http://localhost:3000`.

## Usage

Once the development server is running, you can:

- Sign up or log in with your email and password.
- Start chatting with other users in real-time.
- Share images and emojis.
- Block users if needed.
- Log out of the application.

## Deployment

To deploy the project on Vercel, follow these steps:

1. **Sign Up and Log In to Vercel**

    Go to [Vercel](https://vercel.com/) and sign up or log in with your GitHub account.

2. **Import the GitHub Repository**

    - Click on the "New Project" button.
    - Select the `ChatVerse` repository.

3. **Configure the Project**

    - Ensure the framework preset is set to "Vite".
    - Set the build command to `npm run build`.
    - Set the output directory to `dist`.
    - Set the install command to `npm install`.

4. **Add Environment Variables**

    Add the same environment variables defined in your `.env` file:

    ```plaintext
    REACT_APP_FIREBASE_API_KEY
    REACT_APP_FIREBASE_AUTH_DOMAIN
    REACT_APP_FIREBASE_PROJECT_ID
    REACT_APP_FIREBASE_STORAGE_BUCKET
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID
    REACT_APP_FIREBASE_APP_ID
    ```

    Provide their respective values.

5. **Deploy the Project**

    Click the "Deploy" button. Vercel will build and deploy your project. Once the deployment is complete, you will receive a URL where your project is live.

