import React, { Component } from "react";
import './Profile.style.css'
import { Link, withRouter } from 'react-router-dom'
import Axios from "axios";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      detailUser: {}
    };
  }

  componentDidMount(){
   const userId = this.props.match.params.userId
   console.log(this.props)

    this.getDetailUser(userId)
  }

  async getDetailUser(userId){
    const result = await Axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)

    this.setState({detailUser: result.data })
    console.log(this.state.detailUser)
  }

  render(){
    const { name, email } = this.state.detailUser
    return(
      <div className='App'>
        <h1>Profile</h1>
        <h2>{name}</h2>
        <h2>{email}</h2>
        <h2><Link to='/'>Back To Home</Link></h2>
      </div>
    )
  }
}

export default withRouter(Profile)
