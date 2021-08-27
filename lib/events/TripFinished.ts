class TripFinished implements Event {
  sequenceNo: bigint;
  aggregateId: string;
  endDate: Date;

  constructor(sequenceNo: bigint, aggregateId: string, endDate: Date) {
    this.sequenceNo = sequenceNo;
    this.aggregateId = aggregateId;
    this.endDate = endDate;
  }
}
