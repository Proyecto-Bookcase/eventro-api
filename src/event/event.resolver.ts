import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {EventService} from './event.service';
import {Event} from './entities/event.entity';
import {CreateEventInput} from "./dto/create-event.input";
import {UpdateEventInput} from "./dto/update-event.input";

@Resolver(() => Event)
export class EventResolver {
    constructor(private readonly eventService: EventService) {
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
        @Args('updateEventInput') updateEventInput: UpdateEventInput
    ) {

        return this.eventService.update({
            where: {id},
            data: updateEventInput
        });
    }

    @Mutation(() => Event)
    removeEvent(@Args('id', {type: () => String}) id: string) {
        return this.eventService.remove({id});
    }
}