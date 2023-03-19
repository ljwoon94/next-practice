import Link from "next/link"

/***
 * 지금 이 페이지에는 적진 않았지만
 * 라우트 경로 폴더를 (OOO)으로 지으면 그 안에 있는 애들은 
 * 라우팅 되지 않지만, 같은 그룹의 애들을 묶을때 사용한다. 
 */
export default function ProductsPage(){
    const products =['shirts','pants','skirt','shoes']
    return <div>
        <h1>제품 소개 페이지!</h1>
        {products.map((product, i) => 
            <li key={i}>
                <Link href={`products/${product}`}>{product}</Link> 
            </li>   
        )}
    </div>
}