const filterViewModel = {
    getFilterByUrlHash(hash : string) : undefined | true | false {
        const regexActive = /\/active/g;
        const regexCompleted = /\/completed/g;
        if(hash.match(regexActive)) {
            return false;
        }
        if(hash.match(regexCompleted)) {
            return true;
        }
        return undefined;
    }
};

export { filterViewModel };