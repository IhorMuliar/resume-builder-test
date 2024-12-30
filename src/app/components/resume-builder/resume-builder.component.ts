import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule, Validators
} from '@angular/forms';

import { MatButton } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';

import { AboutComponent } from '../about/about.component';
import { EducationComponent } from '../education/education.component';
import {HigherEducationComponent} from '../higher-education/higher-education.component';
import {WorkExperienceComponent} from '../work-experience/work-experience.component';
import {ResultComponent} from '../result/result.component';

@Component({
  standalone: true,
  selector: 'app-resume-builder',
  templateUrl: './resume-builder.component.html',
  imports: [
    ReactiveFormsModule,
    MatStepperModule,
    MatButton,
    AboutComponent,
    EducationComponent,
    HigherEducationComponent,
    WorkExperienceComponent,
    ResultComponent
  ],
  styleUrl: './resume-builder.component.scss'
})
export class ResumeBuilderComponent implements OnInit {
  private readonly _fb = inject(FormBuilder);

  resultForm!: FormGroup;
  aboutFormGroup!: FormGroup;
  educationFormGroup!: FormGroup;
  higherEducationFormGroup!: FormGroup;
  workExperienceFormGroup!: FormGroup;

  higherEducationFlag = false;

  ngOnInit(): void {
    this.aboutFormGroup = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
    this.educationFormGroup = this._fb.group({
      educationDetails: this._fb.array([
        this._fb.group({
          institution: ['', Validators.required],
          startDate: ['', Validators.required],
          endDate: ['', Validators.required],
        })
      ]),
      higherEducation: [false]
    });
    this.higherEducationFormGroup = this._fb.group({
      higherEducationDetails: this._fb.array([
        this._fb.group({
          institution: ['', Validators.required],
          startDate: ['', Validators.required],
          endDate: ['', Validators.required],
          degree: ['', Validators.required],
        })
      ]),
    });
    this.workExperienceFormGroup = this._fb.group({
      workExperienceDetails: this._fb.array([
        this._fb.group({
          workName: ['', Validators.required],
          startDate: ['', Validators.required],
          endDate: ['', Validators.required],
          position: ['', Validators.required],
        })
      ]),
    });
    this.resultForm = this._fb.group({
      aboutMe: this.aboutFormGroup,
      education: this.educationFormGroup,
      higherEducation: this.higherEducationFormGroup,
      workExperience: this.workExperienceFormGroup,
    });

    this.educationFormGroup.get('higherEducation')!.valueChanges.subscribe((value) => {
        this.higherEducationFlag = value;
      }
    )
  }
}
