import { InputType, Int, Field } from '@nestjs/graphql';
import {Prisma} from "@prisma/client";

@InputType()
export class CreateUserInput implements Prisma.UserCreateInput{

  @Field()
  email: string;

  @Field()
  name: string;

  @Field()
  password: string;

}
