import { Component } from '@angular/core';

import { ResumeBuilderComponent } from './components';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [ResumeBuilderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
