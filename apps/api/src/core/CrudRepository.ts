import { CrudModel } from './CrudModel';
export class CrudRepository<
    TEntity,
    TId,
    TCreate,
    TUpdate
> {

    constructor(
        protected readonly model: CrudModel<
            TEntity,
            TId,
            TCreate,
            TUpdate
        >
    ) {}

    findMany() {}

    findUnique(id: TId) {}

    create(dto: TCreate) {}

    update(id: TId, dto: TUpdate) {}

    delete(id: TId) {}
}