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
|---|---|
| `git clone <repo>` — clonar repositório remoto<br>`git remote add origin <url>` — adicionar remoto<br>`git fetch` — buscar atualizações (não altera o working tree)<br>`git pull` — buscar e mesclar do remoto (`fetch` + `merge` ou `rebase` dependendo da configuração)<br>`git push` — enviar commits ao remoto<br>`git push -u origin <branch>` — configurar upstream | `git status` — mostrar estado do repositório<br>`git add <file>` — preparar alterações para commit<br>`git commit -m "msg"` — criar commit<br>`git branch` — listar/gerir branches<br>`git checkout <branch>` / `git switch <branch>` — mudar de branch<br>`git merge <branch>` — mesclar branch no atual<br>`git rebase <branch>` — reaplicar commits sobre outro branch<br>`git reset --soft|--hard` — redefinir HEAD (cuidado)<br>`git stash` — guardar alterações temporariamente<br>`git log` — visualizar histórico de commits<br>`git diff` — ver diferenças entre estados |


