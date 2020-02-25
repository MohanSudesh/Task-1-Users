import { ObjectType, Field, ID } from "type-graphql";
import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity()
export class PrimeFeedback extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  _id: number;

  @Field()
  @Column()
  text: string;

  @Field({ nullable: true })
  @Column()
  by: User;
}
