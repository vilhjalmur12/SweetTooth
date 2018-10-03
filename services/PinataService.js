const pinataData = require("../data/data").pinatas;

// TODO: spyrja hvort það sé í lagi að initialize svona
pinataData.forEach(item => item.currentHits = 0);

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
                if(!pinataData[i].currentHits) {
                    pinataData[i].currentHits = 1;
                    return 1;
                }

                pinataData[i].currentHits++;

                if(pinataData[i].currentHits > pinataData[i].maximumHits) {
                    return -1;
                }

                if (pinataData[i].maximumHits == pinataData[i].currentHits) {
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
