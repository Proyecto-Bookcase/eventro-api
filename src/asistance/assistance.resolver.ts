import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AssistanceService } from './assistanceService';
import { Assistance } from './entities/assistance.entity';
import { CreateAssistanceInput } from './dto/create-assistance.input';
import { UpdateAssistanceInput } from './dto/update-assistance.input';

@Resolver(() => Assistance)
export class AssistanceResolver {
  constructor(private readonly assistanceService: AssistanceService) {}

  @Mutation(() => Assistance)
  createAssistance(@Args('createAssistanceInput') createAssistanceInput: CreateAssistanceInput) {
    return this.assistanceService.create(createAssistanceInput);
  }

  @Query(() => [Assistance], { name: 'assistance' })
  findAll() {
    return this.assistanceService.findAll();
  }

  @Query(() => Assistance, { name: 'assistance' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.assistanceService.findOne(id);
  }

  @Mutation(() => Assistance)
  updateAssistance(@Args('updateAssistanceInput') updateAssistanceInput: UpdateAssistanceInput) {
    return this.assistanceService.update(updateAssistanceInput.id, updateAssistanceInput);
  }

  @Mutation(() => Assistance)
  removeAssistance(@Args('id', { type: () => Int }) id: number) {
    return this.assistanceService.remove(id);
  }
}
