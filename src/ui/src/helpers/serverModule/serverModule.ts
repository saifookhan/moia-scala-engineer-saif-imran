import axios from "axios";
import config from "../../constants/config";

export const getDashboardStatus = async () => {
  // console.log(`New Cafe: ${cafeSignupObject}`);
  try {
    var res = await axios.get<any>(`${config.serverUrl}dashboard`);
    console.log(res);
    return res;
  } catch (e) {
    // console.error(e);
    throw e;
  }
};
