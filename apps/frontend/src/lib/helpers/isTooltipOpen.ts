/**
 * Checks if the tooltip is open.
 * The function only handles cases where the tooltip should be closed.
 * Otherwise, the control over its state is given to default actions of the user
 * and the function returns {{ undefined }}.
 * @param content - tooltip content (title).
 * @param isParentDisabled - whether actions are disabled on the parent of the tooltip.
 */
export const isTooltipOpen = ({ content, isParentDisabled }: Parameters) => {
  if (!content) {
    return false
  }

  if (!isParentDisabled) return

  return false
}

interface Parameters {
  content: string | undefined
  isParentDisabled: boolean | undefined
}
