---
title: Lua与C++相互调用(Lua调用C++)
tags: [Lua]
authors: cttmayi
---

## Lua调用C
### 定义函数
使用luaL_checknumber读取参数, 使用lua_pushnumber返回返回值
```
#include <lua.hpp>
extern "C" int app_add(lua_State* L) {
    double op1 = luaL_checknumber(L, 1);
    double op2 = luaL_checknumber(L, 2);
    lua_pushnumber(L, op1 + op2);
    return 1;
}
```
### 将函数注册进Lua环境中
```
static luaL_Reg applib[] = {
	{"add", app_add},
	{NULL, NULL}
};

LUALIB_API int luaopen_app (lua_State *L) {
  luaL_newlib(L, applib);
  return 1;
}

int main(){
    lua_State* L = luaL_newstate();  /* create state */
    luaL_openlibs(L);
    luaL_requiref(L,"app",luaopen_app, 0);
}

```
### 在Lua中调用
```
app = require("app")
print(app.add(1.0,2.0))
```