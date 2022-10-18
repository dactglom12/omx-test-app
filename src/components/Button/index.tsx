import React from "react";
import {
  Button as MuiButton,
  ButtonProps,
  makeStyles,
} from "@material-ui/core";
import clsx from "clsx";

type Props = ButtonProps;

const useStyles = makeStyles(() => ({
  outlined: {
    border: "1px solid rgba(0, 0, 0, 0.12)",
  },
}));

export const Button: React.FC<Props> = (props) => {
  const { outlined } = useStyles();

  return (
    <MuiButton
      {...props}
      className={clsx({
        [outlined]: props.variant === "outlined",
      })}
    />
  );
};
