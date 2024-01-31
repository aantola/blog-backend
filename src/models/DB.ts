import pg from 'pg';

const pool = new pg.Pool({
  user: process.env.DB_USER,
  connectionString: process.env.DB_URL,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  ssl: !!process.env.DB_SSL,
});


export const query = async (text : string, params? : (string | number)[]) => {

  const start = Date.now()
  const res = await pool.query(text, params)
  const duration = Date.now() - start
  console.log('executed query', { text, duration, rows: res.rowCount })
  return res
}


pool.on('error', (err: Error) => {
  console.error("Error in database conection", Error)
});

export default query