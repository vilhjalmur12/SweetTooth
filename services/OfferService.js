const offerData = require("../data/data").offers;
const candyService = require("../services/CandyService");

const OfferService = () => {
  //return all offers with candies
    const getAllOffers = () => {
    const retValue = offerData;
    retValue.forEach(offer => {
      offer.candies.forEach((candy, index) => {
        offer.candies[index] = candyService.getCandyById(candy);
      })
    });
      return retValue;
    };

    return {
        getAllOffers
    };
};

module.exports = OfferService();
