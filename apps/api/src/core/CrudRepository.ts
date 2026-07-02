import { CrudModel, CrudFindManyArgs, CrudWhereUnique } from './CrudModel';

export class CrudRepository<
  TEntity,
  TId,
  TCreate,
  TUpdate,
  TFindManyArgs = CrudFindManyArgs,
  TWhereUnique = CrudWhereUnique<TId>,
> {
  constructor(
    protected readonly model: CrudModel<
      TEntity,
      TId,
      TCreate,
      TUpdate,
      TFindManyArgs,
      TWhereUnique
    >,
  ) {}

  findMany(args?: TFindManyArgs): Promise<TEntity[]> {
    return this.model.findMany(args);
  }

  findUnique(id: TId): Promise<TEntity | null> {
    return this.model.findUnique({
      where: this.createWhereUnique(id),
    });
  }

  create(dto: TCreate): Promise<TEntity> {
    return this.model.create({
      data: dto,
    });
  }

  update(id: TId, dto: TUpdate): Promise<TEntity> {
    return this.model.update({
      where: this.createWhereUnique(id),
      data: dto,
    });
  }

  delete(id: TId): Promise<TEntity> {
    return this.model.delete({
      where: this.createWhereUnique(id),
    });
  }

  private createWhereUnique(id: TId): TWhereUnique {
    return { id } as TWhereUnique;
  }
}
