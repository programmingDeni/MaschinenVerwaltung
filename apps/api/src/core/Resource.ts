import { CrudFindManyArgs, CrudModel, CrudWhereUnique } from './CrudModel';

export interface ResourceSchema<TValue> {
  parse(data: unknown): TValue;
}

export interface Resource<
  TEntity,
  TId,
  TCreate,
  TUpdate,
  TFindManyArgs = CrudFindManyArgs,
  TWhereUnique = CrudWhereUnique<TId>,
> {
  name: string;

  model: CrudModel<TEntity, TId, TCreate, TUpdate, TFindManyArgs, TWhereUnique>;

  createSchema?: ResourceSchema<TCreate>;

  updateSchema?: ResourceSchema<TUpdate>;
}
