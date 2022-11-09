
import './App.css';
import SingleCounter  from './components/withoutRedux/SingleCounter';
import  MultiCounterWithoutRedux from './components/withoutRedux/MultiCounter'; 
import SingleCounterRedux from'./components/withRedux/SingleCounterRedux';
import MultiCounterRedux from'./components/withRedux/MultiCounterRedux';
import Sidebar from './components/layout/sidebar';
import { Routes, Route } from "react-router-dom";

function App() {
  return (


  <div className="container-fluid">
    <div className="row">
      <div className="col-2 bg-dark min-height-100vh">
        <Sidebar />
      </div>
      <main className="col-10">
      <Routes>
          <Route path='/' element={<SingleCounter />} />
          <Route path='/multiwithoutredux' element={<MultiCounterWithoutRedux />} />
          <Route path='/singwithredux' element={<SingleCounterRedux />} />
          <Route path='/multiwithredux' element={<MultiCounterRedux />} />
        </Routes>
      </main>
    </div>
  </div>
  );
}
export default App;
