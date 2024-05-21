import { TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

export default function AddStadium() {
  const formik = useFormik({
    initialValues: {
      StadiumName: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className=" flex items-center justify-center">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-3">
          <TextField
            id="StadiumName"
            name="StadiumName"
            onChange={formik.handleChange}
            value={formik.values.StadiumName}
            label="StadiumName"
            variant="standard"
            className="w-auto"
          />
          <TextField
            id="StadiumName"
            name="StadiumName"
            onChange={formik.handleChange}
            value={formik.values.StadiumName}
            label="StadiumName"
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
