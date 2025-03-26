import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CodeLanguagesMockEmptyService {

  constructor() { }

  getCodeLanguages(): Observable<string[]>{
    return of([])
  }

  fetchCodeLanguages(): Observable<any> {
    return of({})
  }

}