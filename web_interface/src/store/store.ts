// Libraries
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Types

// Defines a type for session storage properties derived from AppState

export const useAppStore = create(
  persist(
    (set) => ({
      language: null,
      rememberMeAllowed: false,
      token: null,
      setLanguage: (language: string) => set(() => ({ language })),
      setRememberMeAllowed: (rememberMeAllowed: boolean) => set(() => ({ rememberMeAllowed })),
      setToken: (token: string | null) => set(() => ({ token })),
    }),
    {
      name: 'app-storage',
      getStorage: () => localStorage,
    },
  ),
);

export const useSessionStore = create(
  persist(
    (set) => ({
      token: null,
      setToken: (token: string | null) => set(() => ({ token })),
    }),
    {
      name: 'session-storage',
      getStorage: () => sessionStorage,
    },
  ),
);
