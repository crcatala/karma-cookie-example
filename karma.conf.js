module.exports = function(config) {
  config.set({
    basePath: "./",
    frameworks: ["mocha", "chai"],
    reporters: ["mocha"],
    mochaReporter: {
      showDiff: true
    },
    files: ["test/**/*.js"]
  });
};
