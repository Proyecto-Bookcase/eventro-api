import { Module } from '@nestjs/common';
import { AsistanceService } from './asistance.service';
import { AsistanceResolver } from './asistance.resolver';

@Module({
  providers: [AsistanceResolver, AsistanceService],
})
export class AsistanceModule {}
