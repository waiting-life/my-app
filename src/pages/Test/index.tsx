import { useState, useEffect, useRef, useCallback } from 'react'
import { Button } from 'antd'
// import TestCom from '../../components/TestCom'
import PrettierEslintTest from '../../components/PrettierEslintTest'
import { Count } from './Count'

const Test = () => {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(false)

  const myRef = useRef(count)
  myRef.current = count

  useEffect(() => {
    setTimeout(() => {
      console.log(count)
    }, 3000);
  }, [count])

  const handleCount = () => {
    setCount(count+10)
  }
  const fn = useCallback(() => {
    console.log(myRef.current)
  }, [])

  const handleVisible = () => {
    setVisible(!visible)
  }
  return (
    <div>
      <h2>Test page</h2>
      {/* <TestCom /> */}
      <Button onClick={handleCount} type="primary">点击</Button>
      <Button onClick={fn}>输出</Button>
      <Button onClick={handleVisible}>显示/隐藏Count组件</Button>
      <Count visible={visible} count={count}/>
      <PrettierEslintTest />
    </div>
  )
}
export default Test
