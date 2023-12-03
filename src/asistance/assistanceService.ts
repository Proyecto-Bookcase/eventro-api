import { Injectable } from '@nestjs/common';
import { CreateAssistanceInput } from './dto/create-assistance.input';
import { UpdateAssistanceInput } from './dto/update-assistance.input';
import {PrismaClient} from "@prisma/client";
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class AssistanceService {

  constructor(private prisma: PrismaService) {}

  create(createAssistanceInput: CreateAssistanceInput) {
    return 'This action adds a new assistance';
  }

  findAll() {
    return `This action returns all assistance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assistance`;
  }

  update(id: number, updateAssistanceInput: UpdateAssistanceInput) {
    return `This action updates a #${id} assistance`;
  }

  remove(id: number) {
    return `This action removes a #${id} assistance`;
  }
}
