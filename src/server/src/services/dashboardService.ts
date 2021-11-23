import Container, { Service } from "typedi";
import { ITrainInfo } from "../interfaces/ITrainInfo";
import SchedulerService from "./schedulerService";

@Service()
export default class DashboardService {
  private TrainInfoModel: ITrainInfo | undefined;

  private getDeviceInfoModel = (): ITrainInfo => {
    if (!this.TrainInfoModel)
      this.TrainInfoModel = Container.get("deviceInfoModel");
    return this.TrainInfoModel!;
  };

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
