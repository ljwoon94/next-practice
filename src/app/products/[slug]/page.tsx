import GoProductsButton from "@/components/GoProductsButton";
import { getProduct, getProducts } from "@/service/products";
import Image from "next/image";

import { notFound, redirect } from "next/navigation";

/**
 * next는 기본적으로 SSG로 렌더링된다
 * export const revalidate = false; 는 디폴트이다.
 * export const revalidate = n; 를 사용하면
 * ISR 방식으로 변경. n초마다 정적인 html파일을 렌더링 한다.
 * export const revalidate = 0;은 SSR 새로고침할때마다 서버에서 렌더링함ㅋㅋ
 */
export const revalidate = 3;


type Props = {
    params: {
        slug: string;
    }
}

/**
 * 우선 products 까지는 정적 라우팅으로 정적 페이지로 만들어진다.
 * products안에 [slug] 혹은 [아무거나]로 하면 products/아무렇게 입력해도 라우팅이 된다.
 * 이를 동적 라우팅이라 하는데. [slug]를 쓰지 않으면 SSG 형식으로 정적으로 만들어지지만,
 * 이렇게 하면 일부분을 동적으로 사용할 수 있게 만든다. products/아무거나는 요청시 만드는 SSR로 바뀜. 
 * 추가적으로 generateStaticParams를 쓰면
 * 동적 라우팅을 함에도 불구하고, 미리 선언해둔 애들은
 * 정적으로 미리 준비해둘 수 있다. 
 * 
 * [...slug] 사용 시 동적 라우팅을 몇 댑스 더 들어갈 수 있다. 
 * ex) /products/pants/trunk 등등
 * [[...slug]]일 경우 있을 수 도 없을 수도 있다.
 * params: {slug} 는 javascript 구조분해 할당
 * @param params 동적 라우팅시 파라미터
 * @returns 
 */
export default async function ProductPage({ params: { slug } }: Props) {
    const product = await getProduct(slug);

    // 만약 제품이 없다면 products로 리다이렉트
    if (!product) {
        redirect('/products')
        // notFound();
    }
    return <>
        <h1>{product.name} 제품 설명 페이지</h1>
        {/* Image 태그의 디폴트 경로가 public인듯 */}
        <Image src = { `/images/${product.imagesPath}.jpg` } alt={product.name}
         width='300'
         height='300'
         />
        <GoProductsButton />
    </>
}

/**
 * 동적 라우팅 시 미리 만들어둔 정적 SSG 방식을 사용하고프면
 * generateStaticsParams 사용
 */
export async function generateStaticParams() {
    // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임 (SSG)
    const products = await getProducts();
    return products.map((product) => ({
        slug: product.id,
    }));
}


/**
 * metadata는 header와 같은 역할을 한다.
 * layout.tsx에 정의해두면 자식 컴포넌트까지 영향을 주지만
 * page.tsx에 정의해두면 이 페이지에만 영향을 준다.
 * generateMetadata 사용 시 동적인 metadata(header)를 사용할 수 있다.
 */
export function generateMetadata({ params }: Props) {
    return {
        title: `제품의 이름: ${params.slug}`
    }
}
