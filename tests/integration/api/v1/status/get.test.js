test("GET to /api/v1/status should return 200", async () => {
  // Capturando o retorno da API
  const response = await fetch("http://localhost:3000/api/v1/status");
  // Status HTTP
  expect(response.status).toBe(200);
  const responseBody = await response.json();

  // **Estrutura basica**
  // Updated_at deve ser uma ISO Date válida
  const parsedUpdatedAt = new Date(responseBody.updated_at);
  expect(parsedUpdatedAt.toISOString()).toBe(responseBody.updated_at);

  // Verifica qual versão do Postgress está sendo usado.
  expect(responseBody.dependencies.database.version).toEqual("16.0");
  // Verificar conexões máximas
  expect(responseBody.dependencies.database.max_connections).toEqual(100);
  // Verificar as conexões usadas
  expect(responseBody.dependencies.database.open_connectionsValue).toEqual(1);
});
