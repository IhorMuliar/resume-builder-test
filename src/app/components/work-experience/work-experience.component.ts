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
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInputModule,
    MatButton,
    MatIconButton,
    MatIcon,
  ],
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
  @Input()
  formGroup!: FormGroup;

  private readonly _fb = inject(FormBuilder);

  get workExperienceDetails(): FormArray {
    return this.formGroup.get('workExperienceDetails') as FormArray;
  }

  createWorkExperience(): FormGroup {
    return this._fb.group({
      workName: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      position: ['', Validators.required],
    });
  }

  addWorkExperience(): void {
    this.workExperienceDetails.push(this.createWorkExperience());
  }

  removeWorkExperience(index: number): void {
    if (this.workExperienceDetails.length > 1) {
      this.workExperienceDetails.removeAt(index);
    }
  }
}
