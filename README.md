# Curso Dev

## Visão
Registro pessoal da rotina de aprendizagem em desenvolvimento. Use este documento para planejar, executar e revisar suas atividades diárias e semanais.

## Objetivos
- Curto prazo:
  - Criar um repositório no GitHub com README. ✅
  - Clonar o repositório remoto localmente. ✅
  - Fazer a primeira alteração no README e subir para o remoto. ✅
- Médio/Longo prazo:
  - Aprender os comandos Git essenciais.
  - Praticar fluxo de branches, merge e rebase.
  - Construir pequenos projetos para consolidar conceitos.

## Comandos Git

Tabela com comandos úteis, dividida em sincronização remota e operações locais.

| Sincronização remota | Local |
|---                   |---    |
| `git clone <repo>` — clonar repositório remoto<br>`git remote add origin <url>` — adicionar remoto<br>`git fetch` — buscar atualizações (não altera o working tree)<br>`git pull` — buscar e mesclar do remoto (`fetch` + `merge` ou `rebase` dependendo da configuração)<br>`git push` — enviar commits ao remoto<br>`git push -u origin <branch>` — configurar upstream | `git status` — mostrar estado do repositório<br>`git add <file>` — preparar alterações para commit<br>`git commit -m "msg"` — criar commit<br>`git branch` — listar/gerir branches<br>`git checkout <branch>` / `git switch <branch>` — mudar de branch<br>`git merge <branch>` — mesclar branch no atual<br>`git rebase <branch>` — reaplicar commits sobre outro branch<br>`git reset --soft --hard` — redefinir HEAD (cuidado)<br>`git stash` — guardar alterações temporariamente<br>`git log` — visualizar histórico de commits<br>`git diff` — ver diferenças entre estados|

## Arvore de arquivos

### /.nvmrc

**Explicação curta**:

- **Função**: .nvmrc contém a versão do Node a ser usada pelo projeto. Ferramentas como nvm (Node Version Manager) leem esse arquivo para trocar automaticamente a versão do Node.
- **Como usar**:
  - `nvm install` instala a versão indicada (se não existir)
  - `nvm use` ativa a versão indicada por .nvmrc
  - `nvm exec npm run start` executa com a versão do .nvmrc

### /package.json

**Para que serve o package.json**

- Função geral: é o manifesto do projeto Node.js / JavaScript. Contém metadados e configurações que descrevem o projeto e permitem gerenciar dependências, scripts e comportamentos da aplicação.
- Campos comuns:
  - name, version, description — informações básicas do projeto.
  - main — arquivo de entrada (ex.: "index.js").
  - scripts — comandos customizados que podem ser executados com `npm run <nome>` (ex.: "start", "test", "build").
  - dependencies — dependências necessárias em runtime.
  - devDependencies — dependências usadas apenas em desenvolvimento (tests, bundlers).
  - engines — versão(s) do Node compatíveis.
  - repository, license, author, keywords — metadados para publicação/identificação.
- Uso rápido:
  - `npm init` — cria um package.json interativo.
  - `npm install` — instala dependências listadas.
  - `npm install <pkg>` — adiciona uma dependência e atualiza package.json.
  - `npm install <pkg> --save-dev` — adiciona a devDependency.
  - `npm run <script>` — executa scripts definidos.
- Observações:
  - Mantenha scripts claros e atômicos (start, test, build).
  - O arquivo package-lock.json (ou yarn.lock) trava versões instaladas para reprodutibilidade.
  - Para projetos que usam nvm, combine package.json (engines) com .nvmrc para consistência de ambiente.