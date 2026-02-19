import { client } from '../client';
import { endpoints } from '../endpoints';

export const authApi = {
  sendOtp: (phone: string) =>
    client.post<{ success: boolean }>(endpoints.auth.sendOtp, { phone }),

  verifyOtp: (phone: string, otp: string) =>
    client.post<{ token: string; user: unknown }>(endpoints.auth.verifyOtp, { phone, otp }),

  login: (credentials: { mobile?: string; password?: string }) =>
    client.post<{ token: string; user: unknown }>(endpoints.auth.login, credentials),

  logout: () => client.post(endpoints.auth.logout),

  getProfile: () => client.get<unknown>(endpoints.auth.profile),
};
