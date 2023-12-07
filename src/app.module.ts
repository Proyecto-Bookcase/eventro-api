import {Module} from '@nestjs/common'
import {ConfigModule} from '@nestjs/config'
import {EventModule} from './event/event.module';
import {RewardModule} from './reward/reward.module';
import {AssistanceModule} from './asistance/assistance.module';
import {InscriptionModule} from './inscription/inscription.module';
import {UserModule} from './user/user.module';
import {PrismaModule} from './prisma/prisma.module';
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import { AuthModule } from './auth/auth.module';

@Module({

    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
        }),
        EventModule,
        UserModule,
        InscriptionModule,
        AssistanceModule,
        RewardModule,
        PrismaModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: true,
            context: ({ req, res }) => ({ req, res }),
        }),
        AuthModule
    ],

})
export class AppModule {
}
