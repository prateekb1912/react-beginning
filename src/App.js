import './App.css';

function App() {
  return (
    <div className="App"> 
      <User first="Prateek" last="Bhardwaj"/>
      <User first="Nehal" last="Lomror"/> 
      <User first="Mahi" last="Rampaul"/> 

    </div>
  );
}

const User = (props) => {
  return  <div>
    <h1> {props.first} </h1>
    <h2> {props.last}</h2>
  </div>;
};

export default App; 
