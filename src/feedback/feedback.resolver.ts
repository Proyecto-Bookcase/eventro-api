import {Args, Mutation, Parent, Query, Resolver} from '@nestjs/graphql';
import {FeedbackService} from './feedback.service';
import {Feedback} from './entities/feedback.entity';
import {CreateFeedbackInput} from './dto/create-feedback.input';
import {UpdateFeedbackInput} from './dto/update-feedback.input';
import {PrismaService} from "../prisma/prisma.service";

@Resolver(() => Feedback)
export class FeedbackResolver {
    constructor(
        private readonly feedbackService: FeedbackService,
        private readonly prisma: PrismaService
    ) {
    }

    @Mutation(() => Feedback)
    createFeedback(@Args('createFeedbackInput') input: CreateFeedbackInput) {
        return this.feedbackService.create({
            ranking: input.ranking,
            comment: input.comment,
            date: input.date,
            assistance: {connect: {id: input.assistance_id}},
            event: {connect: {id: input.event_id}}
        });
    }

    @Query(() => [Feedback], {name: 'feedbacks'})
    findAll() {
        return this.feedbackService.findAll();
    }

    @Query(() => Feedback, {name: 'feedback'})
    findOne(@Args('id') id: string) {
        return this.feedbackService.findOne({id});
    }

    @Mutation(() => Feedback)
    updateFeedback(
        @Args('id') id: string,
        @Args('updateFeedbackInput') input: UpdateFeedbackInput) {
        return this.feedbackService.update({id}, input);
    }

    @Mutation(() => Feedback)
    removeFeedback(@Args('id') id: string) {
        return this.feedbackService.remove({id});
    }

    async getEvent(@Parent() {id}: Feedback) {
        const res = await this.prisma.feedback.findUnique({
            where: {id},
            select: {event: true}
        })

        return res.event
    }
}
