import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    "& > *": {
      marginLeft: theme.spacing(2),
    },
  },
  title: {
    flexGrow: 1,
    whiteSpace: "nowrap",
    marginLeft: theme.spacing(0),
  },
}));

const Titlebar = (props) => {
  const classes = useStyles();
  const { title, children } = props;
  return (
    <Toolbar className={classes.root}>
      <h3 className={classes.title}>{title}</h3>
      {children ? children : null}
    </Toolbar>
  );
};

export default Titlebar;
