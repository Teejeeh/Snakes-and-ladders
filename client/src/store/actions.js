import gameAPI from "@/api/game"
import boardAPI from "@/api/board"

export default {
  loadBoard: async (context, payload) => {
    const id = payload.id;
    const board = await boardAPI.getBoard(id);
    context.commit("SET_BOARD", board);

  },
  loadGame: async (context, payload) => {
    const id = payload;
    const game = await gameAPI.getGame(id);
    context.commit("SET_GAME", game);
    context.commit("SET_BOARD", game.board);
    
  },

  move: async (context, payload) => {
    const currentplayer = context.getters.players[context.getters.actualPlayer]
    const current = currentplayer.destination ?  currentplayer.destination : 1
    const turn = await gameAPI.playTurn({current})

    let game = context.state.game;
    game.turns.push(turn)

    context.commit("SET_GAME", game);
  },
};
