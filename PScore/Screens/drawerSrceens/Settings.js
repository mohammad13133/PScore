import { View, Text, Dimensions, Button } from "react-native";
import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import DateTimePicker from "@react-native-community/datetimepicker";
import dayjs from "dayjs";

const colors = [
  "#26292E",
  "#899F9C",
  "#B3C680",
  "#5C6265",
  "#F5D399",
  "#F1F1F1",
];

const width = Dimensions.get("window").width;
// const Settings = () => {
//   const [pagingEnabled, setPagingEnabled] = useState(true);
//   const [snapEnabled, setSnapEnabled] = useState(true);
//   const [autoPlay, setAutoPlay] = useState(false);
//   const [selectedDate, setSelectedDate] = useState("");
//   const handleDayPress = (date) => {
//     setSelectedDate(date.dateString);
//     console.log(date);
//   };
//   const vacation = { key: "vacation", color: "red", selectedDotColor: "blue" };
//   const massage = { key: "massage", color: "blue", selectedDotColor: "blue" };
//   const workout = { key: "workout", color: "green" };

//   return (
//     <View className="flex-1">
//       <Calendar
//         // Pass the handleDayPress function to onDayPress prop
//         onDayPress={handleDayPress}
//         // Pass markedDates prop to mark the selected date
//         markingType={"period"}
//         markedDates={{
//           [selectedDate]: {
//             selected: true,
//             marked: true,

//             textColor: "black",
//           },
//           "2024-04-09": {
//             startingDay: true,
//             color: "#E72929",
//             textColor: "white",
//           },
//           "2024-04-10": {
//             color: "#FF8080",
//             textColor: "white",
//           },
//           "2024-04-11": {
//             color: "#FF8080",
//             textColor: "white",
//           },
//           "2024-04-12": {
//             endingDay: true,
//             color: "#E72929",
//             textColor: "white",
//           },
//         }}
//       />
//     </View>
//   );
// };

// export default Settings;
export default Settings = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };
  const formattedDate = dayjs(date).format("DD-MM-YYYY");
  return (
    <View>
      <Button onPress={showDatepicker} title="Show date picker!" />
      <Button onPress={showTimepicker} title="Show time picker!" />
      <Text>selected: {date.toLocaleString()}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
};
