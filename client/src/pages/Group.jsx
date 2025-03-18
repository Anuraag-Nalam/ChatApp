import React, { lazy, memo, Suspense, useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import {
  Backdrop,
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  KeyboardBackspace as KeyboardBackspaceIcon,
  Menu as MenuIcon,
  Done as DoneIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  Edit as EditIcon,
} from "@mui/icons-material";
import { bgGradient, matBlack } from "../constants/color";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StyledLink } from "../components/styles/StyledComponents";
import AvatarCard from "../components/shared/AvatarCard";
import { sampleChats, sampleUsers } from "../constants/sampleData";
import ConfirmDeleteDialog from "../components/dialogs/ConfirmDeleteDialog";
import UserItem from "../components/shared/UserItem.jsx";
const confirmDeleteDialog = lazy(() =>
  import("../components/dialogs/ConfirmDeleteDialog.jsx")
);
const AddMemberDialog = lazy(() =>
  import("../components/dialogs/AddMemberDialog.jsx")
);

const isAddMember = false;

const Group = () => {
  const navigate = useNavigate();
  const chatId = useSearchParams()[0].get("group");
  const [isMobileMenuOpen, setIsMobileMenuopen] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [groupName, setGroupName] = useState("Group Name");
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("");
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);

  const navigateBack = () => {
    navigate("/");
  };

  const handleMobile = () => {
    setIsMobileMenuopen((prev) => !prev);
  };

  const handleMobileClose = () => setIsMobileMenuopen(false);

  const updateGroupNameHandler = () => {
    setIsEdit(false);
    console.log("group name updated");
  };

  const openConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(true);
    console.log("delete");
  };

  const closeConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(false);
  };

  const openAddMemberHandler = () => {
    console.log("Add Member");
  };

  const deleteHandler = () => {
    console.log("Delete handler");
  };

  const removeMemberHandler = (id) => {
    console.log("remove member", id);
  };

  useEffect(() => {
    if (chatId) {
      setGroupName(`Group Name ${chatId}`);
      setGroupNameUpdatedValue(`Group Name ${chatId}`);
    }

    return () => {
      setGroupName("");
      setGroupNameUpdatedValue("");
      setIsEdit(false);
    };
  }, [chatId]);
  const ButtonGroup = (
    <>
      <Stack
        direction={{
          sm: "row",
          xs: "column-reverse",
        }}
        spacing="1rem"
        p={{
          sm: "1rem",
          xs: "0",
          md: "1rem 4rem",
        }}
      >
        <Button
          size="large"
          color="error"
          startIcon={<DeleteIcon />}
          variant="outlined"
          onClick={openConfirmDeleteHandler}
        >
          Delete Group
        </Button>
        <Button
          size="large"
          variant="contained"
          startIcon={<AddIcon />}
          onClick={openAddMemberHandler}
        >
          Add Member
        </Button>
      </Stack>
    </>
  );
  const IconButtons = (
    <>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
            position: "fixed",
            right: "1rem",
            top: "1rem",
          },
        }}
      >
        <IconButton onClick={handleMobile}>
          <MenuIcon></MenuIcon>
        </IconButton>
      </Box>

      <Tooltip title="back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: matBlack,
            color: "white",
            ":hover": {
              bgcolor: "rgba(0,0,0,0.7)",
            },
          }}
          onClick={navigateBack}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
    </>
  );
  const GroupName = (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={"1rem"}
      padding={"3rem"}
    >
      {isEdit ? (
        <>
          <TextField
            onChange={(e) => setGroupNameUpdatedValue(e.target.value)}
            value={groupNameUpdatedValue}
          />
          <IconButton onClick={updateGroupNameHandler}>
            <DoneIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Typography variant="h4">{groupName}</Typography>
          <IconButton onClick={() => setIsEdit(true)}>
            <EditIcon />
          </IconButton>
        </>
      )}
    </Stack>
  );
  return (
    <Grid container height={"100vh"}>
      <Grid
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
          backgroundImage: bgGradient,
        }}
        size={{ sm: 4 }}
      >
        <GroupsList myGroups={sampleChats} chatId={chatId} />
      </Grid>
      <Grid
        size={{ sm: 8, xs: 12 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          padding: "1rem 3rem",
        }}
      >
        {IconButtons}
        {groupName && (
          <>
            {GroupName}
            <Typography
              margin={"2rem"}
              alignSelf={"flex-start"}
              variant="body1"
            >
              Members
            </Typography>
            <Stack
              maxWidth="45rem"
              width="100%"
              boxSizing="border-box"
              padding={{
                sm: "1rem",
                xs: "0",
                md: "1rem 4rem",
              }}
              spacing="2rem"
              height="50vh"
              overflow="auto"
            >
              {sampleUsers.map((i) => (
                <UserItem
                  user={i}
                  key={i._id}
                  isAdded
                  styling={{
                    boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.2)",
                    padding: "1rem 2rem",
                    borderRadius: "1rem",
                  }}
                  handler={removeMemberHandler}
                />
              ))}
            </Stack>
            {ButtonGroup}
          </>
        )}
      </Grid>

      {isAddMember && (
        <Suspense fallback={<Backdrop open />}>
          <AddMemberDialog
            open={confirmDeleteDialog}
            handleClose={closeConfirmDeleteHandler}
            deleteHandler={deleteHandler}
          />
        </Suspense>
      )}

      {confirmDeleteDialog && (
        <Suspense fallback={<Backdrop open />}>
          <ConfirmDeleteDialog
            open={confirmDeleteDialog}
            handleClose={closeConfirmDeleteHandler}
            deleteHandler={deleteHandler}
          />
        </Suspense>
      )}

      <Drawer
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileClose}
      >
        <GroupsList w={"50vw"} myGroups={sampleChats} />
      </Drawer>
    </Grid>
  );
};
const GroupsList = ({ w = "100%", myGroups = [], chatId }) => {
  return (
    <Stack width={w}>
      {myGroups.length > 0 ? (
        myGroups.map((group) => {
          return (
            <GroupListItem group={group} chatId={chatId} key={group._id} />
          );
        })
      ) : (
        <Typography textAlign={"center"} padding="1rem">
          No Groups Found!
        </Typography>
      )}
    </Stack>
  );
};
const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;
  // console.log(chatId);
  return (
    <StyledLink
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) e.preventDefault();
      }}
    >
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <AvatarCard avatar={avatar}></AvatarCard>
        <Typography>{name}</Typography>
      </Stack>
    </StyledLink>
  );
});
export default Group;
