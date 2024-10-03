import { Component } from '@angular/core'

interface FAQ {
  question: string
  answer: string | string[]
  isChecklist: boolean
  isOpen: boolean
}

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {
  faqs: FAQ[] = [
    {
      question: 'What is T.read?',
      answer: [
        'I love reading and believe in maximizing the use of free APIs to enhance the efficiency and convenience of my reading experience. Happy reading!',
      ],
      isChecklist: false,
      isOpen: false,
    },
    {
      question: 'Which model should I select?',
      answer: [
        'In my experience, Gemini (free) and OpenAI (paid) currently provide the best results. However, feel free to explore other available options.',
      ],
      isChecklist: false,
      isOpen: false,
    },
    {
      question: 'How can I get Gemini key?',
      answer: [
        'Create new account at <a class="font-bold" href="https://ai.google.dev/aistudio" target="_blank"><span class="material-symbols-outlined text-sm">open_in_new</span>Google AI Studio</a>',
        'Go to <a class="font-bold" href="https://aistudio.google.com/app/apikey" target="_blank"><span class="material-symbols-outlined text-sm">open_in_new</span>Get API key</a> page.',
        'Click <span class="rounded-md border bg-gray-100 px-[0.25rem] py-[0.15rem] font-mono">Create API key</span> button to generate key.',
      ],
      isChecklist: true,
      isOpen: false,
    },
    {
      question: 'How can I get Groq key?',
      answer: [
        'Create new account at <a class="font-bold" href="https://console.groq.com/login" target="_blank"><span class="material-symbols-outlined text-sm">open_in_new</span> Groq Console</a>',
        'Go to <a class="font-bold" href="https://console.groq.com/keys" target="_blank"><span class="material-symbols-outlined text-sm">open_in_new</span>API Keys</a> page.',
        'Click <span class="rounded-md border bg-gray-100 px-[0.25rem] py-[0.15rem] font-mono">Create API key</span> button to generate key.',
      ],
      isChecklist: true,
      isOpen: false,
    },
    {
      question: 'How can I get OpenAI key?',
      answer: [
        'Create new account at <a class="font-bold" href="https://platform.openai.com/signup" target="_blank"><span class="material-symbols-outlined text-sm">open_in_new</span>OpenAI Platform</a>',
        'Go to <a class="font-bold" href="https://platform.openai.com/api-keys" target="_blank"><span class="material-symbols-outlined text-sm">open_in_new</span>API Keys</a> page.',
        'Click <span class="rounded-md border bg-gray-100 px-[0.25rem] py-[0.15rem] font-mono">Create new secret key</span> button to generate key.',
      ],
      isChecklist: true,
      isOpen: false,
    },
    {
      question: 'How can I get HuggingFace key?',
      answer: [
        'Create new account at <a class="font-bold" href="https://huggingface.co/join" target="_blank"><span class="material-symbols-outlined text-sm">open_in_new</span>Hugging Face Hub</a>',
        'Go to <a class="font-bold" href="https://huggingface.co/settings/tokens" target="_blank"><span class="material-symbols-outlined text-sm">open_in_new</span>Access Tokens</a> page.',
        'Click <span class="rounded-md border bg-gray-100 px-[0.25rem] py-[0.15rem] font-mono">Create new token</span>.',
        'Select <span class="rounded-md border bg-gray-100 px-[0.25rem] py-[0.15rem] font-mono">Read</span> token type then click <span class="rounded-md border bg-gray-100 px-[0.25rem] py-[0.15rem] font-mono">Create token</span> button to generate key.',
      ],
      isChecklist: true,
      isOpen: false,
    },
    {
      question: 'What is translate feature?',
      answer:
        'This feature attempts to translate the summary content into your preferred language. You can change your language settings on the configuration page. Note that some models do not support translation yet, so results may vary.',
      isChecklist: false,
      isOpen: false,
    },
    {
      question: 'Can not generate summary on some page. Is it broken ?',
      answer:
        'Some sites have strict security policies to protect their content. I will make every effort to retrieve this content responsibly, as long as it is already visible to you and complies with privacy policies, with your explicit consent.',
      isChecklist: false,
      isOpen: false,
    },
    {
      question: "What's next",
      answer: [
        'Add more free provider',
        'Add text to speech feature',
        'Add related articles feature',
      ],
      isChecklist: true,
      isOpen: false,
    },
  ]

  toggleQuestion(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen
    // Close other questions
    this.faqs.forEach((faq, i) => {
      if (i !== index) {
        faq.isOpen = false
      }
    })
  }
}
