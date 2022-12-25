import constate from "constate";

const useMain = () => {
  return {};
};
export const [MainProvider, useMainContext] = constate(useMain);
