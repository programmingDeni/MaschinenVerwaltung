import { Module } from "@nestjs/common";
import { MachineController } from "./controller.machine";
import { MachineRepository } from "./repository.machine";
import { MachineService } from "./service.machine";

@Module({
  controllers: [MachineController],
  providers: [
    MachineRepository,
    MachineService,
  ],
})
export class MachineModule{}