import { CrudRepository } from './CrudRepository';

export class CrudService<
  TEntity,
  TId,
  TCreate,
  TUpdate,
  TFindManyArgs,
  TWhereUnique,
> {
  constructor(
    protected readonly repository: CrudRepository<
      TEntity,
      TId,
      TCreate,
      TUpdate,
      TFindManyArgs,
      TWhereUnique
    >,
  ) {}

  findMany(args?: TFindManyArgs): Promise<TEntity[]> {
    return this.repository.findMany(args);
  }

  findUnique(id: TId): Promise<TEntity | null> {
    return this.repository.findUnique(id);
  }

  create(dto: TCreate): Promise<TEntity> {
    return this.repository.create(dto);
  }

  update(id: TId, dto: TUpdate): Promise<TEntity> {
    return this.repository.update(id, dto);
  }

  delete(id: TId): Promise<TEntity> {
    return this.repository.delete(id);
  }
}
