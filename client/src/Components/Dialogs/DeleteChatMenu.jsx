import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  Delete as DeleteIcon,
  ExitToApp as ExitToAppIcon,
  Groups3 as Groups3Icon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Avatar, Dialog, Menu, Stack, Typography } from "@mui/material";
import { useAsyncMutation } from "../../Hooks/hooks";
import {
  useChatDetailsQuery,
  useDeleteChatMutation,
  useLeaveGroupMutation,
} from "../../redux/api/api";
import { setIsDeleteMenu } from "../../redux/reducers/misc";
import { transformImage } from "../../Lib/features";
import { DarkGray, Gray } from "../../Constants/Color";

const DeleteChatMenu = ({ dispatch, deleteMenuAnchor, chatId }) => {
  const navigate = useNavigate();
  const { isDeleteMenu, selectedDeleteChat } = useSelector(
    (state) => state.misc
  );
  const [deleteChat, _, deleteChatData] = useAsyncMutation(
    useDeleteChatMutation
  );
  const [leaveGroup, __, leaveGroupData] = useAsyncMutation(
    useLeaveGroupMutation
  );
  const [showMembers, setShowMembers] = useState(false);

  const groupDetails = useChatDetailsQuery(
    { chatId, populate: true },
    { skip: !chatId }
  );
  const data = groupDetails?.data;
  const isGroup = selectedDeleteChat.groupChat;

  const closeHandler = () => {
    dispatch(setIsDeleteMenu(false));
    deleteMenuAnchor.current = null;
  };

  const leaveGroupHandler = () => {
    closeHandler();
    leaveGroup("Leaving Group...", selectedDeleteChat.chatId);
  };

  const deleteChatHandler = () => {
    closeHandler();
    deleteChat("Deleting Chat...", selectedDeleteChat.chatId);
  };

  const memberHandler = (e) => {
    setShowMembers(true);
  };

  useEffect(() => {
    if (deleteChatData || leaveGroupData) navigate("/");
  }, [deleteChatData, leaveGroupData]);

  const Members = (data) => {
    if (data) {
      return (
        <Stack width="20rem " padding="1rem" spacing="1rem">
          {data.chat.members.map((i) => (
            <Stack
              direction={"row"}
              key={i._id}
              alignItems="center"
              spacing="1rem"
              margin="0.5rem"
            >
              <Avatar src={transformImage(i.avatar, 100)} />
              <Typography
                flexGrow={"1"}
                marginLeft={"2rem"}
                borderBottom={"2px solid black"}
                bgcolor={DarkGray}
              >
                {i.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      );
    }
  };

  return (
    <Menu
      open={isDeleteMenu}
      onClose={closeHandler}
      anchorEl={deleteMenuAnchor.current}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
    >
      <Stack
        sx={{
          width: "10rem",
          padding: "0.5rem",
          cursor: "pointer",
        }}
        direction={"row"}
        alignItems={"center"}
        spacing={"0.5rem"}
        // onClick={isGroup ? leaveGroupHandler : deleteChatHandler}
      >
        {isGroup ? (
          <Stack spacing="1rem">
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={(e) => memberHandler(e)}
            >
              <Groups3Icon />
              Members
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={leaveGroupHandler}
            >
              <ExitToAppIcon />
              Leave Group
            </Typography>
          </Stack>
        ) : (
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={deleteChatHandler}
          >
            <DeleteIcon />
            Delete Chat
          </Typography>
        )}
      </Stack>
      <Dialog open={showMembers} onClose={() => setShowMembers(false)}>
        {Members(data)}
      </Dialog>
    </Menu>
  );
};

export default DeleteChatMenu;
