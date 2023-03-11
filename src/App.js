import logo from './logo.svg';
import {useEffect} from 'react'
import './App.css';
import { MediumAPI, mMdiumAPI } from './api/services/medium/Medium';

import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


// it works but its expensive use data instead
function App({signOut, user}) {
  useEffect(()=> {
    console.log('mounted')
    const result1 = MediumAPI.getTopFeeds()
    const result2 = MediumAPI.getLatestPosts()

    console.log(result2)
  },[])

  return (
    <div class="App">
      <Heading level={1}>Hello {user.username}</Heading>
      <Button onClick={signOut}>Sign out</Button>
      <h2>Amplify Todos</h2>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
