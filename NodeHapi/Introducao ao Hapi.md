# Hapi.js

## Oque é o Hapi?

- Um framework para construir aplicações e serviços
- Similar ao Express.js
- Software de código aberto
- Criado por Eran Hammer, Arquiteto de Plataforma Móvel no Walmart
- Permite que os desenvolvedores se concentrem em escrever a lógica de aplicativo reutilizável em vez de gastar tempo construindo infraestrutura.

## Funcionalidades do Hapi

- **Authentication e Authorization**: esquemas de estratégias de autenticação e autorização.
- **Armazenamento em cache**: cache do lado do cliente e do servidor (catbox).
- **Roteamento**: Permite configurar como o aplicativo da Web ou rotas da API devem ser exibidas.
-  **Validação**: validação de schema de objetos (Joi)
- **Cookies**: Configuração para fazer uso de cookies.
- **Logging**: métodos nativos para geração de logs.
- **Tratamento de Erros**: conjunto de utilitários para retornar objetos de erro compatíveis com HTTP (Boom).
- **Monitoramento de Processos**: monitorar e reportar uma variedade de eventos (Good).

## Hapi VS Express

## Express

- Um pouco menos opinativo que o Hapi, sendo menos abstraído do Node.
  - Diferente do Hapi a estrutura em Express é mais flexível, ficando a gosto do desenvolvedor.
- Parece uma aplicação nativa em Node.js.
- Desenvolvedores mais experientes o preferem por sua familiaridade.
  - Tem uma comunidade maior.
- Usa middlewares para fornecer acesso ao pipeline de solicitação/resposta.

## Hapi

- Tem um estrutura "padrão" para ser seguida.
- Implementação mais abstrata do Node.
- Usa plug-ins para estender sua funcionalidades.
- Há geralmente um plug-in em Hapi para cada middleware no Express.

