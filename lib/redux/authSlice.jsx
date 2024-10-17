import api from "../api/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setCookie, getCookie, deleteCookie } from "cookies-next";

let controller = new AbortController();

// Helper function to reset controller
const resetController = () => {
  if (controller) {
    controller.abort();
  }
  controller = new AbortController();
};

// Async Thunk for login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    resetController();
    try {
      const response = await api.post(
        "/User/login",
        { email, password },
        { signal: controller.signal }
      ); // Send email and password

      const { token } = response.data;
      setCookie("authToken", token, {
        maxAge: 86400, // Cookie expiry time in seconds
        path: "/",
        // httpOnly: true,
      });
      return response.data;
    } catch (error) {
      if (error.name === "AbortError") {
        return rejectWithValue("Request canceled");
      }
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    resetController();
    try {
      const response = await api.post("/User/register", userData, {
        signal: controller.signal,
      });
      const { token } = response.data;
      setCookie("authToken", token, {
        maxAge: 86400, // Cookie expiry time in seconds
        path: "/",
        // httpOnly: true,
      });
      return response.data;
    } catch (error) {
      if (error.name === "AbortError") {
        return rejectWithValue("Request canceled");
      }
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Reset Password
export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (email, { rejectWithValue }) => {
    resetController();
    try {
      const response = await api.post("/User/resetPassword", email, {
        signal: controller.signal,
      });
      return response.data;
    } catch (error) {
      if (error.name === "AbortError") {
        return rejectWithValue("Request canceled");
      }
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Fetch Profile
export const fetchProfile = createAsyncThunk(
  "auth/fetchProfile",
  async (_, { getState, rejectWithValue }) => {
    resetController();
    try {
      const token = getState().auth.token;
      const response = await api.post(
        "/User/profile",
        null,
        {
          headers: {
            Authorization: token,
          },
        },
        {
          signal: controller.signal,
        }
      );
      return response.data;
    } catch (error) {
      if (error.name === "AbortError") {
        return rejectWithValue("Request canceled");
      }
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Update Password
export const updatePassword = createAsyncThunk(
  "auth/updatePassword",
  async (passwordData, { getState, rejectWithValue }) => {
    resetController();
    try {
      const token = getState().auth.token;
      const response = await api.post("/User/updatePassword", passwordData, {
        signal: controller.signal,
      });
      return response.data;
    } catch (error) {
      if (error.name === "AbortError") {
        return rejectWithValue("Request canceled");
      }
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const initialState = {
  user: null,
  token: typeof window !== "undefined" ? getCookie("authToken") : null,
  loading: false,
  error: null,
  message: null,
  profile: null,
  resetPasswordSuccess: false,
};

// Auth Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      deleteCookie("authToken", {
        path: "/",
      }); // Remove token on logout
    },
    resetResetPasswordSuccess: (state) => {
      // Reset action
      state.resetPasswordSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user; // Store user details
        state.token = action.payload.token;
        state.message = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.message = action.payload.message;
      });

    // Register User
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.message = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.token = action.payload.token;
      state.message = null;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.message = action.payload.message;
    });

    // Reset Password
    builder.addCase(resetPassword.pending, (state) => {
      state.loading = true;
      state.resetPasswordSuccess = false;
      state.message = null;
    });
    builder.addCase(resetPassword.fulfilled, (state) => {
      state.loading = false;
      state.resetPasswordSuccess = true;
      state.message = null;
    });
    builder.addCase(resetPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.resetPasswordSuccess = false;
      state.message = action.payload.message;
    });

    // Fetch Profile
    builder.addCase(fetchProfile.pending, (state) => {
      state.loading = true;
      state.message = null;
    });
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.profile = action.payload;
      state.message = null;
    });
    builder.addCase(fetchProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.message = action.payload.message;
    });

    // Update Password
    builder.addCase(updatePassword.pending, (state) => {
      state.loading = true;
      state.message = null;
    });
    builder.addCase(updatePassword.fulfilled, (state) => {
      state.loading = false;
      state.message = null;
    });
    builder.addCase(updatePassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.message = action.payload.message;
    });
  },
});

export const { logout, resetResetPasswordSuccess } = authSlice.actions;
export default authSlice.reducer;
