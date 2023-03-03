import axios from "axios";

export default {  
    async getGame(id){
        const { data } = await axios.get(`http://localhost:3000/api/game/${id}`)
        return data
    },
    
    async playTurn() {
        const { data } = await axios.post('http://localhost:3000/api/game/throw')
        const turn = data.turns.at(-1)
        return turn
    },
  };
  