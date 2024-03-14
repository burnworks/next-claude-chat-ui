# next-claude-chat-ui

Claude AI Chat UI using Vercel AI SDK.

Vercel AI SDK を利用して作成された、Anthropic API を介して Claude 3 AI とチャットするための簡易 UI です。

- [Claude - Anthropic](https://www.anthropic.com/claude)
- [Anthropic API Getting started](https://docs.anthropic.com/claude/reference/getting-started-with-the-api)
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

# claude-3-opus-20240229 or claude-3-sonnet-20240229 (Default) or claude-3-haiku-20240307
ANTHROPIC_MODEL=
```
`ANTHROPIC_MODEL` にセットできるモデル名は現時点で下記の3種類です。モデルごとに API の利用金額が異なりますので、用途に合わせて選択してください。

- Claude 3 Opus: `claude-3-opus-20240229`
- Claude 3 Sonnet: `claude-3-sonnet-20240229`
- Claude 3 Haiku: `claude-3-haiku-20240307`

`ANTHROPIC_MODEL` が未設定の場合は、デフォルト値として `claude-3-sonnet-20240229` がセットされます。

#### 【参考】モデル比較
[Models overview](https://docs.anthropic.com/claude/docs/models-overview#model-comparison)

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
