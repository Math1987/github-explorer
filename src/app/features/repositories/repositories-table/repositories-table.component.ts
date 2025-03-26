import { extractQuery } from '@/app/shared/adapters/repositories.filters.adapters';
import { extractRepositoryRow } from '@/app/shared/adapters/repositories.table.adapter';
import { DEFAULT_PAGE_SIZE, TableInterface } from '@/app/shared/interfaces/table.interface';
import { RepositoriesFilters } from '@/app/shared/models/repositories.filters.model';
import { RepositoryTableRow } from '@/app/shared/models/repository.table-row.model';
import { GithubService } from '@/app/shared/services/github.service';
import { CommonModule } from '@angular/common';
import { Component, effect, input, signal } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { take, tap } from 'rxjs';

@Component({
  selector: 'app-repositories-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  templateUrl: './repositories-table.component.html',
  styleUrl: './repositories-table.component.scss'
})
export class RepositoriesTableComponent implements TableInterface<RepositoryTableRow> {

  list = signal<RepositoryTableRow[]>([]);
  pageSize = signal(DEFAULT_PAGE_SIZE);
  totalRows = signal(0);
  columns = ['name', 'avatar', 'creationDate'];
  currentPage = signal(0);

  searchInitialized = false;
  search = input<RepositoriesFilters>({})

  constructor(private githubService: GithubService){
    this.initSearch();
  }

  loadData(page = 0): void {
    const query = extractQuery(this.search());
    this.githubService.searchRepositories(query, page, this.pageSize()).pipe(
      take(1),
      tap(githubRepos => {
        this.totalRows.set(githubRepos.total_count);
        this.currentPage.set(page);
        const repositories = githubRepos.items.map(githubRepo => extractRepositoryRow(githubRepo));
        this.list.set(repositories);
      })
    ).subscribe();
  }

  onPageChange(pageEvent: PageEvent): void {}

  private initSearch(){
    effect(() => {
      this.search();
      if(this.searchInitialized){
        this.loadData();
      }else {
        this.searchInitialized = true;
      }
    })
  }

}
