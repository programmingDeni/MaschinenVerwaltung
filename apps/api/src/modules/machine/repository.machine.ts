import { Injectable } from "@nestjs/common";
import {PrismaService} from "@/prisma/service.prisma"

import { Machine } from "./model.machine";
import { CrudRepository } from "@/core/CrudRepository";
import { CreateMachineDto, UpdateMachineDto } from "./dto.machine";


@Injectable()
export class MachineRepository extends CrudRepository<
  Machine,
  string,
  CreateMachineDto,
  UpdateMachineDto
  >{
    constructor(prisma: PrismaService){
      super(prisma.machine);
    }
  }