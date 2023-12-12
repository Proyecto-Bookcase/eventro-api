import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {RewardService} from './reward.service';
import {Reward} from './entities/reward.entity';
import {CreateRewardInput} from './dto/create-reward.input';
import {UpdateRewardInput} from './dto/update-reward.input';
import {PrismaService} from "../prisma/prisma.service";

@Resolver(() => Reward)
export class RewardResolver {
    constructor(
        private readonly rewardService: RewardService,
        private readonly prisma: PrismaService
    ) {
    }

    @Mutation(() => Reward)
    createReward(@Args('createRewardInput') input: CreateRewardInput) {
        return this.rewardService.create({
            name: input.name,
            description: input.description,
            winner: {connect: {id: input.winner_id}}
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
        @Args('updateRewardInput') input: UpdateRewardInput
    ) {
        return this.rewardService.update({
            where: {id},
            data: {
                name: input.name,
                description: input.description,
                winner: {connect: {id: input.winner_id}}
            }
        });
    }

    @Mutation(() => Reward)
    removeReward(@Args('id') id: string) {
        return this.rewardService.remove({id});
    }
}
