import {Module} from '@nestjs/common';
import {InscriptionService} from './inscription.service';
import {InscriptionResolver} from './inscription.resolver';
import {UserModule} from "../user/user.module";
import {EventModule} from "../event/event.module";

@Module({
    providers: [InscriptionResolver, InscriptionService],
})
export class InscriptionModule {
}
