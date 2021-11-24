const functions = require('firebase-functions');
const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const db = require('../../../db/db');
const { addDB } = require('../../../db');

module.exports = async (req, res) => {

  const {id} = req.params;

  let client;
  
  if (!id) return res.status(statusCode.BAD_REQUEST)
    .send(util.fail
      (
        statusCode.BAD_REQUEST,
        responseMessage.NULL_VALUE
      )
    );
  

  
  try {
    client = await db.connect(req);

    const existChannelNumber = await addDB.existChannel(client,id);

    if (existChannelNumber[0]['cnt'] == 0) {
      return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_EXIST_CHANNEL));
    }

    const channel = await addDB.getExactChannel(client,id);
    
    res.status(statusCode.OK)
      .send(util.success
        (
          statusCode.OK,
          responseMessage.READ_ONE_CHANNEL_SUCCESS,
          channel
        )
      );
  
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