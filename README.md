💊 Sistema de Gestão de Farmácia - API

Este projeto é uma API RESTful desenvolvida para a gestão de uma farmácia, permitindo o controlo de categorias de produtos. O sistema foi construído utilizando o framework NestJS e segue as melhores práticas de desenvolvimento, como a arquitetura de módulos e validação de dados.

📋 Sobre o Projeto

O objetivo deste sistema é otimizar as operações diárias de uma farmácia, garantindo a conformidade regulatória e a eficiência no atendimento ao cliente. Esta API fornece os recursos necessários para gerir as categorias dos medicamentos e produtos comercializados.

🛠️ Tecnologias Utilizadas

NestJS - Framework Node.js para construção de aplicações escaláveis.

TypeScript - Linguagem de programação baseada em JavaScript com tipagem estática.

TypeORM - ORM para integração com bases de dados SQL.

Class-Validator - Validação de dados de entrada.

MySQL - Base de dados relacional.

Swagger (OpenAPI) - Documentação interativa da API.

🗄️ Estrutura da Base de Dados

A entidade principal implementada até ao momento é a Categoria (tb_categorias), que possui a seguinte estrutura:

id: Identificador único (Auto-incremento).

titulo: Nome da categoria (ex: Medicamentos, Higiene, Cosméticos).

descricao: Descrição detalhada da categoria (opcional).

🚀 Como Executar o Projeto

Pré-requisitos

Node.js (v16 ou superior)

NPM ou Yarn

Uma instância de base de dados SQL ativa
