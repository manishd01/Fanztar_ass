// controllers/orderController.js

const COMPONENTS_DATA = {
  A: { code: "A", price: 10.28, part: "LED Screen" },
  B: { code: "B", price: 24.07, part: "OLED Screen" },
  C: { code: "C", price: 33.3, part: "AMOLED Screen" },
  D: { code: "D", price: 25.94, part: "Wide-Angle Camera" },
  E: { code: "E", price: 32.39, part: "Ultra-Wide-Angle Camera" },
  F: { code: "F", price: 18.77, part: "USB-C Port" },
  G: { code: "G", price: 15.13, part: "Micro-USB Port" },
  H: { code: "H", price: 20.0, part: "Lightning Port" },
  I: { code: "I", price: 42.31, part: "Android OS" },
  J: { code: "J", price: 45.0, part: "iOS OS" },
  K: { code: "K", price: 45.0, part: "Metallic Body" },
  L: { code: "L", price: 30.0, part: "Plastic Body" },
};

function createOrder(components) {
  const elementsFromCodes = [];
  const validParts = ["Screen", "Camera", "Port", "OS", "Body"];

  let valueInString = "";
  for (let c of components) {
    valueInString += COMPONENTS_DATA[c].part;
  }
  console.log(valueInString);

  let countCategory = 0;
  if (components.length > validParts.length) {
    throw new Error("select only on element from each category ...");
  }
  for (let ele of validParts) {
    if (valueInString.includes(ele)) {
      countCategory++;
    }
  }
  console.log(countCategory, "ss");
  if (countCategory < validParts.length) {
    throw new Error("SELECT ALL ITEMS ,,pleasee...");
  }

  const totalPrice = components.reduce(
    (sum, componentCode) => sum + COMPONENTS_DATA[componentCode].price,
    0
  );
  let arrValues = [];
  for (let ele of components) {
    arrValues.push(COMPONENTS_DATA[ele].part);
  }

  return {
    order_id: "some-id",
    total: totalPrice,
    parts: arrValues,
  };
}

module.exports = {
  createOrder,
};
