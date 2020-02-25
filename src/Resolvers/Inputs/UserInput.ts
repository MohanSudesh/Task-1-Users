import { InputType, Field } from "type-graphql";
import { User } from "src/entity/User";
import { AccessLevel } from "C:/Users/Mohan sudesh/type-graphql-series-0_setup/src/entity/enums/AccessLevelEnums";

@InputType()
export class UserInput implements Partial<User> {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  accessLevel: AccessLevel;

  @Field({ nullable: true })
  mobile?: string;

  @Field({ nullable: true })
  avatar?: string;

  @Field({ nullable: true })
  upi?: string;

  @Field({ nullable: true })
  department?: string;
}
