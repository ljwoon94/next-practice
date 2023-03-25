import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { notFound } from 'next/navigation'
import Counter from './components/Counter'

// metadata 즉, 헤더의 내용을 page에 정의해두면
// 이 페이지에서만 적용되지만. layout.tsx에 두면 자식
// 컴포넌트까지 적용됨


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return(
    <>
      <h1>홈페이지!!</h1>
      <Counter />
    </>
  )
}
 