import { CrudModel } from './CrudModel';

export interface Resource<
    TEntity,
    TId,
    TCreate,
    TUpdate
> {

    name: string;

    model: CrudModel<
        TEntity,
        TId,
        TCreate,
        TUpdate
    >;

    createSchema: unknown;

    updateSchema: unknown;

}