import { useSelector } from "react-redux";
import { flattenTree } from "../../App";

export function useFlattenedTree() {
  return useSelector((state: any) => {
    return Array.from(flattenTree(state.tree));
  });
}
export function useNode(id: number) {
  return useFlattenedTree().find((item: any) => item.id === id);
}
