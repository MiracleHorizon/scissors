export default {
  moduleFileExtensions: ['json', 'js', 'ts'],
  rootDir: '.',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*test.ts', '<rootDir>/test/**/*test.ts'],
  transform: {
    '^.+\\.(t|j)s$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.json'
      }
    ]
  },
  moduleNameMapper: {
    '^@config(.*)$': '<rootDir>/src/config',
    '^@internal(.*)$': '<rootDir>/src/internal$1',
    '^@lib(.*)$': '<rootDir>/src/lib$1',
    '^@helpers(.*)$': '<rootDir>/src/lib/helpers$1',
    '^@pipes(.*)$': '<rootDir>/src/lib/pipes$1',
    '^@validation(.*)$': '<rootDir>/src/lib/validation$1'
  }
}
