export const getDataValues = (providerData) => {
  if (providerData) {
    return Object.values(providerData)[0];
  }
};
