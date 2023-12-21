import {Field, ID, ObjectType} from '@nestjs/graphql';
import {User} from "../../entities/user.entity";

@ObjectType()
export class Role {

    @Field(() => ID)
    id: string

    name: string

    @Field(() => [User])
    users: User[]

}
