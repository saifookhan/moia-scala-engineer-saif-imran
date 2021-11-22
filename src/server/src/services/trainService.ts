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
  private ServiceRequest = Container.get(ServiceRequestService);
  private Scheduler = Container.get(SchedulerService);

  public name: string;
  public terminal: number;
  public direction: number;

  private requestQueue: Queue<ServiceRequestService>;

  constructor() {
    this.name = "anon";
    this.terminal = 0;
    this.direction = 1;
  }

  move() {
    if (this.requestQueue.length == 0) return;

    var request = this.requestQueue[this.requestQueue.length - 1]; // requests are processed in queue to prevent starvation of some request. random/closest request processing might give better performance/service time.
    var startTerminal = request.startTerminal;
    var endTerminal = request.endTerminal;
    var currentTerminal = this.terminal;

    // direction = to minus from
    if (request.status === this.ServiceRequest.status.includes("NOT_STARTED")) {
      // move to start point of first request in request queue
      var difference = startTerminal - currentTerminal;
      this.direction = difference / Math.abs(difference === 0 ? 1 : difference);
    } else if (
      request.status === this.ServiceRequest.status.includes("STARTED")
    ) {
      // move to end point of first request in request queue
      var difference = endTerminal - startTerminal;
      this.direction = difference / Math.abs(difference === 0 ? 1 : difference);
    }

    var nextTerminal = this.terminal + this.direction;
    var terminal = Math.max(
      0,
      Math.min(nextTerminal, this.Scheduler.MAX_TERMINAL - 1)
    );

    var uncompletedRequests: Queue<ServiceRequestService> =
      new Queue<ServiceRequestService>();

    for (let item of uncompletedRequests) {
      console.log(item);
      item.updateProgressStatus(terminal);
      if (item.getStatus() !== this.ServiceRequest.status)
        // remove completed requests
        uncompletedRequests.append(item);
      else console.log("request completed: " + item);
    }

    this.requestQueue = uncompletedRequests;
  }

  addRequest(serviceRequest: IServiceRequest) {
    serviceRequest.updateProgressStatus(this.terminal);
    this.requestQueue.append(serviceRequest);

    console.log(this.requestQueue);
  }
}
