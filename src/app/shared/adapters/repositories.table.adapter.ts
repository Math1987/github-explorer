import { RepositoryDto } from "../models/repository.dto.model"
import { RepositoryTableRow } from "../models/repository.table-row.model"

export const extractRepositoryRow = (repo: RepositoryDto): RepositoryTableRow => {
  return {
    name: repo.name,
    avatar: repo.owner.avatar_url,
    creationDate: new Date(repo.created_at)
  }
}