import {format} from "date-fns"
export default function Post({title,summary,cover,content,createdAt,author}){
  return(
    <div className="post">
        <div className="image">
          <img src="https://integralismo.org.br/wp-content/uploads/2022/09/Independencia-ou-morte-integralismo-768x411.jpeg" alt="" />
        </div>
        <div className="texts">
          <h2>{title}</h2>
          <p className="info">
            <a href="" className="author">{author.username}</a>
            <time>{format(new Date(createdAt),'d MMM, yyyy HH:mm')}</time>
          </p>
          <p className="summary">{summary}</p>
        </div>
      </div>
  )
}