import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AsistanceService } from './asistance.service';
import { Asistance } from './entities/asistance.entity';
import { CreateAsistanceInput } from './dto/create-asistance.input';
import { UpdateAsistanceInput } from './dto/update-asistance.input';

@Resolver(() => Asistance)
export class AsistanceResolver {
  constructor(private readonly asistanceService: AsistanceService) {}

  @Mutation(() => Asistance)
  createAsistance(@Args('createAsistanceInput') createAsistanceInput: CreateAsistanceInput) {
    return this.asistanceService.create(createAsistanceInput);
  }

  @Query(() => [Asistance], { name: 'asistance' })
  findAll() {
    return this.asistanceService.findAll();
  }

  @Query(() => Asistance, { name: 'asistance' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.asistanceService.findOne(id);
  }

  @Mutation(() => Asistance)
  updateAsistance(@Args('updateAsistanceInput') updateAsistanceInput: UpdateAsistanceInput) {
    return this.asistanceService.update(updateAsistanceInput.id, updateAsistanceInput);
  }

  @Mutation(() => Asistance)
  removeAsistance(@Args('id', { type: () => Int }) id: number) {
    return this.asistanceService.remove(id);
  }
}
