import React from "react";
import { Button, Typography } from "@material-ui/core";

import Theme from "./Theme";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles({
  HelloThere: {
    backgroundColor: "red",
    fontStyle: "oblique",
  },
});

function Start() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={Theme}>
      <div>
        <Button disabled>My btn</Button>
        <Button fullWidth>My btn</Button>
        <Button color="secondary" fullWidth variant="outlined">
          My btn
        </Button>
        <Typography className={classes.HelloThere} variant="h1" color="primary">
          Am called sam
        </Typography>
      </div>
    </ThemeProvider>
  );
}

export default Start;
