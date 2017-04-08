(function(){
  'use strict';

  describe("Determine the array of prime numbers between 0 and the given number: ", function() {

    describe("Case for a non integer", function() {

      it("should return -1 for non integer", function() {
        expect(getPrimes(" ")).toEqual(-1);
      });

      it("should return -1 for non integer", function() {
        expect(getPrimes("foo")).toEqual(-1);
      });

      it("should return -1 for non integer", function() {
        expect(getPrimes("e")).toEqual(-1);
      });

    });

    describe("Case for non positive integer", function() {

      it("should return -1 for non integer", function() {
        expect(getPrimes(-6)).toEqual(-1);
      });

      it("should return -1 for non integer", function() {
        expect(getPrimes(0)).toEqual(-1);
      });

      it("should return -1 for non integer", function() {
        expect(getPrimes(1)).toEqual(-1);
      });

    });

    describe("Case for a positive integer", function() {

      it("should return [2,3,5,7] for 10", function() {
        expect(getPrimes(10)).toEqual([2,3,5,7]);
      });

      it("should return [2,3,5,7,11,13,17,19,23,29,31] for 36", function() {
        expect(getPrimes(36)).toEqual([2,3,5,7,11,13,17,19,23,29,31]);
      });

      it("should return [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113 for 36]", function() {
        expect(getPrimes(121)).toEqual([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113]);
      });

    });

  });
})();
