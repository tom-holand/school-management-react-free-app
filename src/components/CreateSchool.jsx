import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import Axios from "axios";

const CreateSchool = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  

  const history = useHistory();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [telephone, setTelephone] = useState("");
  const [mobile, setMobile] = useState("");
  const [contactPerson, setContactPerson] = useState("");

  useEffect(() => {

    if(pincode.length === 6){

      console.log(pincode)

      Axios.get("http://localhost:3001/pincode/" + pincode).then(
      (response) => {
        console.log(response.data)
        console.log(response.data.V_PostOffice_State)
        console.log(response.data.V_PostOffice_Country)
        
      }
    );
    
    }

  }, [pincode]);

  const FormSubmitHandler = () => {

    const SchoolData = {
      V_School_Name: name,
      V_School_Address: address,
      N_School_Pincode: pincode,
      N_School_Telephone_Number: telephone,
      N_School_Mobile_Number: mobile,
      V_School_Contact_Person: contactPerson,
    };

    const isNotEmpty = (value) => value.trim() !== '';

    console.log(isNotEmpty("sajsajs"))

    Axios.post("http://localhost:3001/postdata", SchoolData).then(
      (response) => {
        history.replace("/");
      }
    );
    
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3"></div>
          
          <div className="col-md-6">
            <h2 style={{ textAlign: "center" }}>INSERT DATA</h2>

            <form onSubmit={handleSubmit(FormSubmitHandler)}>

            <div className="mt-3">
              <label className="form-label">School Name</label>

              <input
                value={name}
                type="text"
                className="form-control "
                placeholder="School Name"
                {...register("Schoolname", {
                  required: true,
                  pattern: {
                    value: /^[A-Za-z\s]+$/i,
                    message: "this should be in string format",
                  },
                })}
                onChange={(event) => {
                  setName(event.target.value.replace(/[^A-Za-z\s]/g, ""));
                }}
              />

              <div className="form-text text-danger">
                {errors.Schoolname && (
                  <span>{errors.Schoolname.message}</span>
                )}

                {errors.Schoolname?.type === "required" &&
                  "This field is required"}
              </div>
            </div>


            <div className="mb-3 mt-4">
              <label className="form-label">School Address</label>

              <input
                value={address}
                type="text"
                className="form-control "
                placeholder="address"
                {...register("Address", {
                  required: true,
                  pattern: {
                    value: /^[#.0-9a-zA-Z\s,-]+$/,
                    message: "this should be in string format",
                  },
                })}
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
              />

              <div className="form-text text-danger">
                {errors.Address?.type === "required" &&
                  "This field is required"}
              </div>

            </div>


            <div className="mb-3 mt-4">
              <label className="form-label">Pincode</label>
              <input
                value={pincode}
                type="text"
                className="form-control "
                placeholder="6 digit pincode"
                maxLength="6"
                minLength="6"
                {...register("Pincode", {
                  required: true,
                  pattern: {
                    value: /^[1-9][0-9]{5}$/,
                    message: "this should be in number format",
                  },
                })}
                onChange={(event) => {
                  setPincode(event.target.value.replace(/[^0-9]/g, ""));
                }}
              />

              <div className="form-text text-danger">
                {errors.Pincode?.type === "required" &&
                  "This field is required"}
              </div>
              <div className="form-text text-danger">
                {errors.Pincode && <div>{errors.Pincode.message}</div>}
              </div>

            </div>


            <div className="mb-3 mt-4">
              <label className="form-label">Telephone Number</label>

              <input
                value={telephone}
                type="text"
                className="form-control "
                maxLength="10"
                minLength="10"
                placeholder="Telephone Number "
                {...register("Telephone", {
                  required: true,
                  pattern: {
                    value: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                    message: "this should be in 10 digit",
                  },
                })}
                onChange={(event) => {
                  setTelephone(event.target.value);
                }}
              />

              <div className="form-text text-danger">
                {errors.Telephone?.type === "required" && "This field is required"}
              </div>

              <div className="form-text text-danger">
                {errors.Telephone && <div>{errors.Telephone.message}</div>}
              </div>

            </div>


            <div className="form-text text-danger">
              {errors.Telephone && <div>{errors.Telephone.message}</div>}
            </div>

            <div className="mb-3 mt-4">
              <label className="form-label">Mobile Number</label>

              <input
                value={mobile}
                type="text"
                className="form-control "
                maxLength="10"
                minLength="10"
                placeholder="Mobile Number"
                {...register("Mobile", {
                  required: true,
                  pattern: {
                    value: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                    message: "this should be in 10 digit",
                  },
                })}
                onChange={(event) => {
                  setMobile(event.target.value.replace(/[^0-9]/g, ""));
                }}
              />
              <div className="form-text text-danger">
                {errors.Mobile?.type === "required" &&
                  "This field is required"}
              </div>
              <div className="form-text text-danger">
                {errors.Mobile && <div>{errors.Mobile.message}</div>}
              </div>
            </div>

            <div className="mb-3 mt-4">
              <label className="form-label">Contact Person</label>

              <input
                value={contactPerson}
                type="text"
                className="form-control "
                placeholder="Conatct person"
                {...register("Conatactperson", {
                  required: true,
                  pattern: {
                    value: /^[A-Za-z\s]+$/i,
                    message: "this should be in string format",
                  },
                })}
                onChange={(event) => {
                  setContactPerson(event.target.value.replace(/[^A-Za-z\s]/g, ""));
                }}
              />

              <div className="form-text text-danger">
                {errors.Conatactperson && (
                  <span>{errors.Conatactperson.message}</span>
                )}

                {errors.Conatactperson?.type === "required" &&
                  "This field is required"}
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-outline-success btn-block"
            >
              Submit
            </button>
          </form>
        
            </div>
          <div className="col-3 "></div>
        </div>
      </div>
    </>
  );
};

export default CreateSchool;