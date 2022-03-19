import { useState } from "react";
import Other from "./pages/Other";
import Test from "./pages/Test";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Switch, Route } from "react-router-dom";
import { useSelector, useStore, useDispatch } from "react-redux";
import { INode } from "./store/reducers";
import { InputNumber } from "antd";
import { useFlattenedTree, useNode } from "./store/hooks";
import {
  createEditAction,
  createAddHobbyAction,
  createEditNodeAction,
  createDeleteNodeAction,
  createAddNodeAction,
} from "./store/reducers";

// function* flattenTree(tree: INode): any {
//   yield tree;
//   if (tree.children) {
//     for (const item of tree.children) {
//       yield* flattenTree(item);
//     }
//   }
// }

// function flattenTree2(tree: INode, result: INode[] = []) {
//   result.push(tree)
//   if(tree.children) {
//     for(const item of tree.children) {
//       flattenTree2(item, result)
//     }
//   }
//   return result
// }

export function* flattenTree(tree: INode): any {
  yield tree;
  if (tree.children) {
    for (const item of tree.children) {
      yield* flattenTree(item);
    }
  }
}

function flattenTree2(tree: INode, result: INode[] = []) {
  result.push(tree);
  if (tree.children) {
    for (const item of tree.children) {
      flattenTree2(item, result);
    }
  }
  return result;
}

function flattenTree3(tree: INode) {
  let result: INode[] = [];
  result.push(tree);
  if (tree.children) {
    for (const item of tree.children) {
      result.push(...flattenTree3(item));
    }
  }
  return result;
}

const App = () => {
  const [money, setMoney] = useState<number>(0);
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const arr = useFlattenedTree();

  // user
  const changeUser = () => {
    dispatch(createEditAction({ name: "www" }));
  };

  const addHobby = () => {
    dispatch(createAddHobbyAction(["study", "music"]));
  };

  // node
  const node = useNode(2);
  console.log(node, "node======");

  const changeMoney = (id: number, money: number) => {
    dispatch(
      createEditNodeAction({
        id,
        props: {
          money,
        },
      })
    );
  };

  const deleteNodeById = (id: number) => {
    dispatch(createDeleteNodeAction({ id }));
  };

  const addNode = (id: number) => {
    dispatch(
      createAddNodeAction({
        id,
        // data: { name: "leader3", props: { money: 30000, car: 1 } },
        data: { name: "www", props: { money: 8000, car: 0 } },
        // data: { name: "leader4", props: { money: 30000, car: 3 } },
      })
    );
  };
  return (
    <div className="App">
      <div>
        <h2>用户基本信息</h2>
        <div>
          <div>姓名: {user.name}</div>
          <div>年龄: {user.age}</div>
          <div>性别: {user.sex}</div>
          {user.hobbies.map((item: string) => (
            <div key={item}>{item}</div>
          ))}
        </div>
        <button onClick={changeUser}>修改用户基本信息</button>
        <button onClick={addHobby}>添加爱好</button>
      </div>
      <div>
        <h2>信息展示</h2>
        <button onClick={() => addNode(3)}>添加node</button>
        {arr.map((item: any) => (
          <div key={item.id}>
            姓名：{item.name}
            薪资：{item.props.money}
            <div style={{ display: "flex" }}>
              <InputNumber
                value={money}
                onChange={(value: any) => setMoney(value)}
              />
              <button onClick={() => changeMoney(item.id, money)}>
                修改薪资
              </button>
            </div>
            <button onClick={() => deleteNodeById(item.id)}>删除node</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
