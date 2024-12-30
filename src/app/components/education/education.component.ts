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
import {MatCheckbox} from '@angular/material/checkbox';

@Component({
  standalone: true,
  selector: 'app-education',
  templateUrl: './education.component.html',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInputModule,
    MatButton,
    MatIconButton,
    MatIcon,
    MatCheckbox
  ],
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  @Input()
  formGroup!: FormGroup;

  private readonly _fb = inject(FormBuilder);

  get educationDetails(): FormArray {
    return this.formGroup.get('educationDetails') as FormArray;
  }

  createEducation(): FormGroup {
    return this._fb.group({
      institution: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
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
