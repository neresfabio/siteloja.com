import database from "infra/database";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const databaseName = process.env.POSTGRES_DB;

  const versionResultDB = await database.query("SHOW server_version;");
  const dataBaseVersionValue = versionResultDB.rows[0].server_version;
  const maxConectionsDB = await database.query("SHOW max_connections;");
  const databaseMaxConections = maxConectionsDB.rows[0].max_connections;
  const openConnectionResultDB = await database.query({
    text: `SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;`,
    values: [databaseName],
  });
  const open_connectionsValue = openConnectionResultDB.rows[0].count;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: dataBaseVersionValue,
        max_connections: parseInt(databaseMaxConections),
        open_connectionsValue: open_connectionsValue,
      },
    },
  });
}

export default status;
