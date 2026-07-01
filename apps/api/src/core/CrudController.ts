import {CrudService} from './CrudService';
export abstract class CrudController<
    TEntity,
    TId,
    TCreate,
    TUpdate
> {

    constructor(
        protected readonly service:
            CrudService<
                TEntity,
                TId,
                TCreate,
                TUpdate
            >
    ) {}

    findMany() {}

    findUnique() {}

    create() {}

    update() {}

    delete() {}
}