"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    id: "premium",
    name: "Grupo Premium",
    price: "R$ 97,00",
    period: "/mês",
    description: "Essencial para dentistas em crescimento",
    features: [
      "Análise de perfil",
      "Networking de dentistas",
      "Acompanhamento mensal de 3 dias",
      "Análise de redes sociais",
      "Consultoria Google Meu Negócio",
      "Enquete e dúvidas para reunião",
      "Treinamento da equipe comercial com 30% de desconto",
    ],
  },
  {
    id: "master",
    name: "Grupo Master",
    price: "R$ 197,90",
    period: "/mês",
    description: "Completo para profissionais que desejam excelência",
    popular: true,
    features: [
      "Tudo do Grupo Premium",
      "3 pessoas da sua equipe no grupo",
      "1 reunião a cada 15 dias",
      "Script de abordagens atrativas",
      "Dúvidas específicas no privado",
      "Ferramentas financeiras",
      "Processo de indicação",
      "Planilha de controle",
    ],
  },
]

export function SubscriptionPlans() {
  const [selectedPlan, setSelectedPlan] = useState("master")

  return (
    <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
      {plans.map((plan) => (
        <Card
          key={plan.id}
          className={cn(
            "relative cursor-pointer border-2 transition-all hover:shadow-lg",
            selectedPlan === plan.id
              ? "border-primary shadow-lg bg-primary/5 scale-105"
              : "border-border hover:border-primary/50",
          )}
          onClick={() => setSelectedPlan(plan.id)}
        >
          {plan.popular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="rounded-full bg-primary px-4 py-1 text-xs font-semibold text-secondary">Mais Popular</div>
            </div>
          )}
          <div className="p-6">
            <div className="mb-6 text-center border-b border-border pb-6">
              <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
              <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold text-primary">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span className="text-balance">{feature}</span>
                </li>
              ))}
            </ul>

            <div
              className={cn(
                "mt-6 flex items-center justify-center gap-2 rounded-lg border-2 py-3 transition-all",
                selectedPlan === plan.id ? "border-primary bg-primary/10 font-semibold" : "border-border",
              )}
            >
              <div
                className={cn(
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all",
                  selectedPlan === plan.id ? "border-primary bg-primary" : "border-muted-foreground/30",
                )}
              >
                {selectedPlan === plan.id && <div className="h-2.5 w-2.5 rounded-full bg-secondary" />}
              </div>
              <span className="text-sm">{selectedPlan === plan.id ? "Plano Selecionado" : "Selecionar Plano"}</span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
