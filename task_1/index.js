import { encoded, translations } from "./data.js";

console.log("Let's rock");

let arrId = []; // список уникальных ID

function decoded() {
  encoded.forEach((obj) => {
    for (let prop in obj) {
      let value = obj[prop];

      switch (prop) {
        case "groupId":
          break;
        case "service":
          break;
        case "formatSize":
          break;
        case "ca":
          break;
        default:
          /**
           * null === 0
           * Что делать с Не применимо и Не применим?
           */

          let valueNumber = Number(value);
          let valueString = String(valueNumber);

          if (!translations.hasOwnProperty(valueString))
            arrId.push(valueString); // Уникальные ID === undefined

          // Перезапись свойства в obj
          obj[prop] = translations[valueString];
          break;
      }
    }
  });
  return encoded;
}

console.log(decoded());
