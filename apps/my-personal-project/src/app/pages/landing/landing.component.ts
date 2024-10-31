import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@my-personal-project/ui';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './landing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {}
