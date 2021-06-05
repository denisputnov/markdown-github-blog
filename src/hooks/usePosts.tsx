import { useState, useEffect } from "react"
import { IPost } from "../types/post"
import { ITreeItem } from "../types/requests"

interface INonParsedPost {
  img: string
  title: string
  author: string
  date: string
  tags: string[]
  preview: string
  url: string
}

interface IPostWithDate {
  img: string
  title: string
  author: string
  date: number
  tags: string[]
  preview: string
}

interface IDataFileUrls {
  url: string
  name: string | undefined
}

export default function usePosts(limit: number = 1000) {
  const [lastPosts, setLastPosts] = useState<Array<IPost>>([])

  useEffect(() => {
    const getNewData = async () => {
      const dataJsonRegExp = new RegExp('articles.*data.json', 'g')
      const urlRegExp = new RegExp('/(.*)+/', 'g')
      const tree: ITreeItem[] = await fetch('https://api.github.com/repos/grnbows/markdown-github-blog-data/git/trees/main?recursive=1')
        .then(res => res.json())
        .then(data => data.tree)

      const dataFileUrls: IDataFileUrls[] = tree
        .filter((item: ITreeItem) => dataJsonRegExp.test(item.path))
        .map((item: ITreeItem) => {
          return { url: item.url, name: item.path.match(urlRegExp)?.pop()?.slice(1, -1)}
        })

      const posts: INonParsedPost[] = await Promise.all(
        dataFileUrls.map(async (dataFile: IDataFileUrls) => await fetch(dataFile.url)
          .then(res => res.json())
          .then(data => {
            return {
              ...JSON.parse(decodeURIComponent(escape(atob(data.content)))),
              url: dataFile.name
            }
          })
        )
      )   
      
      const limitedPosts: IPost[] = posts
        .map((post: INonParsedPost) => {
          const values = post.date.split('-').map((value: string) => parseInt(value))
          const date = new Date(values[2], values[1], values[0])
          return { ...post, date: date.getTime() }
        })
        .sort((a: IPostWithDate, b: IPostWithDate) => a.date < b.date ? 1 : -1).slice(0, limit)
      
      setLastPosts(limitedPosts)
    }
    getNewData()
  }, [limit])

  return lastPosts
}