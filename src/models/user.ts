import query from 'Models/DB'


export interface userSchema {
    googleId: string,
    id?: number,
    hidden?: boolean,
    username: string,
}

export async function getUser(id : string | number){
    const res = await query("SELECT * FROM users WHERE googleId=$1 or id=$1", [id])
    return res.rows[0]
}

export async function createUser(data : userSchema){
    console.log("data", data)
    const res = await query(`
        WITH e AS(
            INSERT INTO users (googleId, username) 
                VALUES ($1, $2)
            ON CONFLICT DO NOTHING returning *
        )
        SELECT * FROM e
        UNION
        SELECT * FROM users WHERE googleId=$1;`, 
        [data.googleId, data.username]
    )
    if (res.rows){
        return res.rows
    }
    return res;
}

export async function deleteUser(id : number, googleId : string){
    const res = await query("DELETE FROM users where (id=$1 and googleId='$2');", [id, googleId]);
}