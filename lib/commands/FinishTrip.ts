class FinishTrip implements Command{
    aggregateId: string;
    sequenceNo : bigint;
    userId : string;
    endDate : Date;



    constructor(aggregateId : string, sequenceNo: bigint, userId : string, endDate: Date) {
        this.aggregateId = aggregateId;
        this.sequenceNo = sequenceNo;
        this.userId = userId;
        this.endDate = endDate;
    }



}