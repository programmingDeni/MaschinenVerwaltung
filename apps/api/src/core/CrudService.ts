import { CrudRepository } from './CrudRepository';
export class CrudService<
    TEntity,
    TId,
    TCreate,
    TUpdate
> {

    constructor(
        protected readonly repository:
            CrudRepository<
                TEntity,
                TId,
                TCreate,
                TUpdate
            >
    ) {}

    findMany() {
        return this.repository.findMany();
    }

    findUnique(id: TId) {
        return this.repository.findUnique(id);
    }

    create(dto: TCreate) {
        return this.repository.create(dto);
    }

    update(id: TId, dto: TUpdate) {
        return this.repository.update(id, dto);
    }

    delete(id: TId) {
        return this.repository.delete(id);
    }
}