const ComRenderItem = ({ title, content, count } : { title: string; content: string; count: number; }) => {
  return (
    <div>
        <div>{title}</div>
        <div>{content}</div>
        <div>{ count }</div>
    </div>
  )
}

export default ComRenderItem
