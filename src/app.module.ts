import {Module} from '@nestjs/common'
import {ConfigModule} from '@nestjs/config'
import {EventModule} from './event/event.module';
import {RewardModule} from './reward/reward.module';
import {AsistanceModule} from './asistance/asistance.module';
import {InscriptionModule} from './inscription/inscription.module';
import {UserModule} from './user/user.module';

@Module({
    imports: [ConfigModule.forRoot({
        envFilePath: '.env.local'
    }), EventModule, UserModule, InscriptionModule, AsistanceModule, RewardModule],
    controllers: [],
    providers: [],
})
export class AppModule {
}
