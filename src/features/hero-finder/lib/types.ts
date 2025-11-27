import { UserRole } from "@/shared/lib/types/user.types";

export type { UserRole };

export interface SearchParams {
  query: string;
  city: string;
  role: UserRole;
}

export interface HeroFinderConfig {
  title: string;
  placeholder: string;
  searchLabel: string;
  popularRequests: string[];
  stats: string[];
}
