## Executando testes

Esses testes exigem uma sessão autenticada do WhatsApp Web, bem como um telefone adicional para o qual você possa enviar mensagens.

Isso pode ser configurado usando as seguintes variáveis de ambiente:
- `WWEBJS_TEST_SESSION`: Uma string formatada em JSON com detalhes da sessão de autenticação legada. Deve incluir `WABrowserId`, `WASecretBundle`, `WAToken1` e `WAToken2`.
- `WWEBJS_TEST_SESSION_PATH`: Caminho para um arquivo JSON que contém os detalhes da sessão de autenticação legada. Deve incluir `WABrowserId`, `WASecretBundle`, `WAToken1` e `WAToken2`.
- `WWEBJS_TEST_CLIENT_ID`: `clientId` para usar para autenticação baseada em arquivo local.
- `WWEBJS_TEST_REMOTE_ID`: Um ID válido do WhatsApp para o qual você pode enviar mensagens, por exemplo, `123456789@c.us`. Deve ser diferente do ID usado pela sessão fornecida.

Você *deve* definir `WWEBJS_TEST_REMOTE_ID` **e** `WWEBJS_TEST_SESSION`, `WWEBJS_TEST_SESSION_PATH` ou `WWEBJS_TEST_CLIENT_ID` para que os testes sejam executados corretamente.

### Multidispositivo
Algumas das funcionalidades testadas dependem se a conta tem vários dispositivos habilitados ou não. Se você estiver usando vários dispositivos, você deve definir `WWEBJS_TEST_MD=1`.