import Link from 'next/link'
import './globals.css'
import styles from './layout.module.css'
import { Metadata } from 'next'

/**
 * metadata는 header와 같은 역할을 한다.
 * layout.tsx에 정의해두면 자식 컴포넌트까지 영향을 주지만
 * page.tsx에 정의해두면 이 페이지에만 영향을 준다.
 */
export const metadata: Metadata = {
  title: '멋진 제품 사이트',
  description: '멋진 제품을 판매합니다.',
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
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <h1>Demo Note</h1>
          <nav className={styles.nav}>
            <Link href='/products'>Products</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
