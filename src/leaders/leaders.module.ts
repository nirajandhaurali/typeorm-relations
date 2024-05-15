import { Module } from '@nestjs/common';
import { LeadersService } from './leaders.service';
import { LeadersController } from './leaders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from 'src/countries/entities/country.entity';
import { Leader } from './entities/leader.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Country, Leader])],

  controllers: [LeadersController],
  providers: [LeadersService],
})
export class LeadersModule {}
