import Link from "next/link";

export default function ProductNotFound(){
    return <div>    
        <h1>해당 페이지를 찾을 수 없음.</h1>
        <div>
            <Link href="/">Go back to Home</Link>
        </div>
    </div>;
}