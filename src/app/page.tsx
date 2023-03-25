import Image from 'next/image'

import styles from './page.module.css'
import { notFound } from 'next/navigation'
import Counter from '../components/Counter'

// metadata 즉, 헤더의 내용을 page에 정의해두면
// 이 페이지에서만 적용되지만. layout.tsx에 두면 자식
// 컴포넌트까지 적용됨

export default function Home() {
  return(
    <>
      <h1>홈페이지!!</h1>
      <Counter />
      {/* Imgae 태그를 활용해 외부의 이미지를 불러오려면 next.config 활용한다. */}
      <Image src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
      alt ='shop'
      width={400}
      height={400}
      ></Image>
    </>
  )
}
 