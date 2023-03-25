/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // Image 태그 사용 시 외부이미지 가져올때 사용.
  // next.config 수정 시 서버를 껏다 켜야함.
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname: 'images.unsplash.com'
      },
    ]
  },
  async redirects(){ 
    return [{
      source: '/products/deleted_forever',
      destination: '/products',
      permanent: true,
      // 영원히 이동했다. 
    },{
      source: '/products/deleted_temp',
      destination: '/products',
      permanent: false,
      // 일시적으로 경로를 이동했다.
    }]
  },
  // url를 바꿔서 보여줌
  async rewrites(){ 
    return [
      //{
      // source: '/rewrites',
      // destination: '/products/hoho/haha/asd', // 이렇게 긴 주소도 짧게 바꾸기 가능
      // },
    {
      source: '/items/:slug',
      destination: '/products/:slug',
    }]
  }
}

module.exports = nextConfig
