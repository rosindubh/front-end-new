// import React from 'react';
// import { useState } from 'react'
// const UploadImage = () =>{
//   const [file, setFile] = useState([]);

//   const handleFile = (e) => {
//     const file = e.target.files[0]
//     setFile(file)
//     console.log(file);
//     }

    

//   return (
    
//     <div>
//         <h1>File Upload</h1>
//         <label for="avatar">Choose a profile picture:</label>
//           <input type="file"
//             id="avatar" name="avatar"
//             accept="image/png, image/jpeg" onChange={handleFile}></input>
//       {/* <input type="file" onChange={handleFile}/> */}
//         <button>Upload</button>
//       {/* add fetch request to cloudinary??? */}
//         <button className="logout">Logout</button>
//     </div>
//   );

//   }
// export default UploadImage;