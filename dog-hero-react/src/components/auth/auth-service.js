import axios from "axios";

class AuthService {
  constructor() {
    // let service = axios.create({
    //   baseURL: process.env.REACT_APP_API_URL,
    //   withCredentials: true
    // });
    let service = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });

    this.service = service;
  }

  signupOwner = (username, password_digest, name, email, age, address, image) => {
    return this.service
      .post("/owners", { username, password_digest, name, email, age, address, image })
      .then(response => response.data);
  };

  signupCaregiver = (username, password_digest, name, email, age, address, image) => {
    return this.service
      .post("/caregivers", { username, password_digest, name, email, age, address, image })
      .then(response => response.data);
  };

  loggedin = () => {
    return this.service.get("/loggedin").then(response => response.data);
  };

  loginOwner = (username, password) => {
    return this.service
      .post("/owner/current", { username, password })
      .then(response => response.data);
  };

  loginCaregiver = (username, password) => {
    return this.service
      .post("/caregiver/current", { username, password })
      .then(response => response.data);
  };

  logout = () => {
    return this.service.get("/logout").then(response => response.data);
  };
}

export default AuthService;