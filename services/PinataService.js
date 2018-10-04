const pinataData = require("../data/data").pinatas;

// initialize each pinata with currentHits = 0
pinataData.forEach(item => item.currentHits = 0);

const PinataService = () => {
  //excluding surprise
  const excludeSurprice = JSON.parse(JSON.stringify(pinataData))
  excludeSurprice.forEach(i => {
    delete i.surprise;
  });

    const getAllPinatas = () => {
      const retValue = excludeSurprice;
      return retValue;
    };

    const getPinataById = (id) => {
      const retValue = excludeSurprice.filter(i => i.id == id)
      if(retValue[0]) {
        return retValue[0];
      }
      else {
        return -1;
      }
    };

    const createPinata = (item) => {
      const id = pinataData[pinataData.length - 1].id + 1;
      item.id = id;
      pinataData.push(item);
      return item;
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
