import { Module } from '@nestjs/common';
import { AssistanceService } from './assistanceService';
import { AssistanceResolver } from './assistance.resolver';

@Module({
  providers: [AssistanceResolver, AssistanceService],
})
export class AssistanceModule {}
