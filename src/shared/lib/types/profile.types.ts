export interface BaseProfile {
  id: string;
  surname: string;
  name: string;
  patronymic: string;
  preferedContact: string;
  phone: string;
  specializationId?: string;
  user: {
    email: string;
    role: "customer" | "performer" | "company";
  };
}

export interface CustomerProfile extends BaseProfile {}

export interface PerformerProfile extends BaseProfile {}

export interface CompanyProfile {
  id: string;
  name: string;
  shortName: string;
  preferedContact: string;
  address: string;
  inn: string;
  ogrn: string;
  ogrnip: string;
  representativeFullName: string;
  representativePhone: string;
  user: {
    email: string;
    role: "customer" | "performer" | "company";
  };
  phone: string;
}

export interface UpdateCustomerProfileDto {
  surname: string;
  name: string;
  patronymic?: string;
  phone: string;
  preferedContact: string;
  specializationId?: string;
}

export interface UpdatePerformerProfileDto extends UpdateCustomerProfileDto {}

export interface UpdateCompanyProfileDto {
  name: string;
  shortName?: string;
  phone: string;
  address: string;
  inn: string;
  ogrn?: string;
  ogrnip?: string;
  representativeFullName: string;
  representativePhone: string;
  preferedContact: string;
}
