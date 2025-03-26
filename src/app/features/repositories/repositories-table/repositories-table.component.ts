import { DEFAULT_PAGE_SIZE, TableInterface } from '@/app/shared/interfaces/table.interface';
import { RepositoryTableRow } from '@/app/shared/models/repository.table-row.model';
import { Component, signal } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-repositories-table',
  standalone: true,
  imports: [],
  templateUrl: './repositories-table.component.html',
  styleUrl: './repositories-table.component.scss'
})
export class RepositoriesTableComponent implements TableInterface<RepositoryTableRow[]> {

  list = signal([]);
  pageSize = signal(DEFAULT_PAGE_SIZE);
  totalRows = signal(0);
  columns = ['name', 'avatar', 'creationDate'];
  currentPage = signal(0);

  loadData(page = 0): void {}

  onPageChange(pageEvent: PageEvent): void {}

}
