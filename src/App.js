
import './App.css';
// import Single from './components/withoutRedux/Single';
import SingleCounter  from './components/withoutRedux/SingleCounter';

function App() {
  return (
    <div style={{display: 'flex', justifyContent:'center'}}>
      <h3>1. Single Counter</h3>
      <SingleCounter />
    </div>
  );
}
export default App;
