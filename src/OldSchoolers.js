import React, { Component } from "react";
import axios from "axios";

import { DevelopersBox } from "./styled";
import { BASE_URL } from "./utils";

class OldSchool extends Component {
  constructor(props) {
    super(props);

    this.onFetchGitHub = this.onFetchGitHub.bind(this);

    this.state = { users: [] };
  }

  async componentDidMount() {
    const response = await this.onFetchGitHub();

    this.setState({ users: response.data.users });
  }

  onFetchGitHub = () => {
    return axiosGraphQL
      .post("", { query: GET_OLDSCHOOL })
      .then(result => result.data);
  };

  render() {
    const { users } = this.state;
    return (
      <div>
        {users.length ? (
          users.map(old => (
            <DevelopersBox key={old.id}>{old.username}</DevelopersBox>
          ))
        ) : (
          <p>Loading</p>
        )}
      </div>
    );
  }
}

export default OldSchool;

const GET_OLDSCHOOL = `
  {
    users {
      id
      username
    }
  }
`;

const axiosGraphQL = axios.create({
  baseURL: BASE_URL
});
