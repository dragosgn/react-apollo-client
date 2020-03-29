import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { DevelopersBox } from "./styled";

const GET_HIPSTERS = gql`
  {
    users {
      id
      username
    }
  }
`;

const Hipsters = () => (
  <Query query={GET_HIPSTERS}>
    {({ data, loading }) => {
      if (loading || !data) {
        return <div>Loading ...</div>;
      }

      const { users: hipsters } = data;

      if (!hipsters) {
        return null;
      }
      return (
        <div>
          {hipsters.map(hip => (
            <DevelopersBox key={hip.id}>{hip.username}</DevelopersBox>
          ))}
        </div>
      );
    }}
  </Query>
);

export default Hipsters;

// https://www.robinwieruch.de/react-graphql-apollo-tutorial/
