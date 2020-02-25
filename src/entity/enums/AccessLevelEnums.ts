import { registerEnumType } from "type-graphql";

export enum AccessLevel {
  COORD,
  CORE,
  HEAD,
  COCAS,
  COCAD
}

registerEnumType(AccessLevel, {
  name: "AccessLevel"
});
