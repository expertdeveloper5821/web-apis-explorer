import { baseUrl } from "./config";

const fetchInstance = (provider_name) => {
  return fetch(`${baseUrl}/${provider_name}.json`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export default fetchInstance;
