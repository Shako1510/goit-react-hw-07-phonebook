export const getContacts = state => state.contacts.items;

export const getFilter = state => state.filter;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.error;

export const getVisibleContact = state => {

    const contacts = getContacts(state);

    const filters = getFilter(state);

    const normalizedFilter = filters.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))

}