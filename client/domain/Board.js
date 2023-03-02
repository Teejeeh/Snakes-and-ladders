import { Snake } from "./Snake";
import { Ladder } from "./Ladder";

export class Board {
    
    constructor(base, snakes, ladders) {
        this.Xtiles = 10;
        this.Ytiles = 10;
        this.snakes = this.generateSnakes()
        this.ladders = this.generateLadders()
    }
    
    generateSnakes() {
        let snakes = []
        // can change for 'random' generation or load from data layer
        snakes.push(new Snake(27, 5))
        snakes.push(new Snake(40, 3))
        snakes.push(new Snake(43, 18))
        snakes.push(new Snake(54, 31))
        snakes.push(new Snake(66, 45))
        snakes.push(new Snake(76, 58))
        snakes.push(new Snake(89, 53))
        snakes.push(new Snake(99, 41))

        return snakes
    }

    generateLadders(){
        let ladders = []
        // can change for 'random' generation or load from data layer
        ladders.push(new Ladder(4, 25))
        ladders.push(new Ladder(13, 46))
        ladders.push(new Ladder(50, 69))
        ladders.push(new Ladder(42, 63))
        ladders.push(new Ladder(62, 81))
        ladders.push(new Ladder(74, 92))

        return ladders
    }

    // returns new destination if hit, else return undefined
    checkHit(destination){
        // duplicate code, kan abstracte functie worden #tijd
        const snakesHit = this.snakes.filter((snake)=> snake.begin == destination)
        if ( snakesHit.length > 0 ) return snakesHit[0].end

        const laddersHit = this.ladders.filter((ladder)=> ladder.begin == destination)
        if ( laddersHit.length > 0 ) return laddersHit[0].end

        return undefined
    }


}