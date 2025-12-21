import { create } from "zustand";
import type { AuthStore } from "./types/auth-store.type";

const useAuthStore = create<AuthStore>((set) => ({
  username: "",
  email: "",
  password: "",
  setUsername: (newValue: string) =>
    set((state) => ({ ...state, username: newValue })),
  setEmail: (newValue: string) =>
    set((state) => ({ ...state, username: newValue })),
  setPassword: (newValue: string) =>
    set((state) => ({ ...state, username: newValue })),
}));

export default useAuthStore;
