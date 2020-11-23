import Axios from "axios";
import React, { Component } from "react";
import "./Home.style.css";

import Search from '../../Components/Search/Search'
import Card from '../../Components/Card/Card'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      data: [] // Raw data
    };
  }

  componentDidMount(){
    this.fetchData()
  }

  async fetchData(){
    const result = await Axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(result)
    this.setState({ data: result.data })
  }

  searchData = event => {
    this.setState({ search: event.target.value })
  }

  render() {
    const { data, search } = this.state;
    const filteredData = data.filter(user => 
      user.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
      <div className="App">
        <h1>User Data</h1>
        <Search 
          placeholder={'Search'}
          searchData={this.searchData}
        />
        <div className="card-list">
        {
          filteredData.map((user, index) => {
            return(
              <Card key={index} user={user} />
            )
          })
        }
        </div>
      </div>
    );
  }
}

export default Home;
