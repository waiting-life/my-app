import { ItemDataType } from '../ComRenderList'

const ComRenderItem = ({ title, content, count }: ItemDataType) => {
  return (
    <div>
      <div>{title}</div>
      <div>{content}</div>
      <div>{count}</div>
    </div>
  )
}

export default ComRenderItem
