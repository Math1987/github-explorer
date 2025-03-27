import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrl: './commits.component.scss',
  standalone: false
})
export class CommitsComponent {
  author: string = '';
  repo: string = '';
  search = signal<string>('');

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.author = params['author'];
      this.repo = params['repo'];
    });
  }

  filter(filters: any){
    this.search.set(filters);
  }
}
