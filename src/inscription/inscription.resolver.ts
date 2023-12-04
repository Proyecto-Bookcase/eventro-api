import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {InscriptionService} from './inscription.service';
import {Inscription} from './entities/inscription.entity';
import {CreateInscriptionInput} from './dto/create-inscription.input';
import {UpdateInscriptionInput} from './dto/update-inscription.input';

@Resolver(() => Inscription)
export class InscriptionResolver {
    constructor(private readonly inscriptionService: InscriptionService) {
    }

    @Mutation(() => Inscription)
    async createInscription(@Args('createInscriptionInput') createInscriptionInput: CreateInscriptionInput) {

        return this.inscriptionService.create({
            date: createInscriptionInput.date,
            user: {connect: {id: createInscriptionInput.user_id}},
            event: {connect: {id: createInscriptionInput.event_id}}
        });
    }

    @Query(() => [Inscription], {name: 'inscriptions'})
    async findAll() {
        return this.inscriptionService.findAll();
    }

    @Query(() => Inscription, {name: 'inscription'})
    async findOne(@Args('id') id: string) {
        return this.inscriptionService.findOne({id});
    }

    @Mutation(() => Inscription)
    async updateInscription(
        @Args('id') id: string,
        @Args('updateInscriptionInput') updateInscriptionInput: UpdateInscriptionInput
    ) {
        return this.inscriptionService.update({
            where: {id},
            data: updateInscriptionInput
        });
    }

    @Mutation(() => Inscription)
    async removeInscription(@Args('id') id: string) {
        return this.inscriptionService.remove({id});
    }
}
