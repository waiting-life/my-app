import { useSelector } from "react-redux";
import { flattenTree } from "../../pages/ReduxTest";

export function useFlattenedTree() {
  return useSelector((state: any) => {
    return Array.from(flattenTree(state.node));
  });
}
export function useNode(id: number) {
  return useFlattenedTree().find((item: any) => item.id === id);
}
