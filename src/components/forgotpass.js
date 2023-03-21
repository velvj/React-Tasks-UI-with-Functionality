import React, { Component } from "react";
import "./forgot.css";
import bgimg from "./svgData/logo.svg";
import dbname from "./svgData/name.svg";
import social from "./svgData/social.svg";
import dot from "./svgData/others.svg";
import topr from "./svgData/topr.svg";
import bottoml from "./svgData/bottoml.svg";
import { Link } from "react-router-dom";

class Forgot extends Component {
  state = {
    email: "",
    errors: {},
  };

  passSubmit = (event) => {
    event.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
    if (errors) return;
    alert(`OTP Sended Successfully ${this.state.email}`);
  };

  handleOtp = (event) => {
    this.setState({ email: event.target.value });
  };

  validate = () => {
    const errors = {};
    const { email } = this.state;
    if (!email) {
      errors.email = "Email ID required!";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  render() {
    const { email } = this.state.errors;

    return (
      <React.Fragment>
        <img src={topr} className="top-R" alt="circle" />
        <img src={bgimg} className="bg-logo" alt="db logo" />
        <div className="every">
          <form className="fdata">
            <img src={dbname} className="db-name" alt="db name" />
            <br></br>

            <label className="your">Forgot Your Password&#x3f;</label>
            <br></br>
            <p className="eMsg">{email}</p>
            <label htmlFor="email" className="lab">
              Email address
            </label>
            <input
              className="uid"
              type="email"
              name="email"
              value={this.state.email}
              placeholder="miragupta@gmail.com"
              onChange={this.handleOtp}
            />
            <br></br>
            <button id="back">
              <Link to="/">Back</Link>
            </button>
            <button id="otp" type="submit" onClick={this.passSubmit}>
              <Link to="/verify">Send OTP</Link>
            </button>
          </form>
          <img src={social} className="socialApp" alt="social connects" />
          <img src={dot} className="dotDesign" alt=" dot design" />
          <img src={bottoml} className="bottomr" alt="bottom design" />
        </div>
      </React.Fragment>
    );
  }
}

export default Forgot;
