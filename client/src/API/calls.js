import axios from "axios";
import { GRIEVANCE_URL } from "./config";

export const fetchAddgrievances = (postBody) =>
  axios.post(`${GRIEVANCE_URL}/`, postBody, {});