export interface CommitDto {
  html_url: string
  commit: {
    author: {
      name: string
    },
    message: string,
  }
}
