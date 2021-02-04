const chardonnay = {
  type: "still white",
  grape: "Chardonnay",
  region: "France",
  description: function () {
    return `This is a ${this.type} wine made of 100% ${this.grape} grapes from ${this.region}.`;
  },
};

const lambrusco = {
  type: "sparkling red",
  grape: "Lambrusco",
  region: "Italy",
};

// CALL use case:

console.log(chardonnay.description.call(lambrusco)); // Prints: 'This is a sparkling red wine made of 100% lambrusco grapes from Italy.'

// APPLY use case;

const blendMoreGrapes = function (extraGrape1, extraGrape2) {
  return `This ${this.grape} wine is blended with other grapes such as ${extraGrape1} or ${extraGrape2}.`;
};

console.log(blendMoreGrapes.apply(lambrusco, ["Ancelotta", "Cabernet Sauvignon"])); // Prints: 'This lambrusco wine is blended with other grapes such as ancelotta or cabernet sauvignon.'

// BIND use case:

const malbec = {
  type: "still red",
  grape: "Malbec",
  region: "Argentina",
  getRegion: function () {
    return this.region;
  },
};

region = "Spain";

console.log(malbec.getRegion()); // Prints: 'Argentina'

const getRegionWithThisGlobalScope = malbec.getRegion;

console.log(getRegionWithThisGlobalScope()); // Prints: 'Spain'

const getRegionWithThisBlockScope = getRegionWithThisGlobalScope.bind(lambrusco);

console.log(getRegionWithThisBlockScope()); // Prints: 'Italy'

// SELF-INVOKED FUNCTION use case:

(function () {
  console.log(`Use case examples of call, apply and bind methods done! Keep going!`);
})();

// HOISTING use case:

const wineComparison = function () {
  return `${favouriteWine} is one of my favourite wines.`;
};

const favouriteWine = "Rioja";

console.log(wineComparison()); // Prints: 'Rioja is one of my favourite wines.'

// CLOSURE use case:

const favouriteWhite = "Albariño";

function initialFavouriteWhite() {
  return `My favourite white wine is ${favouriteWhite}`;
}

function finalFavouriteWhite() {
  const favouriteWhite = "Champagne";
  return initialFavouriteWhite();
}

console.log(initialFavouriteWhite()); // Prints: 'My favourite white wine is Albariño';

// CURRYING use case:

const curryingWines = (wine1) => {
  return (wine2) => {
    return (wine3) => {
      return `Wouldn't mind having a glass of ${wine1}, ${wine2} or ${wine3} right now!`;
    };
  };
};

console.log(curryingWines(favouriteWine)(favouriteWhite)("Champagne")); // Prints: 'Wouldn't mind having a glass of Rioja, Albariño or Champagne right now!'
