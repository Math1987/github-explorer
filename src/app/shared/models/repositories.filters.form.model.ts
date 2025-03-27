import { FormControl } from "@angular/forms";

export interface RepositoriesFiltersForm {
  name: FormControl<string | null>;
  language: FormControl<string | null>;
  stars: FormControl<number | null>;
  issue: FormControl<string | null>;
}