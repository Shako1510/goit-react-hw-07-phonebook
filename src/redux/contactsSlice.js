import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";
import { fetchContacts, addContact, deleteContact } from "./operation";



const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,

    },
    extraReducers: {
        [fetchContacts.pending](state) {
            state.isLoading = true;
        },
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [addContact.pending](state) {
            state.isLoading = true;
        },
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [addContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [deleteContact.pending](state) {
            state.isLoading = true;
        },
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(item => item.id === action.payload);
            state.items.splice(index, 1);
        },
        [deleteContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },

});

// const contactsSlice = createSlice({
//     name: "contacts",
//     initialState: contactsInitialState,
//     reducers: {
//         addContact: {
//             reducer(state, action) {
//                 state.push(action.payload);
//             },
//             prepare(name, number) {
//                 return {
//                     payload: {
//                         id: nanoid(),
//                         name,
//                         number,
//                     },
//                 };
//             },
//         },
//         deleteContact(state, action) {
//             const index = state.findIndex(contact => contact.id === action.payload);
//             state.splice(index, 1);
//         },
//     },
// });

// export const { addContact, deleteContact, } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;