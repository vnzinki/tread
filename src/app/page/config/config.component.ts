import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Config, providers } from '../../service/config/config.interface';

@Component({
  selector: 'app-config',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './config.component.html',
  styleUrl: './config.component.scss',
})
export class ConfigComponent {
  configForm: FormGroup;
  providers = providers;

  constructor(private fb: FormBuilder) {
    this.configForm = this.fb.group({
      provider: ['openai', Validators.required], // Default to 'openai'
      openai: this.fb.group({
        model: ['', Validators.required],
        api_key: ['', Validators.required],
      }),
      groq: this.fb.group({
        model: ['', Validators.required],
        api_key: ['', Validators.required],
      }),
      gemini: this.fb.group({
        model: ['', Validators.required],
        api_key: ['', Validators.required],
      }),
    });
  }

  ngOnInit(): void {
    // Watch for changes on the provider field
    this.configForm
      .get('provider')
      ?.valueChanges.subscribe((selectedProvider: string) => {
        this.updateValidators(selectedProvider);
      });

    // Set validators for the default provider ('openai')
    this.updateValidators('groq');
  }

  updateValidators(provider: string): void {
    const providersGroup = ['openai', 'groq', 'gemini'];

    providersGroup.forEach((p) => {
      const formGroup = this.configForm.get(p);
      if (p === provider) {
        formGroup?.get('model')?.setValidators([Validators.required]);
        formGroup?.get('api_key')?.setValidators([Validators.required]);
      } else {
        formGroup?.get('model')?.clearValidators();
        formGroup?.get('api_key')?.clearValidators();
      }
      formGroup?.get('model')?.updateValueAndValidity();
      formGroup?.get('api_key')?.updateValueAndValidity();
    });
  }

  onSubmit(): void {
    if (this.configForm.valid) {
      const config: Config = this.configForm.value;
      console.log('Updated Config:', config);
      // Save or use the config object here
    }
  }
}
