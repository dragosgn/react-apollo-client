import React, { Component } from "react";
import axios from "axios";

import { BASE_URL } from "./utils";

const axiosGraphQL = axios.create({
  baseURL: BASE_URL
});

export default class OldSchool extends Component {
  render() {
    return <div>OldSchoolers</div>;
  }
}
