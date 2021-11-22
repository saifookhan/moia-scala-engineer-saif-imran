import Container, { Service } from "typedi";
import TrainService from "./trainService";

@Service()
export default class ServiceRequestService {
  private trains: Array<TrainService>;
  MAX_TERMINAL: number;
  MAX_TRAINS: number;

  constructor() {
    this.trains = new Array(32).fill(new TrainService());
    this.MAX_TERMINAL = 32;
    this.MAX_TRAINS = 32;
  }
}
