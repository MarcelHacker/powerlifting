/*
    Paper component to display athletes  
*/
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const AthletPaper = (props: Object) => {
  const {name, weightclass} = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper elevation={2}>
        {name} {weightclass}
      </Paper>
    </Box>
  );
};
export default AthletPaper;
