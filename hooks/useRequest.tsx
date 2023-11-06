import Chapar from "@hamidrezana/chapar";
import {SendChaparReturnType} from "@hamidrezana/chapar/dist/types";

export const useRequest = async (url: string) => {
  const chapar = new Chapar({
    baseUrl: {main: "https://date.nager.at/api/v3"},
  });

  const response: Promise<SendChaparReturnType<any>> = chapar.sendChapar(url, {
    baseUrlType: "main",
  });

  return await response;
};
