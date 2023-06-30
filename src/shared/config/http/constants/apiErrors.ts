/* eslint-disable max-classes-per-file */
type ApiError = {
  description: string;
  status: number;
  extra?: string;
};

export const CustomerInactiveApiError: ApiError = {
  description: "CUSTOMER_INACTIVE",
  status: 403,
};

export const EmailAlreadyRegisteredApiError: ApiError = {
  description: "EMAIL_ALREADY_REGISTERED",
  status: 409,
};

export const CustomerNotFoundApiError: ApiError = {
  description: "NOT_FOUND",
  extra: "Customer was not found",
  status: 404,
};
