import { FormControl } from "@angular/forms";

export interface RepositoriesFiltersForm {
  name: FormControl<string>;
  language?: FormControl<string>;
  stars?: FormControl<number>;
}