const root = (pool) => {
    return {
        getUsers: async () => {
            try {
                const client = await pool.connect();
                const result = await client.query('SELECT id, name, email FROM users');
                client.release();

                return result.rows;
            } catch (error) {
                console.error('Error executing query', error);
                throw error;
            }
        },

        getUser: async (args) => {
            const { id } = args;
            try {
                const client = await pool.connect();
                const result = await client.query('SELECT id, name, email FROM users WHERE id = $1', [id]);
                client.release();

                return result.rows;
            } catch (error) {
                console.error('Error executing query', error);
                throw error;
            }
        },

        getUser_sqli: async (args) => {
            const { id } = args;
            try {
                const client = await pool.connect();
                const result = await client.query('SELECT id, name, email FROM users WHERE id = ' + String(id));
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