import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDivider} from '@angular/material/divider';

@Component({
  standalone: true,
  selector: 'app-result',
  templateUrl: './result.component.html',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInputModule,
    MatDivider,
  ],
  styleUrl: './result.component.scss'
})
export class ResultComponent {
  @Input()
  formGroup!: FormGroup;
}
