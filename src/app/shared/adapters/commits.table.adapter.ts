import { CommitDto } from "../models/commit.dto.model";

export const extractCommitRow = (githubData: CommitDto) => ({
  author: githubData.commit.author.name,
  url: githubData.commit.url,
  message: githubData.commit.message
})