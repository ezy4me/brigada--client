import { useAuthStore } from "../store/auth-store";

export const useAuth = () => {
  const { 
    user, 
    isAuthenticated, 
    isLoading, 
    error,
    login,
    logout,
    register,
    clearError,
    refreshAuth 
  } = useAuthStore();

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    logout,
    register,
    clearError,
    refreshAuth,
    isExecutor: user?.role === 'executor',
    isCustomer: user?.role === 'customer',
    isCompany: user?.role === 'company',
    hasName: !!user?.name,
  };
};