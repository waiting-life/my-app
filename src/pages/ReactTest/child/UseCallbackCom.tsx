import { Button, InputNumber } from 'antd'
import {useState, useCallback} from 'react'


export default function UseCallbackCom() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [sum, setSum] = useState(0)

  return (
    <div>
      <div>sum: {sum}</div>
      <InputNumber defaultValue={0} onChange={(value) => setA(value)} />
      <InputNumber defaultValue={0} onChange={(value) => setB(value)} />
      <Button onClick={useCallback(() => setSum(a+b), [a, b])}>相加</Button>
    </div>
  )
}
