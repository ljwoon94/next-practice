import Link from 'next/link'
import './globals.css'
import styles from './layout.module.css'
import { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { Nanum_Gothic } from 'next/font/google'

/**
 * 폰트는 페이지보다 최상위 layout.tsx에 해두는게 낫다. 
 */
const snans = Open_Sans({ subsets: ['latin'] })
// Nanum_Gothic variable font가 아니면 이렇게 설정
const gothic = Nanum_Gothic({
  weight:'700',subsets: ['latin']
})

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
    <html lang="en" className={snans.className}>
      <body>
        <header className={styles.header}>
          <h1 className={gothic.className}>Demo Note</h1>
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
