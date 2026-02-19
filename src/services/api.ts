/**
 * API service layer for backend integration.
 * Replace with actual HTTP client (axios/fetch) when backend is ready.
 */
import { API_BASE_URL } from '../constants';

export const api = {
  get: async <T>(path: string): Promise<T> => {
    const res = await fetch(`${API_BASE_URL}${path}`);
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  },
  post: async <T>(path: string, body: unknown): Promise<T> => {
    const res = await fetch(`${API_BASE_URL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  },
  put: async <T>(path: string, body: unknown): Promise<T> => {
    const res = await fetch(`${API_BASE_URL}${path}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  },
  delete: async (path: string): Promise<void> => {
    const res = await fetch(`${API_BASE_URL}${path}`, { method: 'DELETE' });
    if (!res.ok) throw new Error(res.statusText);
  },
};
