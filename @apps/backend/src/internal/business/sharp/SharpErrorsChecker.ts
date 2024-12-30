export class SharpErrorsChecker {
  public static isColorParsingError(err: unknown): boolean {
    const message = 'Unable to parse color from string'
    return err instanceof Error && err.message.startsWith(message)
  }
}
