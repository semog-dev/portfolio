# Portfolio — Fernando Gomes (semog-dev)

Site pessoal de portfólio de Fernando Gomes (semog-dev), construído com Angular 22 (SSR, zoneless, standalone components) e Tailwind CSS v4.

## Sobre

Migração do antigo portfólio em Next.js para Angular. O projeto inclui uma feed de projetos consumida da API do GitHub e um formulário de contato que envia e-mail via Resend, ambos servidos por rotas `/api/*` que rodam junto do servidor SSR do Angular.

## Rodando localmente

Instalar dependências:

```bash
npm install
```

Servidor de desenvolvimento (hot reload, mas **sem** as rotas `/api/*`, que só existem no servidor SSR):

```bash
npm start
```

Aplicação disponível em `http://localhost:4200/`.

Para rodar a stack completa, incluindo as rotas de API (formulário de contato e feed de projetos do GitHub), gere o build de produção e execute o servidor SSR:

```bash
npm run build
node dist/portfolio/server/server.mjs
```

O servidor sobe na porta definida pela variável de ambiente `PORT`, ou `4000` por padrão.

### Testes e lint

```bash
npm test        # testes unitários com Vitest (via ng test)
npm run lint     # lint com Biome
```

## Variáveis de ambiente

Para que o formulário de contato e a feed de projetos do GitHub funcionem, defina as seguintes variáveis (veja `.env.example` para um modelo):

| Variável | Descrição |
| --- | --- |
| `GITHUB_API_TOKEN` | Token de acesso à API do GitHub, usado para buscar os projetos exibidos no portfólio. |
| `RESEND_API_KEY` | Chave de API do [Resend](https://resend.com), usada para enviar os e-mails do formulário de contato. |
| `RESEND_FROM` | Endereço de e-mail remetente configurado no Resend. |
| `RESEND_TO` | Endereço de e-mail de destino das mensagens do formulário de contato. |

## Deploy

O deploy é feito na Vercel. Como ainda não há um adapter oficial de primeira parte para Angular SSR na Vercel, o projeto usa uma configuração manual com `api/index.js` (função serverless que delega para o servidor SSR do Angular) e `vercel.json` (roteamento e build).
