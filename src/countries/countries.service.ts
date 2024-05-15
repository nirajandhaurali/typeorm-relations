import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CountriesService {
constructor(
  @InjectRepository(Country)
  private readonly countriesRepository:Repository<Country>
){}


  async create(createCountryDto: CreateCountryDto) {
    const city = this.countriesRepository.create(createCountryDto);
    return await this.countriesRepository.save(city);
  }

  async findAll() {
    return await this.countriesRepository.find({
      relations:{
        leader: true,
        city:true,
      }
    })
  }
  findOne(id: number) {
    return `This action returns a #${id} country`;
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return `This action updates a #${id} country`;
  }

  remove(id: number) {
    return `This action removes a #${id} country`;
  }
}

