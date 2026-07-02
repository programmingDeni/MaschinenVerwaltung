import { CrudFindManyArgs, CrudModel } from '@/core/CrudModel';
import {
  CreateMachineDto,
  createMachineResource,
  Machine,
  UpdateMachineDto,
} from './machine';

class InMemoryMachineModel implements CrudModel<
  Machine,
  Machine['id'],
  CreateMachineDto,
  UpdateMachineDto,
  CrudFindManyArgs<Partial<Machine>>
> {
  private machines = new Map<string, Machine>();
  private nextId = 1;

  async findMany(
    args?: CrudFindManyArgs<Partial<Machine>>,
  ): Promise<Machine[]> {
    let machines = Array.from(this.machines.values());

    if (args?.where) {
      machines = machines.filter((machine) =>
        Object.entries(args.where ?? {}).every(
          ([key, value]) => machine[key as keyof Machine] === value,
        ),
      );
    }

    return machines.slice(args?.skip ?? 0, args?.take);
  }

  async findUnique(args: { where: { id: string } }): Promise<Machine | null> {
    return this.machines.get(args.where.id) ?? null;
  }

  async create(args: { data: CreateMachineDto }): Promise<Machine> {
    const machine = {
      id: String(this.nextId++),
      ...args.data,
    };

    this.machines.set(machine.id, machine);

    return machine;
  }

  async update(args: {
    where: { id: string };
    data: UpdateMachineDto;
  }): Promise<Machine> {
    const machine = this.machines.get(args.where.id);

    if (!machine) {
      throw new Error('Machine not found');
    }

    const updatedMachine = {
      ...machine,
      ...args.data,
    };

    this.machines.set(updatedMachine.id, updatedMachine);

    return updatedMachine;
  }

  async delete(args: { where: { id: string } }): Promise<Machine> {
    const machine = this.machines.get(args.where.id);

    if (!machine) {
      throw new Error('Machine not found');
    }

    this.machines.delete(args.where.id);

    return machine;
  }
}

describe('machine resource', () => {
  it('runs CRUD operations through the framework', async () => {
    const machine = createMachineResource(new InMemoryMachineModel());

    const createdMachine = await machine.service.create({
      name: 'CNC Fraese',
    });

    expect(createdMachine).toEqual({
      id: '1',
      name: 'CNC Fraese',
    });

    await expect(machine.service.findMany()).resolves.toEqual([createdMachine]);

    await expect(
      machine.service.findUnique(createdMachine.id),
    ).resolves.toEqual(createdMachine);

    const updatedMachine = await machine.service.update(createdMachine.id, {
      name: 'CNC Fraese 2',
    });

    expect(updatedMachine).toEqual({
      id: createdMachine.id,
      name: 'CNC Fraese 2',
    });

    await expect(machine.service.delete(createdMachine.id)).resolves.toEqual(
      updatedMachine,
    );

    await expect(machine.service.findUnique(createdMachine.id)).resolves.toBe(
      null,
    );
  });

  it('passes findMany args to the model', async () => {
    const machine = createMachineResource(new InMemoryMachineModel());

    await machine.service.create({ name: 'Drehbank' });
    await machine.service.create({ name: 'CNC Fraese' });

    await expect(
      machine.service.findMany({
        where: {
          name: 'CNC Fraese',
        },
      }),
    ).resolves.toEqual([
      {
        id: '2',
        name: 'CNC Fraese',
      },
    ]);
  });
});
