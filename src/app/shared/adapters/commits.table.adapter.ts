import { CommitDto } from "../models/commit.dto.model";

export const extractCommitRow = (githubData: CommitDto) => ({
  author: githubData.commit.author.name,
  url: githubData.html_url,
  message: githubData.commit.message
})