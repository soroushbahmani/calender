import Loading from "@/components/Loading";
import React from "react";

export default function loading() {
  return (
    <div className="h-screen w-screen flex justify-center align-center">
      <Loading />
    </div>
  );
}
