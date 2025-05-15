import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ClickMeButton from './components/ClickMe.jsx';
import { LoginInfo } from './components/LoginInfo.jsx';
import Counter from './components/Counter.jsx';
import LoginForm from './components/LoginForm.jsx';



function App() {

  // function hendleClick(selectedButton) {

  //   showCounter(selectedButton);

  //   console.log(showCounter);
  // }
  const [isLogin, setIsLohin] = useState(false);

  function handleLogin() { setIsLohin(true) };
  function handleLogout() { setIsLohin(false) };

  return (
    <div className="App">
      < Counter />
      <LoginForm />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Update text in my new project and save to reload.
          hiiii
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <h1>Hello Login!</h1>
          <LoginInfo isLogin={isLogin} />
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
        <div>
          <p>My task is create a component that shows: “Click me” </p>
          <ClickMeButton>Click Me</ClickMeButton>
          {/* <ClickMeButton onSelect={() => hendleClick('ClickMe')}>Click me</ClickMeButton> */}

        </div>
      </header>
    </div>
  );
}

export default App;
