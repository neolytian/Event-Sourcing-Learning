class FinishTripRefused implements Event {
  sequenceNo: bigint;
  aggregateId: string;

  constructor(sequenceNo: bigint, aggregateId: string) {
    this.sequenceNo = sequenceNo;
    this.aggregateId = aggregateId;
  }
}
