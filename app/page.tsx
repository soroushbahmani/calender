"use client";

import {SelectCountry} from "@/components/SelectCountry";
import {useRequest} from "@/hooks/useRequest";
import {Alert, Button, CircularProgress, Tooltip} from "@mui/material";
import dayjs from "dayjs";
import {useEffect, useState} from "react";
import SelectYear from "@/components/SelectYear";
import Loading from "@/components/Loading";
import SearchIcon from "@mui/icons-material/Search";
import CardDays from "@/components/CardDays";

export default function Home() {
  const [PublicHolidays, setPublicHolidays] = useState<[]>([]);
  const [year, setYear] = useState<number>(dayjs().get("year"));
  const [country, setCountry] = useState<string | null>(null);
  const [loading, setloading] = useState<boolean>(false);

  const GetHollyDaySubmit = async () => {
    setloading(true);
    return await useRequest(`PublicHolidays/${year}/${country}`).then((res) => {
      setPublicHolidays(res.data);
      setloading(false);
    });
  };

  return (
    <>
      <main className={` d-flex wrap-wrap justify-items justify-center px-5 `}>
        <div className={`d-flex w-100 justify-center wrap-wrap p-5`}>
          <SelectCountry setCountry={setCountry} />
          <div className="d-flex">
            <SelectYear setYear={setYear} />
            <Button
              onClick={GetHollyDaySubmit}
              variant="contained"
              classes={{disabled: "bg-disabled"}}
              disabled={country == null}
              size="small"
              style={{height: "56px", width: "65px"}}
              className="radius-l-none radius-r-sm ">
              {loading == true ? (
                <CircularProgress size={"20px"} color="inherit" />
              ) : (
                <SearchIcon color={country !== null ? "inherit" : "disabled"} />
              )}
            </Button>
          </div>
        </div>

        {Boolean(PublicHolidays.length) == false && (
          <Alert severity="info" className=" my-10">
            Please select the desired country
          </Alert>
        )}

        {!loading ? (
          Boolean(PublicHolidays.length) && (
              <CardDays PublicHolidays={PublicHolidays} />
       
          )
        ) : (
          <Loading />
        )}
      </main>
    </>
  );
}
