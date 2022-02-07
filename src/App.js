import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

var regularParaStyle = {
  color: '#282C35',
  backgroundColor: '#61DFFF',
  margin: '10px 30px',
  padding: '10px',
  width: '700px'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="regular-para" style={regularParaStyle}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="regular-para" style={regularParaStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit beatae dolore modi tempora laborum dolorum! Explicabo nemo numquam eius.</p>
        <Article title="Poverty"></Article>
        <Article title="Lack of education"></Article>
        <Article title="Road accidents"></Article>
      </header>
    </div>
  );
}

function Article(props) {
  return (
    <div style={regularParaStyle}>
      <p>{props.title}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aperiam esse iusto.</p>
    </div>
  )
}

export default App;
