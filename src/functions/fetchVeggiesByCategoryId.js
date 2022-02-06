import axios from "axios";
import { pickSabzeeEndpoint } from "../configs/config";

async function fetchVeggiesByCategoryId(categoryId) {
  const response = await axios.get(
    `${pickSabzeeEndpoint}/categories/${categoryId}`
  );
  return response;
}

export { fetchVeggiesByCategoryId };
