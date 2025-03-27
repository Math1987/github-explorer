import { RepositoriesFilters } from "../models/repositories.filters.model"

type PartialRepositoriesFilters = {
  [P in keyof RepositoriesFilters]: RepositoriesFilters[P] | undefined | null
};

export const extractFilters = (filters: PartialRepositoriesFilters): RepositoriesFilters => {
  return {
    name: filters.name || '',
    language: filters.language || '',
    stars: filters.stars || 0,
    issue: filters.issue || '',
  }
}

export const extractQuery = (filters: RepositoriesFilters) => {
  let query = filters.name??'';
  if(filters.language){
    query += ' language:' + filters.language;
  }
  if(filters.stars){
    query += ` stars:>=${filters.stars}`;
  }
  if(filters.issue){
    query += ' issue:' + filters.issue;
  }
  return query;
}