import { Component, inject, Input } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-higher-education',
  templateUrl: './higher-education.component.html',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInputModule,
    MatButton,
    MatIconButton,
    MatIcon,
  ],
  styleUrl: './higher-education.component.scss'
})
export class HigherEducationComponent {
  @Input()
  formGroup!: FormGroup;

  private readonly _fb = inject(FormBuilder);

  get educationDetails(): FormArray {
    return this.formGroup.get('higherEducationDetails') as FormArray;
  }

  createEducation(): FormGroup {
    return this._fb.group({
      institution: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      degree: ['', Validators.required],
    });
  }

  addInstitution(): void {
    this.educationDetails.push(this.createEducation());
  }

  removeInstitution(index: number): void {
    if (this.educationDetails.length > 1) {
      this.educationDetails.removeAt(index);
    }
  }
}
