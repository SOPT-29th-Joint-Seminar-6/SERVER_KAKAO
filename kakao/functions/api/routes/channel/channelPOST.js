const functions = require('firebase-functions');
const util = require('../../../lib/util');
const util_2 = require('../../../lib/util2')
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const db = require('../../../db/db');
const { addDB } = require('../../../db');
const { add } = require('lodash');

module.exports = async (req, res) => {


  const {userId, channelId} = req.body
  
  
  
  if (!channelId || !userId) return res.status(statusCode.BAD_REQUEST)
    .send(util.fail
      (
        statusCode.BAD_REQUEST,
        responseMessage.NULL_VALUE
      )
    );
  
  let client;
  
  try {
    client = await db.connect(req);
    
    const existChannelNumber = await addDB.existChannel(client, channelId);
    
    if (existChannelNumber[0]['cnt'] != 0) {
      console.log(existChannelNumber[0]['cnt'])
      return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.ALREADY_ADDED_CHANNEL));
    }
    
    const addedChannel = await addDB.addChannel(client,userId, channelId);
    const addedChannels = await addDB.viewAddedChannels(client, userId);


    res.status(statusCode.OK)
      .send(util.success
        (
          statusCode.OK,
          responseMessage.ADD_CHANNEL_SUCCESS,
          addedChannels
        )
      );
    // const addedChannels = await addDB.viewAddedChannels(client, userId)

    // res.status(statusCode.BAD_REQUEST)
    //   .send(util_2.success
    //     (
    //       statusCode.OK,
    //       responseMessage.ADD_CHANNEL_SUCCESS,
    //       addedChannel,
    //       addedChannels
    //     )
    //   );
  
  } catch (error) {
    functions.logger.error(`[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`, `[CONTENT] ${error}`);
    console.log(error);
    
    res.status(statusCode.BAD_REQUEST)
      .send(util.fail
        (
          statusCode.BAD_REQUEST,
          responseMessage.NULL_VALUE
        )
      );
  
  } finally {
    client.release();
  }
};