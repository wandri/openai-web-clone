import {LineChartDatum} from "../../components/elements/chart/chart-bar-timeline/chart-bar-timeline.component";

function randomNumber(): number {
  return Math.random() > 0.9 ? Math.random() * 2 : 0.0;
}

export const setColor: (opacity: 1 | number) => Record<string, string> = (opacity: number) => ({
  "GPT-4 Turbo": `rgba(16,163,127,${opacity})`,
  "GPT-4": `rgba(22,100,81,${opacity})`,
  "GPT-3.5 Turbo": `rgba(54,208,218,${opacity})`,
  "Fine-tuning models": `rgba(108,212,104,${opacity})`,
  "Embedding models": `rgba(243,197,246,${opacity})`,
  "Base models": `rgba(183,110,189,${opacity})`,
  "Image models": `rgba(55,126,184,${opacity})`,
  "Audio models": `rgba(77,175,74,${opacity})`,
}) as const

export const barColor: Record<string, string> = {
  "GPT-4 Turbo": setColor(1)["GPT-4 Turbo"],
  "GPT-4": setColor(1)["GPT-4"],
  "GPT-3.5 Turbo": setColor(1)["GPT-3.5 Turbo"],
  "Fine-tuning models": setColor(1)["Fine-tuning models"],
  "Embedding models": setColor(1)["Embedding models"],
  "Base models": setColor(1)["Base models"],
  "Image models": setColor(1)["Image models"],
  "Audio models": setColor(1)["Audio models"],
} as const

export const lightBarColor: Record<string, string> = {
  "GPT-4 Turbo": setColor(0.5)["GPT-4 Turbo"],
  "GPT-4": setColor(0.5)["GPT-4"],
  "GPT-3.5 Turbo": setColor(0.5)["GPT-3.5 Turbo"],
  "Fine-tuning models": setColor(0.5)["Fine-tuning models"],
  "Embedding models": setColor(0.5)["Embedding models"],
  "Base models": setColor(0.5)["Base models"],
  "Image models": setColor(0.5)["Image models"],
  "Audio models": setColor(0.5)["Audio models"],
} as const

export const models: string[] = [
  "GPT-4 Turbo",
  "GPT-4",
  "GPT-3.5 Turbo",
  "Fine-tuning models",
  "Embedding models",
  "Base models",
  "Image models",
  "Audio models",
]

export function getUsageDemo(): LineChartDatum[] {
  return [
    {
      date: new Date(1698796800.0 * 1000),
      "GPT-4 Turbo": randomNumber(),
      "GPT-4": randomNumber(),
      "GPT-3.5 Turbo": randomNumber(),
      "Fine-tuning models": randomNumber(),
      "Embedding models": randomNumber(),
      "Base models": randomNumber(),
      "Image models": randomNumber(),
      "Audio models": randomNumber(),
    },
    {
      date: new Date(1698883200.0 * 1000),
      "GPT-4 Turbo": randomNumber(),
      "GPT-4": randomNumber(),
      "GPT-3.5 Turbo": randomNumber(),
      "Fine-tuning models": randomNumber(),
      "Embedding models": randomNumber(),
      "Base models": randomNumber(),
      "Image models": randomNumber(),
      "Audio models": randomNumber(),
    },
    {
      date: new Date(1698969600.0 * 1000),
      "GPT-4 Turbo": randomNumber(),
      "GPT-4": randomNumber(),
      "GPT-3.5 Turbo": randomNumber(),
      "Fine-tuning models": randomNumber(),
      "Embedding models": randomNumber(),
      "Base models": randomNumber(),
      "Image models": randomNumber(),
      "Audio models": randomNumber(),
    },
    {
      date: new Date(1699056000.0 * 1000),
      "GPT-4 Turbo": randomNumber(),
      "GPT-4": randomNumber(),
      "GPT-3.5 Turbo": randomNumber(),
      "Fine-tuning models": randomNumber(),
      "Embedding models": randomNumber(),
      "Base models": randomNumber(),
      "Image models": randomNumber(),
      "Audio models": randomNumber(),
    },
    {
      date: new Date(1699142400.0 * 1000),
      "GPT-4 Turbo": randomNumber(),
      "GPT-4": randomNumber(),
      "GPT-3.5 Turbo": randomNumber(),
      "Fine-tuning models": randomNumber(),
      "Embedding models": randomNumber(),
      "Base models": randomNumber(),
      "Image models": randomNumber(),
      "Audio models": randomNumber(),
    },
    {
      date: new Date(1699228800.0 * 1000),
      "GPT-4 Turbo": randomNumber(),
      "GPT-4": randomNumber(),
      "GPT-3.5 Turbo": randomNumber(),
      "Fine-tuning models": randomNumber(),
      "Embedding models": randomNumber(),
      "Base models": randomNumber(),
      "Image models": randomNumber(),
      "Audio models": randomNumber(),
    },
    {
      date: new Date(1699315200.0 * 1000),
      "GPT-4 Turbo": randomNumber(),
      "GPT-4": randomNumber(),
      "GPT-3.5 Turbo": randomNumber(),
      "Fine-tuning models": randomNumber(),
      "Embedding models": randomNumber(),
      "Base models": randomNumber(),
      "Image models": randomNumber(),
      "Audio models": randomNumber(),
    },
    {
      date: new Date(1699401600.0 * 1000),
      "GPT-4 Turbo": randomNumber(),
      "GPT-4": randomNumber(),
      "GPT-3.5 Turbo": randomNumber(),
      "Fine-tuning models": randomNumber(),
      "Embedding models": randomNumber(),
      "Base models": randomNumber(),
      "Image models": randomNumber(),
      "Audio models": randomNumber(),
    },
    {
      date: new Date(1699488000.0 * 1000),
      "GPT-4 Turbo": randomNumber(),
      "GPT-4": randomNumber(),
      "GPT-3.5 Turbo": randomNumber(),
      "Fine-tuning models": randomNumber(),
      "Embedding models": randomNumber(),
      "Base models": randomNumber(),
      "Image models": randomNumber(),
      "Audio models": randomNumber(),
    },
    {
      date: new Date(1699574400.0 * 1000),
      "GPT-4 Turbo": randomNumber(),
      "GPT-4": randomNumber(),
      "GPT-3.5 Turbo": randomNumber(),
      "Fine-tuning models": randomNumber(),
      "Embedding models": randomNumber(),
      "Base models": randomNumber(),
      "Image models": randomNumber(),
      "Audio models": randomNumber(),
    },
    {
      date: new Date(1699660800.0 * 1000),
      "GPT-4 Turbo": randomNumber(),
      "GPT-4": randomNumber(),
      "GPT-3.5 Turbo": randomNumber(),
      "Fine-tuning models": randomNumber(),
      "Embedding models": randomNumber(),
      "Base models": randomNumber(),
      "Image models": randomNumber(),
      "Audio models": randomNumber(),
    },
    {
      date: new Date(1699747200.0 * 1000),
      "GPT-4 Turbo": randomNumber(),
      "GPT-4": randomNumber(),
      "GPT-3.5 Turbo": randomNumber(),
      "Fine-tuning models": randomNumber(),
      "Embedding models": randomNumber(),
      "Base models": randomNumber(),
      "Image models": randomNumber(),
      "Audio models": randomNumber(),
    },
    {
      date: new Date(1699833600.0 * 1000),
      "GPT-4 Turbo": randomNumber(),
      "GPT-4": randomNumber(),
      "GPT-3.5 Turbo": randomNumber(),
      "Fine-tuning models": randomNumber(),
      "Embedding models": randomNumber(),
      "Base models": randomNumber(),
      "Image models": randomNumber(),
      "Audio models": randomNumber(),
    },
    {
      date: new Date(1699920000.0 * 1000),
      "GPT-4 Turbo": randomNumber(),
      "GPT-4": randomNumber(),
      "GPT-3.5 Turbo": randomNumber(),
      "Fine-tuning models": randomNumber(),
      "Embedding models": randomNumber(),
      "Base models": randomNumber(),
      "Image models": randomNumber(),
      "Audio models": randomNumber(),
    },
    {
      date: new Date(1700006400.0 * 1000),
      "GPT-4 Turbo": randomNumber(),
      "GPT-4": randomNumber(),
      "GPT-3.5 Turbo": randomNumber(),
      "Fine-tuning models": randomNumber(),
      "Embedding models": randomNumber(),
      "Base models": randomNumber(),
      "Image models": randomNumber(),
      "Audio models": randomNumber(),
    },
    {
      date: new Date(1700092800.0 * 1000),
      "GPT-4 Turbo": randomNumber(),
      "GPT-4": randomNumber(),
      "GPT-3.5 Turbo": randomNumber(),
      "Fine-tuning models": randomNumber(),
      "Embedding models": randomNumber(),
      "Base models": randomNumber(),
      "Image models": randomNumber(),
      "Audio models": randomNumber(),
    },
    {
      date: new Date(1700179200.0 * 1000),
      "GPT-4 Turbo": randomNumber(),
      "GPT-4": randomNumber(),
      "GPT-3.5 Turbo": randomNumber(),
      "Fine-tuning models": randomNumber(),
      "Embedding models": randomNumber(),
      "Base models": randomNumber(),
      "Image models": randomNumber(),
      "Audio models": randomNumber(),
    },
    {
      date: new Date(1700265600.0 * 1000),
      "GPT-4 Turbo": randomNumber(),
      "GPT-4": randomNumber(),
      "GPT-3.5 Turbo": randomNumber(),
      "Fine-tuning models": randomNumber(),
      "Embedding models": randomNumber(),
      "Base models": randomNumber(),
      "Image models": randomNumber(),
      "Audio models": randomNumber(),
    },
    {
      date: new Date(1700352000.0 * 1000),
      "GPT-4 Turbo": randomNumber(),
      "GPT-4": randomNumber(),
      "GPT-3.5 Turbo": randomNumber(),
      "Fine-tuning models": randomNumber(),
      "Embedding models": randomNumber(),
      "Base models": randomNumber(),
      "Image models": randomNumber(),
      "Audio models": randomNumber(),
    },
    {
      date: new Date(1700438400.0 * 1000),
      "GPT-4 Turbo": randomNumber(),
      "GPT-4": randomNumber(),
      "GPT-3.5 Turbo": randomNumber(),
      "Fine-tuning models": randomNumber(),
      "Embedding models": randomNumber(),
      "Base models": randomNumber(),
      "Image models": randomNumber(),
      "Audio models": randomNumber(),
    },
    {
      date: new Date(1700524800.0 * 1000),
      "GPT-4 Turbo": randomNumber(),
      "GPT-4": randomNumber(),
      "GPT-3.5 Turbo": randomNumber(),
      "Fine-tuning models": randomNumber(),
      "Embedding models": randomNumber(),
      "Base models": randomNumber(),
      "Image models": randomNumber(),
      "Audio models": randomNumber(),
    },
    {
      date: new Date(1700611200.0 * 1000),
      "GPT-4 Turbo": randomNumber(),
      "GPT-4": randomNumber(),
      "GPT-3.5 Turbo": randomNumber(),
      "Fine-tuning models": randomNumber(),
      "Embedding models": randomNumber(),
      "Base models": randomNumber(),
      "Image models": randomNumber(),
      "Audio models": randomNumber(),
    },
    {
      date: new Date(1700697600.0 * 1000),
      "GPT-4 Turbo": randomNumber(),
      "GPT-4": randomNumber(),
      "GPT-3.5 Turbo": randomNumber(),
      "Fine-tuning models": randomNumber(),
      "Embedding models": randomNumber(),
      "Base models": randomNumber(),
      "Image models": randomNumber(),
      "Audio models": randomNumber(),
    },
    {
      date: new Date(1700784000.0 * 1000),
      "GPT-4 Turbo": randomNumber(),
      "GPT-4": randomNumber(),
      "GPT-3.5 Turbo": randomNumber(),
      "Fine-tuning models": randomNumber(),
      "Embedding models": randomNumber(),
      "Base models": randomNumber(),
      "Image models": randomNumber(),
      "Audio models": randomNumber(),
    },
    {
      date: new Date(1700870400.0 * 1000),
      "GPT-4 Turbo": randomNumber(),
      "GPT-4": randomNumber(),
      "GPT-3.5 Turbo": randomNumber(),
      "Fine-tuning models": randomNumber(),
      "Embedding models": randomNumber(),
      "Base models": randomNumber(),
      "Image models": randomNumber(),
      "Audio models": randomNumber(),
    },
    {
      date: new Date(1700956800.0 * 1000),
      "GPT-4 Turbo": randomNumber(),
      "GPT-4": randomNumber(),
      "GPT-3.5 Turbo": randomNumber(),
      "Fine-tuning models": randomNumber(),
      "Embedding models": randomNumber(),
      "Base models": randomNumber(),
      "Image models": randomNumber(),
      "Audio models": randomNumber(),
    },
    {
      date: new Date(1701043200.0 * 1000),
      "GPT-4 Turbo": randomNumber(),
      "GPT-4": randomNumber(),
      "GPT-3.5 Turbo": randomNumber(),
      "Fine-tuning models": randomNumber(),
      "Embedding models": randomNumber(),
      "Base models": randomNumber(),
      "Image models": randomNumber(),
      "Audio models": randomNumber(),
    },
    {
      date: new Date(1701129600.0 * 1000),
      "GPT-4 Turbo": randomNumber(),
      "GPT-4": randomNumber(),
      "GPT-3.5 Turbo": randomNumber(),
      "Fine-tuning models": randomNumber(),
      "Embedding models": randomNumber(),
      "Base models": randomNumber(),
      "Image models": randomNumber(),
      "Audio models": randomNumber(),
    },
    {
      date: new Date(1701216000.0 * 1000),
      "GPT-4 Turbo": randomNumber(),
      "GPT-4": randomNumber(),
      "GPT-3.5 Turbo": randomNumber(),
      "Fine-tuning models": randomNumber(),
      "Embedding models": randomNumber(),
      "Base models": randomNumber(),
      "Image models": randomNumber(),
      "Audio models": randomNumber(),
    },
    {
      date: new Date(1701302400.0 * 1000),
      "GPT-4 Turbo": randomNumber(),
      "GPT-4": randomNumber(),
      "GPT-3.5 Turbo": randomNumber(),
      "Fine-tuning models": randomNumber(),
      "Embedding models": randomNumber(),
      "Base models": randomNumber(),
      "Image models": randomNumber(),
      "Audio models": randomNumber(),
    }
  ]
}
