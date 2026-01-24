import { Button } from "@juscash/ui";

function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            @juscash/ui
          </h1>
          <p className="text-lg text-muted-foreground">
            Uma biblioteca de componentes React acessível e customizável.
          </p>
        </header>

        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Button Component
            </h2>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="neutral">Neutral</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="s">Small</Button>
                <Button size="m">Medium</Button>
                <Button size="xs">Extra Small</Button>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button variant="primary" loading={true}>
                  Loading Primary
                </Button>
                <Button variant="secondary" loading={true}>
                  Loading Secondary
                </Button>
                <Button variant="neutral" loading={true}>
                  Loading Neutral
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
