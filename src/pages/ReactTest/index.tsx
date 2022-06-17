
import UseStateCom from "./child/UseStateCom"
import UseRefCom from "./child/UseRefCom"
import UseEffectCom from "./child/UseEffectCom"
import UseMemoCom from "./child/UseMemoCom"
import UseCallbackCom from "./child/UseCallbackCom"
import UseContextCom from "./child/UseContextCom"
import UseImperativeHandleCom from "./child/UseImperativeHandleCom"

const ReactTest = () => {
  return (
    <div>
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
      <h4>useImperativeHandle</h4>
      <UseImperativeHandleCom/>
    </div>
  )
}

export default ReactTest
