import { CrudService } from "@/core/CrudService";
import { Injectable } from "@nestjs/common";

import { CreateMachineDto, UpdateMachineDto } from "./dto.machine";
import { Machine } from "./model.machine";
import {MachineRepository} from "./repository.machine"

@Injectable()
export class MachineService extends CrudService<
  Machine,
  string,
  CreateMachineDto,
  UpdateMachineDto
  >{
    constructor(repository: MachineRepository){
      super(repository);
    }
  }