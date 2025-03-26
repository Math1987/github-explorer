import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, of, take, tap } from "rxjs";
import * as jsyaml from 'js-yaml';

@Injectable({
  providedIn: 'root'
})
export class CodeLanguagesService {

  codeLanguages: any[] = [];

  constructor(private http: HttpClient) {}

  getCodeLanguages(): Observable<string[]>{
    if (this.codeLanguages.length) {
      return of(this.codeLanguages);
    } else {
      return this.loadAndGetCodeLanguages();
    }
  }

  private loadAndGetCodeLanguages(): Observable<any> {
    return this.fetchCodeLanguages().pipe(
      take(1),
      map(codeLanguagesJson => Object.keys(codeLanguagesJson)),
      tap(codeLanguages => this.codeLanguages = codeLanguages)
    );
  }

  /**
   * Get all available programming languages from GitHub's linguist repository
   * @returns Observable of the raw content of languages.yml file
   */
  private fetchCodeLanguages(): Observable<any> {
    return this.http
      .get('/assets/code-languages.yml', { responseType: 'text' })
      .pipe(
        map((data: string) => jsyaml.load(data))
      );
  }
}