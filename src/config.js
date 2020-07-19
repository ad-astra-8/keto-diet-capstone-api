module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_TOKEN: process.env.API_TOKEN || 'dummy-api-token',
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgres://xfaksuabuceoza:4ea9a8bc24399ec1818cfc8ea17433074b054a9f3878046b5f1e2891e6f93fd0@ec2-52-204-232-46.compute-1.amazonaws.com:5432/d6iuutqh0v9hej',
	DATABASE_URL: process.env.DATABASE_URL || 'postgresql://noteful@localhost/note-testpostgres://xfaksuabuceoza:4ea9a8bc24399ec1818cfc8ea17433074b054a9f3878046b5f1e2891e6f93fd0@ec2-52-204-232-46.compute-1.amazonaws.com:5432/d6iuutqh0v9hej', 
  JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret',
}