/* eslint-disable react-refresh/only-export-components */
import { useAppSelector } from "@src/hooks/store-hooks";
import { selectUser } from "@src/store/reducers/profileInfo/selectors";
import React, { createContext, useContext, useEffect, useState } from "react";
import socketio from "socket.io-client";

// Function to establish a socket connection with authorization token
const getSocket = (id: string) => {
  // Create a socket connection with the provided URI and authentication

  return socketio("http://localhost:5000", { query: { userId: id } });
};

// Create a context to hold the socket instance
const SocketContext = createContext<{
  socket: ReturnType<typeof socketio> | null;
}>({
  socket: null,
});

// Custom hook to access the socket instance from the context
const useSocket = () => useContext(SocketContext);

// SocketProvider component to manage the socket instance and provide it through context
const SocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State to store the socket instance
  const [socket, setSocket] = useState<ReturnType<typeof socketio> | null>(null);
  const { id } = useAppSelector(selectUser);
  // Set up the socket connection when the component mounts
  useEffect(() => {
    if (id) {
      setSocket(getSocket(id));
    } else {
      setSocket(null);
    }
  }, [id]);

  return (
    // Provide the socket instance through context to its children
    <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>
  );
};

// Export the SocketProvider component and the useSocket hook for other components to use
export { SocketProvider, useSocket };
