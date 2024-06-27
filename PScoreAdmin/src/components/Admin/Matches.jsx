import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Matches() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="flex flex-col items-start justify-center mt-2">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="yyyy-MM-dd"
      />
      <SingleGameBook time={"12:00" + "-" + "13:00"} />
      <SingleGameBook time={"14:00" + "-" + "13:00"} />
      <SingleGameBook time={"15:00" + "-" + "16:00"} />
    </div>
  );
}

const SingleGameBook = ({ time, gameid }) => {
  //   const navigate = useNavigate();
  return (
    <div className="flex flex-row items-center space-x-2 mt-1">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
          borderRadius: "10px",
          height: "100px",
          width: "400px",
          boxShadow: "0 3px 6px rgba(0, 0, 0, 0.27)",
          backgroundColor: "#FFFFFF",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
            margin: "5px",
            paddingRight: "10px",
            width: "100px",
          }}
        >
          <span style={{ color: "#007AFF" }}>..</span>
        </div>
        <div
          style={{
            borderRadius: "50%",
            backgroundColor: "#718096",
            width: "35px",
            height: "35px",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100px",
            height: "90px",
          }}
        >
          <span>{time}</span>
        </div>
        <div
          style={{
            borderRadius: "50%",
            backgroundColor: "#718096",
            width: "35px",
            height: "35px",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
            margin: "5px",
            paddingLeft: "10px",
            width: "100px",
          }}
        >
          <span style={{ color: "#007AFF" }}>..</span>
        </div>
      </div>
      <span className="text-red-500 cursor-pointer">Delete</span>
    </div>
  );
};

export default Matches;
