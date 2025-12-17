💊 Sistema de Gerenciamento de Farmácia - API
Este projeto é uma API REST desenvolvida para gerenciar as categorias de uma farmácia. Ele permite o controle total sobre os setores e descrições dos produtos, incluindo buscas avançadas e documentação interativa.

🚀 Funcionalidades
O sistema conta com 8 métodos principais para manipulação da tabela de categorias:

Listar Todas: Retorna todas as categorias cadastradas.

Consultar por ID: Busca detalhada de uma categoria específica via identificador numérico.

Consultar por Título: Busca exata ou parcial por nomes de categorias.

Consultar por Setor: Filtra categorias baseadas na área da farmácia (Ex: Higiene, Medicamentos).

Pesquisa Global (OR): Filtro avançado que busca um termo simultaneamente no titulo e na descricao.

Cadastrar Categoria: Inclusão de novos registros com validação de dados.

Atualizar Categoria: Edição de informações existentes.

Remover Categoria: Exclusão definitiva de registros do banco de dados.

🛠️ Tecnologias e Ferramentas
Framework: NestJS (Node.js)

Linguagem: TypeScript

ORM: TypeORM

Banco de Dados: MySQL

Documentação: Swagger (Disponível em http://localhost:4000/swagger#/)

Testes de API: Insomnia 

📖 Como usar a Documentação (Swagger)
A API possui uma interface visual para testes. Ao rodar o projeto, acesse http://localhost:4000/swagger.

Identificação: Cada método possui uma cor (Verde para criar, Azul para ler, Laranja para editar e Vermelho para excluir).

Testes: Clique em "Experimente!", preencha os campos necessários (como id ou termo) e clique em Executar para ver o resultado em tempo real.

🏗️ Estrutura do Banco de Dados (tb_categorias)AtributoTipoDescriçãoidLong / Primary KeyIdentificador único autoincremental.tituloStringNome da categoria (ex: Analgésicos).descricaoStringDetalhes sobre o que a categoria abrange.setorStringLocalização física ou lógica na farmácia.dataChegadaDate / TimestampRegistro automático da criação/atualização.

✒️ Autor
Gabrieli Martins -(https://github.com/imgabrielimartins)