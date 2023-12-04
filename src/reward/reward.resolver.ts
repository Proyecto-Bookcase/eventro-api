import {Args, Int, Mutation, Query, Resolver} from '@nestjs/graphql';
import {RewardService} from './reward.service';
import {Reward} from './entities/reward.entity';
import {CreateRewardInput} from './dto/create-reward.input';
import {UpdateRewardInput} from './dto/update-reward.input';

@Resolver(() => Reward)
export class RewardResolver {
    constructor(private readonly rewardService: RewardService) {
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
}
