import defer from '../defer';

describe('defer', () => {
    it('should return a function', () => {
        // Arrange

        // Act
        const result = defer();

        // Assert
        expect(result).to.be.a('function');
    });

    it('should return a function that will return the provided argument', () => {
        // Arrange
        const expectedValue = 42;
        const callback = defer(expectedValue);

        // Act
        const actualValue = callback();

        // Assert
        expect(actualValue).to.equal(expectedValue);
    });

    it('should return undefined if no argument is provided', () => {
        // Arrange
        const expectedValue = undefined;
        const callback = defer();

        // Act
        const actualValue = callback();

        // Assert
        expect(actualValue).to.equal(expectedValue);
    });
});
