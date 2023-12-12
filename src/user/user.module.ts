import {Module} from '@nestjs/common';
import {UserService} from './user.service';
import {UserResolver} from './user.resolver';
import { RoleModule } from './role/role.module';

@Module({
    exports: [UserService],
    providers: [UserResolver, UserService],
    imports: [RoleModule],
})
export class UserModule {
}
