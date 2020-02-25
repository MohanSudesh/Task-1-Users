import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { AccessLevel } from "./enums/AccessLevelEnums";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  _id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  password: string;

  @Field()
  @Column()
  accessLevel: AccessLevel;

  @Field({ nullable: true })
  @Column()
  mobile?: string;

  @Field({ nullable: true })
  @Column()
  avatar?: string;

  @Field({ nullable: true })
  @Column()
  upi?: string;

  @Field({ nullable: true })
  @Column()
  department?: string;
}
