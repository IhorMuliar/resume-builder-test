import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInputModule
  ],
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  @Input()
  formGroup!: FormGroup;

  hasError(controlName: string, errorName: string): boolean | undefined {
    const control = this.formGroup.get(controlName);

    return control?.hasError(errorName) && control?.touched;
  }
}
