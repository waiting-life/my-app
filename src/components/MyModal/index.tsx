import { createPortal } from 'react-dom'

const element = document.querySelector('#root') as Element
const MyModal = ({visible} : {visible: boolean}) => {
  if(!visible) return null
  return createPortal(
    <div style={{ background: 'pink', width: 400, height: 400}}>
        <h2>modal</h2>
    </div>,
    element
  )
}
export default  MyModal
