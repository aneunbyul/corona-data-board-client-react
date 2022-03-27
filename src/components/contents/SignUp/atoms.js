import {atom} from "recoil";

export const idState = atom({
  key: "idState",
  default: 'recoil로 전달한 id 값'
});
export const todoListState2 = atom({
  key: "todoListState",
  default: [
    {name: "Apples", isCompleted: false},
    {name: "Eggs", isCompleted: false},
    {name: "Butter", isCompleted: false},
  ],
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Hepsini göster",
});
