import axios from "axios";
import { pickSabzeeEndpoint } from "../configs/config";
async function fetchCategories() {
  const response = await axios.get(`${pickSabzeeEndpoint}/categories/`);
  return response;
}

export {fetchCategories}
