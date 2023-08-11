import React from 'react'
import './style.css'

function App() {
  const divStyle = {
    color: 'red',
    backgroundColor: 'powderblue',
    fontSize: 'larger',
    padding: '3px'
  }
  return (
    <>
      <h3>Hello world!<br/>สวัสดีชาวโลก</h3>
      <div style={divStyle}>Hello React</div>
      <h2>DeveloperThai.com</h2>
      <div className='title'>React & React Native</div>
    </>
  );
}

export default App;