import './App.css';
import Header from 'rj1\src\components\Header.js';
import {Footer} from 'rj1\src\components\Footer.js';

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Header name="Shankar" role="Trainer" />
      <Header name="Raj" role="Engineer" />
      <Header name="Rahul" role="Actor" />
      <Header name="Ravi" role="Doctor" />
      <Header name="Mani" role="Pilot" />
      <Footer personName="Ramu" age="70" name="Raju" />
      
    </div>
  );
}


export default App;
