import create from 'zustand';

type TStoreMenu = {
  menuOpen: boolean;
  setMenu: () => void;
};

export const useStoreMenuOpen = create<TStoreMenu>((set) => ({
  menuOpen: false,
  setMenu: () =>
    set((state) => ({
      menuOpen: !state.menuOpen,
    })),
}));
