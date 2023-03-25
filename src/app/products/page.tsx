import { getProducts } from "@/service/products"
import Link from "next/link"
import MeowArticle from "../components/MeowArticle";


/***
 * 지금 이 페이지에는 적진 않았지만
 * 라우트 경로 폴더를 (OOO)으로 지으면 그 안에 있는 애들은 
 * 라우팅 되지 않지만, 같은 그룹의 애들을 묶을때 사용한다. 
 */
export default async function ProductsPage(){
    const products = await getProducts();
    /**
     * fetch에 {} 옵션을 주면 이 데이터를 몇초 주기로 렌더링 할껀지 정해줄 수 있음
     * SSG에서 ISR로 바뀜
     * next: { revalidate : 0 } 은 SSR 0초마다다 보니, 새로고침할때 마다 서버에서 렌더링
     * next: { revalidate : 0 } 말고 { cache: 'no-store' } 도 같다. SSR
     * next: { revalidate : false } SSG 즉, 디폴트
     */
    // const res = await fetch('https://meowfacts.herokuapp.com',{
    //     next: { revalidate : 3 }
    // })
    // const data = await res.json();
    // const factText = data.data[0]
    return <div>
        <h1>제품 소개 페이지!</h1>
        <ul>
        {/* 구조분해 할당 product를 {id,name}으로 할당 */}
        {products.map(({id,name}, i) => 
            <li key={i}>
                <Link href={`products/${id}`}>{name}</Link> 
            </li>   
        )}
        </ul>
        <MeowArticle />
    </div>
}