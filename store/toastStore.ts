import { defineStore } from "pinia";

type toastState = {
  show: boolean;
  title: string;
  message: string;
  type: "success" | "error" | "warning" | "info";
  info: string;
};

type toastDto = {
  title: string;
  message?: string;
  duration?: number;
  info?: string;
};

export const useToastStore = defineStore({
  id: "toast",
  state: (): toastState => ({
    show: false,
    title: "",
    message: "",
    type: "success",
    info: "",
  }),
  getters: {
    getShow(): boolean {
      return this.show;
    },
    getTitle(): string {
      return this.title;
    },
    getMessage(): string {
      return this.message;
    },
    getType(): "success" | "error" | "warning" | "info" {
      return this.type;
    },
    getInfos(): string {
      return this.info;
    },
  },
  actions: {
    showSuccessToast(toast: toastDto) {
      this.show = true;
      this.message = toast.message || "";
      this.title = toast.title;
      this.type = "success";
      this.info = toast.info || "";
    },
    showErrorToast(toast: toastDto) {
      this.show = true;
      this.message = toast.message || "";
      this.title = toast.title;
      this.type = "error";
      this.info = toast.info || "";
    },
    closeToast() {
      this.show = false;
    },
  },
});
