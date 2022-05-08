import { useTheme } from "@mui/material";
import React, { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  disableTheme?: boolean;
}

const Spacer = (props: IProps) => {
  const theme = useTheme();
  const { size = 1, disableTheme = false, style, ...rest } = props;

  const dimension = disableTheme ? size : theme.spacing(size);

  return (
    <div
      style={{
        height: dimension,
        width: dimension,
        flex: "0 0 auto",
        ...style,
      }}
      {...rest}
    />
  );
};

export default Spacer;
