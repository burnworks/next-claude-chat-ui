# next-claude-chat-ui

Claude AI Chat UI using Vercel AI SDK.

Vercel AI SDK を利用して作成された、Anthropic API を介して Claude 3 AI とチャットするための簡易 UI です。

- [Vercel AI SDK](https://github.com/vercel/ai)
- [anthropic-sdk-typescript](https://github.com/anthropics/anthropic-sdk-typescript)
- [Next.js](https://nextjs.org/)

## Getting Started

Install Node.js if you haven't already.

```bash
git clone https://github.com/burnworks/next-claude-chat-ui.git
cd next-claude-chat-ui
npm install
```

### .env

`.env.sample` を `.env` にリネームしてから各環境変数を記述して保存してください。

```
# API Key (Required)
ANTHROPIC_API_KEY=[ここに API Key を記述]

# claude-3-opus-20240229 or claude-3-sonnet-20240229 (Default)
ANTHROPIC_MODEL=
```

`ANTHROPIC_MODEL` は、未設定ならデフォルト値として `claude-3-sonnet-20240229` がセットされます。

### Run

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Note

> [!NOTE]
> このスクリプトは、とりあえず簡単に Claude 3 AI とチャットするための UI を作成したもので、機能は最低限、かつ細かいテストなどはしていません。
> クローズドなチャット UI を実装する時の参考程度に使用してください。
