/*
    Paper component to display athletes  
*/
import "./Paper.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import paperInterface from "../../interfaces/AthletePaper";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import {Container} from "@mui/material";
import {Link} from "react-router-dom";

const AthletPaper = (props: paperInterface) => {
  const {name, id} = props;
  const width = "128px";
  const height = "128px";
  return (
    <Container>
      <Link to={"/athlete/" + id}>
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
          <Paper elevation={2} className="paper">
            <div className="paperIcon">
              <AccessAlarmIcon />
            </div>
            <h3 className="paperName">{name}</h3>
          </Paper>
        </Box>
      </Link>
    </Container>
  );
};
export default AthletPaper;
