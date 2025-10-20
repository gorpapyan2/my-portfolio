import React, { createContext, useContext, ReactNode, useState } from 'react';
import { useAuthService } from '../lib/services/useAuthService';
import type { User } from '@supabase/supabase-js';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  isAdmin: boolean;
  isTranslationEditMode: boolean;
  setIsTranslationEditMode: (value: boolean) => void;
  signIn: (email: string, password: string) => Promise<User>;
  signOut: () => Promise<void>;
  checkSession: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const authService = useAuthService();
  const [isTranslationEditMode, setIsTranslationEditMode] = useState(false);

  return (
    <AuthContext.Provider value={{
      ...authService,
      isTranslationEditMode,
      setIsTranslationEditMode,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
