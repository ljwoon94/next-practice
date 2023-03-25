import Link from 'next/link'
import {notFound} from "next/navigation"

/**
 * [...slug] 사용 시 동적 라우팅을 몇 댑스 더 들어갈 수 있다. 
 * ex) /products/pants/trunk 등등
 * [[...slug]]일 경우 있을 수 도 없을 수도 있다.
 */
export default function NotFoundCatchAll() {
  notFound()
  return null
}
