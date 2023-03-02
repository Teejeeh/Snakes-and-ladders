import { Board } from "../../domain/Board"

export default {  
    getGame(id){
        return {
            dice: 2,
            players: 4,
            turns: [],
        }
    },
    playTurn(data) {
        const current = data.current

        // LoadBoard
        const board = new Board()

        // Roll dice
        const diceRoll1 = Math.floor(Math.random() * 6) + 1;
        const diceRoll2 = Math.floor(Math.random() * 6) + 1;
        let destination = current + diceRoll1 + diceRoll2;
    
        // Check hits
        const specialDest = board.checkHit(destination)

        const hit = specialDest != undefined
        const hitKind = specialDest > destination ? "ladder" : "snake" 
        destination = hit ? specialDest : destination

        // Check gameover
        let gameOver = false
        if (destination > 100) {
            destination = 100
            gameOver = true
        }

        // save turn to game

        // add send room state
        return {
          current: current,
          dice: [diceRoll1, diceRoll2],
          destination,
          hit: hitKind,
          gameOver,
        }
    },
  };
  