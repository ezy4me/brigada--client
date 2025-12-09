import { useAuthStore } from '@/features/auth/store/auth-store';

export const useApi = () => {
  const { token, user } = useAuthStore();

  const getAuthHeaders = () => {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
  };

  const getUserId = () => user?.id;
  const getUserRole = () => user?.role;

  return {
    getAuthHeaders,
    getUserId,
    getUserRole,
    isAuthenticated: !!token,
    user,
  };
};