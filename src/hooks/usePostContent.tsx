import {useState, useEffect} from "react"
import { useHistory } from "react-router"
import { IPostContent } from "../types/post"
import { ITreeItem } from "../types/requests"

export default function usePostContent(postUri: string) {
  const history = useHistory()
  if (postUri === undefined) {
    history.push('/404')
  }

  const [post, setPost] = useState<IPostContent>({title: "", img: '', author: '', tags: [], content: '', date: 0})

  useEffect(() => {
    const getData = async () => {
      const postRegExp = new RegExp(`articles/${postUri}/`, 'm')
      const tree: ITreeItem[] = 
        await fetch('https://api.github.com/repos/grnbows/markdown-github-blog-data/git/trees/main?recursive=1')
        .then(res => res.json())
        .then(data => data.tree)

      const postFiles: ITreeItem[] = tree
        .filter((item: ITreeItem) =>  postRegExp.test(item.path))
      
      if (!postFiles.length) history.push('/404')      

      const dataFileUrl: string = postFiles.filter(item => item.path.endsWith('/data.json'))[0]?.url
      const articleFileUrl: string = postFiles.filter(item => item.path.endsWith('/article.md'))[0]?.url

      const dataFileContent: object = 
        await fetch(dataFileUrl)
        .then(res => res.json())
        .then(data => JSON.parse(decodeURIComponent(escape(atob(data.content)))))
        .catch(() => history.push("/404"))

      const articleFileContent: string | void = 
        await fetch(articleFileUrl)
        .then(res => res.json())
        .then(data => decodeURIComponent(escape(atob(data.content))))
      
      setPost({...dataFileContent, content: articleFileContent } as IPostContent)
    }
    getData()
  }, [postUri])  

  return post
}
