module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'strapidb.cwxi1wtucpyv.us-east-2.rds.amazonaws.com'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'partsologydb'),
      user: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', 'DNJ2021Partsology'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
