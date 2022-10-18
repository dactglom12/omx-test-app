import { OrderStatuses } from "./enums";

type Customer = {
  name: string;
  address: string;
};

type WithId = {
  id: string | number;
};

export type Order = {
  status: OrderStatuses;
  name: string;
  details: {
    customer: Customer;
  };
  distance: string;
} & WithId;
