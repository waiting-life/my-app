import { Button } from 'antd'
import { useState, useEffect } from 'react'
import { ItemDataType } from '../ComRenderList'

const ComRenderItem = ({ title, content, count }: ItemDataType) => {
  const [x, setX] = useState(0)
  let y = 0

  useEffect(() => {
    console.log(x)
  }, [x])
  y++

  return (
    <div>
      <div>{title}</div>
      <div>{content}</div>
      <div>{count}</div>
      <Button
        onClick={() => {
          setX(x + 1)
        }}
      >
        点击改变x
      </Button>
    </div>
  )
}

export default ComRenderItem
