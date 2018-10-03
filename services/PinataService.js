const pinataData = require("../data/data").pinatas;

const PinataService = () => {
    const getAllPinatas = () => {

    };

    const getPinataById = () => {

    };

    const createPinata = () => {

    };

    const hitPinataById = (id) => {
        for(var i = 0; i < pinataData.length; i++) {
            if(pinataData[i].id == id) {
                if(pinataData[i].maximumHits < 0) {
                    return -1;
                }

                pinataData[i].maximumHits--;

                if (pinataData[i].maximumHits === 0) {
                    pinataData[i].maximumHits--;
                    return { "surprise": pinataData[i].surprise};
                }

                return 1;
            }
            return 0;
        }

    };

    return {
        getAllPinatas,
        getPinataById,
        createPinata,
        hitPinataById
    }
};

module.exports = PinataService();
