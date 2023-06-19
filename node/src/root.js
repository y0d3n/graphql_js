const getUserFollowers = async (userId, client) => {
    console.log("🚀 getfollwer")
    const followersResult = await client.query(
        'SELECT users.* FROM users INNER JOIN follows ON users.id = follows.follower_id WHERE follows.followee_id = $1',
        [userId]
    );
    const followers = followersResult.rows;

    const followersWithFollowers = [];
    for (const follower of followers) {
        const followerFollowers = await getUserFollowers(follower.id, client);
        followersWithFollowers.push({ ...follower, followers: followerFollowers });
    }

    return followersWithFollowers;
};

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
        },

        getUser: async (args) => {
            const { id } = args;
            try {
                const client = await pool.connect();
                const userResult = await client.query('SELECT * FROM users WHERE id = $1', [id]);
                const user = userResult.rows[0];

                const followers = await getUserFollowers(id, client);
                client.release();

                return [{ ...user, followers }];
            } catch (error) {
                console.error('Error executing query', error);
                throw error;
            }
        },

        getUser_sqli: async (args) => {
            const { id } = args;
            try {
                const client = await pool.connect();
                const result = await client.query('SELECT * FROM users WHERE id = ' + String(id));
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