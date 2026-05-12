class LocalStorage {

  static setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

}

export default LocalStorage;