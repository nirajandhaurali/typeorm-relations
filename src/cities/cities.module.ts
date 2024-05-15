import { Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CitiesController } from './cities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from 'src/countries/entities/country.entity';
import { City } from './entities/city.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Country,City])],
  controllers: [CitiesController],
  providers: [CitiesService],
})
export class CitiesModule {}
