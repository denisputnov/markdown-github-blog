export interface IPostContent {
  img: string
  title: string
  author: string
  date: number | string
  tags: string[]
  content: string
}

export interface IPost {
  img: string
  title: string
  author: string
  date?: number
  tags: string[]
  preview: string
  url: string
}