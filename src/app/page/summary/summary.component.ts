import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  WritableSignal,
} from '@angular/core'
import { RouterLink } from '@angular/router'
import { Readability } from '@mozilla/readability'
import { TTSPlayerComponent } from '../../block/tts-player/tts-player.component'
import { SummaryProvider } from '../../service/config/config.interface'
import { ConfigService } from '../../service/config/config.service'
import { SummaryService } from '../../service/summary/summary.service'
import { TabService } from '../../service/tab/tab.service'

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [RouterLink, TTSPlayerComponent],
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

  async summaryGenerate(provider: SummaryProvider) {
    this.closeDropdown()
    this.generatingSummary = true
    this.generatedSummary$.set('')
    this.configSvc.showToast('loading', 'Generating summary...')

    const tabData = await this.tabService.getCurrentTabContent()
    if (!tabData?.html) {
      this.configSvc.showToast('error', 'Failed to get tab content', 3000)
      return
    }

    const tabContent = new Readability(
      new DOMParser().parseFromString(tabData.html, 'text/html'),
    ).parse()

    if (
      !tabContent ||
      tabContent.textContent.includes('protected by reCAPTCHA')
    ) {
      this.configSvc.showToast(
        'error',
        'This webpage is preventing content retrieval. Please try again.',
        3000,
      )
      return
    }

    try {
      await this.summarySvc.getSummary(provider, tabContent.textContent)
      this.configSvc.killToast()
    } catch (error) {
      if (error instanceof Error) {
        this.configSvc.showToast('error', error.message, 3000)
      } else {
        this.configSvc.showToast('error', 'Failed to generate summary', 3000)
      }
    }

    this.generatingSummary = false
  }

  availableProvider() {
    return this.configSvc
      .availableProviders()
      .filter(
        (provider) => provider !== this.configSvc.getAll().defaultProvider,
      ) as SummaryProvider[]
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen
  }

  closeDropdown() {
    this.dropdownOpen = false
  }
}
