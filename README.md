# GithubExplorer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## GitHub Explorer

A modern Angular application that allows users to explore GitHub repositories and their commit histories with powerful filtering capabilities.

## Overview

GitHub Explorer is built with Angular 19 using a zoneless approach for improved performance. The application enables users to search and explore GitHub repositories with advanced filtering options and examine their commit histories.

## Features

- **Repository Search with Advanced Filters:**
  - Search by repository name
  - Filter by minimum number of stars
  - Filter by number of issues
  - Filter by programming language
  - View detailed repository information

- **Commit History Explorer:**
  - View commit history for selected repositories
  - Search through commits
  - Detailed commit information display

## Technical Details

- **Framework:** Angular 19 (zoneless approach)
- **Design Patterns:**
  - Adapter pattern for data transformation
  - Standard Angular patterns and best practices

## Configuration

The application uses YAML files stored in the assets directory for programming language configurations. Please note that the language list is hardcoded and may need periodic updates to stay current with GitHub's supported languages.

## Usage

1. **Repository Search:**
   - Enter a repository name in the search field
   - Use the available filters to refine your search:
     - Set minimum stars count
     - Specify issue count threshold
     - Select programming language from the dropdown
   - Click search to view matching repositories

2. **Exploring Commits:**
   - Click on a repository from the search results
   - View the commit history
   - Use the commit search feature to find specific commits

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
