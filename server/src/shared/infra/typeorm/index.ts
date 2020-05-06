import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async function createTypeormConnection(): Promise<Connection> {
  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
  return createConnection({ ...connectionOptions, name: 'default' });
}
