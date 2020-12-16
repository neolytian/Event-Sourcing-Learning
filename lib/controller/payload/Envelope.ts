class Envelope {

    userId : string;
    command : Command;

    constructor(userId: string, command: Command){
        this.userId = userId;
        this.command = command;
    }

}