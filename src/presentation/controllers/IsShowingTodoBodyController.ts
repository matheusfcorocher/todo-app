
  type UpdateTodoTaskFunction = (...args: any[]) => any;
  
  export type IsShowingTodoBodyControllerType = {
    isShowingTodoBody: boolean;
    updateIsShowingTodoBody: UpdateTodoTaskFunction;
  };
  
  export type IsShowingTodoBodyControllerReturnType = {
    getIsShowingTodoBody(): boolean;
    handleChangeIsShowingTodoBody(isShowingTodoBody: boolean): void;
  };
  
  export function makeIsShowingTodoBodyController({
    isShowingTodoBody,
    updateIsShowingTodoBody,
  }: IsShowingTodoBodyControllerType): IsShowingTodoBodyControllerReturnType {
    return {
        getIsShowingTodoBody() {
            return isShowingTodoBody;
        },
        handleChangeIsShowingTodoBody(isShowingTodoBody: boolean): void {
            updateIsShowingTodoBody(isShowingTodoBody);
        }
    };
}
  