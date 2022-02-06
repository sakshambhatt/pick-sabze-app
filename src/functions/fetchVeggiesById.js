import axios from "axios";
import { pickSabzeeEndpoint } from "../configs/config";

async function fetchVeggiesById(veggieId) {
  const response = await axios.get(`${pickSabzeeEndpoint}/veggies/${veggieId}`);
  return response;
}

export { fetchVeggiesById };
