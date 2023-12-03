import {Module} from '@nestjs/common'
import {ConfigModule} from '@nestjs/config'
import {EventModule} from './event/event.module';
import {RewardModule} from './reward/reward.module';
import {AsistanceModule} from './asistance/asistance.module';
import {InscriptionModule} from './inscription/inscription.module';
import {UserModule} from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
    imports: [ConfigModule.forRoot({
        envFilePath: '.env'
    }), EventModule, UserModule, InscriptionModule, AsistanceModule, RewardModule, PrismaModule],
    controllers: [],
    providers: [],
})
export class AppModule {
}
