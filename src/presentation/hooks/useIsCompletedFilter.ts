import React, { useState, useEffect } from "react";
import { IsCompletedFilterViewModelType } from "../models/FilterViewModel";

type useIsCompletedFilterType = {
    hash: string;
    isCompletedFilterViewModel: IsCompletedFilterViewModelType;
}

export function useIsCompletedFilter({hash, isCompletedFilterViewModel}: useIsCompletedFilterType) {
  const [filter, setFilter] = useState<boolean | undefined>(
    isCompletedFilterViewModel.getFilterByUrlHash(hash)
  );
  
  useEffect(() => {
    setFilter(isCompletedFilterViewModel.getFilterByUrlHash(hash));
  }, [hash]);

  return {filter, setFilter};
}
