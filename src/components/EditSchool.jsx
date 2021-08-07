import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Axios from "axios";

const EditSchool = () => {
  const history = useHistory();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [telephone, setTelephone] = useState("");
  const [mobile, setMobile] = useState("");
  const [contactPerson, setContactPerson] = useState("");

  const [isName, setIsName] = useState(true)
  const [isAddress, setIsAddress] = useState(true)
  const [isPincode, setIsPincode] = useState(true)
  const [isTelephone, setIsTelephone] = useState(true)
  const [isMobile, setIsMobile] = useState(true)
  const [isContactPerson, setIsContactPerson] = useState(true)
  
  const isEmpty = (value) => value.trim() === '';

  useEffect(() => {

    Axios.get("https://school-management-free-app.herokuapp.com/getdata/" + id).then((res) => {
      setName(res.data[0].V_School_Name);
      setAddress(res.data[0].V_School_Address);
      setPincode(res.data[0].N_School_Pincode);
      setTelephone(res.data[0].N_School_Telephone_Number);
      setMobile(res.data[0].N_School_Mobile_Number);
      setContactPerson(res.data[0].V_School_Contact_Person);
    });

  }, [id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues : {
      Schoolname : name
    }
  });

  const FormSubmitHandler = () => {

    if(isEmpty(name)){ setIsName(false); return} else{ setIsName(true) }
    if(isEmpty(address)){ setIsAddress(false); return} else{ setIsAddress(true) }
    if(isEmpty(String(pincode))){ setIsPincode(false); return} else{ setIsPincode(true) }
    if(isEmpty(String(telephone))){ setIsTelephone(false); return} else{ setIsTelephone(true) }
    if(isEmpty(String(mobile))){ setIsMobile(false); return} else{ setIsMobile(true) }
    if(isEmpty(contactPerson)){ setIsContactPerson(false); return} else{ setIsContactPerson(true) }

    
    const SchoolData = {
      V_School_Name: name,
      V_School_Address: address,
      N_School_Pincode: pincode,
      N_School_Telephone_Number: telephone,
      N_School_Mobile_Number: mobile,
      V_School_Contact_Person: contactPerson,
    };

    console.log(SchoolData)
    Axios.put("https://school-management-free-app.herokuapp.com/updatedata/" + id, SchoolData).then(
      (response) => {
        alert("Data Updated");
        history.replace("/");
      }
    );
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <h2 style={{ textAlign: "center" }}>EDIT School</h2>

            <form onSubmit={handleSubmit(FormSubmitHandler)}>
              
              {/* School Name */}
              <div className="mt-3">
                <label className="form-label">School Name</label>
                
                <input
                  value={name}
                  type="text"
                  className="form-control "
                  placeholder="School Name"
                  {...register("Schoolname", {
                    required: false,
                    pattern: {
                      value: /^[A-Za-z\s]+$/i,
                      message: "this should be in string format",
                    },
                    minLength: {
                      value: 3,
                      message: 'Minimum length is 3' 
                    }

                  })
                  
                }
                  onChange={(event) => {
                    setName(event.target.value.replace(/[^A-Za-z\s]/g, ""));
                  }}
                />
                
                {/* School Name Error Handel*/}
                <div className="form-text text-danger">

                  {errors.Schoolname?.type === "pattern" &&
                    <span>{errors.Schoolname.message}</span>}

                  {errors.Schoolname?.type === "minLength" &&
                    <span>{errors.Schoolname.message}</span>}

                  {!isName && <span>Name Should Not be Empty</span>}
                    
                </div>

              </div>
              {/* End School Name */}

              {/* School Address */}

              <div className="mb-3 mt-4">
                <label className="form-label">School Address</label>

                <input
                  value={address}
                  type="text"
                  className="form-control "
                  placeholder="address"
                  {...register("Address", {
                    required: false,
                    pattern: {
                      value: /^[#.0-9a-zA-Z\s,-]+$/,
                      message: "this should be in string format",
                    },
                  })}
                  onChange={(event) => {
                    setAddress(event.target.value);
                  }}
                />
                {/* School Address Error Handler */}
                <div className="form-text text-danger">

                  {errors.Address?.type === "pattern" &&
                      <span>{errors.Address.message}</span>}

                      {!isAddress && <span>Address Should Not be Empty</span>}
                </div>

              </div>
              {/* End School Address */}

              {/* School Pincode */}
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
                    required: false,
                    pattern: {
                      value: /^[1-9][0-9]{5}$/,
                      message: "this should be in number format",
                    },
                  })}
                  onChange={(event) => {
                    setPincode(event.target.value.replace(/[^0-9]/g, ""));
                  }}
                />

                {/* Pincode Error */}
                <div className="form-text text-danger">
                  {errors.Pincode?.type === "pattern" &&
                    <span>{errors.Pincode.message}</span>}

                  {!isPincode && <span>Pincode Should Not be Empty</span>}
                </div>

              </div>
              {/* End Pincode */}

              {/* Telephone */}
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
                    required: false,
                    pattern: {
                      value: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                      message: "this should be in 10 digit",
                    },
                  })}
                  onChange={(event) => {
                    setTelephone(event.target.value);
                  }}
                />

                {/* Telephone Error */}
                <div className="form-text text-danger">
                  {errors.Telephone?.type === "pattern" &&
                    <span>{errors.Telephone.message}</span>}
                  
                  {!isTelephone && <span>Telephone Should Not be Empty</span>}
                </div>
              </div>
              {/* End Telephone */}

              {/* Mobile */}
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
                    required: false,
                    pattern: {
                      value: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                      message: "this should be in 10 digit",
                    },
                  })}
                  onChange={(event) => {
                    setMobile(event.target.value.replace(/[^0-9]/g, ""));
                  }}
                />

                {/* Error in Mobile */}
                <div className="form-text text-danger">
                  {errors.Mobile?.type === "pattern" &&
                    <span>{errors.Mobile.message}</span>}
                  
                  {!isMobile && <span>Mobile Should Not be Empty</span>}
                </div>
              </div>
              {/* End Mobile */}

              {/* Contact Person */}
              <div className="mb-3 mt-4">
                <label className="form-label">Contact Person</label>

                <input
                  value={contactPerson}
                  type="text"
                  className="form-control "
                  placeholder="Conatct person"
                  {...register("Conatactperson", {
                    required: false,
                    pattern: {
                      value: /^[A-Za-z\s]+$/i,
                      message: "this should be in string format",
                    },
                  })}
                  onChange={(event) => {
                    setContactPerson(
                      event.target.value.replace(/[^A-Za-z\s]/g, "")
                    );
                  }}
                />
                {/* Error in Contact Person */}
                <div className="form-text text-danger">
                  {errors.Contactperson?.type === "pattern" &&
                    <span>{errors.Contactperson.message}</span>}
                  
                  {!isContactPerson && <span>Contact Person Should Not be Empty</span>}
                </div>
              </div>
              {/* End Contact Person */}

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

export default EditSchool;
