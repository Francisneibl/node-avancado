# JWT

## O que é JWT  ?

- Sigla para "JSON Web Token".
- É um padrão (RFC-7519) que define como transmitir e armazenar objetos JSON de forma compacta e segura entre diferentes aplicações.
- Os dados podem ser validados a qualquer momento pois o token é assinado digitalmente.
- É formado por três seções: Header, Payload e Signature.

## Como é formado o JWT?

### Header

- Objeto JSON que define informações sobre o tipo do token (typ).
- O algoritmo de criptografia usado em sua assinatura (alg) (normalmente HMAC SHA256 ou RSA).

### Payload

- Objeto JSON com as Claims (informações) da entidade tratada (ex. o usuário autenticado).

- O algoritmo de criptografia usado em sua assinatura (alg) (normalmente HMCA SHA256 ou RSA).

- Podem ser de 3 tipos: **Reserved claims, Public claims e Private claims **.

  - **Reserved claims:** Atributos não obrigatórios (mas recomendados) que são usados na validação do token pelos protocolos de segurança das APIs.

    - **Sub (subject)***: Entidade à quem o token pertence (ex. ID do usuário).
    - **iss(issuer)*:** Emissor do token.
    - **exp (expiration)*:** Timestamp de expiração do token.
    - **iat (issued at):** Timestamp de criação do token.
    - **aud (audience):** Destinatário do token (a aplicação que irá usa-lo).

    *Atributos mais usados.

  - **Public claims:** Atributos usados pelas aplicações (ex. usuário autenticado):

    - name
    - roles

  - **Private claims:** Atributos definidos especialmente para compartilhar informações entre aplicações:

    `{`

    `'sub' : '1234568790',`

    `'name' : "John Doe",`

    `'admin' : true`

    `}`

    Por segurança, recomenda-se não armazenar informações confidenciais ou sensíveis no token.

### Signature

- A concatenação dos hashes gerados a partir do Header e Payload usando base64UrlEncode, com uma chave secreta ou certificado RSA.
- Garante a integridade do token, se ele foi modificado e se realmente foi gerado por você.
- Previne ataques do tipo **main-in-the-middle**: o invasor poderia interceptar a requisição e modificar seu conteúdo.
- Apenas quem está de posse da chave pode criar, alterar e validar o token.

## Como o token é usado ?

- O usuário faz login em um serviço de autenticação e um token JWT é criado e retornado para o cliente.

- O token é enviado para as APIs para através do header **Authorization** de cada requisição HTTP, com a flag Bearer.

  `Authorization: Bearer <token>`

- Como o token, a API não precisa consultar as informações do usuário no banco de dados.





​    

