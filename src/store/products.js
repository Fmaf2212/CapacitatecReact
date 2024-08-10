import { create } from 'zustand';

export const useProductStore = create((set) => ({
  products: [],
  searchTerm: '',
  setProducts: (products) => set({ products }),
  setSearchTerm: (term) => set({ searchTerm: term }),
}));

export default useProductStore;