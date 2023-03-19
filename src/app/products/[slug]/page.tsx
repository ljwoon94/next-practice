import { notFound } from "next/navigation";

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
 * @param params 동적 라우팅시 파라미터
 * @returns 
 */
export default function PantsPage({params}: Props){
    if(params.slug === 'nothing'){
        notFound();
    }
    return <h1>{params.slug} 제품 설명 페이지</h1>
}

/**
 * 동적 라우팅 시 미리 만들어둔 정적 SSG 방식을 사용하고프면
 * generateStaticsParams 사용
 */
export function generateStaticsParams(){
    const products = ['pants', 'skirt'] // 미리 정적으로 만들고 싶은 경로는 여기에 선언
    return products.map(product =>({
        slug: product,
    }))

}