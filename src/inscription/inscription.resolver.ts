import {Args, Mutation, Parent, Query, ResolveField, Resolver} from '@nestjs/graphql';
import {InscriptionService} from './inscription.service';
import {Inscription} from './entities/inscription.entity';
import {CreateInscriptionInput} from './dto/create-inscription.input';
import {UpdateInscriptionInput} from './dto/update-inscription.input';
import {User} from "../user/entities/user.entity";
import {PrismaService} from "../prisma/prisma.service";
import {Assistance} from "../asistance/entities/assistance.entity";
import {Event} from "../event/entities/event.entity";

@Resolver(() => Inscription)
export class InscriptionResolver {
    constructor(
        private readonly inscriptionService: InscriptionService,
        private readonly prisma: PrismaService
    ) {
    }

    @Mutation(() => Inscription)
    async createInscription(@Args('createInscriptionInput') input: CreateInscriptionInput) {

        return this.inscriptionService.create({
            date: input.date,
            user: {connect: {email: input.user_email}},
            event: {connect: {id: input.event_id}}
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
        @Args('updateInscriptionInput') input: UpdateInscriptionInput
    ) {
        return this.inscriptionService.update({
            where: {id},
            data: {
                date: input.date,
                event: {connect: {id: input.event_id}},
                user: {connect: {email: input.user_email}},
            }
        });
    }

    @Mutation(() => Inscription)
    async removeInscription(@Args('id') id: string) {
        return this.inscriptionService.remove({id});
    }

    @ResolveField(returns => User, {name: "user"})
    async getUser(@Parent() inscription: Inscription) {
        return this.prisma.user.findFirst({where: {inscriptions: {some: {id: inscription.id}}}})
    }

    @ResolveField(returns => Event, {name: "event"})
    async getEvent(@Parent() inscription: Inscription) {
        return this.prisma.event.findFirst({where: {inscriptions: {some: {id: inscription.id}}}})
    }

    @ResolveField(returns => Assistance, {name: "assistance", nullable: true})
    async getAssistance(@Parent() inscription: Inscription) {
        return this.prisma.assistance.findFirst({where: {inscription_id: inscription.id}})
    }
}
