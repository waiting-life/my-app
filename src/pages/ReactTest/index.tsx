
import UseStateCom from "./child/UseStateCom"
import UseRefCom from "./child/UseRefCom"
import UseEffectCom from "./child/UseEffectCom"
import UseMemoCom from "./child/UseMemoCom"
import UseCallbackCom from "./child/UseCallbackCom"
import UseContextCom from "./child/UseContextCom"
import UseImperativeHandleCom from "./child/UseImperativeHandleCom"
import ReactForwardRef from "./child/ReactForwardRef"
import PortalCom from "./child/PortalCom"
import PageContainer from "../../components/PageContainer"

const ReactTest = () => {
  return (
    <PageContainer
      header={{
        title: 'React练习'
      }}>
      <h2>ReactTest</h2>
      <h3>useState: </h3>
      <UseStateCom/>
      <h3>useRef:</h3>
      <UseRefCom />
      <h3>useEffect</h3>
      <UseEffectCom/>
      <h3>useMemo</h3>
      <UseMemoCom />
      <h3>useCallback</h3>
      <UseCallbackCom/>
      <h3>useContext</h3>
      <UseContextCom/>
      <h3>useImperativeHandle</h3>
      <UseImperativeHandleCom/>
      <h3>React.forwardRef()</h3>
      <ReactForwardRef/>
      <h3>Portal</h3>
      <PortalCom/>
    </PageContainer>
  )
}

export default ReactTest
