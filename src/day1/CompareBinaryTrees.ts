export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
  //checking to see if we have made to both subtrees where we can no longer recurse further
  if (a === null && b === null){
    return true;
  }
  // One of us is null and the other isn't we have traverse to different structure
  if (a === null || b === null){
    return false;
  }
  // value check: 
  if (a.value !== b.value){
    return false;
  }

  return compare(a.left, b.left) && compare(a.right, b.right);
}