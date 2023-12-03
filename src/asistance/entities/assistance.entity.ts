import { ObjectType, Field, Int } from '@nestjs/graphql';
import {Inscription} from "../../inscription/entities/inscription.entity";

@ObjectType()
export class Assistance {

  @Field()
  id: string;

  @Field(type=>Inscription)
  inscription: Inscription

  @Field()
  date: Date
}
