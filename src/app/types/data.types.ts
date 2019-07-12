export interface PinObject {
  x: number;
  y: number;
}

export interface PathCoordinates {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

export interface FlightPlan {
  pins: Array<PinObject>;
  paths: Array<PathCoordinates>;
}
