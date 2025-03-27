export interface RepositoryDto {
  id: number;
  name: string;
  created_at: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}