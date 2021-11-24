import axios from "axios";
import config from "../../constants/config";

const workingUrl =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? config.serverUrl
    : config.prodUrl;

export const getDashboardStatus = async () => {
  try {
    var res = await axios.get<any>(`${workingUrl}dashboard`);
    console.log(res);
    return res;
  } catch (e) {
    // console.error(e);
    throw e;
  }
};

export const requestATrain = async (from: number, to: number) => {
  try {
    var res = await axios.post<any>(`${workingUrl}train/request`, {
      startTerminal: from,
      endTerminal: to,
      requestedTime: 0,
    });
    console.log(res);
    return res;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
