import type { Meta, StoryObj } from "@storybook/react"

import { Typography } from "./typography"

const meta = {
  title: "Foundations/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "heading-1",
        "heading-2",
        "heading-3",
        "heading-4",
        "heading-5",
        "heading-6",
        "body-1",
        "body-2",
        "caption-1",
      ],
    },
    tone: {
      control: "select",
      options: ["default", "soft", "muted", "disabled"],
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

const scaleRows = [
  {
    name: "Heading 1",
    token: "heading.1",
    variant: "heading-1",
    px: "61",
    rem: "3.813rem",
    lineHeight: "0px",
    description: "Titulos em destaques como heros.",
  },
  {
    name: "Heading 2",
    token: "heading.2",
    variant: "heading-2",
    px: "49",
    rem: "3.063rem",
    lineHeight: "0px",
    description: ".",
  },
  {
    name: "Heading 3",
    token: "heading.3",
    variant: "heading-3",
    px: "39",
    rem: "2.438rem",
    lineHeight: "0px",
    description: ".",
  },
  {
    name: "Heading 4",
    token: "heading.4",
    variant: "heading-4",
    px: "31",
    rem: "1.938rem",
    lineHeight: "0px",
    description: ".",
  },
  {
    name: "Heading 5",
    token: "heading.5",
    variant: "heading-5",
    px: "25",
    rem: "1.563rem",
    lineHeight: "0px",
    description: ".",
  },
  {
    name: "Heading 6",
    token: "heading.6",
    variant: "heading-6",
    px: "20",
    rem: "1.25rem",
    lineHeight: "0px",
    description: "Titulos em cards, telas.",
  },
  {
    name: "Body 1",
    token: "body.1",
    variant: "body-1",
    px: "16",
    rem: "1rem",
    lineHeight: "0px",
    description: "Textos longos em telas com mais espaco",
  },
  {
    name: "Body 2",
    token: "body.2",
    variant: "body-2",
    px: "13",
    rem: "0.813rem",
    lineHeight: "0px",
    description: "Textos longos em telas com menos espaco, tabelas",
  },
  {
    name: "Caption",
    token: "caption.1",
    variant: "caption-1",
    px: "10",
    rem: "0.625rem",
    lineHeight: "0px",
    description: "Descricoes complementares",
  },
]

export const Default: Story = {
  args: {
    variant: "body-1",
    children: "Texto de exemplo",
  },
}

export const Documentation: Story = {
  render: () => (
    <div className="flex flex-col gap-16 rounded-[32px] bg-[var(--neutral-50)]">
      <div className="flex flex-col gap-12 rounded-tl-[32px] rounded-tr-[32px] bg-[var(--neutral-700)] p-8 text-[var(--neutral-50)]">
        <div className="text-[48px] font-bold leading-[1.2]">Tipografia</div>
      </div>
      <div className="flex flex-col gap-16 p-16 pt-0">
        <section className="flex flex-col gap-2">
          <Typography variant="heading-2" className="font-bold text-[var(--neutral-500)]">
            Familia tipografica
          </Typography>
          <div className="flex flex-col gap-2 text-[var(--neutral-70)]">
            <Typography variant="heading-4" className="font-bold text-[var(--neutral-70)]">
              Inter
            </Typography>
            <Typography variant="body-1" className="text-[var(--neutral-70)]">
              Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
            </Typography>
            <Typography variant="body-1" className="text-[var(--neutral-70)]">
              1234567890 !@#$%¨&*()
            </Typography>
          </div>
        </section>
        <section className="flex flex-col gap-6">
          <Typography variant="heading-2" className="font-bold text-[var(--neutral-500)]">
            Escala
          </Typography>
          <div className="overflow-hidden rounded-[8px] border border-[var(--neutral-300)]">
            <div className="grid grid-cols-[1fr_200px_200px_200px_1fr]">
              {[
                "variant/token",
                "px",
                "rem",
                "line height",
                "description",
              ].map((label) => (
                <div
                  key={label}
                  className="border-b border-r border-[var(--neutral-300)] p-4 text-body-1 font-bold text-[var(--neutral-500)] last:border-r-0"
                >
                  {label}
                </div>
              ))}
            </div>
            {scaleRows.map((row) => (
              <div
                key={row.token}
                className="grid grid-cols-[1fr_200px_200px_200px_1fr] border-b border-[var(--neutral-300)] last:border-b-0"
              >
                <div className="flex flex-col gap-2 border-r border-[var(--neutral-300)] p-4">
                  <Typography variant={row.variant as never} className="text-black">
                    {row.name}
                  </Typography>
                  <div className="inline-flex items-center gap-1 rounded-[4px] bg-[var(--neutral-100)] px-1.5 py-0.5 text-body-2 font-mono font-bold text-[var(--neutral-500)]">
                    {row.token}
                  </div>
                </div>
                <div className="border-r border-[var(--neutral-300)] p-4 text-body-1 font-mono font-bold text-[var(--neutral-500)]">
                  {row.px}
                </div>
                <div className="border-r border-[var(--neutral-300)] p-4 text-body-1 font-mono font-bold text-[var(--neutral-500)]">
                  {row.rem}
                </div>
                <div className="border-r border-[var(--neutral-300)] p-4 text-body-1 font-mono font-bold text-[var(--neutral-500)]">
                  {row.lineHeight}
                </div>
                <div className="p-4 text-body-1 font-mono font-bold text-[var(--neutral-500)]">
                  {row.description}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  ),
}
