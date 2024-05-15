import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitiesModule } from './cities/cities.module';
import { CountriesModule } from './countries/countries.module';
import { LeadersModule } from './leaders/leaders.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from './countries/entities/country.entity';
import { Leader } from './leaders/entities/leader.entity';
import { City } from './cities/entities/city.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'typeormdb',
      entities: [Country,Leader,City],
      synchronize: true,

    }),
    CitiesModule,
    CountriesModule,
    LeadersModule,
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
