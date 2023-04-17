module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverage: true,
    collectCoverageFrom: ['server/movierepository.ts', 'common/movie.ts', 'server/server.ts'],
    coverageReporters: ['json-summary', 'text', 'lcov'],
    testMatch: ['**/server/tests/*.ts', '**/common/tests/*.ts'],
  };
  