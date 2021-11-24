const _ = require('lodash');
const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getExactChannel = async (client, id) => {
  const { rows } = await client.query(
    `
    SELECT * FROM channel c
    WHERE id = $1
      AND is_deleted = FALSE
    `,
    [id]
  );
  return convertSnakeToCamel.keysToCamel(rows);
};

const addChannel = async (client, userId, channelId) => {
  const { rows } = await client.query(
    `
    INSERT INTO addchannel
    (user_id, channel_id)
    VALUES
    ($1, $2)
    RETURNING *
    `,
    [userId, channelId]
  );
  return convertSnakeToCamel.keysToCamel(rows[0]);
};

const viewAddedChannels = async (client, userId) => {
  const { rows } = await client.query(
    `
    SELECT * FROM addchannel a
      JOIN channel c ON a.channel_id = c.id
      WHERE user_id = $1
    `,
    [userId]
  )
  return convertSnakeToCamel.keysToCamel( rows );
}

const allChannel = async(client) => {
  const { rows } = await client.query(
    `
    SELECT * FROM channel c
    WHERE is_deleted = FALSE
    `
  )
  return convertSnakeToCamel.keysToCamel(rows);
}

const existChannel = async(client, id)=>{
  const { rows } = await client.query(
    `
    SELECT COUNT(*) AS cnt
    FROM addchannel a
    WHERE channel_id = $1
    `,
    [id]
  );
  return rows;
}

const alreadyAddedChannel = async(client, channelId)=>{
  const { rows } = await client.query(
    `
    SELECT COUNT(*) AS cnt
    FROM addchannel
    WHERE channel_id = $1
    `,
    [channelId]
  );
  return convertSnakeToCamel.keysToCamel( rows);
}

module.exports =  {getExactChannel, addChannel, allChannel, existChannel, alreadyAddedChannel,viewAddedChannels};