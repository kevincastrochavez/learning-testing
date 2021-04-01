const googleSearch = require("./script");

dbMock = ["dog.com", " cheese.com", "disney.com", "dogpictures.com"];

describe("googleSearch", () => {
  it("this is searching google", () => {
    expect(googleSearch("testtest", dbMock)).toEqual([]);

    expect(googleSearch("dog", dbMock)).toEqual(["dog.com", "dogpictures.com"]);
  });

  it("work with undefined and null input", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("Doesn't return more than 3 matches", () => {
    expect(googleSearch("d", dbMock).length).toEqual(3);
  });
});
