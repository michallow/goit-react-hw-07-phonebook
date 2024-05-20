export const selectContacts = state => state.contactsSlice;

export const selectFilters = state => state.filterSlice;

export const selectIsLoading = state =>
  state.contacts.isLoading;

export const selectError = state => state.contacts.error;