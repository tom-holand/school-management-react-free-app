import { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const SchoolList = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    GetDataHandler();
  }, []);

  const GetDataHandler = () => {
    Axios.get("http://localhost:3001/getdata").then((response) => {
      setDataList(response.data);
    });
  };

  const DeleteDataHandler = (id) => {
    let x = window.confirm("Are you Sure you want to delete");
    if (x === true) {
      Axios.delete("http://localhost:3001/datadelete/" + id).then((res) => {
        GetDataHandler();
      });
    } else {
      alert("Cancelled");
    }
  };

  return (
    <>
      <h2 className="mb-5" style={{ textAlign: "center" }}>
        School List DATA
      </h2>
      <div className="container-fluid">
        <table className="table  table-bordered ">
          <thead>
            <tr className="text-center">
              <th>School ID</th>
              <th>School Name</th>
              <th>School Address</th>
              <th>Pincode</th>
              <th>Telephone Number</th>
              <th>Mobile Number</th>
              <th>Contact Person</th>
              <th colSpan="2">Operation</th>
            </tr>
          </thead>

          <tbody className="text-center">
            {dataList.map((val, key) => {
              return (
                <tr key={key}>
                  <th>{val.PK_School_ID}</th>
                  <td>{val.V_School_Name} </td>
                  <td>{val.V_School_Address} </td>
                  <td>{val.N_School_Pincode} </td>
                  <td>{val.N_School_Telephone_Number} </td>
                  <td>{val.N_School_Mobile_Number} </td>
                  <td>{val.V_School_Contact_Person} </td>

                  <td>
                    <Link
                      className="btn btn-outline-primary"
                      to={`/editschool/${val.PK_School_ID}`}
                    >
                      EDIT
                    </Link>
                  </td>

                  <td>
                    <button
                      onClick={() => DeleteDataHandler(val.PK_School_ID)}
                      className="btn btn-outline-danger"
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SchoolList;
