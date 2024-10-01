import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  WritableSignal,
} from '@angular/core'
import { Readability } from '@mozilla/readability'
import { Provider } from '../../service/config/config.interface'
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
  dropdownOpen = false
  generatedSummary$: WritableSignal<string>
  generatingSummary = false

  @ViewChild('dropdownMenu')
  dropdownMenu!: ElementRef

  constructor(
    private renderer: Renderer2,
    private tabService: TabService,
    private summarySvc: SummaryService,
    public configSvc: ConfigService,
  ) {
    this.generatedSummary$ = this.summarySvc.generatedSummary$
    this.renderer.listen('window', 'click', (event) => {
      if (
        this.dropdownMenu &&
        !this.dropdownMenu.nativeElement.contains(event.target)
      ) {
        this.dropdownOpen = false
      }
    })
  }

  async summaryGenerate(provider: Provider) {
    this.closeDropdown()
    this.generatingSummary = true
    this.generatedSummary$.set('')
    this.configSvc.showToast('loading', 'Generating summary...')

    const tabHtml = (await this.tabService.getCurrentTabContent())?.html
    if (!tabHtml) {
      this.configSvc.showToast('error', 'Failed to get tab content', 3000)
      return
    }

    const parser = new DOMParser()
    const tabDoc = parser.parseFromString(tabHtml, 'text/html')

    const tabContent = new Readability(tabDoc).parse()
    if (!tabContent) {
      this.configSvc.showToast('error', 'Failed to parse tab content', 3000)
      return
    }

    await this.summarySvc.getSummary(provider, tabContent.textContent)

    this.generatingSummary = false
    this.configSvc.killToast()
  }

  availableProvider() {
    return this.configSvc
      .availableProviders()
      .filter(
        (provider) => provider !== this.configSvc.getAll().defaultProvider,
      ) as Provider[]
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen
  }

  closeDropdown() {
    this.dropdownOpen = false
  }
}
