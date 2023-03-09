import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://6405df02eed195a99f8f2637.mockapi.io";

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }


    });

export const addContact = createAsyncThunk(
    "contact/addContact",
    async ({ name, number }, thunkAPI) => {
        try {
            const newContact = { name, phone: number };
            const response = await axios.post('/contacts', newContact);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${id}`);
            return response.data.id;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);