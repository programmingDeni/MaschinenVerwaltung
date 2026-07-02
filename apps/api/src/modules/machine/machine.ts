import { createResource } from '@/core/createResource';
import { CrudModel } from '@/core/CrudModel';

export type Machine = {
  id: string;
  name: string;
};

export type CreateMachineDto = {
  name: string;
};

export type UpdateMachineDto = Partial<CreateMachineDto>;

export function createMachineResource(
  model: CrudModel<Machine, Machine['id'], CreateMachineDto, UpdateMachineDto>,
) {
  return createResource({
    name: 'machines',
    model,
  });
}
