import React, { useState } from "react";
import axios from "axios";
import "../index.css";

const Main = () => {
  const [selected, setSelected] = useState(null);
  const [finalImage, setFinalImage] = useState(null);

  const handleFileInputChange = (e) => {
    let image = e.target.files?.[0];
    setSelected(image);
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("image_file", selected);
    formData.append("size", "auto");

    const api_key = "uTAsGGX3HY9BwxSpeBupVFZn";

    // send to the server
    try {
      const response = await axios.post(
        "https://api.remove.bg/v1.0/removebg",
        formData,
        {
          headers: {
            "X-Api-Key": api_key,
          },
          responseType: "blob",
        }
      );

      const url = URL.createObjectURL(response.data);
      setFinalImage(url);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
    }
  };

  return (
    <div className="container">
      <div className="input-div">
        <img src={selected ? URL.createObjectURL(selected) : "./ng.png"} />

        <div className="file-section">
          <input type="file" name="" id="" onChange={handleFileInputChange} />
          <button onClick={handleFileUpload}>Upload</button>
        </div>
      </div>

      <div className="input-div">
        <img src={finalImage ? finalImage : "./1695617-200.png"} />
        <a href={finalImage} download={"save.png"} className="download-btn">
          <button className="download-btn">Download Image</button>
        </a>
      </div>
    </div>
  );
};

export default Main;
