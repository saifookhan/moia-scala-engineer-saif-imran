import { IServiceRequest } from "@/interfaces/IServiceRequest";
import Container, { Service } from "typedi";
import ServiceRequestService from "./serviceRequestService";
import TrainService from "./trainService";

@Service()
export default class SchedulerService {
  private trains: Array<TrainService>;
  MAX_TERMINAL: number;
  MAX_TRAINS: number;

  constructor() {
    this.trains = new Array(32).fill(null).map((v, i) => {
      return new TrainService(i);
    });
    this.MAX_TERMINAL = 32;
    this.MAX_TRAINS = 32;
  }

  async scheduleRequest(request: IServiceRequest) {
    this.checkServiceReq(request);
    var minCostTrain: TrainService = null;
    var minCost = Number.MAX_VALUE;

    for (const train of this.trains) {
      var newMinCost = await train.getServiceCost(request);
      if (newMinCost < minCost) {
        minCostTrain = train;
        minCost = newMinCost;
        console.log("Minimum cost train found " + train, newMinCost, minCost);
        break;
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

  private checkServiceReq = (req: IServiceRequest) => {
    if (!req.startTerminal || !req.endTerminal) throw Error("values missing");
  };

  public proceed() {
    for (const train of this.trains) {
      train.move();
    }
  }
}
