"use client";

import {useRequest} from "@/hooks/useRequest";
import {Autocomplete, TextField} from "@mui/material";
import React, {useEffect, useId, useState} from "react";

export const SelectCountry: React.FC<TPropsSelectCountry> = ({setCountry}) => {
  const [AvailableCountries, setAvailableCountries] = useState([]);
  const dynamicId = useId();

  useEffect(() => {
    useRequest("AvailableCountries").then((res) => {
      setAvailableCountries(res.data);
    });
  }, []);

  const onChangeAutoComplete = (
    event: Object,
    value: TautoCompleteValueProps
  ) => {
    if (value !== null) setCountry(value.countryCode);
  };

  return (
    Boolean(AvailableCountries) && (
      <Autocomplete
        autoComplete
        disablePortal
        color="info"
        id="combo-box-demo"
        options={AvailableCountries}
        getOptionLabel={(option: any) => option?.name}
        renderOption={(props, option: any) => {
          return (
            <li {...props} key={option.countryCode}>
              {option.name}
            </li>
          );
        }}
        sx={{width: 300}}
        renderInput={(params) => (
          <TextField
            sx={{
              "& .MuiOutlinedInput-root": {
                borderTopRightRadius: "0px",
                borderBottomRightRadius: "0px",
                background: "white",

                legend: {
                  marginLeft: "4px",
                },
              },
              "& .MuiAutocomplete-inputRoot": {
                borderTopRightRadius: "0px",
                borderBottomRightRadius: "0px",
              },

              "& .MuiInputLabel-outlined ": {
                background: "white",
                padding: "0 10px",
                borderTopLeftRadius: "3px",
                borderTopRightRadius: "3px",
              },
            }}
            key={dynamicId}
            {...params}
            value={params.inputProps}
            label="Country"
          />
        )}
        onChange={onChangeAutoComplete}
      />
    )
  );
};
