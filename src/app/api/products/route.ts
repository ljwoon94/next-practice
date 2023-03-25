import { getProducts } from "@/service/products";
import { NextResponse } from "next/server";
/**
 * api test
 * @param request 
 * @returns 
 */
export async function GET(request: Request){
    const products = await getProducts();
    return NextResponse.json({products}); 
}