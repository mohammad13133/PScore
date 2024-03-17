import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import colors from "../assets/colors/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MyTextInput from "../components/MyTextInput";
import { LinearGradient } from "expo-linear-gradient";
import {
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import { BackwardIcon, ChevronLeftIcon } from "react-native-heroicons/solid";
import Line from "../components/Line";
const Login = ({ navigation }) => {
  return (
    <View className="flex-1 justify-center items-center relative">
      <TouchableOpacity
        className="absolute top-0 left-0 mt-8 ml-5 p-1 rounded-full"
        style={{ backgroundColor: colors.lightGreen }}
        onPress={() => navigation.navigate("MainPage")}
      >
        <ChevronLeftIcon color={colors.mainColor} size={40} />
      </TouchableOpacity>
      <View className="mb-10">
        <Text
          className="text-white text-6xl "
          style={{ color: colors.secondColor }}
        >
          <Text style={{ color: colors.mainColor }}>PS</Text>core
        </Text>
      </View>
      {/*user Name*/}
      <MyTextInput
        Icon={EnvelopeIcon}
        placeholder={"userName"}
        label={"UserName"}
      />

      {/*password*/}
      <MyTextInput
        Icon={LockClosedIcon}
        placeholder={"*******"}
        label={"password"}
        password={true}
      />
      <TouchableOpacity
        onPress={() => {}}
        className="px-14 py-5 rounded-xl mt-8 flex items-center"
        style={{ backgroundColor: colors.mainColor, width: 300 }}
      >
        <Text style={{ color: colors.secondColor }}>Login</Text>
      </TouchableOpacity>
      <Line />
      <TouchableOpacity
        onPress={() => {}}
        className="px-14 py-5 rounded-xl mt-2 flex items-center"
        style={{ backgroundColor: colors.mainColor, width: 300 }}
      >
        <Text className="" style={{ color: colors.secondColor }}>
          Login using Google
        </Text>
      </TouchableOpacity>
      <View className="flex-row mt-2">
        <Text style={{ color: colors.mainColor }}>dont have account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={{ color: colors.secondColor }}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 230,
  },
  box: {
    borderColor: colors.mainColor,
    borderWidth: 1,
    height: 60,
    width: 300,
  },
});

export default Login;
