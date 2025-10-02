import mysql from 'mysql2/promise';
import { dbConfig } from 'configs';

export async function doVulnerableQuery(userInput: string): Promise<void> {
    const connection = await mysql.createConnection(dbConfig);

    // **Vulnerable:** Directly concatenating user input into the SQL query (SQL Injection)
    const query = `SELECT * FROM Users WHERE username = '${userInput}'`;

    try {
        const [rows] = await connection.execute(query);
        console.log("Query Result:", rows);
    } catch (error) {
        console.error("Database Error:", error);
    } finally {
        await connection.end();
    }
}
