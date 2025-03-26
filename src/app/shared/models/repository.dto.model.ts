export interface RepositoryDto {
  id: number;
  name: string;
  created_at: string;
  owner: {
    avatar_url: string;
  };
}