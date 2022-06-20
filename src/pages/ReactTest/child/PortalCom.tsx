import { Button } from 'antd'
import { useState } from 'react'
import MyModal from '../../../components/MyModal'

export default function PortalCom() {
  const [visible, setVisible] = useState(false)
  return (
    <div>
        <h2>Portal</h2>
        <Button onClick={() => setVisible(true)}>打开MyModal</Button>
        <MyModal visible={visible}/>
    </div>
  )
}
