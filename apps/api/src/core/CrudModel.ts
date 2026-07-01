export interface CrudModel<
    TEntity,
    TId,
    TCreate,
    TUpdate,
> {
    findMany(): Promise<TEntity[]>;

    findUnique(args: {
        where: { id: TId };
    }): Promise<TEntity | null>;

    create(args: {
        data: TCreate;
    }): Promise<TEntity>;

    update(args: {
        where: { id: TId };
        data: TUpdate;
    }): Promise<TEntity>;

    delete(args: {
        where: { id: TId };
    }): Promise<TEntity>;
}