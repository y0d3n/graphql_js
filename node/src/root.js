const root = (pool) => {
    return {
        getUsers: async () => {
            try {
                const client = await pool.connect();
                const result = await client.query('SELECT * FROM users');
                client.release();

                return result.rows;
            } catch (error) {
                console.error('Error executing query', error);
                throw error;
            }
        }
    };
};

module.exports = root;