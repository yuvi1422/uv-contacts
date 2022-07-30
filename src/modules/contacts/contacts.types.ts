import { TSection } from "../../components/uvsectionlist.types";

export type TContact = {
  firstName: string;
  lastName?: string;
};

export type TContactState = {
  name: string;
  contactsData: TSection<TContact>[];
};
