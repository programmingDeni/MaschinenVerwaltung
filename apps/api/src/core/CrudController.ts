import { CrudFindManyArgs, CrudWhereUnique } from './CrudModel';
import { CrudService } from './CrudService';

export abstract class CrudController<
  TEntity,
  TId,
  TCreate,
  TUpdate,
  TFindManyArgs = CrudFindManyArgs,
  TWhereUnique = CrudWhereUnique<TId>,
> {
  constructor(
    protected readonly service: CrudService<
      TEntity,
      TId,
      TCreate,
      TUpdate,
      TFindManyArgs,
      TWhereUnique
    >,
  ) {}

  findMany(args?: TFindManyArgs): Promise<TEntity[]> {
    return this.service.findMany(args);
  }

  findUnique(id: TId): Promise<TEntity | null> {
    return this.service.findUnique(id);
  }

  create(dto: TCreate): Promise<TEntity> {
    return this.service.create(dto);
  }

  update(id: TId, dto: TUpdate): Promise<TEntity> {
    return this.service.update(id, dto);
  }

  delete(id: TId): Promise<TEntity> {
    return this.service.delete(id);
  }
}
