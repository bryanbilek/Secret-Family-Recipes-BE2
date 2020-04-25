exports.seed = function (knex) {
  return knex('steps').insert([
    { recipe_id: 1, step_number: 1, step_instruction: 'Preheat oven to 350 degrees' },
    { recipe_id: 1, step_number: 2, step_instruction: 'Mix flour, eggs, & butter in a bowl' },
    { recipe_id: 1, step_number: 3, step_instruction: 'Roll batter into little balls & put in the oven' },
    { recipe_id: 2, step_number: 1, step_instruction: 'Open can of soup' },
    { recipe_id: 2, step_number: 2, step_instruction: 'Pour into pan' },
    { recipe_id: 2, step_number: 3, step_instruction: 'Heat pan on stovetop' },
    { recipe_id: 3, step_number: 1, step_instruction: 'Preheat skillet on stove' },
    { recipe_id: 3, step_number: 2, step_instruction: 'Cook the burgers' },
  ]);
};