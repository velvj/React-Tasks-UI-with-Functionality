import React, { Component } from "react";
import "./verify.css";
import bgimg from "./svgData/logo.svg";
import dbname from "./svgData/name.svg";
import social from "./svgData/social.svg";
import dot from "./svgData/others.svg";
import topr from "./svgData/topr.svg";
import bottoml from "./svgData/bottoml.svg";
import { Link } from "react-router-dom";

class Verify extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
      otp5: "",
      otp6: "",
      errors: {},
      isSubmit: false,
      // disable: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // validation
  validate = () => {
    const errors = {};
    const { otp1, otp4 } = this.state;
    if (!otp1) {
      errors.otp1 = "OTP required!";
    }
    if (!otp4) {
      errors.otp14 = "OTP required!";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleChange = (value1, event) => {
    this.setState({ [value1]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
    if (errors) return;
    this.setState({ isSubmit: true });
    alert(`verifying ${this.state.otp1}`);
  };

  inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -2) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      console.log("next");

      const next = elmnt.target.tabIndex;
      if (next < 6) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };

  render() {
    const { otp1 } = this.state.errors;
    return (
      <React.Fragment>
        <img src={topr} className="top-R" alt="circle" />
        <img src={bgimg} className="bg-logo" alt="db logo" />
        <div className="every">
          <form className="fdata">
            <img src={dbname} className="db-name" alt="db name" />
            <br></br>
            <div className="lab">
              <label className="hhead">Verify OTP</label>
              <label className="reg">
                we have an OTP to the registered Email ID
              </label>
            </div>
            <p className="aMsg">{otp1}</p>
            <input
              name="otp1"
              type="text"
              autoComplete="off"
              className="otpInput"
              value={this.state.otp1}
              onClick={this.keyPressed}
              onChange={(e) => this.handleChange("otp1", e)}
              tabIndex="1"
              maxLength="1"
              onKeyUp={(e) => this.inputfocus(e)}
            />

            <input
              name="otp2"
              type="text"
              autoComplete="off"
              className="otpInput"
              value={this.state.otp2}
              onChange={(e) => this.handleChange("otp2", e)}
              tabIndex="2"
              maxLength="1"
              onKeyUp={(e) => this.inputfocus(e)}
            />
            <input
              name="otp3"
              type="text"
              autoComplete="off"
              className="otpInput"
              value={this.state.otp3}
              onChange={(e) => this.handleChange("otp3", e)}
              tabIndex="3"
              maxLength="1"
              onKeyUp={(e) => this.inputfocus(e)}
            />
            <input
              name="otp4"
              type="text"
              autoComplete="off"
              className="otpInput"
              value={this.state.otp4}
              onChange={(e) => this.handleChange("otp4", e)}
              tabIndex="4"
              maxLength="1"
              onKeyUp={(e) => this.inputfocus(e)}
            />
            <input
              name="otp5"
              type="text"
              autoComplete="off"
              className="otpInput"
              value={this.state.otp5}
              onChange={(e) => this.handleChange("otp5", e)}
              tabIndex="5"
              maxLength="1"
              onKeyUp={(e) => this.inputfocus(e)}
            />
            <input
              name="otp6"
              type="text"
              autoComplete="off"
              className="otpInput"
              value={this.state.otp6}
              onChange={(e) => this.handleChange("otp6", e)}
              tabIndex="6"
              maxLength="1"
              onKeyUp={(e) => this.inputfocus(e)}
            />
            <br></br>
            <button type="submit" className="sign" onClick={this.handleSubmit}>
              <Link to="/reset">Submit</Link>
            </button>
            <br></br>
            <label>
              The OTP expires in .
              <a href="https://www.w3schools.com/"> Resend OTP&#x3f;</a>
            </label>
          </form>
        </div>
        <img src={social} className="socialApp" alt="social connects" />
        <img src={dot} className="dotDesign" alt=" dot design" />
        <img src={bottoml} className="bottomr" alt="bottom design" />
      </React.Fragment>
    );
  }
}

export default Verify;
