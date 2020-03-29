import React from "react";
import gql from "graphql-tag";
import styled from "styled-components";

import { Query } from "react-apollo";

const GET_HIPPIES = gql`
  {
    users {
      username
    }
  }
`;

const Hippies = () => (
  <Query query={GET_HIPPIES}>
    {({ data, loading }) => {
      if (loading) {
        return <div>Loading ...</div>;
      }

      const { users } = data;

      if (!users) {
        return null;
      }
      return (
        <div>
          {users.map(user => (
            <HippieBox>{user.username}</HippieBox>
          ))}
        </div>
      );
    }}
  </Query>
);

export default Hippies;

const HippieBox = styled.div`
  padding: 0.5rem;
  border: 1px solid orange;
  border-radius: 6px;
  margin: 1rem 0;
  color: green;
`;
