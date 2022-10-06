export function isStringBlank(title: string): boolean {
    if (title.trim().length === 0) {
      return true
    }

    return false;
}