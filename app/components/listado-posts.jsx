import CardPost from "./cardpost"

const ListadoPosts = ({posts}) => {
  const postsPrincipal = posts.slice(0,3)
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