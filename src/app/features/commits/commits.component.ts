import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrl: './commits.component.scss',
  standalone: false
})
export class CommitsComponent {
  owner: string = '';
  repo: string = '';
  search = signal<string>('');

  constructor(private route: ActivatedRoute, ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.owner = params['owner'];
      this.repo = params['repo'];
    });
  }

  filter(filters: any){
    this.search.set(filters);
  }
}
