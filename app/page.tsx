'use client';

import { useChat } from 'ai/react';
import Markdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import type { ClassAttributes, HTMLAttributes } from 'react'
import type { ExtraProps } from 'react-markdown'

const Pre = ({
  children,
  ...props
}: ClassAttributes<HTMLPreElement> &
  HTMLAttributes<HTMLPreElement> &
  ExtraProps) => {
  if (children == null || typeof children !== 'object') {
    return <code {...props}>{children}</code>
  }
  const childType = 'type' in children ? children.type : ''
  if (childType !== 'code') {
    return <code {...props}>{children}</code>
  }

  const { className = '', children: code = '' } = 'props' in children ? children.props : {};
  const language = className?.replace('language-', '')

  return (
    <SyntaxHighlighter language={language} style={a11yDark}>{`${code}`.replace(/\n$/, '')}</SyntaxHighlighter>
  )
}

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <main>
      <div className="block__chat">
        {messages.map(m => (
          <div key={m.id} className="chat-item">
            <div className="chat-name">
              {m.role === 'user' ? (
                <span className="chat-label">
                  <span className="chat-icon user">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                  </span>
                  <span>あなた</span>
                </span>
              ) : (
                <span className="chat-label">
                  <span className="chat-icon ai">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                  </span>
                  <span>Claude AI</span>
                </span>
              )}
            </div>
            <div className="chat-content">
              <Markdown components={{ pre: Pre, }}>
                {m.content}
              </Markdown>
            </div>
          </div>
        ))}
      </div>

      <div className="block__form" id="form">
        <form onSubmit={handleSubmit}>
          <textarea
            value={input}
            placeholder="コメントを送信..."
            onChange={handleInputChange}
            rows={3}
            aria-label="コメントを入力"
          />
          <button type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
            送信
          </button>
        </form>
      </div>
    </main>
  );
}