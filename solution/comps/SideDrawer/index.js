import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Titlebar from "./Titlebar";

const width = "500px",
  height = "100%";

const useStyles = makeStyles((theme) => ({
  root: {
    width,
    height,
    padding: "2rem",
    flexShrink: 0,
  },
}));

export default function SideDrawer(props) {
  const classes = useStyles();
  const { open, title, children, onClose } = props;
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div className={classes.root}>
        <Titlebar title={title}>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Titlebar>
        {children}
      </div>
    </Drawer>
  );
}
