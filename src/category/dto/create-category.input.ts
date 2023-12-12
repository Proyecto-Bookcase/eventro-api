import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class CreateCategoryInput implements Prisma.CategoryCreateManyInput{

    name: string;

}
