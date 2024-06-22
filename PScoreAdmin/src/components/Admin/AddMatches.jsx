import { useState } from "react";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";

function AddMatches() {
  const { token } = useAuth();
  const [startTime, setStartTime] = useState("10:00");
  const [endTime, setEndTime] = useState("10:00");
  const [startDate, setStartDate] = useState(new Date());
  const handleAddMatch = async () => {
    console.log("Selected Date:", formatDate(startDate));
    console.log("Start Time:", startTime);
    console.log("End Time:", endTime);
    try {
      const response = await axios.post(
        "https://pscore-backend.vercel.app/match/create",
        {
          date: formatDate(startDate),
          startTime: startTime,
          endTime: endTime,
        },
        {
          headers: {
            authorization: `Ahmad__${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Match added successfully:", response.data);
    } catch (error) {
      console.error("Error adding match:", error);
    }
  };
  const formatDate = (date) => {
    return dayjs(date).format("YYYY-MM-DD");
  };
  return (
    <div className="flex flex-col items-center">
      <div>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy-MM-dd"
        />
      </div>

      <TimePicker onChange={setStartTime} value={startTime} format="HH:mm" />
      <p>to</p>
      <TimePicker onChange={setEndTime} value={endTime} format="HH:mm" />
      <button className="bg-slate-900 mt-2 text-white" onClick={handleAddMatch}>
        add Match
      </button>
    </div>
  );
}

export default AddMatches;
