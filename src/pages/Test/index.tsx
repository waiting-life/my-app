import { Button } from 'antd'
import { useState } from 'react'

// [1]
const Test = () => {
  const [id, setId] = useState(1)
  return (
    <div>
        <Child key={id} />
        <Button onClick={() => setId(2)}>更新key</Button>
    </div>
  )
}

export default Test

// [100]
function Child() {
  const [count, setCount] = useState(100)

  return <div>
    {count}
    <Button onClick={() => setCount(count => count + 100)}>点击</Button>
    </div>
}