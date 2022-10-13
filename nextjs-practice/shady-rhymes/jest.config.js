// jest.config.js
module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  moduleNameMapper: {
    /* Handle CSS imports (with CSS modules)
      https://jestjs.io/docs/webpack#mocking-css-modules */
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

    /* Handle image imports
      https://jestjs.io/docs/webpack#handling-static-assets */
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$':
      '<rootDir>/__mocks__/fileMock.js',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@constants(.*)$': ['<rootDir>/src/constants$1'],
    '^@contexts(.*)$': ['<rootDir>/src/contexts$1'],
    '^@helpers(.*)$': ['<rootDir>/src/models$1'],
    '^@models(.*)$': ['<rootDir>/src/models$1'],
    '^@pages(.*)$': ['<rootDir>/src/pages$1'],
    '^@services(.*)$': ['<rootDir>/src/services$1'],
    '^@stores(.*)$': ['<rootDir>/src/stores$1'],
    '^@styles(.*)$': ['<rootDir>/src/styles$1'],
    '^@themes(.*)$': ['<rootDir>/src/themes$1'],
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
      https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
};
