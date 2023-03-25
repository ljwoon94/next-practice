'use client';

import { useEffect } from "react";
type Props={
    error : Error;
    reset : () => void ;
}
/**
 * Props에 에러를 받아오면 클라이언트에 에러가 나온다.
 */
export default function ProductsError({error,reset}:Props) {
    useEffect(()=>{
        console.log()
    }, [error])

  return (
    <div>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
    </div>
  );
}