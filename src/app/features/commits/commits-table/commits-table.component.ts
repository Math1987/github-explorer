import { extractQuery } from '@/app/shared/adapters/commits.filters.adapters';
import { extractCommitRow } from '@/app/shared/adapters/commits.table.adapter';
import { DEFAULT_PAGE_SIZE, TableInterface } from '@/app/shared/interfaces/table.interface';
import { CommitTableRow } from '@/app/shared/models/commit.table-row.model';
import { GithubService } from '@/app/shared/services/github.service';
import { CommonModule } from '@angular/common';
import { Component, effect, input, OnInit, signal } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { take, tap } from 'rxjs';

@Component({
  selector: 'app-commits-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  templateUrl: './commits-table.component.html',
  styleUrl: './commits-table.component.scss'
})
export class CommitsTableComponent implements TableInterface<CommitTableRow>, OnInit{

  owner = input.required<string>();
  repo = input.required<string>();

  list = signal<CommitTableRow[]>([]);
  pageSize = signal(DEFAULT_PAGE_SIZE);
  totalRows = signal(0);
  columns = ['author', 'url', 'message'];
  currentPage = signal(0);

  searchInitialized = false;
  search = input<string>('');

  constructor(
    private githubService: GithubService
  ) {
    this.initSearch();
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(page = 0): void {

    const query = extractQuery(this.search(), this.owner(), this.repo());
    this.githubService.searchCommits(query, page, this.pageSize()).pipe(
      take(1),
      tap(gitHubcommits => {
        this.totalRows.set(gitHubcommits.total_count);
        this.currentPage.set(page);
        const commits = gitHubcommits.items.map(githubCommit => extractCommitRow(githubCommit));
        this.list.set(commits);
      })
    ).subscribe();
  }

  onPageChange(pageEvent: PageEvent): void {
    this.pageSize.set(pageEvent.pageSize);
    this.loadData(pageEvent.pageIndex);
  }

  navigateToGithub(row: CommitTableRow): void {
    window.open(row.url, '_blank');
  }

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
