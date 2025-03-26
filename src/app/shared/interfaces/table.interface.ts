import { Directive, Signal } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";

export const DEFAULT_PAGE_SIZE = 10;

@Directive()
export abstract class TableInterface<T> {

  abstract list: Signal<T[]>
  abstract pageSize: Signal<number>
  abstract totalRows: Signal<number>
  abstract columns: string[]
  abstract currentPage: Signal<number>

  abstract loadData(page: number): void
  abstract onPageChange(pageEvent: PageEvent): void

}