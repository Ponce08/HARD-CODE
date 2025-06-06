import { Field, ObjectType, ID, InputType } from 'type-graphql';
import { Length } from 'class-validator';

@ObjectType()
export class User {
  @Field(() => ID)
  id!: string;

  @Field()
  @Length(2, 255)
  name!: string;
}

@InputType()
export class CreateUserInput {
  @Field()
  @Length(2, 255)
  name!: string;
}

@InputType()
export class UpdateUserInput {
  @Field(() => ID)
  id!: string;

  @Field({ nullable: true })
  name!: string;
}
