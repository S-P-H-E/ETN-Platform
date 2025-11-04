"use client"
import { useState, useEffect } from "react"
import { streamText } from "ai"
import { createGoogleGenerativeAI } from "@ai-sdk/google"

export default function AI() {
    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [knowledgeBase, setKnowledgeBase] = useState<string>("")

    useEffect(() => {
        fetch("/api/knowledge-base")
            .then(res => res.json())
            .then(data => setKnowledgeBase(data.knowledgeBase))
    }, [])

    const submit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!input.trim() || isLoading || !knowledgeBase) return

        setIsLoading(true)
        setOutput("")

        const google = createGoogleGenerativeAI({
            apiKey: process.env.NEXT_PUBLIC_AI_API_KEY!
        });

        const { textStream } = await streamText({
            model: google("gemini-2.5-flash"),
            system: `You are a helpful FAQ assistant for Empowering The Nation, a skills training organization established in 2022. You provide concise answers about their services, courses, pricing, and programs. Your mission is to help people become more marketable, earn higher wages, and potentially start their own businesses. Always be concise and helpful. Do not include markdown styling like ** for bold text.

Use the following knowledge base about Empowering The Nation to answer questions accurately:

${knowledgeBase}

When answering questions, refer to the specific information from the knowledge base above. Be accurate with course names, prices, durations, and discount structures.`
,
            prompt: input
        })

        for await (const chunk of textStream) {
            setOutput(prev => prev + chunk)
        }

        setIsLoading(false)
        setInput("")
    }

    return (
        <div>
            <div className="max-w-4xl mx-auto px-10">
                <h1 className="text-4xl font-bold mb-8 text-white">FAQs AI Assistant</h1>
                
                <div className="bg-[var(--foreground)] border border-[var(--border)] rounded-lg p-6 mb-6">
                    <p className="text-[var(--description)] mb-6">
                        Ask any question about Empowering The Nation's training programs, courses, pricing, or services. Get instant, concise answers.
                    </p>
                    
                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2 text-[var(--background)]">Your Question</label>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="e.g., What courses do you offer?"
                                className="w-full px-4 py-3 bg-[#0a0a0a] border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-[var(--description)]"
                                disabled={isLoading}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading || !input.trim() || !knowledgeBase}
                            className="bg-[var(--background)] text-[var(--foreground)] px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                            {isLoading ? "Processing..." : !knowledgeBase ? "Loading..." : "Ask Question"}
                        </button>
                    </form>
                </div>

                {output && (
                    <div className="bg-[var(--foreground)] border border-[var(--border)] rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4 text-white">Answer</h2>
                        <div className="text-[var(--description)] whitespace-pre-wrap leading-relaxed">
                            {output}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}