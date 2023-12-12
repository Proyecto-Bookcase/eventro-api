import {Prisma} from '@prisma/client';
import {CreateCategoryInput} from './create-category.input';
import {InputType, PartialType} from '@nestjs/graphql';

@InputType()
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) implements Prisma.CategoryUpdateManyMutationInput {

}
