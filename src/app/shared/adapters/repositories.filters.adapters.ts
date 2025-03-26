import { RepositoriesFilters } from "../models/repositories.filters.model"

type PartialRepositoriesFilters = {
  [P in keyof RepositoriesFilters]: RepositoriesFilters[P] | undefined | null
};

export const extractFilters = (filters: PartialRepositoriesFilters): RepositoriesFilters => {
  return {
    name: filters.name || '',
    language: filters.language || '',
    stars: filters.stars || 0
  }
}