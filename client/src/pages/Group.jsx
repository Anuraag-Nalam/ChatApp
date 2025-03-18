import React from "react";
import Grid from "@mui/material/Grid2";
import { IconButton, Tooltip } from "@mui/material";
import { KeyboardBackspace as KeyboardBackspaceIcon } from "@mui/icons-material";

const Group = () => {
  const IconButtons = (
    <>
      <Tooltip title="back">
        <IconButton>
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
    </>
  );

  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
        }}
        size={{ sm: 4 }}
        bgcolor={"bisque"}
      >
        Groups List
      </Grid>
      <Grid
        item
        size={{ sm: 8, xs: 12 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          padding: "1rem 3rem",
        }}
      >
        {IconButtons}
      </Grid>
    </Grid>
  );
};

export default Group;
