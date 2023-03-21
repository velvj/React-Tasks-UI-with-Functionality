import React, { Component } from "react";
import "./log.css";
import bgimg from "./svgData/logo.svg";
import dbname from "./svgData/name.svg";
import social from "./svgData/social.svg";
import dot from "./svgData/others.svg";
import pic from "./svgData/pic.svg";
import topr from "./svgData/topr.svg";
import bottoml from "./svgData/bottoml.svg";
import { Link } from "react-router-dom";

class Log extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailID: "",
      pass: "",
      errors: {},
    };
    this.inputRef = React.createRef();
  }

  // validation

  validate = () => {
    const errors = {};
    const { emailID, pass } = this.state;
    if (!emailID) {
      errors.emailID = "Email ID required!";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailID)) {
      errors.emailID = "Invalid emailID address";
    }
    if (!pass) {
      errors.pass = "password is required!";
    } else if (pass.length < 4) {
      errors.pass = "password must be more than 4 letters";
    } else if (pass.length > 10) {
      errors.pass = "password cannot exceed more than 10 letters";
    }

    return Object.keys(errors).length === 0 ?  null : errors;
  };

  componentDidMount() {
    this.inputRef.current.focus();
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    const errors = this.validate();
    this.setState({ errors });
    e.preventDefault();

    if (errors)  return errors;

 alert(`login successfully`);

  };

  render() {
    const { emailID, pass } = this.state;
    const { errors } = this.state;
    return (
      <React.Fragment>
        <img src={topr} className="top-R" alt="circle" />
        <img src={bgimg} className="bg-logo" alt="db logo" />
        <div className="all">
          <form onSubmit={this.handleSubmit} className="formdata">
            <div className="udata">
              <img src={dbname} className="db-name" alt="db name" />
              <br></br>
              <label className="login">Log in</label>
              <br></br>
              <label htmlFor="uName">Email address</label>
              <br></br>
              <input
                type="email"
                placeholder="Enter your Email "
                name="emailID"
                ref={this.inputRef}
                value={emailID}
                onChange={this.handleChange}
                // required

              />
              <p>{errors.emailID}</p>
              <br></br>
              <label htmlFor="password">password</label>
              <br></br>
              <input
                type="password"
                placeholder="Enter your password"
                name="pass"
                value={pass}
                onChange={this.handleChange}
                // required
              />
              <p>{errors.pass}</p>
            </div>
            <button type="submit" className="sign">
              Sign in
            </button>
            <br></br>
            <label className="navLink">
              <Link to="/forgot">forget your password &#x3f;</Link>
            </label>
          </form>
          <img src={social} className="socialApp" alt="social connects" />
          <img src={dot} className="dotDesign" alt=" dot design" />
          <img src={pic} className="pics" alt=" pic design" />
          <img src={bottoml} className="bottomr" alt="bottom design" />
        </div>
      </React.Fragment>
    );
  }
}

export default Log;
