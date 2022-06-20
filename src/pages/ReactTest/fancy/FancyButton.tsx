import { forwardRef } from 'react'

const FancyButton = (props: any, ref: any) => {
  console.log(props)
  return (
    <div>FancyButton
        <button ref={ref}>按钮</button>
    </div>
  )
}

export default forwardRef(FancyButton)
