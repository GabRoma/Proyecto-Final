// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// export const UserProfile = () => {
//   const { userId } = useParams();
//   const [userData, setUserData] = useState({});
//   const [updatedUserData, setUpdatedUserData] = useState({});
//   const [editing, setEditing] = useState(false);

//   useEffect(() => {
//     axios
//       .get(
//         `https://3001-gabroma-proyectofinal-lttqka64t3b.ws-us87.gitpod.io/user/${userId}`
//       )
//       .then((res) => {
//         setUserData(res.data);
//       });
//   }, [userId]);

//   const handleEditClick = () => {
//     setEditing(true);
//     setUpdatedUserData(userData);
//   };

//   const handleSaveClick = () => {
//     axios
//       .put(
//         `https://3001-gabroma-proyectofinal-lttqka64t3b.ws-us87.gitpod.io/user/${userId}`,
//         updatedUserData
//       )
//       .then((res) => {
//         setUserData(res.data);
//         setEditing(false);
//       });
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUpdatedUserData({ ...updatedUserData, [name]: value });
//   };

//   return (
//     <div>
//       <h1>User Profile</h1>
//       {!editing ? (
//         <>
//           <p>Name: {userData.name}</p>
//           <p>Email: {userData.email}</p>
//           <p>Address: {userData.direccion_de_entrega}</p>
//           <p>Cellphone: {userData.celular}</p>
//           <button onClick={handleEditClick}>Edit</button>
//         </>
//       ) : (
//         <>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={updatedUserData.name}
//             onChange={handleInputChange}
//           />
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={updatedUserData.email}
//             onChange={handleInputChange}
//           />
//           <label htmlFor="direccion_de_entrega">Address:</label>
//           <input
//             type="text"
//             name="direccion_de_entrega"
//             value={updatedUserData.direccion_de_entrega}
//             onChange={handleInputChange}
//           />
//           <label htmlFor="celular">Cellphone:</label>
//           <input
//             type="tel"
//             name="celular"
//             value={updatedUserData.celular}
//             onChange={handleInputChange}
//           />
//           <button onClick={handleSaveClick}>Save</button>
//         </>
//       )}
//     </div>
//   );
// };
