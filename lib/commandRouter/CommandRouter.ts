
class CommandRouter {

    commandPipeline : Array<Command>;
    interceptors: Array<Interceptor>;

    constructor(commandPipeline : Array<Command>, interceptors: Array<Interceptor>){
        this.commandPipeline = commandPipeline;
        this.interceptors = interceptors;
    }



}