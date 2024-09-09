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
  //setSortingOption: (option) => set({ sortingOption: option }), // Función para actualizar la opción de ordenamiento
  // Función para actualizar la opción de ordenamiento
  setSortingOption: ({ valueSort, columnOrder, orderDirection }) =>
    set((state) => ({
      sortingOption: {
        valueSort: valueSort || state.sortingOption.valueSort, // Mantén el valor anterior si es undefined
        columnOrder: columnOrder || state.sortingOption.columnOrder,
        orderDirection: orderDirection || state.sortingOption.orderDirection
      }
    })),

  getProductsAndSorting: () => ({
    products: state.products,
    sortingOption: state.sortingOption,
  }),
}));

export default useProductStore;