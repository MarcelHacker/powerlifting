/*
    Paper component to display athletes  
*/
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const AthletPaper = (props: Object) => {
  //const {name, weightclass} = props;
  const name = "Marcel";
  const weightclass = "105 kg";
  const width = "128px";
  const height = "128px";
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: width,
          height: height,
        },
      }}
    >
      <Paper elevation={2}>
        {name}
        <img src="../src/assets/marcel.jpeg" alt="Marcel" width={width} height={height} />
        {weightclass}
      </Paper>
    </Box>
  );
};
export default AthletPaper;
