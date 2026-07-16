import { CrudController } from "@/core/CrudController";
import { Controller } from "@nestjs/common";
import { Machine } from "./model.machine";
import { CreateMachineDto, UpdateMachineDto } from "./dto.machine";
import { MachineService } from "./service.machine";

@Controller("machines")
export class MachineController extends CrudController<
  Machine,
  string,
  CreateMachineDto,
  UpdateMachineDto
>{
  constructor(machineService: MachineService){
    super(machineService);
  }
}