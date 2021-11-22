import Container, { Service } from "typedi";
import { ITrainInfo } from "../interfaces/ITrainInfo";
import { Queue } from "queue-typescript";

var queue = require("queue");

import IServiceRequest from "../interfaces/IServiceRequest";
import ServiceRequestService from "./serviceRequestService";
import SchedulerService from "./schedulerService";
import { LinkedList } from "linked-list-typescript";
import { IServiceRequestStatus } from "@/interfaces/IServiceRequestStatus";

@Service()
export default class TrainService {
  // private ServiceRequest = Container.get(ServiceRequestService);
  // private Scheduler = Container.get(SchedulerService);

  public name: string;
  public terminal: number;
  public direction: number;

  private requestQueue: Queue<ServiceRequestService>;

  constructor() {
    this.name = "anon";
    this.terminal = 0;
    this.direction = 1;
    this.requestQueue = new Queue<ServiceRequestService>();
  }

  addRequest(serviceRequest: ServiceRequestService) {
    console.log("here" + JSON.stringify(serviceRequest));
    serviceRequest.updateProgressStatus(this.terminal);
    console.log("here" + JSON.stringify(serviceRequest) + this.terminal);

    this.requestQueue.enqueue(serviceRequest);

    console.log(this.requestQueue);
  }

  async getServiceCost(serviceRequest: IServiceRequest) {
    console.log(serviceRequest);
    console.log(serviceRequest.startTerminal);
    var startTerminal = serviceRequest.startTerminal;
    var endTerminal = serviceRequest.endTerminal;
    var currentTerminal = this.terminal;

    return (
      Math.abs(startTerminal - currentTerminal) +
      Math.abs(endTerminal - startTerminal)
    );
  }
}
