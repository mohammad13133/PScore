import {
  Box,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { HiOutlineEye, HiOutlineEyeOff, HiOutlineMail } from "react-icons/hi";
import { HiOutlineLockClosed } from "react-icons/hi";
import MyTextInput from "../MyTextInput";
import { useFormik } from "formik";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="h-screen flex items-center justify-center bg-slate-400">
      <div className="w-[400px] h-[500px] bg-white shadow-lg flex flex-col items-center justify-center">
        <h1 className="text-color-thirdColor mb-10">
          <span className="text-color-mainColor">PS</span>core
        </h1>
        {/* <TextField
          id="input-with-icon-textfield"
          label="AccountName"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HiOutlineMail size={24} className="text-color-secondColor" />
              </InputAdornment>
            ),
          }}
          variant="standard"
          color="success"
        /> */}
        <form
          className="flex flex-col items-center"
          onSubmit={formik.handleSubmit}
        >
          <MyTextInput
            id="name"
            name="name"
            placeholder="name"
            Icon={HiOutlineMail}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <MyTextInput
            id="password"
            name="password"
            placeholder="password"
            Icon={HiOutlineLockClosed}
            password
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {/* <MyTextInput
            placeholder="password"
            Icon={HiOutlineLockClosed}
            password
          /> */}

          <button
            type="submit"
            className="text-white bg-color-secondColor hover:bg-white hover:text-color-mainColor border border-transparent hover:border-color-mainColor transition-all mt-6"
          >
            login
          </button>
        </form>
        <p>
          dont have account?
          <span className="text-color-secondColor">signup</span>
        </p>
      </div>
    </div>
  );
}
