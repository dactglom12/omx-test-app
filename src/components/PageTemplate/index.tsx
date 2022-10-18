import { makeStyles } from "@material-ui/core";
import React from "react";
import { Header } from "../Header";

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: theme.spacing(10),
    padding: `0 ${theme.spacing(2)}px`,
  },
}));

export const PageTemplate: React.FC = ({ children }) => {
  const { content } = useStyles();

  return (
    <>
      <Header />
      <div className={content}>{children}</div>
    </>
  );
};
