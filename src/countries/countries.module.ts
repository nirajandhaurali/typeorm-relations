import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from './entities/country.entity';
import { Leader } from 'src/leaders/entities/leader.entity';
import { City } from 'src/cities/entities/city.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Country,Leader,City])],
  controllers: [CountriesController],
  providers: [CountriesService],
})
export class CountriesModule {}
