import { identity, add } from 'ramda';
import { spy } from 'sinon';

import recursiveMap from '../recursive-map';

describe('recursiveMap', () => {
    describe('should return the provided argument if', () => {
        it('is undefined', () => {
            expect(recursiveMap(undefined, identity)).to.be.undefined;
        });

        it('is an array', () => {
            const expectedValue = [1, 2, 3];
            expect(recursiveMap(expectedValue, identity)).to.equal(
                expectedValue
            );
        });

        it('no callback is provided', () => {
            const expectedValue = { hello: 'world' };
            expect(recursiveMap(expectedValue, undefined)).to.equal(
                expectedValue
            );
        });
    });

    describe('callback', () => {
        it('should be called for all found keys', () => {
            // Arrange
            const node = {
                one: 1,
                two: 2,
                three: 3,
                four: 4,
            };
            const callbackSpy = spy();

            // Act
            recursiveMap(node, callbackSpy);

            // Assert
            expect(callbackSpy).to.have.callCount(Object.keys(node).length);
        });

        it('should not be called for keys that have an object as value', () => {
            // Arrange
            const node = {
                nested: {},
                anotherNested: {},
            };
            const callbackSpy = spy();

            // Act
            recursiveMap(node, callbackSpy);

            // Assert
            expect(callbackSpy).to.not.have.been.called;
        });

        it('should be called for all found nested keys', () => {
            // Arrange
            const node = {
                one: 1,
                two: 2,
                three: 3,
                four: 4,
            };
            const callbackSpy = spy();

            // Act
            recursiveMap({ nested: node }, callbackSpy);

            // Assert
            expect(callbackSpy).to.have.callCount(Object.keys(node).length);
        });

        it('should be provided each found key and value', () => {
            // Arrange
            const node = {
                one: 1,
                two: 2,
            };
            const callbackSpy = spy();

            // Act
            recursiveMap(node, callbackSpy);

            // Assert
            callbackSpy.args.forEach(([actualValue, actualKey]) => {
                expect(actualValue).to.equal(node[actualKey]);
            });
        });

        it('should re-assign the returned value of the callback to the found key', () => {
            const node = {
                one: 1,
                two: 2,
            };
            const expectedValue = {
                one: 11,
                two: 12,
            };
            const add10 = add(10);

            // Act
            const actualValue = recursiveMap(node, add10);

            // Assert
            expect(actualValue).to.deep.equal(expectedValue);
        });

        it('should not mutate the provided object', () => {
            // Arrange
            const node = {
                one: 1,
                two: 2,
            };
            const originalNode = Object.assign({}, node);

            // Act
            recursiveMap(node, () => null);

            // Assert
            expect(node).to.deep.equal(originalNode);
        });
    });
});
