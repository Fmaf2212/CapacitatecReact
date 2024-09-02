import { create } from "zustand";

export const useCounterStore = create((set) => {
//   const getPurchaseDataFromLocalStorage = () => {
//     const purchaseData = localStorage.getItem('purchaseData');
//     return purchaseData ? JSON.parse(purchaseData) : null;
//   };

  const isBrowser = typeof window !== "undefined";

  const getUserDataForAvatarDropdownFromLocalStorage = () => {
    const userDataForAvatarDropdownString = isBrowser && localStorage.getItem('userDataForAvatarDropdown');
    return userDataForAvatarDropdownString ? JSON.parse(userDataForAvatarDropdownString) : { imageUrl: '', lastName: '', names: '' };
  };

  const updateUserDataForAvatarDropdown = (names, lastName) => {
    set((state) => ({
      ...state,
      userDataForAvatarDropdown: { ...state.userDataForAvatarDropdown, names, lastName },
    }));
    const userDataString = isBrowser && localStorage.getItem("userDataForAvatarDropdown");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      isBrowser && localStorage.setItem(
        "userDataForAvatarDropdown",
        JSON.stringify({ ...userData, names, lastName })
      );
    }
  };

  const updateUserDataForAvatarDropdownWithImg = (names, lastName, imageUrl) => {
    set((state) => ({
      ...state,
      userDataForAvatarDropdown: { ...state.userDataForAvatarDropdown, names, lastName, imageUrl },
    }));
    const userDataString = isBrowser && localStorage.getItem("userDataForAvatarDropdown");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      isBrowser && localStorage.setItem(
        "userDataForAvatarDropdown",
        JSON.stringify({ ...userData, names, lastName, imageUrl })
      );
    }
  };

  return {
    // count: 0,

    isLoggedIn: isBrowser && localStorage.getItem('USER_AUTH') ? true : false,

    dataIsLoggedIn: isBrowser && localStorage.getItem('USER_AUTH') ? JSON.parse(localStorage.getItem('USER_AUTH')) : {},

    userDataForAvatarDropdown: getUserDataForAvatarDropdownFromLocalStorage(),

    setUserDataForAvatarDropdown: (userData) => {
      set((state) => ({ ...state, userDataForAvatarDropdown: userData }));
      isBrowser && localStorage.setItem('userDataForAvatarDropdown', JSON.stringify(userData));
    },

    clearUserDataForAvatarDropdown: () => {
      set((state) => ({ ...state, userDataForAvatarDropdown: { imageUrl: '', lastName: '', names: '' } }));
      isBrowser && localStorage.removeItem('userDataForAvatarDropdown');
    },

    updateNamesAndLastName: (names, lastName) => {
      updateUserDataForAvatarDropdown(names, lastName);
    },

    updateNamesAndLastNameAndImg: (names, lastName, nameImageUrl) => {
      const imageUrl = `https://api.yosoymitosis.com/StaticFiles/ProfileImg/${nameImageUrl}`;
      updateUserDataForAvatarDropdownWithImg(names, lastName, imageUrl);
    },

    // increment: () => {
    //   set((state) => ({ ...state, count: state.count + 1 }));
    // },

    // decrement: () => {
    //   set((state) => ({ ...state, count: state.count - 1 }));
    // },

    handleLogin: () => {
      set((state) => ({ ...state, isLoggedIn: true }));
    },

    handleLogout: () => {
      const initialPurchaseData = {
        userId: 0,
        grossAmount: 0,
        netAmount: 0,
        realPoints: 0,
        promotionPoints: 0,
        quantity: 0,
        storeId: 0,
        statusPurchase: "",
        typePurchase: "",
        receipt: "",
        documentReceipt: "",
        typeDocumentReceipt: "",
        typePayment: "",
        purchaseDetail: [],
      };
      isBrowser && localStorage.removeItem('StoresForShopping');
      isBrowser && localStorage.removeItem('TypePurchase');
      isBrowser && localStorage.removeItem('carritoLength');
      isBrowser && localStorage.setItem('purchaseData', JSON.stringify(initialPurchaseData));
      set((state) => ({ ...state, isLoggedIn: false }));
      isBrowser && localStorage.removeItem('userDataForAvatarDropdown');
      isBrowser && localStorage.removeItem('USER_AUTH');
      window.location.href = "/sign-in";
    },

    // purchaseData: getPurchaseDataFromLocalStorage(),

    // setPurchaseData: (data) => {
    //   set((state) => ({ ...state, purchaseData: data }));
    //   localStorage.setItem("purchaseData", JSON.stringify(data));
    // },

    // purchaseSuccess: () => {
    //   const purchaseDataString = localStorage.getItem('purchaseData');
    //   const USER_AUTH_String = localStorage.getItem('USER_AUTH');
    //   if (purchaseDataString && USER_AUTH_String) {
    //     const USER_AUTH = JSON.parse(USER_AUTH_String);
    //     const userId = USER_AUTH.userId;
    //     const initialPurchaseData = {
    //       userId: userId,
    //       grossAmount: 0,
    //       netAmount: 0,
    //       realPoints: 0,
    //       promotionPoints: 0,
    //       quantity: 0,
    //       storeId: 0,
    //       statusPurchase: "",
    //       typePurchase: "",
    //       receipt: "",
    //       documentReceipt: "",
    //       typeDocumentReceipt: "",
    //       typePayment: "",
    //       purchaseDetail: [],
    //     };
    //     localStorage.setItem('purchaseData', JSON.stringify(initialPurchaseData));
    //   }
    //   localStorage.removeItem('StoresForShopping');
    //   localStorage.removeItem('TypePurchase');
    //   localStorage.removeItem('carritoLength');
    // },
  };
});
