import {Args, Mutation, Parent, Query, ResolveField, Resolver} from '@nestjs/graphql';
import {EventService} from './event.service';
import {Event} from './entities/event.entity';
import {CreateEventInput} from "./dto/create-event.input";
import {UpdateEventInput} from "./dto/update-event.input";
import {User} from "../user/entities/user.entity";
import {PrismaService} from "../prisma/prisma.service";
import {Inscription} from "../inscription/entities/inscription.entity";
import {Reward} from "../reward/entities/reward.entity";

@Resolver(() => Event)
export class EventResolver {
    constructor(
        private readonly eventService: EventService,
        private readonly prisma: PrismaService
    ) {
    }

    @Mutation(() => Event)
    async createEvent(@Args('createEventInput') createEventInput: CreateEventInput) {
        return await this.eventService.create({
            name: createEventInput.name,
            date: createEventInput.date,
            description: createEventInput.description,
            location: createEventInput.location,
            organizer: {
                connect: {
                    id: createEventInput.organizer_id,
                }
            }
        });
    }

    @Query(() => [Event], {name: 'events'})
    findAll() {
        return this.eventService.findAll();
    }

    @Query(() => Event, {name: 'event'})
    findOne(@Args('id', {type: () => String}) id: string) {
        return this.eventService.findOne({id});
    }

    @Mutation(() => Event)
    updateEvent(
        @Args('id') id: string,
        @Args('updateEventInput') {
            name,
            location,
            description,
            date,
            organizer_id,
        }: UpdateEventInput
    ) {
        return this.eventService.update({
            where: {id},
            data: {
                name,
                location,
                description,
                date,
                organizer: {connect: {id: organizer_id}}
            }
        });
    }

    @Mutation(() => Event)
    removeEvent(@Args('id', {type: () => String}) id: string) {
        return this.eventService.remove({id});
    }

    @ResolveField(returns => User, {name: "organizer"})
    async getOrganizer(@Parent() event: Event) {
        return this.prisma.user.findFirst({where: {events: {some: {id: event.id}}}})
    }

    @ResolveField(returns => [Inscription], {name: "inscriptions"})
    async getInscriptions(@Parent() event: Event) {
        return this.prisma.inscription.findMany({where: {event_id: event.id}})
    }

    @ResolveField(returns => [Reward], {name: "rewards"})
    async getRewards(@Parent() event: Event) {
        return this.prisma.reward.findMany({where: {event_id: {equals: event.id}}})
    }
}