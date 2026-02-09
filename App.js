// import React from "react";
// import { useFormik } from "formik";
// import './App.css'


// function App() {
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: ""
//     },

//     validate: (values) => {
//       const errors = {};


//       if (!values.email) {
//         errors.email = "field required";
//       } else if (
//         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//       ) {
//         errors.email = "username should be an email";
//       }


//       if (!values.password) {
//         errors.password = "field required";
//       }

//       return errors;
//     },

//     onSubmit: (values) => {
//       alert("Login Successful");
//       console.log(values);
//     }
//   });

//   return (
//     <div className="body">


      
//       <form onSubmit={formik.handleSubmit}>
        
//         <div>
//           <label>Email</label><br />
//           <input
//             type="text"
//             id="emailField"
//             name="email"
//             onChange={formik.handleChange}
//             value={formik.values.email}
//           />
//           {formik.errors.email && (
//             <div id="emailError" style={{ color: "red" }}>
//               {formik.errors.email}
//             </div>
//           )}
//         </div>

//         <br/>


//         <div>
//           <label>Password</label><br />
//           <input
//             type="password"
//             id="pswField"
//             name="password"
//             onChange={formik.handleChange}
//             value={formik.values.password}
//           />
//           {formik.errors.password && (
//             <div id="pswError" style={{ color: "red" }}>
//               {formik.errors.password}
//             </div>
//           )}
//         </div>

//         <br />

//         <button type="submit" id="submitBtn">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default App;






import React, { useState } from "react";

function App() {
  const [list, setList] = useState([]);

  const addItem = () => {
    const value = document.getElementById("item").value;
    if (value === "") return;
    setList([...list, value]);
    document.getElementById("item").value = "";
  };

  const deleteItem = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <div>
      <h2>TODO List</h2>

      <input id="item" placeholder="Enter Item" />
      <button onClick={addItem}>Add</button>

      {list.map((item, index) => (
        <div key={index}>
          {item}
  </div>
      ))}
    </div>
  );
}

export default App;





