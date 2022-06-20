import { useRef, forwardRef } from 'react'
import { Button } from 'antd'
import FancyInput from '../fancy/FancyInput'

export default function ReactForwardRef() {
  // FancyInput
  const inputRef=  useRef<any>(null)
  const handleFocus = () => {
    inputRef?.current.focus()
  }
  // FancyButton
  const btnRef = useRef<any>(null)
  const handleBtn = () => {
    console.log(btnRef.current)
  }
  return (
    <div>ReactForwardRef
        {/* React.forwardRef结合useImperativeHandle使用 */}
        <FancyInput ref={inputRef}/>
        <Button onClick={handleFocus}>点击获取input焦点</Button>

        {/* 转发refs到dom组件 */}
        <FancyButton ref={btnRef}/>
        <Button onClick={handleBtn}>通过ref获取元素</Button>

        {/* 在高阶组件中转发refs */}

    </div>
  )
}

const FancyButton = forwardRef((props, ref: any) => {
    return <button ref={ref}>按钮</button>
})




