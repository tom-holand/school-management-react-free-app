import { useState } from "react";
//import { useHistory } from "react-router-dom";

//import Axios from "axios";

const CreateSchoolDetail = () => {
  const [schoolName, setSchoolName] = useState("");
  const [pincode, setPincode] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  //const [dataList, setDataList] = useState([]);

  const FormSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <h2 style={{ textAlign: "center" }}>School Details</h2>

            <form onSubmit={FormSubmitHandler}>
              <div className=" mt-3">
                <label className="form-label">School Name</label>

                <input
                  value={schoolName}
                  type="text"
                  className="form-control"
                  placeholder="School Name"
                  required
                  onChange={(event) => {
                    setSchoolName(event.target.value);
                  }}
                />
              </div>

              <div className="mb-3 mt-4">
                <label className="form-label">Pincode</label>
                <input
                  
                  value={pincode}
                  type="number"
                  className="form-control "
                  placeholder="6 digit pincode"
                  required
                  onChange={(event) => {
                    setPincode(event.target.value);
                  }}
                />
              </div>

              <div className="mb-3 mt-4">
                <label className="form-label">Country</label>
                <input
                  value={country}
                  type="text"
                  className="form-control "
                  placeholder="country"
                  onChange={(event) => {
                    setCountry(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3 mt-4">
                <label className="form-label">State</label>
                <input
                  value={state}
                  type="text"
                  className="form-control "
                  placeholder="states"
                  onChange={(event) => {
                    setState(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3 mt-4">
                <label className="form-label">City</label>
                <input
                  value={city}
                  type="text"
                  className="form-control "
                  placeholder="city"
                  onChange={(event) => {
                    setCity(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3 mt-4">
                <label className="form-label">Address</label>
                <input
                  value={address}
                  type="text"
                  className="form-control"
                  placeholder="H.No.932,Address Name"
                  onChange={(event) => {
                    setAddress(event.target.value);
                  }}
                />
              </div>

              <label className="form-label">Mobile Number</label>
              <div className="form-row">
                <div className="form-group col-md-1">
                  <input
                    type="text"
                    value="+91"
                    className="form-control"
                    disabled
                  />
                </div>
                <div className="form-group col-md-11">
                  <input
                    value={mobile}
                    type="number"
                    className="form-control "
                    placeholder="Mobile Number"
                    required
                    onChange={(event) => {
                      setMobile(event.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="mb-3 mt-2">
                <label className="form-label">Board</label>
                <select className="form-control">
                  <option>Select The Board</option>
                  <option>STATE BOARD</option>
                  <option>CSBE BOARD</option>
                </select>
              </div>
              <div className="mb-3 mt-4">
                <label className="form-label">No. of Classes</label>
                <select className="form-control">
                  <option>Class 1</option>
                  <option>Class 2</option>
                  <option>Class 3</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn btn-outline-success btn-block"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </>
  );
};

export default CreateSchoolDetail;
