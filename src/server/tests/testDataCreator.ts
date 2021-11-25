import IServiceRequest from "../src/interfaces/IServiceRequest";

export const getDefaultTrainRequest = (): IServiceRequest => ({
  startTerminal: 3,
  endTerminal: 23,
  requestedTime: 0,
});
