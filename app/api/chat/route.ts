import Anthropic from '@anthropic-ai/sdk';
import { AnthropicStream, StreamingTextResponse } from 'ai';

// Create an Anthropic API client (that's edge friendly)
const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY || '',
});

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

// AI model
export const model = process.env.ANTHROPIC_MODEL || 'claude-3-sonnet-20240229';

export async function POST(req: Request) {
    // Extract the `prompt` from the body of the request
    const { messages } = await req.json();

    // Ask Claude for a streaming chat completion given the prompt
    const response = await anthropic.messages.create({
        messages,
        model: model,
        stream: true,
        max_tokens: 1024,
    });

    // Convert the response into a friendly text-stream
    const stream = AnthropicStream(response);

    // Respond with the stream
    return new StreamingTextResponse(stream);
}