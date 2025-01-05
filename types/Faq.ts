export type Question = {
  label: string
  content: string
}

export type Faq = {
  title: string
  questions: Question[]
}
