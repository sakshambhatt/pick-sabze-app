import axios from "axios";
import { pickSabzeeEndpoint } from "../configs/config";

async function searchVeggies(veggieToSearch) {
  const response = await axios.get(
    `${pickSabzeeEndpoint}/search?q=${veggieToSearch}`
  );
  return response;
}

export { searchVeggies };
