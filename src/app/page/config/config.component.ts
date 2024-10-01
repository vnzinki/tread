import { Component } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterLink } from '@angular/router'
import { availableOptions, Config } from '../../service/config/config.interface'
import { ConfigService } from '../../service/config/config.service'

@Component({
  selector: 'app-config',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './config.component.html',
  styleUrl: './config.component.scss',
})
export class ConfigComponent {
  public availableOptions = availableOptions
  public config: Config

  constructor(private configSvc: ConfigService) {
    this.config = this.configSvc.getAll()
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.configSvc.showToast('success', 'Config saved!', 3000)
    this.configSvc.save(this.config)
  }

  activeProvider() {
    return this.configSvc.availableProviders()
  }
}
