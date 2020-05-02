import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { count: 0, userData: '' }
  }

  static getDerivedStateFromProps(props, state) {
    return { count: props.count }
  }

  componentDidMount() {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      // .then(res => console.log(res.data))
      .then(res => this.setState({ userData: res.data }))
  }

  setData() {

  }

  render() {
    console.log(this.state.userData);
    return (<div>
      <h1>This example showcase Lifecycle Methods</h1>

      <p>The default state of count is : {this.state.count}</p>
      
      {this.state.userData.length === 0 ? <p>No user Found</p> :
        this.state.userData.map((user) => <p key={user.id}>{`UserName: ${user.first_name} ${user.last_name}`}</p>)
      }
    </div>
    )
  }
}

App.defaultProps = {
  count: 9
}

export default App;
