class Trip implements Aggregate {
    aggregateId: string;
    history: Event[];
    pending: Event[];

    state: Object;

    constructor(aggregateId: string, history : Event[], pending : Event[], state: Object){
        this.aggregateId = aggregateId;
        this.history = history;
        this.pending = pending;
        this.state = state;

    }

    reconistute(history : Event[]){
       // history.forEach();
        

    }

}