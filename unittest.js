var checker = require('./checker');
const expect = require('chai').expect;

expect(checker.vitalsAreOk(100, 95, 70)).to.be.true;
expect(checker.vitalsAreOk(50, 80, 20)).to.be.false;//all fail
expect(checker.vitalsAreOk(200, 80, 20)).to.be.false;//all fail
expect(checker.vitalsAreOk(50, 80, 100)).to.be.false;//all fail
expect(checker.vitalsAreOk(200, 80, 100)).to.be.false;//all fail
expect(checker.vitalsAreOk(100, 80, 50)).to.be.false;//2nd fails
expect(checker.vitalsAreOk(100, 80, 50)).to.be.false;//2nd fails
expect(checker.vitalsAreOk(100, 95, 20)).to.be.false;//3rd fails
expect(checker.vitalsAreOk(100, 95, 100)).to.be.false;//3rd fails
expect(checker.vitalsAreOk(50, 95, 70)).to.be.false;//1st fail
expect(checker.vitalsAreOk(200, 95, 70)).to.be.false;//1st fails
expect(checker.vitalsAreOk(50, 80, 70)).to.be.false;//1 and 2 fails
expect(checker.vitalsAreOk(200, 80, 70)).to.be.false;//1 and 2 fails
expect(checker.vitalsAreOk(50, 95, 20)).to.be.false;//1 and 3 fails
expect(checker.vitalsAreOk(200, 95, 20)).to.be.false;//1 and 3 fails
expect(checker.vitalsAreOk(50, 95, 100)).to.be.false;//1 and 3 fails
expect(checker.vitalsAreOk(200, 95, 100)).to.be.false;//1 and 3 fails

console.log('checker is done');