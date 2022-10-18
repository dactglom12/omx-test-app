import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  menuIcon: {
    "& *": {
      fill: "#fff",
    },
  },
  appTitle: {
    marginLeft: theme.spacing(1.5),
  },
}));

export const Header: React.FC = () => {
  const { menuIcon, appTitle } = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton className={menuIcon}>
          <MenuIcon />
        </IconButton>
        <Typography className={appTitle} variant="h6">
          Last Mile Delivery
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
