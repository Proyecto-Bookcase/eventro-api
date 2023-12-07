import {Args, Mutation, Parent, Query, ResolveField, Resolver} from '@nestjs/graphql';
import {RewardService} from './reward.service';
import {Reward} from './entities/reward.entity';
import {CreateRewardInput} from './dto/create-reward.input';
import {UpdateRewardInput} from './dto/update-reward.input';
import {User} from "../user/entities/user.entity";
import {PrismaService} from "../prisma/prisma.service";
import {Event} from "../event/entities/event.entity";

@Resolver(() => Reward)
export class RewardResolver {
    constructor(
        private readonly rewardService: RewardService,
        private readonly prisma: PrismaService
    ) {
    }

    @Mutation(() => Reward)
    createReward(@Args('createRewardInput') createRewardInput: CreateRewardInput) {
        return this.rewardService.create({
            event: {connect: {id: createRewardInput.event_id}},
            winner: {connect: {id: createRewardInput.winner_id}}
        });
    }

    @Query(() => [Reward], {name: 'rewards'})
    findAll() {
        return this.rewardService.findAll();
    }

    @Query(() => Reward, {name: 'reward'})
    findOne(@Args('id') id: string) {
        return this.rewardService.findOne({id});
    }

    @Mutation(() => Reward)
    updateReward(
        @Args('id') id: string,
        @Args('updateRewardInput') {winner_id, event_id}: UpdateRewardInput
    ) {
        return this.rewardService.update({
            where: {id},
            data: {
                event: {connect: {id: event_id}},
                winner: {connect: {id: winner_id}}
            }
        });
    }

    @Mutation(() => Reward)
    removeReward(@Args('id') id: string) {
        return this.rewardService.remove({id});
    }

    @ResolveField(returns => User, {name: "winner"})
    async getUser(@Parent() reward: Reward) {
        return this.prisma.user.findFirst({where: {rewards: {some: {id: reward.id}}}})
    }

    @ResolveField(returns => Event, {name: "event"})
    async getEvent(@Parent() reward: Reward) {
        return this.prisma.event.findFirst({where: {rewards: {some: {id: reward.id}}}})
    }
}
