// store/slices/workspaceSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../api/axios";

// Async Thunks for API calls
export const fetchOrganizations = createAsyncThunk(
  "workspace/fetchOrganizations",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.post("/Organization/listOrg");
      console.log(response, "responce");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createWorkspace = createAsyncThunk(
  "workspace/createWorkspace",
  async ({ orgId, workspaceName }, { rejectWithValue }) => {
    try {
      const response = await api.post("/Workspace/createWorkspace", {
        org_id: orgId,
        workspace_name: workspaceName,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchWorkspaces = createAsyncThunk(
  "workspace/fetchWorkspaces",
  async (orgId, { rejectWithValue }) => {
    try {
      const response = await api.post("/Workspace/listWorkspace", {
        org_id: orgId,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Redux slice
const workspaceSlice = createSlice({
  name: "workspace",
  initialState: {
    organizations: [],
    workspaces: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch organizations
      .addCase(fetchOrganizations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrganizations.fulfilled, (state, action) => {
        state.loading = false;
        state.organizations = action.payload.data;
      })
      .addCase(fetchOrganizations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create workspace
      .addCase(createWorkspace.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createWorkspace.fulfilled, (state, action) => {
        state.loading = false;
        state.workspaces.push(action.payload.data);
        state.error = false;
      })
      .addCase(createWorkspace.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch workspaces
      .addCase(fetchWorkspaces.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWorkspaces.fulfilled, (state, action) => {
        state.loading = false;
        state.workspaces = action.payload.data;
      })
      .addCase(fetchWorkspaces.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default workspaceSlice.reducer;
