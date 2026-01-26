import type { Meta, StoryObj } from "@storybook/react";

const DebugComponent = () => (
  <div className="p-8 space-y-4">
    <h2 className="text-2xl font-bold mb-8">Teste de Classes Typography</h2>

    <div className="space-y-2">
      <p className="font-bold">Teste 1: Classes text-heading-X funcionam?</p>
      <div className="text-heading-1">
        text-heading-1 - Deveria estar em 61px
      </div>
      <div className="text-heading-2">
        text-heading-2 - Deveria estar em 49px
      </div>
      <div className="text-heading-3">
        text-heading-3 - Deveria estar em 39px
      </div>
      <div className="text-body-1">text-body-1 - Deveria estar em 16px</div>
    </div>

    <div className="space-y-2 mt-8">
      <p className="font-bold">Teste 2: Classes text-neutral-X funcionam?</p>
      <div className="text-neutral-800">text-neutral-800 (#262626)</div>
      <div className="text-neutral-500">text-neutral-500 (#6d6d6e)</div>
      <div className="text-neutral-400">text-neutral-400 (#a3a3a3)</div>
    </div>

    <div className="space-y-2 mt-8">
      <p className="font-bold">Teste 3: Combinando as duas:</p>
      <div className="text-heading-1 text-neutral-800">
        heading-1 + neutral-800 - 61px em #262626
      </div>
      <div className="text-heading-2 text-neutral-500">
        heading-2 + neutral-500 - 49px em #6d6d6e
      </div>
      <div className="text-body-1 text-neutral-400">
        body-1 + neutral-400 - 16px em #a3a3a3
      </div>
    </div>
  </div>
);

const meta = {
  title: "Debug/Typography Test",
  component: DebugComponent,
} satisfies Meta<typeof DebugComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DebugClasses: Story = {};
