type AuthStore = {
  username: string;
  email: string;
  password: string;
  setUsername: (newValue: string) => void;
  setEmail: (newValue: string) => void;
  setPassword: (newValue: string) => void;
};

export type { AuthStore };
