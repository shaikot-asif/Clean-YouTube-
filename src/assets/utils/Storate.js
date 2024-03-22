class Storage {
  Save(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  get(key) {
    const json = localStorage.getItem(key);
    return JSON.parse(json);
  }
}

const storate = new Storage();

export default storate;
