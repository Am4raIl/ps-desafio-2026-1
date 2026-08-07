# 🏆 PS Desafio 2026/1 — Fox Store

<p align="center">
  <img src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" />
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />
  <img src="https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white" />
</p>

---

## 📋 Sobre o Projeto

O **PS Desafio 2026/1** é uma aplicação FullStack de e-commerce voltada para a venda de artigos esportivos. O projeto foi desenvolvido como parte do processo seletivo (PS) da **Adapti Soluções Web**, com o objetivo de demonstrar habilidades em desenvolvimento web moderno, integrando um backend robusto em Laravel com um frontend dinâmico construído em Next.js e React.

A aplicação permite o cadastro, listagem e gerenciamento de produtos esportivos, contemplando funcionalidades típicas de uma loja virtual como visualização de produtos, controle de estoque e registro de pedidos/vendas, com uma arquitetura desacoplada (API REST) que garante escalabilidade e separação clara de responsabilidades.

---

## 🚀 Tecnologias Utilizadas

### Backend
| Tecnologia | Descrição |
|---|---|
| **PHP / Laravel** | Framework para construção da API REST |
| **MySQL** | Banco de dados relacional |
| **Laravel Migrations & Seeders** | Versionamento e população do banco |

### Frontend
| Tecnologia | Descrição |
|---|---|
| **Next.js** | Framework React com SSR/SSG |
| **React.js** | Biblioteca de interface de usuário |
| **TypeScript** | Tipagem estática para JavaScript |
| **pnpm** | Gerenciador de pacotes performático |

---

## ⚙️ Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- [PHP](https://www.php.net/) >= 8.1
- [Composer](https://getcomposer.org/)
- [Node.js](https://nodejs.org/) >= 18
- [pnpm](https://pnpm.io/pt/installation)
- [MySQL](https://www.mysql.com/) >= 8.0

---

## 🛠️ Iniciando o Projeto

Clone o projeto para sua máquina:

```bash
git clone https://github.com/Am4raIl/ps-desafio-2026-1
```

---

### 🔧 Backend — Laravel

Dentro da pasta `backend`, siga as instruções abaixo.

**1. Instale as dependências:**
```bash
composer install
```

**2. Crie o arquivo de variáveis de ambiente:**
```bash
cp .env.example .env
```

**3. Configure o banco de dados:**

Abra o arquivo `.env` e insira as credenciais do seu banco de dados nos campos:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nome_do_banco
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
```

**4. Crie o schema no banco de dados:**

Crie manualmente um banco de dados com o nome definido na variável `DB_DATABASE` do arquivo `.env`.

**5. Gere a chave da aplicação:**
```bash
php artisan key:generate
```

**6. Crie o link simbólico com o diretório de storage:**
```bash
php artisan storage:link
```

**7. Execute as migrations e seeders:**
```bash
php artisan migrate --seed
```

> ⚠️ Caso as migrations já tenham sido rodadas anteriormente, utilize:
> ```bash
> php artisan migrate:fresh --seed
> ```

**8. Inicie o servidor de desenvolvimento:**
```bash
php artisan serve
```

> O servidor backend estará disponível em: `http://127.0.0.1:8000`

---

### 🎨 Frontend — React.js / Next.js

Dentro da pasta `frontend`, siga as instruções abaixo.

> Certifique-se de ter o gerenciador de pacotes [pnpm](https://pnpm.io/pt/installation) instalado globalmente.

**1. Instale as dependências:**
```bash
pnpm install
```

**2. Crie o arquivo de variáveis de ambiente:**
```bash
cp .env.local.example .env.local
```

**3. Configure a URL da API (se necessário):**

Abra o arquivo `.env.local` e verifique se a URL do backend está correta:
```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

**4. Inicie o servidor de desenvolvimento:**
```bash
pnpm dev
```

> O servidor frontend estará disponível em: `http://127.0.0.1:3000`

---

## 🗄️ Banco de Dados

O projeto utiliza **Migrations** para versionar o schema do banco e **Seeders** para popular os dados iniciais, garantindo que qualquer desenvolvedor consiga reproduzir o ambiente de forma consistente com o comando `migrate --seed`.

---

## 📦 Scripts Disponíveis

### Backend
| Comando | Descrição |
|---|---|
| `php artisan serve` | Inicia o servidor de desenvolvimento |
| `php artisan migrate` | Executa as migrations |
| `php artisan migrate:fresh --seed` | Recria o banco e popula com seeds |
| `php artisan storage:link` | Cria link simbólico para o storage |

### Frontend
| Comando | Descrição |
|---|---|
| `pnpm dev` | Inicia o servidor de desenvolvimento |
| `pnpm build` | Gera o build de produção |
| `pnpm start` | Inicia a aplicação em modo produção |
| `pnpm lint` | Executa o linter no código |

---

## 📄 Licença

Este projeto foi desenvolvido para fins avaliativos no contexto do **Processo Seletivo 2026/1**. Todos os direitos reservados ao autor.

---

<p align="center">Desenvolvido por <strong>Felipe</strong></p>
