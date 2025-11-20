"use client"

import type React from "react"

import { useState } from "react"
import { Loader2 } from "lucide-react"

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    goal: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const validateField = (name: string, value: string) => {
    const newErrors = { ...errors }

    if (name === "name") {
      if (!value.trim()) {
        newErrors.name = "Nome é obrigatório"
      } else {
        delete newErrors.name
      }
    }

    if (name === "email") {
      if (!value.trim()) {
        newErrors.email = "Email é obrigatório"
      } else if (!validateEmail(value)) {
        newErrors.email = "Email inválido"
      } else {
        delete newErrors.email
      }
    }

    if (name === "goal") {
      if (!value) {
        newErrors.goal = "Selecione um objetivo"
      } else {
        delete newErrors.goal
      }
    }

    setErrors(newErrors)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    validateField(name, value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate all fields
    validateField("name", formData.name)
    validateField("email", formData.email)
    validateField("goal", formData.goal)

    if (!formData.name || !formData.email || !formData.goal || !validateEmail(formData.email)) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Reset form
    setFormData({ name: "", email: "", goal: "" })

    // Hide success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000)
  }

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
              O Futuro do Trabalho Começa <span className="text-primary">Agora</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
              A automação e a IA estão transformando o mercado. Não fique para trás. Aprenda as habilidades que o futuro
              exige e garanta sua relevância profissional.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Cursos práticos focados em habilidades do futuro</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Orientação especializada para reconversão profissional</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Comunidade de profissionais em transformação</span>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div className="bg-card border border-border rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Comece Sua Transformação</h2>

            {isSuccess && (
              <div
                className="mb-6 p-4 bg-primary/10 border border-primary rounded-md text-primary"
                role="alert"
                aria-live="polite"
              >
                ✓ Cadastro realizado com sucesso! Em breve você receberá mais informações.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-4">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground text-base"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-destructive" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground text-base"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-destructive" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Goal Field */}
                <div>
                  <label htmlFor="goal" className="block text-sm font-medium mb-2 text-foreground">
                    Objetivo Profissional *
                  </label>
                  <select
                    id="goal"
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground text-base"
                    aria-invalid={!!errors.goal}
                    aria-describedby={errors.goal ? "goal-error" : undefined}
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="reskilling">Reconversão (Mudar de área)</option>
                    <option value="upskilling">Aprimoramento (Evoluir na área atual)</option>
                    <option value="first-job">Primeiro emprego em tech</option>
                    <option value="entrepreneurship">Empreendedorismo</option>
                  </select>
                  {errors.goal && (
                    <p id="goal-error" className="mt-1 text-sm text-destructive" role="alert">
                      {errors.goal}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-md font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-h-[44px]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    "Começar Agora"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}