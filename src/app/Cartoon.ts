export class Cartoon{
    id! : number;
    name! : string;
    episodes! : number;
    source! : string;

    constructor(id:number, name:string, episodes:number, source:string){
        this.id = id;
        this.name = name;
        this.episodes = episodes;
        this.source = source;
    }
}
