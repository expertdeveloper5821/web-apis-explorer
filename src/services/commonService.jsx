import { sendRequest } from "../utils/axiosInstance";

export const getProvidersData = async () => {
  const res = await sendRequest(`providers.json`, {
    method: "GET",
  });
  return res;
};

export const getParticularProvidersData = async (providerName) => {
  const res = await sendRequest(`${providerName}.json`, {
    method: "GET",
  });
  return res;
};
