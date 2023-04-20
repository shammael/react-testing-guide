import React from "react";

const Button = ({
  title,
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  title: string;
}) => {
  return <button {...props}>{title}</button>;
};

export default Button;
