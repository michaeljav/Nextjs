"use client";
import React, { useRef, useEffect } from "react";
import TextField from "@mui/material/TextField";

const App: React.FC = () => {
  const textFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("test ", textFieldRef.current);
    if (textFieldRef.current) {
      textFieldRef.current.focus();
    }
  }, []);

  return (
    <TextField
      inputRef={textFieldRef}
      label="Focus TextField"
      variant="outlined"
    />
  );
};

export default App;
