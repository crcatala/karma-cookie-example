module.exports = function(config) {
  config.set({
    basePath: "./",
    hostname: process.platform === "linux" ? "127.0.0.1" : "localhost",
    frameworks: ["mocha", "chai"],
    reporters: ["mocha"],
    mochaReporter: {
      showDiff: true
    },
    files: ["test/**/*.js"]
  });
};
