import { getWebsiteKnowledgeBase } from "@/lib/knowledge-base"
import { NextResponse } from "next/server"

export async function GET() {
    const knowledgeBase = getWebsiteKnowledgeBase()
    return NextResponse.json({ knowledgeBase })
}

