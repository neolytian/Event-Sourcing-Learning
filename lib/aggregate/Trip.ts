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

    finish(user : string, endDate: String){
        if(!this.isTripFinished(this)){

            try {
                this.assertCarIsLocked(this.state);
                this.pending.push(new TripFinished(213124124, this.aggregateId, new Date()));               
            } catch (e) {
                this.pending.push(new FinishTripRefused(213124124, this.aggregateId))
            }

        } else {
           //Emit FinisTripRefused 
        }
    }

    assertCarIsLocked(state: Object) {
        //if Car is not locked throw Exception
        throw new Error("Method not implemented.");
    }

    isTripFinished(trip : Trip){

        //evaluate Events if trips is finished;
        return false;
    }


}