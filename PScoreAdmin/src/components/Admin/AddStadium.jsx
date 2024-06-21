import { TextField } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";

export default function AddStadium() {
  const [first, setfirst] = useState("second");
  const [images, setImages] = useState([]);
  const { token } = useAuth();
  useEffect(() => {
    console.log(token);
  }, []);

  const addPlayGround = async (values) => {
    const formData = new FormData();
    formData.append(
      "ownerDetails",
      JSON.stringify({
        userName: values.userName,
        email: values.email,
        password: values.password,
      })
    );
    formData.append("playgroundName", values.playgroundName);
    formData.append("location", values.coordinates);
    for (let pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    images.forEach((image, index) => {
      formData.append("photos", image);
    });

    try {
      const response = await axios.post(
        "https://pscore-backend.vercel.app/playground/admin/addPlayground",
        formData,
        {
          headers: {
            authorization: `Ahmad__${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("error:", error);
    }
  };

  const handleImageChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setImages((prevImages) => [...prevImages, ...selectedFiles]);
  };

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      coordinates: "",
      playgroundName: "",
    },
    onSubmit: (values) => {
      addPlayGround(values);
    },
  });
  return (
    <div className=" flex items-center justify-center">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-3">
          <TextField
            id="userName"
            name="userName"
            onChange={formik.handleChange}
            value={formik.values.userName}
            label="userName"
            variant="standard"
            className="w-auto"
          />
          <TextField
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            label="email"
            variant="standard"
          />
          <TextField
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            label="password"
            variant="standard"
          />
          <TextField
            id="playgroundName"
            name="playgroundName"
            onChange={formik.handleChange}
            value={formik.values.playgroundName}
            label="playgroundName"
            variant="standard"
          />
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
          <div className="flex flex-row">
            {images.length > 0 &&
              images.map((image, index) => (
                <div key={index}>
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`preview ${index}`}
                    width="100"
                  />
                </div>
              ))}
          </div>
          <TextField
            id="coordinates"
            name="coordinates"
            onChange={formik.handleChange}
            value={formik.values.latitude}
            label="coordinates"
            variant="standard"
          />
          <button className="bg-gray-800 text-white" type="submit">
            Submit
          </button>
        </div>

        {/* <div className="border border-color-thirdColor w-[100px]">
      <input
        className="bg-transparent"
        id="StadiumName"
        name="StadiumName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.StadiumName}
      />
    </div> */}
      </form>
    </div>
  );
}
