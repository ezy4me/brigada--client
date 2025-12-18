import { apiClient } from "@/shared/api/api-client";

export interface Specialization {
  id: string;
  name: string;
}

export const specializationsApi = {
  async getSpecializations(): Promise<Specialization[]> {
    return await apiClient.get<Specialization[]>("/specializations");
  },
};