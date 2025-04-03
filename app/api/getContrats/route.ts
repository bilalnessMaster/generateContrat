import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";



export  const GET = async () => {
        try {
               const contrats = await prisma.contrat.findMany()
                return NextResponse.json({contrats , success : true} ,{status : 200})
        } catch (error) {
            console.log(error);
            return NextResponse.json({success : false},{status : 500})
        }
}