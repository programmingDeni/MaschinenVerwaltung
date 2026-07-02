export type CrudWhereUnique<TId> = {
  id: TId;
};

export type CrudFindManyArgs<TWhere = unknown, TOrderBy = unknown> = {
  where?: TWhere;
  orderBy?: TOrderBy;
  skip?: number;
  take?: number;
};

export interface CrudModel<
  TEntity,
  TId,
  TCreate,
  TUpdate,
  TFindManyArgs = CrudFindManyArgs,
  TWhereUnique = CrudWhereUnique<TId>,
> {
  findMany(args?: TFindManyArgs): Promise<TEntity[]>;

  findUnique(args: { where: TWhereUnique }): Promise<TEntity | null>;

  create(args: { data: TCreate }): Promise<TEntity>;

  update(args: { where: TWhereUnique; data: TUpdate }): Promise<TEntity>;

  delete(args: { where: TWhereUnique }): Promise<TEntity>;
}
