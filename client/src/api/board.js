import axios from "axios";

export default {
  getBoards() {
    const { data } = axios.get('http://localhost:3000/api/board')
    return data;
  },
  async getBoard(id) {
    const { data } = await axios.get(`http://localhost:3000/api/board/${id}`)
    return data;
  },
};
