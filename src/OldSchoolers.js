import React, { Component } from "react";
import axios from "axios";

import { DevelopersBox } from "./styled";
import { BASE_URL } from "./utils";

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

export default class OldSchool extends Component {
  constructor(props) {
    super(props);

    this.onFetchFromGitHub = this.onFetchFromGitHub.bind(this);

    this.state = { users: [] };
  }

  async componentDidMount() {
    const {
      data: { users }
    } = await this.onFetchFromGitHub();

    this.setState({ users: users });
  }

  onFetchFromGitHub = () => {
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
