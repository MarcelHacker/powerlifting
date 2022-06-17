import "./FloatingActionButton.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import SendIcon from "@mui/icons-material/Send";

export default function FloatingActionButton() {
  return (
    <Box sx={{"& > :not(style)": {m: 1}}} className="fab">
      <Fab color="secondary" aria-label="add" size="large">
        <SendIcon />
      </Fab>
    </Box>
  );
}
