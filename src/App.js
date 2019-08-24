import React, { useState } from 'react';
import logo from './logo.svg';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './themes';

const Wrapper = styled.div`
  .App {
    text-align: center;
  }

  .App-logo {
    animation: App-logo-spin infinite 20s linear;
    height: 40vmin;
    pointer-events: none;
  }

  .App-header {
    transition: 0.35s;
    background-color: ${props => props.theme.bgColor};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: ${props => props.theme.textColor};
  }

  .App-link {
    transition: 0.35s;
    color: ${props => props.theme.linkColor};
  }

  button {
    transition: 0.35s;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    font-weight: 700;
    margin: 40px;
    height: 50px;
    width: 160px;
    border: 3px solid ${props => props.theme.linkColor};
    background: transparent;
    color: ${props => props.theme.textColor};
    font-size: 0.9rem;
    letter-spacing: 2px;
  }

  button:hover {
    cursor: pointer;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

function App() {
  let [isDarkTheme, toggleTheme] = useState(true);

  const action = () => {
    toggleTheme((isDarkTheme = !isDarkTheme));
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Wrapper className="App">
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
          <button onClick={action}>
            {isDarkTheme ? 'LIGHT' : 'DARK'} THEME
          </button>
        </header>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
