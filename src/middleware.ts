import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest){
    console.log('미들웨어가 실행되고 있음! 체크중!')
    if(request.nextUrl.pathname.startsWith('/products/1004')){
        console.log('미들웨어 - 경로를 리다이렉팅함')
        return NextResponse.redirect(new URL('/products', request.url))
    }
}
/**
 * 특정한 경로에만 실행하게 설정할 수 있다.
 * match에 설정한 경로에 일치하는 경우에만
 * 미들웨어가 실행된다. 
 */
export const config = {
    matcher:['/products/:path*']
}