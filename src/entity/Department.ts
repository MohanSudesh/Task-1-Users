import { ObjectType, Field, ID } from "type-graphql";
import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity()
export class Department extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  _id: number;

  @Field({ nullable: true })
  @Column()
  members: [User];
}
