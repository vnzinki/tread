import { Component } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { availableOptions, Config } from '../../service/config/config.interface'
import { ConfigService } from '../../service/config/config.service'

@Component({
  selector: 'app-config',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
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
    console.log(this.config)
    this.configSvc.save(this.config)
  }
}
