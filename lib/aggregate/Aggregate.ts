interface Aggregate {
    aggregateId : string;
    history: Array<Event>;
    pending: Array<Event>;
    version: bigint;
    state: Object;
}