import IServiceRequest from "../interfaces/IServiceRequest";
import { Service } from "typedi";
import ServiceRequestService from "./serviceRequestService";
import TrainService from "./trainService";
import IAllTrainsInfo from "./../interfaces/IAllTrainsInfo";

import { MAX_TERMINALS, MAX_TRAINS } from "../constants/constants";

@Service()
export default class SchedulerService {
  private trains: Array<TrainService>;
  MAX_TERMINAL: number;
  MAX_TRAINS: number;

  constructor() {
    this.trains = new Array(MAX_TRAINS).fill(null).map((_, i) => {
      return new TrainService(i);
    });
    this.MAX_TERMINAL = MAX_TERMINALS;
    this.MAX_TRAINS = MAX_TRAINS;
  }

  async scheduleRequest(request: IServiceRequest): Promise<void> {
    this.checkServiceReq(request);
    var minCostTrain: TrainService = null;
    var minCost = Number.MAX_VALUE;

    for (const train of this.trains) {
      var newMinCost = await train.getServiceCost(request);
      if (newMinCost < minCost) {
        minCostTrain = train;
        minCost = newMinCost;
        console.log(
          "Minimum cost train found: " + train.name + " with cost: " + minCost
        );
      }
    }

    minCostTrain.addRequest(
      new ServiceRequestService(
        request.startTerminal,
        request.endTerminal,
        request.requestedTime
      )
    );
  }

  private checkServiceReq = (req: IServiceRequest): void => {
    if (!req.startTerminal || !req.endTerminal) throw Error("values missing");
  };

  public async proceed(): Promise<void> {
    for (const train of this.trains) {
      await train.move();
    }
  }

  public async getAllTrainsStats(): Promise<IAllTrainsInfo[]> {
    var trains = this.trains;

    return await Promise.all(
      trains.map(async (train) => {
        return await train.getTrainInfo();
      })
    );
  }
}
