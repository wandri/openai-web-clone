import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MenuButtonComponent} from "../menu-button/menu-button.component";

export interface Menu {
  name: string,
  path: string[],
  children?: Menu[]
}

@Component({
  selector: 'app-docs-overview',
  standalone: true,
  imports: [
    MenuButtonComponent
  ],
  templateUrl: './docs-overview.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocsOverviewComponent {
  readonly navigations: { menu: Menu[], title: string }[] = [{
    title: 'Get started', menu: [
      {name: 'Overview', path: ['/', 'docs', 'overview']},
      {name: 'Introduction', path: ['/', 'docs', 'introduction']},
      {name: 'Quickstart', path: ['/', 'docs', 'quickstart']},
      {
        name: 'Models', path: ['/', 'docs', 'models'], children: [
          {name: 'overview', path: ['/', 'docs', 'models', 'overview']},
          {name: 'Model updates', path: ['/', 'docs', 'models', 'continuous-model-upgrades']},
          {name: 'GPT-4', path: ['/', 'docs', 'models', 'gpt-4-and-gpt-4-turbo']},
          {name: 'GPT-3.5', path: ['/', 'docs', 'models', 'gpt-3-5']},
          {name: 'DALL·E', path: ['/', 'docs', 'models', 'dall-e']},
          {name: 'TTS', path: ['/', 'docs', 'models', 'tts']},
          {name: 'Whisper', path: ['/', 'docs', 'models', 'whisper']},
          {name: 'Embeddings', path: ['/', 'docs', 'models', 'embeddings']},
          {name: 'Moderation', path: ['/', 'docs', 'models', 'moderation']},
          {name: 'GPT-3', path: ['/', 'docs', 'models', 'gpt-3']},
          {name: 'How we use your data', path: ['/', 'docs', 'models', 'how-we-use-your-data']},
          {name: 'Endpoint compatibility', path: ['/', 'docs', 'models', 'model-endpoint-compatibility']},
        ]
      },
      {name: 'Tutorials', path: ['/', 'docs', 'tutorials']},
      {name: 'Changelog', path: ['/', 'docs', 'changelog']},
    ]
  },
    {
      title: 'Capabilities', menu: [
        {name: 'Text generation', path: ['/', 'docs', 'guides', 'text-generation']},
        {name: 'Function calling', path: ['/', 'docs', 'guides', 'function-calling']},
        {name: 'Embedding', path: ['/', 'docs', 'guides', 'embeddings']},
        {name: 'Fine-tuning', path: ['/', 'docs', 'guides', 'fine-tuning']},
        {name: 'Image generation', path: ['/', 'docs', 'guides', 'images']},
        {name: 'Vision', path: ['/', 'docs', 'guides', 'vision']},
        {name: 'Text-to-speech', path: ['/', 'docs', 'guides', 'text-to-speech']},
        {name: 'Speech-to-text', path: ['/', 'docs', 'guides', 'speech-to-text']},
        {name: 'Moderation', path: ['/', 'docs', 'guides', 'moderation']},
      ]
    },
    {
      title: 'assistants', menu: [
        {name: 'Overview', path: ['/', 'docs', 'assistants', 'overview']},
        {name: 'How Assistants work', path: ['/', 'docs', 'guides', 'how-it-works']},
        {name: 'Tools', path: ['/', 'docs', 'guides', 'tools']},
      ]
    },
    {
      title: 'Guides', menu: [
        {name: 'Prompt engineering', path: ['/', 'docs', 'guides', 'prompt-engineering']},
        {name: 'Production best practices', path: ['/', 'docs', 'guides', 'production-best-practices']},
        {name: 'Safety best practices', path: ['/', 'docs', 'guides', 'safety-best-practices']},
      ]
    },
  ]
}
