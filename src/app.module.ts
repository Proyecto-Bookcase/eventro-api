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
import {AuthModule} from './auth/auth.module';
import {CategoryModule} from './category/category.module';
import {FeedbackModule} from './feedback/feedback.module';
import {NotificationModule} from './notification/notification.module';

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
            context: ({req, res}) => ({req, res}),
            playground: false,
        }),
        AuthModule,
        CategoryModule,
        FeedbackModule,
        NotificationModule
    ],

})
export class AppModule {
}
