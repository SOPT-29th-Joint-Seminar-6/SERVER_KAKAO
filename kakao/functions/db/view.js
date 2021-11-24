const _ = require('lodash')
const convertSnakeToCamel = require('../lib/convertSnakeToCamel')

const getAllVideos = async (client)=>{
    const { rows } = await client.query(
        `
        SELECT * FROM video
        WHERE is_deleted = FALSE
        `,
    );
    return convertSnakeToCamel.keysToCamel(rows);
};

module.exports = {getAllVideos}