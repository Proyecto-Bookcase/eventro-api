import { CreateRewardInput } from './create-reward.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import {Prisma} from "@prisma/client";

@InputType()
export class UpdateRewardInput extends PartialType(CreateRewardInput) {
}
