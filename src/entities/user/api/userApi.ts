import { useQuery } from "@tanstack/react-query";

export const USER_QUERY_KEYS = {
  userRole: () => ["userRole"] as const,
  userProfile: (userId: string) => ["userProfile", userId] as const,
};

export const fetchUserRole = async (): Promise<'executor' | 'customer' | 'company'> => {
  const token = localStorage.getItem("token"); 
  if (!token) throw new Error("Unauthorized");

  const res = await fetch("/api/user/role", {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user role");
  }

  const data = await res.json();
  return data.role;
};

export const useUserRole = () => {
  return useQuery({
    queryKey: USER_QUERY_KEYS.userRole(),
    queryFn: fetchUserRole,
    staleTime: 1000 * 60 * 5, 
    retry: 1,
  });
};