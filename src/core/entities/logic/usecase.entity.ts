import { Error } from "@core/entities/logic/error.entity";

type UsecaseWithData<
  Repository,
  Data,
> = {
  repository: Repository;
  data?: Data;
};

type UsecaseWithoutData<
  Repository,
> = {
  repository: Repository;
}

type UsecaseInput<
  Repository,
  Data = void,
> = Data extends void ? UsecaseWithoutData<Repository>
  : UsecaseWithData<Repository, Data>;

type UsecaseOutput<T = unknown> = Promise<{ data: T | null, error: Error | null }>;

export type { UsecaseInput, UsecaseOutput };
