export interface ErrorPageProps {
  error: Error & {
    digest?: string
  }
  reset: VoidFunction
}
