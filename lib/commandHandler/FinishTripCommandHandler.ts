class FinishTripCommandHandler implements CommandHandler{

repo : TripRepository;

constructor(repo: TripRepository){
    this.repo = repo;
}


handle(command:FinishTrip) {
    
let trip = this.repo.fetchBy("1213");
trip.finish(command.userId, command.endDate);

}




}