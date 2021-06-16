import * as mysql from "mysql";

import chirps from '../routes/api/chirps'

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port: '3305',
    password: '1234',
    database: 'crud_db'
})
                                        // js variant? 
export const Query = (query: string, values?: Array<string | number>) => {
    return new Promise<Array<any>>((resolve, reject) => {
        db.query(query, values, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
};


export default {
    chirps
}