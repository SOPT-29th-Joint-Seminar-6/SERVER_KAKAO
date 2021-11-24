const util = {
    success: (status, message, data) => {
        return {
            status,
            success: true,
            message,
            data,
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

const util_2 = {
    success: (status, message, data) => {
        return {
            status,
            success: true,
            message,
            data,
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

module.exports = util;