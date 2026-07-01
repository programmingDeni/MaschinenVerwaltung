import { CrudRepository } from "./CrudRepository";
import { CrudService } from "./CrudService";
import { Resource } from "./Resource";

export function createResource<
    TEntity,
    TId,
    TCreate,
    TUpdate
>(
    resource: Resource<
        TEntity,
        TId,
        TCreate,
        TUpdate
    >
) {
    const repository = new CrudRepository<
        TEntity,
        TId,
        TCreate,
        TUpdate
    >(resource.model);

    const service = new CrudService<
        TEntity,
        TId,
        TCreate,
        TUpdate
    >(repository);

    return {
        ...resource,
        repository,
        service,
    };
}