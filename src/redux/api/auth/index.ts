import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query<AUTH.GetMeResponse, AUTH.GetMeRequest>({
      query: () => ({
        url: "/auth/user",
        method: "GET",
      }),
      providesTags: ["auth"],
    }),
    signUp: builder.mutation<AUTH.PostSignUpResponse, AUTH.PostSignUpRequest>({
      query: (data) => ({
        url: "/auth/sign-up",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    sinIn: builder.mutation<AUTH.PostSignInResponse, AUTH.PostSignInRequest>({
      query: (data) => ({
        url: "/auth/sign-in",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    logout: builder.mutation({
      query: (data) => ({
        url: "/auth/logout",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/forgot",
        method: "POST",
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetMeQuery,
  useSignUpMutation,
  useSinInMutation,
  useForgotPasswordMutation,
  useLogoutMutation,
  useResetPasswordMutation,
} = api;
