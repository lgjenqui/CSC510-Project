module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverage: true,
    collectCoverageFrom: ['movierepository.ts'],
    coverageThreshold: {
    	global: {
      		branches: 70,
      		lines: 70,
   		},
    }
  };
  