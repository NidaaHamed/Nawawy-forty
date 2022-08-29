import logo from './logo-new.png';
import './App.css';
import List from './List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        الأربعون في مباني الإسلام وقواعد الأحكام المعروفة بـ الأربعون النووية، متن اشتمل على اثنين وأربعين حديثاّ جمعها يحيى بن شرف النووي المتوفى 676 هـ. 
        </p>
      </header>
      <List/>
    </div>
  );
}

export default App;
