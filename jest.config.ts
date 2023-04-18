module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverage: true,
    collectCoverageFrom: ['server/movierepository.ts', 'common/movie.ts'],
    coverageThreshold: {
    	global: {
      		branches: 50,
      		lines: 50,
   		},
    },
    testMatch: ['**/server/tests/*.ts', '**/common/tests/*.ts', '**/tests-service/tests/*.ts'],
  };
  