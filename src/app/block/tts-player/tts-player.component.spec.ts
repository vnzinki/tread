import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TTSPlayerComponent } from './tts-player.component'

describe('TtsPlayerComponent', () => {
  let component: TTSPlayerComponent
  let fixture: ComponentFixture<TTSPlayerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TTSPlayerComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(TTSPlayerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
