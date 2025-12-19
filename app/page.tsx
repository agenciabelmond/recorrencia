import { SubscriptionPlans } from "@/components/subscription-plans"
import { PaymentForm } from "@/components/payment-form"
import { CreditCard, Shield, Clock, CheckCircle2 } from "lucide-react"

export default function RecurrencePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-secondary">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <CreditCard className="h-5 w-5 text-secondary" />
              </div>
              <h1 className="text-xl font-bold text-secondary-foreground">Belmond Pay</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-border bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-secondary-foreground md:text-5xl">
              Escolha Seu <span className="text-primary">Grupo Exclusivo</span>
            </h2>
            <p className="text-lg text-secondary-foreground/70 leading-relaxed">
              Acesso a networking profissional, consultoria especializada e ferramentas para impulsionar seu negócio
              odontológico
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="border-b border-border bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-sm">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">Pagamento Seguro</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">Cancele Quando Quiser</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">Suporte Especializado</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Planos lado a lado */}
          <div className="mb-12">
            <div className="mb-8 text-center">
              <h3 className="text-3xl font-bold mb-2">Planos de Assinatura</h3>
              <p className="text-muted-foreground">Escolha o grupo que melhor se adapta às suas necessidades</p>
            </div>
            <SubscriptionPlans />
          </div>

          {/* Formulário de pagamento */}
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 text-center">
              <h3 className="text-3xl font-bold mb-2">Informações de Pagamento</h3>
              <p className="text-muted-foreground">Complete seus dados para finalizar a assinatura</p>
            </div>
            <PaymentForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4 text-center text-sm text-secondary-foreground/60">
            <p>© 2025 Belmond Pay. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Suporte
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
