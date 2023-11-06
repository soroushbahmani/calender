import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import React from "react";

export default function SelectYear({setYear}: TPropsSelectYear) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "0px",
              width: "235px",
              background: "white",
              legend: {
                marginLeft: "0px",
              },
            },
            "& .MuiAutocomplete-inputRoot": {
              borderRadius: "0px",
            },
          }}
          defaultValue={dayjs()}
          views={["year"]}
          onChange={(e) => {
            setYear(e?.year());
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
