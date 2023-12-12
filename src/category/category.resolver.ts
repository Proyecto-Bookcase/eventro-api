import {Args, Mutation, Parent, Query, ResolveField, Resolver} from '@nestjs/graphql';
import {CategoryService} from './category.service';
import {Category} from './entities/category.entity';
import {CreateCategoryInput} from './dto/create-category.input';
import {UpdateCategoryInput} from './dto/update-category.input';
import {Event} from "../event/entities/event.entity";
import {PrismaService} from "../prisma/prisma.service";

@Resolver(() => Category)
export class CategoryResolver {
    constructor(
        private readonly categoryService: CategoryService,
        private readonly prisma: PrismaService
    ) {
    }

    @Mutation(() => Category)
    createCategory(@Args('createCategoryInput') createCategoryInput: CreateCategoryInput) {
        return this.categoryService.create(createCategoryInput);
    }

    @Query(() => [Category], {name: 'categories'})
    findAll() {
        return this.categoryService.findAll();
    }

    @Query(() => Category, {name: 'category'})
    findOne(@Args('name') name: string) {
        return this.categoryService.findOne({name});
    }

    @Mutation(() => Category)
    updateCategory(
        @Args('old_name') name: string,
        @Args('updateCategoryInput') input: UpdateCategoryInput
    ) {
        return this.categoryService.update({name}, input);
    }

    @Mutation(() => Category)
    removeCategory(@Args('name') name: string) {
        return this.categoryService.remove({name});
    }

    @ResolveField(returns => [Event], {name: 'events'})
    async getEvents(@Parent() {name}: Category) {

        const res = await this.prisma.category.findUnique({
            where: {name},
            select: {
                events: true
            }
        });

        return res.events;
    }
}
