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

const getArticleByChannelIds = async (client,channelIds) =>{
    if(channelIds.length <1 ) return []
    const { rows } = await client.query(
        `SELECT * FROM article a
        WHERE channel_id IN (${channelIds.join()})
        AND is_deleted = FALSE
        `,
    );
    return convertSnakeToCamel.keysToCamel(rows);
}

const getVideoByVideoChannelIds = async (client,videoChannelIds) =>{
    if(videoChannelIds.length <1 ) return []
    const { rows } = await client.query(
        `SELECT * FROM video v
        WHERE videochannel_id IN (${videoChannelIds.join()})
        AND is_deleted = FALSE
        `,
    );
    return convertSnakeToCamel.keysToCamel(rows);
}
module.exports = {getAllVideos,getArticleByChannelIds,getVideoByVideoChannelIds}