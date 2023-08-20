export function copyToClipboard(variable: string) {
  const toastStore = useToastStore();
  const input = document.createElement("input");
  input.setAttribute("value", variable);
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  toastStore.showSuccessToast({ title: "global.copied_to_clipboard", duration: 1500 });
}
