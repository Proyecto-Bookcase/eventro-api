import {Args, Int, Mutation, Query, Resolver} from '@nestjs/graphql';
import {AssistanceService} from './assistanceService';
import {Assistance} from './entities/assistance.entity';
import {CreateAssistanceInput} from './dto/create-assistance.input';
import {UpdateAssistanceInput} from './dto/update-assistance.input';

@Resolver(() => Assistance)
export class AssistanceResolver {
    constructor(private readonly assistanceService: AssistanceService) {
    }

    @Mutation(() => Assistance)
    createAssistance(@Args('createAssistanceInput') createAssistanceInput: CreateAssistanceInput) {
        return this.assistanceService.create({
            date: createAssistanceInput.date,
            inscription: {
                connect: {
                    id: createAssistanceInput.inscription_id
                }
            }
        });
    }

    @Query(() => [Assistance], {name: 'assistants'})
    findAll() {
        return this.assistanceService.findAll();
    }

    @Query(() => Assistance, {name: 'assistance'})
    findOne(@Args('id') id: string) {
        return this.assistanceService.findOne({id});
    }

    @Mutation(() => Assistance)
    updateAssistance(
        @Args('id') id: string,
        @Args('updateAssistanceInput') updateAssistanceInput: UpdateAssistanceInput
    ) {
        return this.assistanceService.update({
            where: {id},
            data: updateAssistanceInput
        });
    }

    @Mutation(() => Assistance)
    removeAssistance(@Args('id') id: string) {
        return this.assistanceService.remove({id});
    }
}
