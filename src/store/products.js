import { create } from 'zustand';

export const useProductStore = create((set) => ({
  products: [],
  searchTerm: '',
  sortingOption: {
    valueSort: 'Filtros',
    columnOrder: '',
    orderDirection: ''
  }, // Opción de ordenamiento
  setProducts: (newProducts) => set({ products: newProducts }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  // Función para actualizar la opción de ordenamiento
  setSortingOption: (s = {}) => {
    const { valueSort = 'Filtros', columnOrder = '', orderDirection = '' } = s; // Asignamos valores por defecto si no existen
    set((state) => ({
      sortingOption: {
        valueSort: valueSort || state.sortingOption.valueSort, // Mantén el valor anterior si es undefined
        columnOrder: columnOrder || state.sortingOption.columnOrder,
        orderDirection: orderDirection || state.sortingOption.orderDirection,
      }
    }));
  },

  getProductsAndSorting: () => ({
    products: state.products,
    sortingOption: state.sortingOption,
  }),
}));

export default useProductStore;