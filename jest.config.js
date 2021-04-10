module.exports = {
    roots: ['src'],
    preset: 'ts-jest/presets/js-with-ts',
    transform: {
        '^.+\\.[t|j]sx?$': 'ts-jest',
        '\\.(css|less|scss)$': './src/__tests__/__mocks__/styleMock.js',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '^@app(.*)$': '<rootDir>/src/$1',
        i18next: '<rootDir>/src/__tests__/__mocks__/i18nextMock.js',
    },
    testEnvironment: 'node',
    globals: {
        'ts-jest': {
            diagnostics: {
                warnOnly: true,
            },
        },
        window: {
            config: {
                constants: {
                    loginMinLength: 7,
                },
            },
        },
    },
    snapshotSerializers: ['enzyme-to-json/serializer'],
    setupFilesAfterEnv: ['./src/setupEnzyme.ts'],
    coverageDirectory: '<rootDir>/reports/coverage/',
    coverageReporters: [
        'lcov',
        'cobertura',
        'text-summary'
    ],
    collectCoverageFrom: [
        'src/common/**/*.{ts,tsx}',
        '!**/node_modules/**',
        '!**/vendor/**',
    ],
    testPathIgnorePatterns: [
        '<rootDir>/reports/',
        '<rootDir>/target/',
        '<rootDir>/node_modules/',
    ],
    reporters: [
        'default',
        ['jest-junit', {
            suiteName: 'react-ts-boilerplate',
            outputDirectory: '<rootDir>/reports/tests/',
            outputName: 'TESTS.xml',
            // eslint-disable-next-line no-template-curly-in-string
            uniqueOutputName: 'TESTS-${uuid}.xml',
        }],
    ],
}
