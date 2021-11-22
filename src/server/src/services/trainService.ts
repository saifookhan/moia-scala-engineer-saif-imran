import Container, { Service } from "typedi";
import { ITrainInfo } from "../interfaces/ITrainInfo";
import { Queue } from "queue-typescript";

var queue = require("queue");

import IServiceRequest from "../interfaces/IServiceRequest";
import ServiceRequestService from "./serviceRequestService";
import SchedulerService from "./schedulerService";
import { LinkedList } from "linked-list-typescript";
import { IServiceRequestStatus } from "@/interfaces/IServiceRequestStatus";

import { STATUS } from "./serviceRequestService";

@Service()
export default class TrainService {
  // private ServiceRequest = Container.get(ServiceRequestService);
  // private Scheduler = Container.get(SchedulerService);

  public name: number;
  public terminal: number;
  public direction: number;

  private requestQueue: Queue<ServiceRequestService>;

  constructor(name: number) {
    this.name = name;
    this.terminal = 0;
    this.direction = 1;
    this.requestQueue = new Queue<null>();
  }

  move() {
    if (this.requestQueue.length === 0) return;

    var request = this.requestQueue.front; // requests are processed in queue to prevent starvation of some request. random/closest request processing might give better performance/service time.

    var startTerminal = request.startTerminal;
    var endTerminal = request.endTerminal;
    var currentTerminal = this.terminal;

    // direction = to minus from
    if (request.status === STATUS.NOT_STATED) {
      // move to start point of first request in request queue
      var difference = startTerminal - currentTerminal;
      this.direction = difference / Math.abs(difference === 0 ? 1 : difference);
    } else if (request.status === STATUS.STARTED) {
      // move to end point of first request in request queue
      var difference = endTerminal - startTerminal;
      this.direction = difference / Math.abs(difference === 0 ? 1 : difference);
    }

    var nextTerminal = this.terminal + this.direction;
    this.terminal = Math.max(0, Math.min(nextTerminal, 31));

    var uncompletedRequests: Queue<ServiceRequestService> = new Queue<
      ServiceRequestService
    >();

    for (let ride of this.requestQueue) {
      console.log(ride);
      ride.updateProgressStatus(this.terminal);
      if (ride.getStatus() !== STATUS.ENDED)
        // remove completed requests
        uncompletedRequests.enqueue(ride);
      else console.log("request completed: " + ride);
    }

    this.requestQueue = uncompletedRequests;
  }

  addRequest(serviceRequest: ServiceRequestService) {
    serviceRequest.updateProgressStatus(this.terminal);
    this.requestQueue.enqueue(serviceRequest);
  }

  async getServiceCost(serviceRequest: IServiceRequest) {
    var startTerminal = serviceRequest.startTerminal;
    var endTerminal = serviceRequest.endTerminal;
    var currentTerminal = this.terminal;

    return (
      Math.abs(startTerminal - currentTerminal) +
      Math.abs(endTerminal - startTerminal)
    );
  }
}
