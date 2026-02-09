# 💊 Pharmacy Backend API

API RESTful desenvolvida com **NestJS** para gerenciar o sistema de uma farmácia, incluindo controle de produtos, categorias, usuários e pedidos.

Este projeto foi criado com foco em arquitetura escalável, organização modular e boas práticas de desenvolvimento backend.

---

## 📖 Sobre o Projeto

O **Pharmacy Backend** é responsável por toda a lógica de negócio e gerenciamento de dados da aplicação de farmácia.

A API permite:

- Cadastro e listagem de medicamentos  
- Gerenciamento de categorias  
- Controle de estoque  
- Cadastro de usuários  
- Processamento de pedidos  

O projeto foi estruturado utilizando a arquitetura modular do NestJS, garantindo organização, manutenibilidade e escalabilidade.

---

## 🚀 Tecnologias Utilizadas

- **NestJS**
- **Node.js**
- **TypeScript**
- **Prisma ou TypeORM** (ajuste conforme utilizado)
- **PostgreSQL / MySQL** (ajuste conforme seu banco)
- **JWT** (se houver autenticação)
- **Class Validator**
- **Insomnia / Postman** para testes

---

## 🧠 Conceitos Aplicados

- Arquitetura modular com NestJS  
- Injeção de dependência  
- DTOs e validação de dados  
- Padrão REST  
- Tratamento de exceções  
- Middleware e Guards (se implementado)  
- Autenticação e autorização com JWT (se implementado)  
- Integração com banco de dados  

---

## 📂 Estrutura do Projeto

```bash
src/
 ├── modules/
 │    ├── products/
 │    ├── categories/
 │    ├── users/
 │    └── orders/
 ├── common/
 ├── config/
 ├── app.module.ts
 └── main.ts
```
----

```
# Clonar o repositório
git clone https://github.com/seu-usuario/farmacia-nest.git

# Entrar na pasta
cd nome-do-projeto

# Instalar dependências
npm install

# Rodar em ambiente de desenvolvimento
npm run start:dev
```
----

# 📈 Próximas Melhorias

Implementar testes unitários e e2e

Sistema de permissões por perfil

Logs estruturados

Deploy com Docker 

---

# 👩‍💻 Autora

Gabrieli Martins

LinkedIn: https://linkedin.com/in/gabrielimartinsdev

