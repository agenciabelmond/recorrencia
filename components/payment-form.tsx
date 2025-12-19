"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CreditCard, Lock } from "lucide-react"

export function PaymentForm() {
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsProcessing(false)
    alert("Assinatura confirmada com sucesso!")
  }

  return (
    <Card className="border-2 border-border bg-card">
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {/* Card Number */}
        <div className="space-y-2">
          <Label htmlFor="cardNumber" className="text-sm font-medium">
            Número do Cartão
          </Label>
          <div className="relative">
            <Input
              id="cardNumber"
              type="text"
              placeholder="0000 0000 0000 0000"
              maxLength={19}
              className="pr-10 bg-background"
              required
            />
            <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
        </div>

        {/* Cardholder Name */}
        <div className="space-y-2">
          <Label htmlFor="cardName" className="text-sm font-medium">
            Nome no Cartão
          </Label>
          <Input id="cardName" type="text" placeholder="João Silva" className="bg-background" required />
        </div>

        {/* Expiry and CVV */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="expiry" className="text-sm font-medium">
              Validade
            </Label>
            <Input id="expiry" type="text" placeholder="MM/AA" maxLength={5} className="bg-background" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cvv" className="text-sm font-medium">
              CVV
            </Label>
            <Input id="cvv" type="text" placeholder="123" maxLength={4} className="bg-background" required />
          </div>
        </div>

        {/* CPF */}
        <div className="space-y-2">
          <Label htmlFor="cpf" className="text-sm font-medium">
            CPF
          </Label>
          <Input id="cpf" type="text" placeholder="000.000.000-00" maxLength={14} className="bg-background" required />
        </div>

        {/* Security Notice */}
        <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-4">
          <Lock className="h-5 w-5 shrink-0 text-primary mt-0.5" />
          <div className="text-sm">
            <p className="font-medium mb-1">Seus dados estão seguros</p>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Utilizamos criptografia de nível bancário para proteger todas as suas informações de pagamento.
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isProcessing}
          className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold py-6 text-base"
        >
          {isProcessing ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Processando...
            </span>
          ) : (
            "Confirmar Assinatura"
          )}
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          Ao confirmar, você concorda com nossos{" "}
          <a href="#" className="text-primary hover:underline">
            Termos de Serviço
          </a>
        </p>
      </form>
    </Card>
  )
}
