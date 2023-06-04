import { useEffect, useState } from "react"
import { useParams } from "react-router";
import {format} from "date-fns"

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    console.log(id);
    fetch(`http://localhost:4000/post/${id}`)
      .then(response => {
        response.json().then(postInfo => {
          setPostInfo(postInfo)
        })
      })
  }, [])

  if (!postInfo) return ''
  return (
    <div className="post-page">
      <h1>{postInfo.title}</h1>
      <time>{format(new Date(postInfo.createdAt), 'd MMM, yyyy HH:mm')}</time>
      <div className="author">by @{postInfo.author.username}</div>
      <div className="image">
        <img src={`http://localhost:4000/${postInfo.cover}`} alt="" />
      </div>
      <div className="content" dangerouslySetInnerHTML={{ __html: postInfo.content }}></div>
    </div>
  )
}