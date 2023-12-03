import { Module } from '@nestjs/common';
import { InscriptionService } from './inscription.service';
import { InscriptionResolver } from './inscription.resolver';

@Module({
  providers: [InscriptionResolver, InscriptionService],
})
export class InscriptionModule {}
