const bcryptjs = require('bcryptjs')
const hashCount = require('../../utils/hashCount')

exports.seed = function(knex, Promise)
{
    return knex('users')
    .insert(
        [
            {
                email: "seth.nadu@gmail.com",
                first_name: "Seth",
                last_name: "Nadu",
                password: bcryptjs.hashSync("test", hashCount)
            }
    )
}