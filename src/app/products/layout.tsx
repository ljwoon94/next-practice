
import Link from 'next/link'
import styles from './layout.module.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: '멋진 제품 사이트 | 전체 제품 확인',
    description: '멋진 제품을 확인해보세요.',
    icons: {
      icon:'/favicon.ico'
    }
  }

/**
 * 우리가 구성한 컴포넌트들은 전부 {children}으로 들어감
 * 
 * @param param0 
 * @returns 
 */
export default function ProductLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <nav className={styles.nav}>
                <Link href={'/products/women'}>여성 옷</Link>
                <Link href={'/products/men'}>남성 옷</Link>
            </nav>

            <section className={styles.product}>
                {children}
            </section>
        </>
    )
}
