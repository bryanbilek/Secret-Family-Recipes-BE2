exports.seed = function (knex) {
  return knex('recipes').insert([
    { user_id: 1, recipe_name: 'Bake Cookies', description: 'Learn how to bake delicious chocolate chip cookies!', prep_time: '15 minutes', cook_time: '10 minutes' },
    { user_id: 1, recipe_name: 'Chicken Noodle Soup', description: 'Learn how to make hot, great-tasting soup!', prep_time: '5 minutes', cook_time: '5 minutes' },
    { user_id: 2, recipe_name: 'Hamburgers', description: 'Learn how to make hamburgers that melt in your mouth!', prep_time: '10 minutes', cook_time: '15 minutes' }
  ]);
};