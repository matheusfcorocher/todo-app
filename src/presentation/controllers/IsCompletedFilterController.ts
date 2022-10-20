import { IsCompletedFilterViewModelType } from "../models/FilterViewModel";

  type UpdateTodoTaskFunction = (...args: any[]) => any;
  
  export type IsCompletedFilterControllerType = {
    isCompletedfilter?: boolean;
    updateIsCompletedFilter: UpdateTodoTaskFunction;
    isCompletedFilterViewModel: IsCompletedFilterViewModelType;
  };
  
  export type IsCompletedFilterControllerReturnType = {
    getIsCompletedFilter(): boolean | undefined;
    getFilterByUrlHash(hash : string): boolean | undefined;
    handleChangeFilter(isCompleted?: boolean): void;
  };
  
  export function makeIsCompletedFilterController({
    isCompletedfilter,
    updateIsCompletedFilter,
    isCompletedFilterViewModel
  }: IsCompletedFilterControllerType): IsCompletedFilterControllerReturnType {
    return {
        getIsCompletedFilter(): boolean | undefined {
          return isCompletedfilter;
        },
        getFilterByUrlHash(hash : string): boolean | undefined {
            return isCompletedFilterViewModel.getFilterByUrlHash(hash);
        },
        handleChangeFilter(isCompleted?: boolean): void {
            updateIsCompletedFilter(isCompleted);
        }
    };
  }
  