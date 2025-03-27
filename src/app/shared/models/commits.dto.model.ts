import { CommitDto } from "./commit.dto.model";

export interface CommitsDto {
  total_count: number;
  items: CommitDto[];
}