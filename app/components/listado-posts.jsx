import CardPost from "./cardpost"

const ListadoPosts = ({posts,cantidad}) => {
  const postsPrincipal = posts.slice(0,cantidad===0?posts.length:cantidad)
  return (
    <>
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {
          postsPrincipal.length && (
            <div className="posts-grid">
              {
                postsPrincipal.map(post =>(
                  <CardPost key={post?.id} post={post?.attributes}/>
                ))
              }
            </div>
          )
        }
      </div>
    </>
  )
}

export default ListadoPosts