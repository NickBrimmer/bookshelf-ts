import styled from "@emotion/styled";
import { base, gray, indigo, text } from "../../assets/styles/colors";

interface ButtonProps {
  variant: string;
}

const buttonVariants = {
  primary: {
    background: indigo,
    color: base,
  },
  secondary: {
    background: gray,
    color: text,
  },
};

const Button = styled.button<ButtonProps>(
  {
    padding: "10px 15px",
    border: "0",
    lineHeight: "1",
    borderRadius: "3px",
  },
  ({ variant = "primary" }) => buttonVariants[variant]
);

const CircleButton = styled.button({
  borderRadius: "30px",
  padding: "0",
  width: "40px",
  height: "40px",
  lineHeight: "1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: base,
  color: "#9999b2",
  border: `1px solid #9999b2`,
  cursor: "pointer",
});

export { Button, CircleButton };
