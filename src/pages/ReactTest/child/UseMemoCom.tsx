import {useState, useMemo} from 'react'
import {InputNumber } from 'antd'

export default function UseMemoCom() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  const memoized = useMemo(() => {
    return a+b
  }, [a])

  return (
    <div>
      <div>sum: {memoized}</div>
      <InputNumber defaultValue={0} onChange={(value) => setA(value)}/>
      <InputNumber defaultValue={0} onChange={(value) => setB(value)}/>
    </div>
  )
}
