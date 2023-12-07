import { InputType, Int, Field } from '@nestjs/graphql';
import {Prisma} from "@prisma/client";
import {PartialSchema} from "@apollo/server/src/plugin/schemaReporting/generated/operations";

@InputType()
export class CreateRewardInput {

  @Field({ })
  event_id: string

  @Field()
  winner_id: string

}
