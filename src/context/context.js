import React from "react";

const Context = React.createContext(); // tạo 1 global state

export const ContextProvider = Context.Provider;
export default Context;