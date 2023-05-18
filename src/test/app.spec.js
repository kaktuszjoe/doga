describe("szamitasteszt", () => {
    it('A visszadott elem tartalma', () => {
        let actual  = createTd().textContent == 'valami'
        expect(actual).toBe(true)})})