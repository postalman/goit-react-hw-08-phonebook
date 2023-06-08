import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const backendUrl = 'https://6480c2a0f061e6ec4d49d69c.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll', 
  async () => {
  const response = await fetch(backendUrl);
  const data = await response.json();
  return data;
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
  const response = await fetch(backendUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contact),
  });
  const data = await response.json();
  return data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
  await fetch(`${backendUrl}/${contactId}`, {
    method: 'DELETE',
  });
  return contactId;
});

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ""
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {

    [fetchContacts.pending]: (state) => {
      state.isLoading = true;
        state.error = null;
    },

    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
        state.contacts.items = action.payload;
    },

    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
        state.error = action.error.message;
    },

    [addContact.fulfilled]: (state, action) => {
      state.contacts.items.push(action.payload);
    },

    [deleteContact.fulfilled]: (state, action) => {
      state.contacts.items = state.contacts.items.filter((contact) => contact.id !== action.payload);
    },

  },
});

export const { setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
