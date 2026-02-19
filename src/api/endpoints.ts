/**
 * All API endpoint strings in one place.
 */

export const endpoints = {
  auth: {
    login: '/auth/login',
    sendOtp: '/auth/send-otp',
    verifyOtp: '/auth/verify-otp',
    logout: '/auth/logout',
    refresh: '/auth/refresh',
    profile: '/auth/profile',
  },
  distance: {
    list: '/distance',
    create: '/distance',
    get: (id: string) => `/distance/${id}`,
    update: (id: string) => `/distance/${id}`,
    delete: (id: string) => `/distance/${id}`,
    leave: '/distance/leave',
  },
  task: {
    list: '/tasks',
    create: '/tasks',
    get: (id: string) => `/tasks/${id}`,
    update: (id: string) => `/tasks/${id}`,
    delete: (id: string) => `/tasks/${id}`,
  },
  expense: {
    list: '/expenses',
    create: '/expenses',
    get: (id: string) => `/expenses/${id}`,
    update: (id: string) => `/expenses/${id}`,
    delete: (id: string) => `/expenses/${id}`,
  },
  activity: {
    list: '/activities',
    get: (id: string) => `/activities/${id}`,
  },
  rts: {
    list: '/rts',
    get: (id: string) => `/rts/${id}`,
  },
  assets: {
    list: '/assets',
  },
} as const;
