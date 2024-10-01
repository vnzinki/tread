import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core'
import { TabService } from '../../service/tab/tab.service'

@Component({
  selector: 'app-related',
  standalone: true,
  imports: [],
  templateUrl: './related.component.html',
  styleUrl: './related.component.scss',
})
export class RelatedComponent {
  constructor(
    private tabSvc: TabService,
    private http: HttpClient,
  ) {}

  async getRelated(title: string) {
    // TODO: Implement Related features
  }
}
