export class Contact {
  public _id?: number
  public name: string
  public email: string
  public content: string
}

export interface ContactLangText {
  labelName: string
  labelEmail: string
  labelContent: string
  errorName: string
  errorEmail: string
  errorContent: string
  placeholderName: string
  placeholderEmail: string
  placeholderContent: string
  buttonSubmit: string
  messageSubmited: string
}

export interface ContactLangTextMock {
  languages: ContactLangText
}