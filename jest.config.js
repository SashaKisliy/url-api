module.exports = {
  transform: {
    "\\.js$": ["babel-jest"],
    "\\.ts$": ["ts-jest"],
  },
  transformIgnorePatterns: ["node_modules/"],
};
