/**
 * Wrapper for the environment variables to ensure type checking.
 * All variables and methods should be `static readonly`.
 */
export abstract class ENV {
  public static readonly baseURL: string = "https://api.github.com"
}
