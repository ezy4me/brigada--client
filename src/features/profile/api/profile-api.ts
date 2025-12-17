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
  async getCustomerProfile(): Promise<CustomerProfile> {
    return await apiClient.get<CustomerProfile>("/profile/customer");
  },

  async getPerformerProfile(): Promise<PerformerProfile> {
    return await apiClient.get<PerformerProfile>("/profile/performer");
  },

  async getCompanyProfile(): Promise<CompanyProfile> {
    return await apiClient.get<CompanyProfile>("/profile/company");
  },

  async updateCustomerProfile(data: UpdateCustomerProfileDto): Promise<CustomerProfile> {
    return await apiClient.put<CustomerProfile>("/profile/customer", data);
  },

  async updatePerformerProfile(data: UpdatePerformerProfileDto): Promise<PerformerProfile> {
    return await apiClient.put<PerformerProfile>("/profile/performer", data);
  },

  async updateCompanyProfile(data: UpdateCompanyProfileDto): Promise<CompanyProfile> {
    return await apiClient.put<CompanyProfile>("/profile/company", data);
  },
};
