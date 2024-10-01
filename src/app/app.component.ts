import { Component, OnInit } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { TabService } from './service/tab/tab.service'
import { ToastComponent } from './block/toast/toast.component'
import { HeaderComponent } from './block/header/header.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ToastComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'tread'
  constructor(private tabService: TabService) {}

  ngOnInit() {
    this.tabService.injectContentScript()
  }
}
