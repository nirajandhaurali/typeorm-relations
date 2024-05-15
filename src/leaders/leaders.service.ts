import { Injectable } from '@nestjs/common';
import { CreateLeaderDto } from './dto/create-leader.dto';
import { UpdateLeaderDto } from './dto/update-leader.dto';
import { Leader } from './entities/leader.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LeadersService {
constructor(
  @InjectRepository(Leader)
  private readonly leadersRepository:Repository<Leader>
){}


  async create(createLeaderDto: CreateLeaderDto) {
    const city = this.leadersRepository.create(createLeaderDto);
    return await this.leadersRepository.save(city);
  }

  async findAll() {
    return await this.leadersRepository.find({
      relations:{
        country: true,
      }
    })
  }

  async findOne(id: number) {
    return await this.leadersRepository.findOne({where:{id}});
  }

  // update(id: number, updateLeaderDto: UpdateLeaderDto) {
  //   return `This action updates a #${id} leader`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} leader`;
  // }
}
