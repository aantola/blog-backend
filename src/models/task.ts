import query from 'Models/DB'

export interface taskSchema {
    id: number,
    score: number,
    icon?: string,
    title: string,
    details?: string,
    files: string[],
    solution: string,
}

export async function getTasks(userId?: number ){
    const res = await query(`
    WITH user_solves AS (select * from user_has_solves where user_id=$1 )
    select 
        id,
        score, 
        icon, 
        title, 
        details,
        CASE WHEN user_id is not NULL then TRUE ELSE FALSE END AS solved 
    from problem LEFT join user_solves ON problem.id = user_solves.problem_id;    
    `,[userId ? userId :-1]);
    return res.rows;
}

export async function checkTask(taskId : number){
    const res = await query("SELECT (solution) from problem where id=$1", [taskId]);
    return res.rows[0]?.solution;
}

export async function addSolvedUserTask(taskId : number, userId : number){
    const res = await query("INSERT INTO user_has_solves (problem_id, user_id) VALUES ($1, $2)", [taskId, userId]);
    console.log("res:",res);
}

