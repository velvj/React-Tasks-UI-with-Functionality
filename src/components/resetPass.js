import React, { useState, useEffect } from "react";
import "./reset.css";
import bgimg from "./svgData/logo.svg";
import dbname from "./svgData/name.svg";
import social from "./svgData/social.svg";
import dot from "./svgData/others.svg";
import topr from "./svgData/topr.svg";
import bottoml from "./svgData/bottoml.svg";
import { Link } from "react-router-dom";

function ResetPass() {
  const initialVal = { password: "", confirmPassword: "" };
  const [formVal, setFormVal] = useState(initialVal);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formVal));
    setIsSubmit(true);
  };

  const handleChange = (event) => {
    console.log(formVal);
    const { name, value } = event.target;
    setFormVal({ ...formVal, [name]: value });
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formVal, "hi");
    }
  });

  const validate = (val) => {
    const err = {};
    if (!val.password) {
      err.password = "password is required!";
    } else if (val.password.length < 4) {
      err.password = "password must be more than 4 letters";
    } else if (val.password.length > 10) {
      err.password = "password cannot exceed more than 10 letters";
    }
    if (!val.confirmPassword) {
      err.confirmPassword = "password is required!";
    } else if (val.confirmPassword.length < 4) {
      err.confirmPassword = "password must be more than 4 letters";
    } else if (val.confirmPassword.length > 10) {
      err.confirmPassword = "password cannot exceed more than 10 letters";
    }
    return err;
  };

  return (
    <React.Fragment>
      {/* conditoion rendering */}
      <img src={topr} className="top-R" alt="circle" />
      <img src={bgimg} className="bg-logo" alt="db logo" />
      <div className="every">
        <form>
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="uiMsg">Submited Successfully</div>
          ) : null}
          <img src={dbname} className="db-name" alt="db name" />
          <br></br>
          <h3>Change Password</h3>
          <br></br>
          <label htmlFor="pass" className="lab">
            New Password
          </label>
          <input
            type="password"
            name="password"
            className="inp"
            value={formVal.password}
            onChange={handleChange}
          />
          <p>{formErrors.password}</p>
          <br></br>
          <label htmlFor="newPass" className="lab">
            Re-type New Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            className="inp"
            value={formVal.confirmPassword}
            onChange={handleChange}
          />
          <p>{formErrors.confirmPassword}</p>
          <button className="close">
            <Link to="/">Close</Link>
          </button>
          <button className="reSign" type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      <img src={social} className="socialApp" alt="social connects" />
      <img src={dot} className="dotDesign" alt=" dot design" />
      <img src={bottoml} className="bottomr" alt="bottom design" />
    </React.Fragment>
  );
}

export default ResetPass;
