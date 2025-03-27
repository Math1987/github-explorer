export interface CommitDto {
  commit: {
    author: {
      name: string
    },
    message: string,
    url: string
  }
}
