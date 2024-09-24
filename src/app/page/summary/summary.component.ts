import { Component } from '@angular/core';
import { SummaryService } from '../../service/summary/summary.service';
import { TabService } from '../../service/tab/tab.service';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
})
export class SummaryComponent {
  summaryLength: number = 50;
  summaryTone: string = 'neutral';
  generatedSummary: string = '';

  constructor(
    private tabService: TabService,
    private summarySvc: SummaryService
  ) {}

  async summaryGenerate() {
    this.generatedSummary = await this.summarySvc.getSummary(
      await this.tabService.getCurrentTabContent()
    );
  }
}
