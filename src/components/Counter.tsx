// 클라이언트 컴포넌트란걸 알림 'use client' 컴파일 에러 방지
'use client';
import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);
    return( 
        <>
            <p>{count}</p>
            <button onClick={()=> setCount((num) => num +1)}> 숫자 증가 시키기</button>
        </>
    )
}