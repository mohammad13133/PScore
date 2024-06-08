import React, { createContext, useState, useContext } from "react";

// Create the context
const ChatsContext = createContext();

// Define the provider component
export const ChatsProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [socket, setSocket] = useState();
  const [allChatRooms, setAllChatRooms] = useState([]);
  //   const addChat = (chat) => {
  //     setChats([...chats, chat]);
  //   };

  //   const removeChat = (id) => {
  //     setChats(chats.filter((chat) => chat.id !== id));
  //   };

  return (
    <ChatsContext.Provider
      value={{
        user,
        setUser,
        allChatRooms,
        setAllChatRooms,
        socket,
        setSocket,
      }}
    >
      {children}
    </ChatsContext.Provider>
  );
};

// Custom hook for using the ChatsContext
export const useChats = () => {
  return useContext(ChatsContext);
};
