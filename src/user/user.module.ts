import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import {PrismaService} from "../prisma/prisma.service";
import {PrismaModule} from "../prisma/prisma.module";

@Module({
  providers: [UserResolver, UserService],
})
export class UserModule {}
