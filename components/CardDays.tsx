import {Tooltip} from "@mui/material";
import React from "react";

export default function CardDays({PublicHolidays}: TpropsCardDays) {
  return (
    <>
      {PublicHolidays.map((holiday: TholidayProps, index: TindexProps) => (
        <div key={index} className="p-2" style={{width: "310px"}}>
          <Tooltip title={holiday.name} placement="top">
            <div
              className=" p-2 px-3 radius-md d-flex flex-column bg-secoundry"
              style={{background: "rgb(60, 62, 68) shadow-sm"}}>
              <h1 className="py-2 text-center my-2" style={{fontSize: "20px"}}>
                {holiday.date}
              </h1>
              <div
                className="d-flex flex-column py-1"
                style={{fontWeight: "500", fontSize: "16px"}}>
                <span className="text-secoundry">Name:</span>
                <span className="py-2" style={{fontSize: "18px"}}>
                  {holiday.name}
                </span>
              </div>
              <div
                className="d-flex flex-column py-1"
                style={{fontWeight: "500", fontSize: "16px"}}>
                <span className="text-secoundry">LocalName:</span>
                <span className="py-2" style={{fontSize: "18px"}}>
                  {holiday.localName}
                </span>
              </div>
            </div>
          </Tooltip>
        </div>
      ))}
    </>
  );
}
