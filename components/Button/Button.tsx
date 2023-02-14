import React from "react";
import { Button as ButtonNB, IButtonProps } from "native-base";

export interface ButtonProps extends IButtonProps {}

export function Button({ ...props }: ButtonProps) {
  return <ButtonNB {...props} />;
}
