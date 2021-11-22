import Container, { Service } from "typedi";

export enum STATUS {
  NOT_STATED = "NOT_STATED",
  STARTED = "STARTED",
  ENDED = "ENDED",
}

@Service()
export default class ServiceRequestService {
  public startTerminal: number;
  public endTerminal: number;
  public requestedTime: boolean;

  public status: STATUS;

  constructor() {
    this.status = STATUS.NOT_STATED;
  }

  updateProgressStatus(terminal: number) {
    if (this.status == STATUS.NOT_STATED && terminal === this.startTerminal)
      this.status = STATUS.STARTED;
    if (this.status == STATUS.STARTED && terminal == this.endTerminal)
      this.status = STATUS.ENDED;
  }

  getStatus(): STATUS {
    return this.status;
  }
}
