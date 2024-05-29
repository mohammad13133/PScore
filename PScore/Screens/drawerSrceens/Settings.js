import {
  View,
  Text,
  Dimensions,
  Button,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import DateTimePicker from "@react-native-community/datetimepicker";
import dayjs from "dayjs";
import {
  CameraIcon,
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import MyTextInput from "../../components/MyTextInput";

import SelectDropdown from "react-native-select-dropdown";
import colors from "../../assets/colors/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
const positions = [
  { title: "striker", icon: "emoticon-happy-outline" },
  { title: "goalkeeper", icon: "emoticon-cool-outline" },
  { title: "mid", icon: "emoticon-lol-outline" },
  { title: "defend", icon: "emoticon-lol-outline" },
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
    <View className="flex-1">
      <View className="flex items-center justify-center mt-6">
        <View
          className="relative rounded-full border "
          style={{ backgroundColor: colors.mainColor }}
        >
          <Image
            className="rounded-full "
            style={{
              width: 120,
              height: 120,
              resizeMode: "cover",
            }}
            source={require("../../assets/images/players/Mohammad.jpg")}
          />
          <View className="absolute top-0 right-0 bg-white rounded-full p-1">
            <CameraIcon size={30} color={"black"} />
          </View>
        </View>
        <MyTextInput
          Icon={UserIcon}
          placeholder={"userName"}
          label={"UserName"}
          value={"mohammad khaled"}
          editable={false}
        />
        <MyTextInput
          Icon={EnvelopeIcon}
          placeholder={"email"}
          label={"email"}
          value={"mohammad@gmail.com"}
          editable={false}
        />
        <MyTextInput Icon={PhoneIcon} placeholder={"number"} label={"number"} />
        <View className="mt-6 w-[300px]">
          <Text>position</Text>
          <SelectDropdown
            data={positions}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View style={styles.dropdownButtonStyle}>
                  <Text className="font-medium text-lg">
                    {(selectedItem && selectedItem.title) || "Select your mood"}
                  </Text>
                </View>
              );
            }}
            renderItem={(item, index, isSelected) => {
              return (
                <View
                  style={{
                    ...styles.dropdownItemStyle,
                    ...(isSelected && { backgroundColor: "#D2D9DF" }),
                  }}
                >
                  <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropdownMenuStyle}
          />
        </View>
        <TouchableOpacity className="bg-green-400 px-8 py-2 rounded-md mt-6">
          <Text>save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: colors.mainColor,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});
