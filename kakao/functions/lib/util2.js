const util_2 = {
  success: (status, message, data1, data2) => {
      return {
          status,
          success: true,
          message,
          data1,
          data2
      };
  },
  fail: (status, message) => {
      return {
          status,
          success: false,
          message,
      };
  },
};

module.exports = util_2;