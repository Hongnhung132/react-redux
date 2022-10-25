
import './App.css';
// import Single from './components/withoutRedux/Single';
import SingleCounter  from './components/withoutRedux/SingleCounter';
import  MultiCounterWithoutRedux from './components/withoutRedux/MultiCounter'; 

function App() {
  return (
    <div>
      <h3>1. Single Counter Without Redux</h3>
      <SingleCounter />
      <h3>2. Multi Counter Without Redux</h3>
      <MultiCounterWithoutRedux />

    </div>
  );
}
export default App;
