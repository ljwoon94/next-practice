'use client';
import { useEffect, useState } from 'react';
import styles from './MeowArticle.module.css'
/***
 * 클라이언트 사이드 렌더링 할거는 coponent에 다 만들어둔다.
 */
export default function MeowArticle(){
    // 텍스트 상태관리
    const [text, setText] = useState('데이터 로딩중');
    /**
     * useEffect란? 컴포넌트가 렌더링 될 때, 특정 작업을 실행할 수 있도록 하는 훅
     */
    useEffect(()=>{
        fetch('https://meowfacts.herokuapp.com')
        .then((res) => res.json())
        .then((data) => setText(data.data[0]))
    }, [])
    
    
    return <article className={styles.article}>{text}</article>;
}
