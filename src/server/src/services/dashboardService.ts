import { Service } from "typedi";
import { ITrainInfo } from "../interfaces/ITrainInfo";

@Service()
export default class DashboardService {
  getCurrentState = async (): Promise<any> => {
    try {
      var positions: ITrainInfo[] = [].concat(
        Array.from({ length: 32 }).map((_, index) => {
          return { name: index + 1, position: 0, direction: true };
        })
      );

      return positions;
    } catch (e) {
      throw e;
    }
  };
}
