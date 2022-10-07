import {find, filter, includes} from "lodash";

let prod = [
  {
    id: 1,
    name: "ball",
    price: "25",
  },
  {
    id: 2,
    name: "bat",
    price: "100"
  },
  {
    id: 3,
    name: "cat_bat",
    price: "30",
  },
  {
    id: 4,
    name: "dog_ball",
    price: "60"
  }
];

function search(prod, srhVal) {
    return filter(prod, p1 => includes(p1.name, srhVal));
}

console.log(search(prod, "_"));


console.log(find(prod, {name: "bat"}))

console.log(find(prod, {id: 1}))

