import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";







export const POST = async (req: Request) => {
    try {
        const {id  , statut} = await req.json()
        await prisma.contrat.update({
            where : {
                id
            },
            data : { 
                statut
            }
        })
        return NextResponse.json({success: true  }, { status: 200 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false }, { status: 500 })
    }
}