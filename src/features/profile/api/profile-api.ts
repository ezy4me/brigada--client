// features/profile/api/profile-api.ts
import { apiClient } from "@/shared/api/api-client";
import {
  CustomerProfile,
  PerformerProfile,
  CompanyProfile,
  UpdateCustomerProfileDto,
  UpdatePerformerProfileDto,
  UpdateCompanyProfileDto,
} from "@/shared/lib/types/profile.types";

export const profileApi = {
  // Получить профиль заказчика
  async getCustomerProfile(): Promise<CustomerProfile> {
    return await apiClient.get<CustomerProfile>("/profile/customer");
  },

  // Получить профиль исполнителя
  async getPerformerProfile(): Promise<PerformerProfile> {
    return await apiClient.get<PerformerProfile>("/profile/performer");
  },

  // Получить профиль компании
  async getCompanyProfile(): Promise<CompanyProfile> {
    return await apiClient.get<CompanyProfile>("/profile/company");
  },

  // Обновить профиль заказчика
  async updateCustomerProfile(data: UpdateCustomerProfileDto): Promise<CustomerProfile> {
    return await apiClient.put<CustomerProfile>("/profile/customer", data);
  },

  // Обновить профиль исполнителя
  async updatePerformerProfile(data: UpdatePerformerProfileDto): Promise<PerformerProfile> {
    return await apiClient.put<PerformerProfile>("/profile/performer", data);
  },

  // Обновить профиль компании
  async updateCompanyProfile(data: UpdateCompanyProfileDto): Promise<CompanyProfile> {
    return await apiClient.put<CompanyProfile>("/profile/company", data);
  },
};
