export const initialDataset: any = {
  minWidth: false,
};

export const useStoreConfig = (storeSet) => {
  let set = storeSet;

  return {
    configUpdate: (dataset) => {
      set((state) => {
        const setConfig = {
          ...state.appConfig,
          ...dataset,
        };

        return {
          ...state,
          appConfig: {
            ...setConfig,
          },
        };
      });
    },

    configPrefetch: async (cookies) => {
      set((state) => ({
        ...state,
        appConfig: {},
      }));
    },
  };
};
