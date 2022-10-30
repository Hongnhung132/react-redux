
import './App.css';
import SingleCounter  from './components/withoutRedux/SingleCounter';
import  MultiCounterWithoutRedux from './components/withoutRedux/MultiCounter'; 
import SingleCounterRedux from'./components/withRedux/SingleCounterRedux';
import MultiCounterRedux from'./components/withRedux/MultiCounterRedux';

function App() {
  return (
    <div>
      <h3>1. Single Counter Without Redux</h3>
      <SingleCounter />
      <h3>2. Multi Counter Without Redux</h3>
      <MultiCounterWithoutRedux />
      <h3>3. Single Counter With Redux</h3>
      <SingleCounterRedux />
      <h3>4. Multi Counter With Redux</h3>
      <MultiCounterRedux />

    </div>
  );
}
export default App;
