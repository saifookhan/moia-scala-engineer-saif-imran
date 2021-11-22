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
    // this.trains = new Array(32).fill(new TrainService());
    this.trains = new Array(32).fill(new TrainService());
    this.MAX_TERMINAL = 32;
    this.MAX_TRAINS = 32;
  }

  async scheduleRequest(request: IServiceRequest) {
    console.log(request);
    this.checkServiceReq(request);
    var minCostTrain: TrainService = null;
    var minCost = Number.MAX_VALUE;

    for (const train of this.trains) {
      var newMinCost = await train.getServiceCost(request);
      console.log("newMinCost " + newMinCost);
      if (newMinCost < minCost) {
        minCostTrain = train;
        minCost = newMinCost;
      }
    }

    minCostTrain.addRequest(new ServiceRequestService());
    console.log("leaving ");
  }

  private checkServiceReq = (req: IServiceRequest) => {
    if (!req.startTerminal || !req.endTerminal) throw Error("values missing");
  };
}
