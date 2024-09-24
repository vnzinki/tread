import { Component } from '@angular/core';
import { ConfigComponent } from '../config/config.component';
import { QaComponent } from '../qa/qa.component';
import { SummaryComponent } from '../summary/summary.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SummaryComponent, QaComponent, ConfigComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  activeTab: string = 'summary';
}
