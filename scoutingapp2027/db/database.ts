//db middleware

import 'dotenv/config'
import { createPool } from 'mysql2'
import { Kysely, MysqlDialect } from 'kysely'
import type { Database, NewScoutingRecord } from './types.ts'

function requireEnv(name: string) {
  const value = process.env[name]

  if (!value) {
    throw new Error(`missing env: ${name}`)
  }

  return value
}

const databaseHost = requireEnv('DB_HOST')
const databasePort = Number(requireEnv('DB_PORT'))
const databaseName = requireEnv('DB_NAME')
const databaseUser = requireEnv('DB_USER')
const databasePassword = requireEnv('DB_PASSWORD')
requireEnv('DB_SECRET_KEY')

const dialect = new MysqlDialect({
  pool: createPool({
    database: databaseName,
    host: databaseHost,
    user: databaseUser,
    password: databasePassword,
    port: databasePort,
    connectionLimit: 10,
  }) as never,
})

// Database interface is passed to Kysely's constructor, and from now on, Kysely 
// knows your database structure.
// Dialect is passed to Kysely's constructor, and from now on, Kysely knows how 
// to communicate with your database.
export const db = new Kysely<Database>({
  dialect,
})

export async function insertScoutingRecord(record: NewScoutingRecord) {
  return db.insertInto('scouting_record').values(record).executeTakeFirstOrThrow()
}

export async function selectScoutingRecords() {
  return db
    .selectFrom('scouting_record')
    .selectAll()
    .orderBy('created_at', 'desc')
    .execute()
}

export async function deleteScoutingRecord(id: number) {
  return db.deleteFrom('scouting_record').where('id', '=', id).execute()
}