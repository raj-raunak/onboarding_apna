import React, { useState } from "react";
import logo from "./apna.png";
import logo1 from "./back_btn.png";
import logo2 from "./comp.png";
import logo3 from "./client.png";

function Hiring({ setPage, formData, setFormData }) {
  const [status, setStatus] = useState(0);
  const radioHandler = (status) => {
    setStatus(status);
  };

  return (
    <div className="hire">
      <img
        className="back_button"
        src={logo1}
        alt="back_btn"
        onClick={() => {
          setPage((currPage) => currPage - 1);
        }}
      />
      <img className="apna" src={logo} alt="apna_logo" />
      <div className="whom_box">
        <div className="whom">Whom are you hiring for?</div>
        <div className="choose">Choose any option below</div>
      </div>
      <div className="hiring">
        <div className="hir_box1">
          <input
            type="radio"
            name="refer"
            value="own_company"
            id="option-1"
            checked={status == 1}
            onClick={(e) => radioHandler(1)}
          />
          <label for="option-1">
            <div className="comp_img">
              <img className="comp" src={logo2} />
              <br />
              <div className="my_comp">My own company</div>
            </div>
          </label>
          <div className="hire_det1">
            I’m an owner/employee of a business or a company/enterprise.
          </div>
        </div>
        <div className="hir_box2">
          <input
            type="radio"
            name="refer"
            value="client"
            id="option-2"
            checked={status === 2}
            onClick={(e) => radioHandler(2)}
          />
          <label for="option-2">
            <div className="client_img">
              <img className="client" src={logo3} />
              <br />
              <div className="my_client">My clients</div>
            </div>
          </label>
          <div className="hire_det2">
            I’m a consultant working for staffing or manpower consultancy
          </div>
        </div>
      </div>
      {status == 1 && (
        <div>
          <div className="your_comp_name">
            <b>Your company name</b>
            <br />
          </div>
          <input
            className="hire_blank"
            type="text"
            placeholder="Example: Apna"
            value={formData.comp_name}
            onChange={(event) =>
              setFormData({ ...formData, comp_name: event.target.value })
            }
          />

          <div className="comp_web">
            <b>Company Website</b> (optional) <br />
          </div>
          <input
            className="hire_blank"
            type="text"
            placeholder="Example: www.abc.com"
            value={formData.comp_web}
            onChange={(event) =>
              setFormData({ ...formData, comp_web: event.target.value })
            }
          />
          <div className="emp_text">
            <b>Number of employees</b> <br />
          </div>
          <div className="no_of_emp">
            <input type="button" className="emp_no" value="1-10" name="but" />
            <input type="button" className="emp_no" value="10-50" name="but" />
            <input type="button" className="emp_no" value="50-200" name="but" />
            <input
              type="button"
              className="emp_no"
              value="200-500"
              name="but"
            />
            <input type="button" className="emp_no" value="500+" name="but" />
          </div>
        </div>
      )}

      {status == 2 && (
        <div>
          <div className="client_hire">
            <b>Clients you normally hire for</b>
            <br />
          </div>
          <input
            className="hire_blank"
            type="text"
            placeholder=" Example: Swiggy, Zomato, Flipkart"
            value={formData.clients}
            onChange={(event) =>
              setFormData({ ...formData, clients: event.target.value })
            }
          />

          <div className="your_comp_name">
            <b>Your consultancy name</b>
          </div>
          <input
            className="hire_blank"
            type="text"
            placeholder=" Example:apna"
            value={formData.consultancy_name}
            onChange={(event) =>
              setFormData({ ...formData, consultancy_name: event.target.value })
            }
          />

          <div className="const_web">
            <b>Consultancy Website</b> (optional) <br />
          </div>
          <input
            className="hire_blank"
            type="text"
            placeholder=" Example: www.abc.com"
            value={formData.consultancy_website}
            onChange={(event) =>
              setFormData({
                ...formData,
                consultancy_website: event.target.value,
              })
            }
          />

          <div className="emp_text">
            <b>Number of employees in your consultancy </b>(optional)
            <br />
          </div>
          <div className="no_of_emp">
            <input type="button" className="emp_no" value="1-10" name="but" />
            <input type="button" className="emp_no" value="10-50" name="but" />
            <input type="button" className="emp_no" value="50-200" name="but" />
            <input
              type="button"
              className="emp_no"
              value="200-500"
              name="but"
            />
            <input type="button" className="emp_no" value="500+" name="but" />
          </div>
        </div>
      )}

      <div>
        <button
          className="button"
          disabled={!formData.comp_name}
          onClick={() => {
            setPage((currPage) => currPage + 1);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Hiring;
