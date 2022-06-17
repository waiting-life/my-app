import { useState, useEffect, useRef, useCallback } from 'react'
import { Button } from 'antd'
// import TestCom from '../../components/TestCom'
import PrettierEslintTest from '../../components/PrettierEslintTest'
// import { Count } from './Count'
import { TsCom } from './TsCom'


// let count;
// function _useState(defaultValue) {
//   return count ? count : count = defaultValue
// }

// function A() {
//   const [count, setCount] = useState(0)
//   const [visible, setVisible] = useState(false)

//   return { count, setCount, visible, setVisible}
// }

// [0, false, { current: 0 }, [0], [fn, 'xx']]
// [100, false, { current: 0 }, [0], [fn, 'xx']]
const Test = () => { 
  //所以不能在条件判断里面写hook
  const [count, setCount] = useState(0)    
 
  // const [visible, setVisible] = useState(false)

  // const { count, setCount, visible, setVisible } = A()

  // 不同函数作用域可以引用到同一个值，又不希望这个值的更新触发渲染，这个时候就可以使用useRef
  const myRef = useRef(count)
  myRef.current = count

  useEffect(() => {
    setTimeout(() => {
      console.log(count)
    }, 3000);
  }, [count])

  const fn = useCallback(() => {
    console.log(myRef.current)
  }, [])

  // const handleVisible = () => {
  //   setVisible(!visible)
  // }
  return (
    <div>
      <h2>Test page</h2>
      {/* <TestCom /> */}
      <div>直接输出count:{count}</div>
      <div>将count赋值给ref.current: {myRef.current}</div>
      <Button onClick={() => setCount(count+1)} type="primary">点击count+1</Button>
      <Button onClick={() => myRef.current+=1 } type="primary">点击ref.current+1</Button>
      <Button onClick={fn}>输出</Button>
      {/* <Button onClick={handleVisible}>显示/隐藏Count组件</Button> */}
      {/* <Count visible={visible} count={count}/> */}
      <TsCom/>
      <PrettierEslintTest />
    </div>
  )
}
export default Test
