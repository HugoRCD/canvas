export type Question = {
  title: string
  answer: string
}

export type Faq = {
  title: string
  questions: Question[]
}
