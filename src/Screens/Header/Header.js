
import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Header extends Component {
  render(){
    return(
      <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
    )
  }
}

export default Header
