export default {
  lastThrow: state => {
    return state.game.turns.at(-1)
  },
  actualPlayer: state => {
    // return as index of array: 0,1,2,3
    return ((state.game.turns.length) % state.game.players);
  },
  previousPlayer: state => {
    // return as index of array: 0,1,2,3
    return ((state.game.turns.length -1) % state.game.players);
  },
  
  players: state => {
    const turns = state.game.turns
    const turn_amount = turns.length
    const player_amount = state.game.players

    let players = Array(player_amount).fill({})
    const lastMoves = turns.slice(-player_amount)

    lastMoves.reverse().map((move, index) => {
      const current_move = (turn_amount - index) -1
      const player_move = (current_move % player_amount);

      players[player_move] = move
    })
    return players
  },
};
