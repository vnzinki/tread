import { TestBed } from '@angular/core/testing'

import { OpenAiService } from './openai.service'

describe('OpenapiService', () => {
  let service: OpenAiService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(OpenAiService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
