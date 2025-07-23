import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HeaderComponent } from './block/header/header.component'
import { ToastComponent } from './block/toast/toast.component'
import { TabService } from './service/tab/tab.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastComponent, HeaderComponent],
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
