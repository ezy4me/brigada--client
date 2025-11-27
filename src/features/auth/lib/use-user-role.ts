import { UserRole } from "@/shared/lib/types/user.types";

export const useUserRole = (): UserRole => {
  // const { data: session } = useSession();
  // return session?.user?.role || 'guest';

  if (typeof window !== "undefined") {
    const savedRole = localStorage.getItem("user-role");
    if (
      savedRole &&
      ["customer", "executor", "company"].includes(savedRole)
    ) {
      return savedRole as UserRole;
    }
  }

  return "guest";
};

export const useUserRoleWithFallback = (
  fallbackRole: UserRole = "guest"
): UserRole => {
  const userRole = useUserRole();
  return userRole !== "guest" ? userRole : fallbackRole;
};
