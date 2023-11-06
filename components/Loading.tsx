import {CircularProgress} from "@mui/material";
import React from "react";

export default function Loading() {
  return (
    <div className="mt-10 w-screen d-flex justify-center align-items-center">
      <CircularProgress disableShrink color="inherit" />
    </div>
  );
}
