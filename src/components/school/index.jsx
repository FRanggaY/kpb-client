import React from 'react';

import axios from 'axios';

const token = localStorage.getItem("token");
const config = {
    headers: { Authorization : `Bearer ${token}`}
};

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/school`, config)
        .then(res => {
            const persons = res.data.data;
            this.setState({ persons });
        })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li key={person}>{person.title}</li>)}
      </ul>
    )
  }
}
