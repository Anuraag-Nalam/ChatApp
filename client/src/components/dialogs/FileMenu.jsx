import { Menu } from "@mui/material";
import React from "react";

const FileMenu = ({ anchorE1 }) => {
  return (
    <Menu open={false} anchorEl={anchorE1}>
      <div style={{ width: "10rem" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde
        quisquam aspernatur dolores minima possimus cupiditate quas voluptatum
        dolor, beatae corrupti in, ipsam quam. Eum rerum fuga veniam adipisci
        assumenda.
      </div>
    </Menu>
  );
};

export default FileMenu;
