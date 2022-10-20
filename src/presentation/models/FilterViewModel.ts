export type IsCompletedFilterViewModelType = {
    getFilterByUrlHash(hash: string): undefined | boolean;
};

const filterViewModel : IsCompletedFilterViewModelType = {
  getFilterByUrlHash(hash: string): undefined | boolean {
    const regexActive = /\/active/g;
    const regexCompleted = /\/completed/g;
    if (hash.match(regexActive)) {
      return false;
    }
    if (hash.match(regexCompleted)) {
      return true;
    }
    return undefined;
  },
};

export { filterViewModel };
