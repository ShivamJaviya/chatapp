import {
  Button,
  Dialog,
  DialogTitle,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserItem from "../../Components/Shared/UserItem";
import { useAsyncMutation, useErrors } from "../../Hooks/hooks";
import {
  useAddGroupMembersMutation,
  useAvailableFriendsQuery,
} from "../../redux/api/api";
import { setIsAddMember } from "../../redux/reducers/misc";

const AddMemberDialog = ({ chatId }) => {
  const { isAddMember } = useSelector((state) => state.misc);
  const dispatch = useDispatch();

  const { isLoading, data, isError, error } = useAvailableFriendsQuery(chatId);

  const [addMember, isLoadingAddMember] = useAsyncMutation(
    useAddGroupMembersMutation
  );
  const [selectedMembers, setSelectedMembers] = useState([]);

  const addMemberSubmitHandler = () => {
    addMember("Adding Member...", { members: selectedMembers, chatId });
  };

  const closeHandler = () => {
    dispatch(setIsAddMember(false));
  };

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  useErrors([{ isError, error }]);
  return (
    <Dialog open={isAddMember} onClose={closeHandler}>
      <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"}> Add Member</DialogTitle>
        <Stack spacing={"1rem"}>
          {isLoading ? (
            <Skeleton />
          ) : data?.friends?.length > 0 ? (
            data?.friends?.map((i) => (
              <UserItem
                key={i._id}
                user={i}
                handler={selectMemberHandler}
                isAdded={selectedMembers.includes(i._id)}
              />
            ))
          ) : (
            <Typography textAlign={"center"}> No Friends</Typography>
          )}
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Button color="error" onClick={closeHandler}>
              Cancel
            </Button>
            <Button
              variant="contained"
              disabled={isLoadingAddMember}
              onClick={addMemberSubmitHandler}
            >
              Add
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AddMemberDialog;
