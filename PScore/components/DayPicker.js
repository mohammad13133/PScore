import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Pressable,
  Alert,
  Modal,
  StyleSheet,
} from "react-native";
import React, { createRef, useEffect, useRef, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { CalendarDaysIcon, CalendarIcon } from "react-native-heroicons/outline";
import colors from "../assets/colors/colors";
const DATA = [
  {
    id: "1",
    title: "13/3",
  },
  {
    id: "2",
    title: "14/3",
  },
  {
    id: "3",
    title: "yesterday",
  },
  {
    id: "4",
    title: "today",
  },
  {
    id: "5",
    title: "tomorrow",
  },
  {
    id: "6",
    title: "18/3",
  },
  {
    id: "7",
    title: "19/3",
  },
];

const DayPicker = () => {
  const [index, setIndex] = useState(3);
  const [isFlatListReady, setFlatListReady] = useState(false);
  const [chooseDay, setChooseDay] = useState(4);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    if (isFlatListReady) {
      // Scroll to index 3 when the FlatList is ready
      listViewRef.scrollToIndex({
        index: 3,
        animated: false,
        viewPosition: 0.5,
      });
    }
  }, [isFlatListReady]);
  return (
    <View className="flex-row items-center justify-center ">
      <View className=" ">
        <Modal
          animationType="none"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      <TouchableOpacity className="p-2" onPress={() => setModalVisible(true)}>
        <CalendarDaysIcon color={"green"} />
      </TouchableOpacity>
      <View style={{ width: 300, height: 50 }}>
        <FlatList
          ref={(ref) => (listViewRef = ref)}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            padding: 10,
          }}
          horizontal
          data={DATA}
          // onScroll={(event) => {
          //   console.log(event.nativeEvent.contentOffset.x);
          // }}
          onScrollToIndexFailed={() => {}}
          renderItem={({ item, index }) => (
            <Item
              chooseDay={chooseDay}
              setChooseDay={setChooseDay}
              item={item}
              index={index}
            />
          )}
          onLayout={() => {
            setFlatListReady(true);
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
      <TouchableOpacity
        className="p-2 flex items-center"
        onPress={() => {
          listViewRef.scrollToIndex({
            index: 3,
            animated: true,
            viewPosition: 0.5,
          });
        }}
      >
        <CalendarIcon color={"green"} />
        <Text>today</Text>
      </TouchableOpacity>
    </View>
  );
};
const Item = ({ item, index, chooseDay, setChooseDay }) => {
  const bgColor = chooseDay == item.id ? colors.mainColor : colors.lightGreen;

  return (
    <Pressable
      className={"flex items-center border  px-2 py-1 rounded-xl mx-1"}
      style={{ width: 100, borderColor: bgColor }}
      onPress={() => {
        setChooseDay(item.id);
        listViewRef.scrollToIndex({
          index: index,
          animated: true,
          viewPosition: 0.5,
        });
      }}
    >
      <Text style={{ color: bgColor }}>{item.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the alpha value for transparency
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: 300,
    height: 600,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default DayPicker;
