/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/proxy/health-check/route";
exports.ids = ["app/api/proxy/health-check/route"];
exports.modules = {

/***/ "(rsc)/./app/api/proxy/health-check/route.ts":
/*!*********************************************!*\
  !*** ./app/api/proxy/health-check/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n// This endpoint checks if the backend is available\nasync function GET() {\n    const baseUrl = process.env.BACKEND_URL || \"http://localhost:9876\";\n    try {\n        // Use a short timeout for the health check\n        const controller = new AbortController();\n        const timeoutId = setTimeout(()=>controller.abort(), 2000);\n        const response = await fetch(`${baseUrl}/health`, {\n            signal: controller.signal\n        });\n        clearTimeout(timeoutId);\n        if (response.ok) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                status: \"ok\"\n            });\n        } else {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                status: \"error\",\n                message: \"Backend responded with an error\"\n            }, {\n                status: 503\n            });\n        }\n    } catch (error) {\n        console.error(\"Health check failed:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            status: \"error\",\n            message: \"Backend server is not available\"\n        }, {\n            status: 503\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Byb3h5L2hlYWx0aC1jaGVjay9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUEwQztBQUUxQyxtREFBbUQ7QUFDNUMsZUFBZUM7SUFDcEIsTUFBTUMsVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxXQUFXLElBQUk7SUFFM0MsSUFBSTtRQUNGLDJDQUEyQztRQUMzQyxNQUFNQyxhQUFhLElBQUlDO1FBQ3ZCLE1BQU1DLFlBQVlDLFdBQVcsSUFBTUgsV0FBV0ksS0FBSyxJQUFJO1FBRXZELE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxHQUFHVixRQUFRLE9BQU8sQ0FBQyxFQUFFO1lBQ2hEVyxRQUFRUCxXQUFXTyxNQUFNO1FBQzNCO1FBRUFDLGFBQWFOO1FBRWIsSUFBSUcsU0FBU0ksRUFBRSxFQUFFO1lBQ2YsT0FBT2YscURBQVlBLENBQUNnQixJQUFJLENBQUM7Z0JBQUVDLFFBQVE7WUFBSztRQUMxQyxPQUFPO1lBQ0wsT0FBT2pCLHFEQUFZQSxDQUFDZ0IsSUFBSSxDQUFDO2dCQUFFQyxRQUFRO2dCQUFTQyxTQUFTO1lBQWtDLEdBQUc7Z0JBQUVELFFBQVE7WUFBSTtRQUMxRztJQUNGLEVBQUUsT0FBT0UsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtRQUN0QyxPQUFPbkIscURBQVlBLENBQUNnQixJQUFJLENBQUM7WUFBRUMsUUFBUTtZQUFTQyxTQUFTO1FBQWtDLEdBQUc7WUFBRUQsUUFBUTtRQUFJO0lBQzFHO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc3NoYXJcXERvd25sb2Fkc1xcYXZlcmFnZS1jYWxjdWxhdG9yLXhcXGFwcFxcYXBpXFxwcm94eVxcaGVhbHRoLWNoZWNrXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIlxuXG4vLyBUaGlzIGVuZHBvaW50IGNoZWNrcyBpZiB0aGUgYmFja2VuZCBpcyBhdmFpbGFibGVcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIGNvbnN0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6OTg3NlwiXG5cbiAgdHJ5IHtcbiAgICAvLyBVc2UgYSBzaG9ydCB0aW1lb3V0IGZvciB0aGUgaGVhbHRoIGNoZWNrXG4gICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxuICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4gY29udHJvbGxlci5hYm9ydCgpLCAyMDAwKVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9oZWFsdGhgLCB7XG4gICAgICBzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsLFxuICAgIH0pXG5cbiAgICBjbGVhclRpbWVvdXQodGltZW91dElkKVxuXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdGF0dXM6IFwib2tcIiB9KVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdGF0dXM6IFwiZXJyb3JcIiwgbWVzc2FnZTogXCJCYWNrZW5kIHJlc3BvbmRlZCB3aXRoIGFuIGVycm9yXCIgfSwgeyBzdGF0dXM6IDUwMyB9KVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiSGVhbHRoIGNoZWNrIGZhaWxlZDpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3RhdHVzOiBcImVycm9yXCIsIG1lc3NhZ2U6IFwiQmFja2VuZCBzZXJ2ZXIgaXMgbm90IGF2YWlsYWJsZVwiIH0sIHsgc3RhdHVzOiA1MDMgfSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIkdFVCIsImJhc2VVcmwiLCJwcm9jZXNzIiwiZW52IiwiQkFDS0VORF9VUkwiLCJjb250cm9sbGVyIiwiQWJvcnRDb250cm9sbGVyIiwidGltZW91dElkIiwic2V0VGltZW91dCIsImFib3J0IiwicmVzcG9uc2UiLCJmZXRjaCIsInNpZ25hbCIsImNsZWFyVGltZW91dCIsIm9rIiwianNvbiIsInN0YXR1cyIsIm1lc3NhZ2UiLCJlcnJvciIsImNvbnNvbGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/proxy/health-check/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproxy%2Fhealth-check%2Froute&page=%2Fapi%2Fproxy%2Fhealth-check%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproxy%2Fhealth-check%2Froute.ts&appDir=C%3A%5CUsers%5Csshar%5CDownloads%5Caverage-calculator-x%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csshar%5CDownloads%5Caverage-calculator-x&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproxy%2Fhealth-check%2Froute&page=%2Fapi%2Fproxy%2Fhealth-check%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproxy%2Fhealth-check%2Froute.ts&appDir=C%3A%5CUsers%5Csshar%5CDownloads%5Caverage-calculator-x%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csshar%5CDownloads%5Caverage-calculator-x&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_sshar_Downloads_average_calculator_x_app_api_proxy_health_check_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/proxy/health-check/route.ts */ \"(rsc)/./app/api/proxy/health-check/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/proxy/health-check/route\",\n        pathname: \"/api/proxy/health-check\",\n        filename: \"route\",\n        bundlePath: \"app/api/proxy/health-check/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\sshar\\\\Downloads\\\\average-calculator-x\\\\app\\\\api\\\\proxy\\\\health-check\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_sshar_Downloads_average_calculator_x_app_api_proxy_health_check_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwcm94eSUyRmhlYWx0aC1jaGVjayUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcHJveHklMkZoZWFsdGgtY2hlY2slMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZwcm94eSUyRmhlYWx0aC1jaGVjayUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNzc2hhciU1Q0Rvd25sb2FkcyU1Q2F2ZXJhZ2UtY2FsY3VsYXRvci14JTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNzc2hhciU1Q0Rvd25sb2FkcyU1Q2F2ZXJhZ2UtY2FsY3VsYXRvci14JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUMwQztBQUN2SDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcc3NoYXJcXFxcRG93bmxvYWRzXFxcXGF2ZXJhZ2UtY2FsY3VsYXRvci14XFxcXGFwcFxcXFxhcGlcXFxccHJveHlcXFxcaGVhbHRoLWNoZWNrXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9wcm94eS9oZWFsdGgtY2hlY2svcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9wcm94eS9oZWFsdGgtY2hlY2tcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Byb3h5L2hlYWx0aC1jaGVjay9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXHNzaGFyXFxcXERvd25sb2Fkc1xcXFxhdmVyYWdlLWNhbGN1bGF0b3IteFxcXFxhcHBcXFxcYXBpXFxcXHByb3h5XFxcXGhlYWx0aC1jaGVja1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproxy%2Fhealth-check%2Froute&page=%2Fapi%2Fproxy%2Fhealth-check%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproxy%2Fhealth-check%2Froute.ts&appDir=C%3A%5CUsers%5Csshar%5CDownloads%5Caverage-calculator-x%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csshar%5CDownloads%5Caverage-calculator-x&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproxy%2Fhealth-check%2Froute&page=%2Fapi%2Fproxy%2Fhealth-check%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproxy%2Fhealth-check%2Froute.ts&appDir=C%3A%5CUsers%5Csshar%5CDownloads%5Caverage-calculator-x%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csshar%5CDownloads%5Caverage-calculator-x&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();