import { CrudRepository } from './CrudRepository';
import { CrudService } from './CrudService';
import { Resource } from './Resource';
import { CrudFindManyArgs, CrudWhereUnique } from './CrudModel';

export type CreatedResource<
  TEntity,
  TId,
  TCreate,
  TUpdate,
  TFindManyArgs = CrudFindManyArgs,
  TWhereUnique = CrudWhereUnique<TId>,
> = Resource<TEntity, TId, TCreate, TUpdate, TFindManyArgs, TWhereUnique> & {
  repository: CrudRepository<
    TEntity,
    TId,
    TCreate,
    TUpdate,
    TFindManyArgs,
    TWhereUnique
  >;
  service: CrudService<
    TEntity,
    TId,
    TCreate,
    TUpdate,
    TFindManyArgs,
    TWhereUnique
  >;
};

export function createResource<
  TEntity,
  TId,
  TCreate,
  TUpdate,
  TFindManyArgs = CrudFindManyArgs,
  TWhereUnique = CrudWhereUnique<TId>,
>(
  resource: Resource<
    TEntity,
    TId,
    TCreate,
    TUpdate,
    TFindManyArgs,
    TWhereUnique
  >,
): CreatedResource<
  TEntity,
  TId,
  TCreate,
  TUpdate,
  TFindManyArgs,
  TWhereUnique
> {
  const repository = new CrudRepository<
    TEntity,
    TId,
    TCreate,
    TUpdate,
    TFindManyArgs,
    TWhereUnique
  >(resource.model);

  const service = new CrudService<
    TEntity,
    TId,
    TCreate,
    TUpdate,
    TFindManyArgs,
    TWhereUnique
  >(repository);

  return {
    ...resource,
    repository,
    service,
  };
}
