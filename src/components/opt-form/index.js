import React from "react";

import { Container, Pane, Input, Text, Button } from "./styles/opt-form";

export default function OptForm({ children }) {
  return <Container>{children}</Container>;
}

OptForm.Text = function OptFormText({ children }) {
  return <Text>{children}</Text>;
};

OptForm.Pane = function OptFormPane({ children }) {
  return <Pane>{children}</Pane>;
};

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Button = function OptFormButton({ children }) {
  return (
    <Button>
      {children}
      <img src="./images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};
