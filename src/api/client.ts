/**
 * Base fetch client for API requests.
 * Add auth headers, token refresh, and error handling here.
 */

const BASE_URL = __DEV__ ? 'http://localhost:3000/api' : 'https://api.example.com';

export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface RequestConfig {
  method?: RequestMethod;
  body?: unknown;
  headers?: Record<string, string>;
}

export async function request<T>(path: string, config: RequestConfig = {}): Promise<T> {
  const { method = 'GET', body, headers: customHeaders = {} } = config;
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...customHeaders,
  };
  // TODO: Add auth token when backend is ready
  // const token = await getAuthToken();
  // if (token) headers.Authorization = `Bearer ${token}`;

  const url = path.startsWith('http') ? path : `${BASE_URL}${path}`;
  const res = await fetch(url, {
    method,
    headers,
    body: body != null ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: res.statusText }));
    throw new Error((error as { message?: string }).message || res.statusText);
  }

  if (res.status === 204) return undefined as T;
  return res.json();
}

export const client = {
  get: <T>(path: string) => request<T>(path, { method: 'GET' }),
  post: <T>(path: string, body?: unknown) => request<T>(path, { method: 'POST', body }),
  put: <T>(path: string, body?: unknown) => request<T>(path, { method: 'PUT', body }),
  patch: <T>(path: string, body?: unknown) => request<T>(path, { method: 'PATCH', body }),
  delete: (path: string) => request<void>(path, { method: 'DELETE' }),
};
