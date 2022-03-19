import { EDIT_NODE, ADD_NODE, DELETE_NODE } from "../constant";

export interface INode {
  id: number;
  name: string;
  props: {
    money: number;
    car: number;
  };
  children?: Array<INode>;
  root?: boolean;
}
interface EditNodeAction {
  type: typeof EDIT_NODE;
  payload: {
    id: number;
    props: Partial<INode["props"]>;
  };
}
interface AddNodeAction {
  type: typeof ADD_NODE;
  payload: {
    id: number;
    data: any;
  };
}
interface DeleteNodeAction {
  type: typeof DELETE_NODE;
  payload: {
    id: number;
  };
}

type NodeAction = EditNodeAction | AddNodeAction | DeleteNodeAction;

export const createEditNodeAction: (
  payload: EditNodeAction["payload"]
) => EditNodeAction = (payload) => ({
  type: EDIT_NODE,
  payload,
});
export const createAddNodeAction: (
  payload: AddNodeAction["payload"]
) => AddNodeAction = (payload) => ({
  type: ADD_NODE,
  payload,
});
export const createDeleteNodeAction: (
  payload: DeleteNodeAction["payload"]
) => DeleteNodeAction = (payload) => ({
  type: DELETE_NODE,
  payload,
});

const defaultState: INode = {
  root: true,
  name: "boss",
  id: 1,
  props: {
    money: 100000,
    car: 5,
  },
  children: [
    {
      name: "leader1",
      id: 2,
      props: {
        money: 30000,
        car: 2,
      },
      children: [
        {
          name: "cpp",
          id: 4,
          props: {
            money: 10000,
            car: 0,
          },
          children: [
            {
              name: "wqj",
              id: 5,
              props: {
                money: 8000,
                car: 0,
              },
            },
          ],
        },
      ],
    },
    {
      name: "leader2",
      id: 3,
      props: {
        money: 20000,
        car: 2,
      },
      children: [],
    },
  ],
};

function replaceNode(node: INode, map: (node: INode) => INode): INode {
  const newNode = map(node);
  if (newNode !== node) return newNode;
  else {
    if (node.children) {
      for (const item of node.children) {
        const newItem = replaceNode(item, map);
        if (newItem !== item) {
          return {
            ...node,
            children: node.children?.map((i) =>
              i.id === item.id ? newItem : i
            ),
          };
        }
      }
      return node;
    }
  }
  return node;
}

function editById(
  state: INode,
  payload: {
    id: number;
    props: Partial<INode["props"]>;
  }
): INode {
  if (state.id === payload.id) {
    return { ...state, props: { ...state.props, ...payload.props } };
  } else {
    if (state.children) {
      for (let item of state.children) {
        const newItem = editById(item, payload);
        if (newItem !== item) {
          return {
            ...state,
            children: state.children.map((i) => (i === item ? newItem : i)),
          };
        }
      }
      return state;
    }
    return state;
  }
}

function edit(
  state: INode,
  payload: {
    id: number;
    props: Partial<INode["props"]>;
  }
): INode {
  if (state.id === payload.id) {
    return { ...state, props: { ...state.props, ...payload.props } };
  } else {
    if (state.children) {
      for (let item of state.children) {
        const newItem = edit(item, payload);
        if (newItem !== item) {
          return {
            ...state,
            children: state.children.map((i) => (i === item ? newItem : i)),
          };
        }
      }
      return state;
    }
  }
  return state;
}
function deleteNodeById(node: INode, id: number): INode | undefined {
  if (node.id === id) {
    if (node.root) return node;
    else {
      return undefined;
    }
  } else {
    if (node.children) {
      for (const item of node.children) {
        const newItem = deleteNodeById(item, id);
        if (!newItem) {
          return {
            ...node,
            children: node.children.filter((i) => i !== item),
          };
        } else if (newItem !== item) {
          return {
            ...node,
            children: node.children.map((i) => (i === item ? newItem : i)),
          };
        }
      }
      return node;
    }
    return node;
  }
}
function addNodeByParentId(node: INode, id: number, data: any): INode {
  if (node.id === id) {
    return {
      ...node,
      children: [
        ...(node.children || []),
        { id: new Date().getTime(), ...data },
      ],
    };
  } else {
    if (node.children) {
      for (const item of node.children) {
        const newItem = addNodeByParentId(item, id, data);
        if (newItem !== item) {
          return {
            ...node,
            children: node.children.map((i) => (i === item ? newItem : i)),
          };
        }
      }
      return node;
    }
  }
  return node;
}

export const treeReducer = (state = defaultState, action: NodeAction) => {
  switch (action.type) {
    case EDIT_NODE:
      console.log("action", action);
      // return replaceNode(state, (node) => {
      //   if (node.id === action.payload.id) {
      //     return {
      //       ...node,
      //       props: {
      //         ...node.props,
      //         ...action.payload.props,
      //       },
      //     };
      //   }
      //   return node;
      // });
      return editById(state, action.payload);
    case ADD_NODE:
      return addNodeByParentId(state, action.payload.id, action.payload.data);
    case DELETE_NODE:
      return deleteNodeById(state, action.payload.id);
    default:
      return state;
  }
};
