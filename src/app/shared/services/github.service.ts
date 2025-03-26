import { environment } from "@/environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RepositoriesDto } from "@/app/shared/models/repositories.dto.model";

const PER_PAGE_DEFAULT = 10;
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  apiUrl = environment.gitHubApiUrl;

  constructor(private http: HttpClient) { }

  /**
   * Search for repositories based on query parameters
   * @param query Search query string
   * @param page Page number
   * @param perPage Number of results per page
   */
  searchRepositories(
    query: string,
    page: number = 0,
    perPage: number = PER_PAGE_DEFAULT
  ): Observable<RepositoriesDto> {

    const params = new HttpParams()
      .set('q', query)
      .set('page', (page + 1).toString())
      .set('per_page', perPage.toString());

    return this.http.get<RepositoriesDto>(
      `${this.apiUrl}/search/repositories`,
      { params }
    );
  }

}