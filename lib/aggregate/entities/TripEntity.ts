class TripEntity {
  tripId: string;
  carId: string;
  customerId: string;
  duration: bigint; //ticks
  milage: number;
  startDate: Date;
  endDate: Date;

  constructor(
    tripId: string,
    carId: string,
    customerId: string,
    duration: bigint,
    milage: number,
    startDate: Date,
    endDate: Date
  ) {
    this.tripId = tripId;
    this.carId = carId;
    this.customerId = customerId;
    this.duration = duration;
    this.milage = milage;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
