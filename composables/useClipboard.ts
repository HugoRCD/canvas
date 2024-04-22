export function copyToClipboard(variable: string) {
  const input = document.createElement('input')
  input.setAttribute('value', variable)
  document.body.appendChild(input)
  input.select()
  document.execCommand('copy')
  document.body.removeChild(input)
}
