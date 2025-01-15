"use client"

import { type FC, type ReactNode, Component } from "react"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex min-h-[400px] w-full items-center justify-center">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-surface dark:text-light mb-2">
                Something went wrong
              </h2>
              <p className="text-surface/80 dark:text-light/80">
                Please try refreshing the page
              </p>
            </div>
          </div>
        )
      )
    }

    return this.props.children
  }
} 