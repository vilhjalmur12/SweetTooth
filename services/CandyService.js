const candyData = require("../data/data").candies;

const CandyService = () => {
    const getAllCandies = () => {
        return candyData;
    };

    const getCandyById = (id) => {
        const retValue = candyData.filter( i => i.id == id )
        if (retValue[0]) {
            return retValue[0];
        } else {
            return -1;
        }
    };

    const createCandy = (item) => {
        const id = candyData[candyData.length-1].id + 1;
        item.id = id;
        candyData.push(item);
        return item;
    };

    return {
        getAllCandies,
        getCandyById,
        createCandy
    };
};


module.exports = CandyService();
