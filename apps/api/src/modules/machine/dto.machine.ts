export type CreateMachineDto = {
  name: string;
};

export type UpdateMachineDto = Partial<CreateMachineDto>;
