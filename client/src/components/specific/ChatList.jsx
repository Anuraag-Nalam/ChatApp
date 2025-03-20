import { Stack } from "@mui/material";
import ChatItem from "../shared/ChatItem";
import { bgGradient } from "../../constants/color";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [{ chatId: "", count: 0 }],
  handleDeleteChat,
}) => {
  console.log(chats);
  return (
    <div>
      <Stack width={w} direction={"column"} overflow={"auto"} height={"100%"}>
        {chats?.map((data, index) => {
          const { avatar, name, _id, groupChat, members } = data;
          const newMessaageAlert = newMessagesAlert.find(
            (alert) => alert.chatId === _id
          );
          const isOnline = members?.some((member) => onlineUsers.includes(_id));
          return (
            <ChatItem
              newMessageAlert={newMessaageAlert}
              index={index}
              isOnline={isOnline}
              avatar={avatar}
              name={name}
              _id={_id}
              key={_id}
              groupChat={groupChat}
              sameSender={chatId === _id}
              handleDeleteChat={handleDeleteChat}
            />
          );
        })}
      </Stack>
    </div>
  );
};

export default ChatList;
