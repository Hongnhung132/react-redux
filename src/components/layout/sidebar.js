import React from 'react'
import './sidebar.css';
import { Link } from 'react-router-dom' 

export default function Sidebar() {
  return (
    <div>
        <h2 className='h2'>REACT REDUX COUNTER</h2>
        <div className="pt-3">
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <Link to="/" className="nav-link"><b>1. Single Counter</b></Link>
          </li>
          <li className="nav-item">
            <Link to="/multiwithoutredux" className="nav-link"><b>2. MultiCounter</b></Link>
          </li>
          <li className="nav-item">
            <Link to="/singwithredux" className="nav-link"><b>3. SingleCounter - Redux</b></Link>
          </li>
        
          <li className="nav-item">
            <Link to="/multiwithredux" className="nav-link"><b>4. MultiCounter  -  Redux</b></Link>
          </li>
        </ul>
      </div>

    </div>
  )
}

