exports.seed = function (knex) {
  return knex('users').insert([
    { first_name: 'Michael', last_name: 'Jordan', email: 'mj23@gmail.com', username: 'mj23', password: 'air' },
    { first_name: 'Scottie', last_name: 'Pippen', email: 'sp33@gmail.com', username: 'sp33', password: 'defense' },
    { first_name: 'Dennis', last_name: 'Rodman', email: 'dr91@gmail.com', username: 'dr91', password: 'hairspray' }
  ]);
};