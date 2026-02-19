/**
 * Local storage service.
 * Use for auth token, user preferences, and offline cache.
 * For persistence, install @react-native-async-storage/async-storage and switch to AsyncStorage.
 */
const KEYS = {
  AUTH_TOKEN: '@auth_token',
  USER: '@user',
  PREFERENCES: '@preferences',
} as const;

const memory: Record<string, string> = {};

export const storage = {
  async getItem<T>(key: string): Promise<T | null> {
    try {
      const value = memory[key];
      return value != null ? (JSON.parse(value) as T) : null;
    } catch {
      return null;
    }
  },

  async setItem(key: string, value: unknown): Promise<void> {
    memory[key] = JSON.stringify(value);
  },

  async removeItem(key: string): Promise<void> {
    delete memory[key];
  },

  async clear(): Promise<void> {
    Object.keys(memory).forEach((k) => delete memory[k]);
  },
};

export const storageKeys = KEYS;
