import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InscriptionService } from './inscription.service';
import { Inscription } from './entities/inscription.entity';
import { CreateInscriptionInput } from './dto/create-inscription.input';
import { UpdateInscriptionInput } from './dto/update-inscription.input';

@Resolver(() => Inscription)
export class InscriptionResolver {
  constructor(private readonly inscriptionService: InscriptionService) {}

  @Mutation(() => Inscription)
  async createInscription(@Args('createInscriptionInput') createInscriptionInput: CreateInscriptionInput) {
    return //this.inscriptionService.create(createInscriptionInput);
  }

  @Query(() => [Inscription], { name: 'inscriptions' })
  async findAll() {
    return //this.inscriptionService.findAll();
  }

  @Query(() => Inscription, { name: 'inscription' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return //this.inscriptionService.findOne(id);
  }

  @Mutation(() => Inscription)
  async updateInscription(@Args('updateInscriptionInput') updateInscriptionInput: UpdateInscriptionInput) {
    return //this.inscriptionService.update(updateInscriptionInput.id, updateInscriptionInput);
  }

  @Mutation(() => Inscription)
  async removeInscription(@Args('id', { type: () => Int }) id: number) {
    return //this.inscriptionService.remove(id);
  }
}
