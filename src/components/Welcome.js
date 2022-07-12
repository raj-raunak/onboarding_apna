import React from "react";
import logo from "./apna.png";

function Welcome({ setPage, formData, setFormData }) {
  return (
    <div className="wel">
      <img className="apna" src={logo} alt="apna_logo" />
      <br />
      <div className="wel_tot">
        <div className="welcome">Welcome!</div>
        <br />
        <div className="wel_cont">
          Since this is your first job posting, let's setup your company
          account.
        </div>
      </div>
      <div className="name_box">
        <div className="fname">What is your full name?</div>
        <input
          type="text"
          className="name"
          placeholder="Example: Ramesh Kumar Singh"
          value={formData.name}
          onChange={(event) =>
            setFormData({ ...formData, name: event.target.value })
          }
        />
      </div>
      <div>
        <button
          className="button"
          disabled={!formData.name}
          onClick={() => {
            // console.log("clicked")
            setPage((currPage) => currPage + 1);
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Welcome;
