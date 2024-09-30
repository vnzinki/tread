import { Component, Signal } from '@angular/core'
import { ConfigService } from '../../service/config/config.service'
import { Toast } from './toast.interface'

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class ToastComponent {
  toast$: Signal<Toast>

  constructor(private configSvc: ConfigService) {
    this.toast$ = configSvc.toast$
  }
}
