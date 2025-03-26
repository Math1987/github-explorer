import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GithubService } from './shared/services/github.service';
import { CodeLanguagesService } from './shared/services/code-languages.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
  providers: [
    GithubService,
    CodeLanguagesService
  ],
})
export class AppComponent {}
