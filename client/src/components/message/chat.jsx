import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import styled from "styled-components";
import { allUsersRoute, host, sendMessageRoute } from "../../api/index";
import { useParams } from "react-router-dom";

const Chat = () => {
  const socket = useRef();
  const receiver_id = useParams();   // revceier unique id 
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [messages, setMessages] = useState([]);

  socket.current = io(host);
  socket.current.emit("add-user", currentUser.result.googleId);

  const handleSendMessage = async(msg) =>{
     const data = await JSON.parse(localStorage.getItem("profile"));

     socket.current.emit("send-msg", {
      to: receiver_id,
      from: data.result.googleId,
      msg,
     });

     await axios.post(sendMessageRoute, {
      from: data.result.googleId,
      to: receiver_id,
      message: msg,
     });

     const mesgs = [...message]
     mesgs.push({fromSelf: true, message: msg});
     setMessages(mesgs);
  }

  // useEffect(async () => {
  //     setCurrentUser(
  //       await JSON.parse(
  //         localStorage.getItem("profile")
  //       )
  //     );

  //   console.log(currentUser.result.googleId);

  // }, []);


  // const handleChatChange = (chat) => {
  //   setCurrentChat(chat);
  // };


  return (
    <>
    {console.log(receiver_id)}
    <h1>chat page</h1>
      <Container>
        <div>
          this will be chat section
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;

export default Chat;
