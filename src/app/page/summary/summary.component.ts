import { Component } from '@angular/core'
import { Readability } from '@mozilla/readability'
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

    const tabHtml = await this.tabService.getCurrentTabContent()
    if (!tabHtml) return

    const parser = new DOMParser()
    const tabDoc = parser.parseFromString(tabHtml, 'text/html')

    const tabContent = new Readability(tabDoc).parse()
    if (!tabContent) return

    this.generatedSummary = await this.summarySvc.getSummary(
      tabContent.textContent,
    )
  }
}
