"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function OnboardingPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to home page where onboarding flow now lives
    router.replace("/")
  }, [router])

  return null
}
