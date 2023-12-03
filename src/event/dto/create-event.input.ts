import { InputType, Field } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class CreateEventInput implements Partial<Prisma.EventCreateInput>{

  @Field()
  date: Date

  @Field()
  description: string;

  @Field()
  location: string;

  @Field()
  name: string;

  @Field()
  organizer_id: string

}
