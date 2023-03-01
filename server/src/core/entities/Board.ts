import { Player } from "./Player";
import { Snake } from "./Snake";
import { Ladder } from "./Ladder";

export class Board {
    private Xtiles;
    private Ytiles;
    private snakes: Snake[];
    private ladders: Ladder[];

    constructor() {
        this.Xtiles = 6;
        this.Ytiles = 6;
        this.snakes = this.generateSnakes()
        this.ladders = this.generateLadders()
    }
    
    private generateSnakes(): Array<Snake> {
        let snakes = []
        // can change for 'random' generation
        snakes.push(new Snake(12, 2))
        snakes.push(new Snake(30, 4))
        snakes.push(new Snake(35, 22))

        return snakes
    }

    private generateLadders(){
        let ladders = []
        // can change for 'random' generation
        ladders.push(new Ladder(3, 16))
        ladders.push(new Ladder(15, 25))
        ladders.push(new Ladder(21, 32))

        return ladders
    }

    // returns new destination if hit, else return undefined
    checkHit(destination: number): number{

        // duplicate code, kan abstracte functie worden #tijd
        const snakesHit = this.snakes.filter((snake)=> snake.begin == destination)
        console.log(snakesHit.length)
        if ( snakesHit.length > 0 ) return snakesHit[0].end

        const laddersHit = this.ladders.filter((ladder)=> ladder.begin == destination)
        if ( laddersHit.length > 0 ) return laddersHit[0].end

        return undefined
    }


}