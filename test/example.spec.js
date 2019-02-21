describe("Example", () => {
  describe("cookies", () => {
    beforeEach(() => {
      document.cookie = "cookie=monster";
      document.cookie = "cookieemojidoesntworkinsafari=nomnomnom";
    });

    afterEach(() => {
      document.cookie = "cookie=monster; expires=0";
      document.cookie = "cookieemojidoesntworkinsafari=nomnomnom; expires=0";
    });

    it("should have a value", () => {
      expect(document.cookie).to.eq(
        "cookie=monster; cookieemojidoesntworkinsafari=nomnomnom"
      );
    });
  });
});
