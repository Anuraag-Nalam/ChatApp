import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import Grid from "@mui/material/Grid2";
import ChatList from "../specific/ChatList";
import { sampleChats } from "../../constants/sampleData";
import { useParams } from "react-router-dom";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    const params = useParams();
    const chatId = params.chatId;
    return (
      <>
        <Title></Title>
        <Header />
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            size={{ sm: 4, md: 3 }}
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
            height={"100%"}
          >
            <ChatList
              chats={sampleChats}
              chatId={chatId}
              newMessagesAlert={[{ chatId, count: 4 }]}
              onlineUsers={["1", "2"]}
            />
          </Grid>
          <Grid item size={{ xs: 12, sm: 8, md: 5, lg: 6 }} height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            size={{ md: 4, lg: 3 }}
            bgcolor="rgba(0,0,0,0.85)"
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
            padding="2rem"
            height={"100%"}
          >
            Third
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
