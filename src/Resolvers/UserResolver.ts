import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { UserInput } from "./Inputs/UserInput";
import * as bcrypt from "bcryptjs";
import { User } from "../entity/User";
import { PrimeFeedback } from "../entity/PrimeFeedback";

@Resolver()
export class UserResolver {
  @Query(() => User)
  async me() {}

  @Query(() => [PrimeFeedback])
  async getPrimeFeedbacks() {}

  @Mutation(() => User)
  async createUser(@Arg("data") data: UserInput): Promise<User> {
    const hashedPwd = bcrypt.hashSync(data.password, 10);
    data.password = hashedPwd;
    const newUser = await User.create({
      ...data
    }).save();
    return newUser;
  }
}
