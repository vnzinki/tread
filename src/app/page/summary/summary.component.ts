import { Component } from '@angular/core'
import { ConfigService } from '../../service/config/config.service'
import { SummaryService } from '../../service/summary/summary.service'
import { TabService } from '../../service/tab/tab.service'

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
})
export class SummaryComponent {
  generatedSummary: string = ''

  constructor(
    private tabService: TabService,
    private summarySvc: SummaryService,
    public configSvc: ConfigService,
  ) {}

  async summaryGenerate() {
    this.generatedSummary = ''
    this.generatedSummary = await this.summarySvc.getSummary(
      await this.tabService.getCurrentTabContent(),
    )
  }
}
