class Cache {
  constructor() {
    this.cache = null;
  }

  write(value) {
    this.cache = value;
  }

  read() {
    return this.cache;
  }
}

module.exports = {
  cache: new Cache(),
};
