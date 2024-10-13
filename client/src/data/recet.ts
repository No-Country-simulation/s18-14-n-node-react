import { IRecetData } from "@/models";

export const data: IRecetData = {
    title: "LOREM IPSUM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at turpis eget nibh malesuada eleifend. Nullam tortor turpis, ultrices quis ante sit amet, vehicula bibendum mauris.",
    rating: 5,
    stats: [
      { value: 10, description: 'Lorem ipsum' },
      { value: 11, description: 'Lorem ipsum' },
      { value: 12, description: 'Lorem ipsum' },
      { value: 13, description: 'Lorem ipsum' },
    ],
    nutritionalData: [
      { value: 12, description: 'Lorem ipsum' },
      { value: 12, description: 'Lorem ipsum' },
      { value: 12, description: 'Lorem ipsum' },
    ],
    ingredients: [ "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum" ],
    steps: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis venenatis dui. In eu pellentesque felis, non consectetur turpis. Vestibulum at consectetur nibh. Quisque risus turpis, facilisis eget nunc sed, luctus feugiat nulla.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis venenatis dui. In eu pellentesque felis, non consectetur turpis. Vestibulum at consectetur nibh. Quisque risus turpis, facilisis eget nunc sed, luctus feugiat nulla.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis venenatis dui. In eu pellentesque felis, non consectetur turpis. Vestibulum at consectetur nibh. Quisque risus turpis, facilisis eget nunc sed, luctus feugiat nulla.",
    ],
  }
