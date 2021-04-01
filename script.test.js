const googleSearch = require("./script");

dbMock = ["dog.com", " cheese.com", "disney.com", "dogpictures.com"];

it("this is searching google", () => {
  expect(googleSearch("testtest", dbMock)).toEqual([]);

  expect(googleSearch("dog", dbMock)).toEqual(["dog.com", "dogpictures.com"]);
});
