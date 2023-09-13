import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Amplify from 'aws-amplify';
// import awsconfig from './aws-exports';

// Amplify.configure(awsconfig);

// * Amplify init stuff
// import Amplify from 'aws-amplify';
// import awsconfig from './aws-exports';
// Amplify.configure(awsconfig);


// index.js
// import Amplify from 'aws-amplify';
// import awsconfig from '../AWS/auth/auth-config';

// Amplify.configure(awsconfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

