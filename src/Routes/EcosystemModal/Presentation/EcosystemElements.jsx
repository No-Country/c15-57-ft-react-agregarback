function EcosystemElements ({ post }) {
  return (
    <div>
      <h1>
        {post.id} - {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  )
}

export default EcosystemElements
