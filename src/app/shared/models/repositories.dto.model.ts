import { RepositoryDto } from "@/app/shared/models/repository.dto.model";

export interface RepositoriesDto {
  total_count: number;
  items: RepositoryDto[]
}