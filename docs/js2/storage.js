const storage = {
    set: (key, data) => {
      try {
        localStorage.setItem(key, JSON.stringify(data));
      } catch (err) {
        console.log('LocalStorage SetItem ', err);
      };
    },
    get: (key) => {
      try {
        return JSON.parse(localStorage.getItem(key));
      } catch (err) {
        console.log('LocalStorage GetItem ', err);
      };
    },
    remove: (key) => localStorage.removeItem(key)
  };



