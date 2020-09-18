import React from "react";
import { Grid } from "@material-ui/core";

import Mybar from "./ComponentTwo/Mybar";
import MyCard from "./ComponentTwo/MyCard";

function Second() {
  return (
    <Grid container direction="column">
      <Grid item="container">
        <Mybar />
      </Grid>
      <MyCard />
    </Grid>
  );
}

export default Second;
