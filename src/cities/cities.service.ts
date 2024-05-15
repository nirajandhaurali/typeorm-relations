import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './entities/city.entity';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City)
    private readonly citiesRepository:Repository<City>
  ){}

  async create(createCityDto: CreateCityDto) {
   const city = this.citiesRepository.create(createCityDto);
   return await this.citiesRepository.save(city);
  }

  async findAll() {
    return await this.citiesRepository.find({
      relations: {
        country:true,
      }
    });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} city`;
  // }

  // update(id: number, updateCityDto: UpdateCityDto) {
  //   return `This action updates a #${id} city`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} city`;
  // }
}
