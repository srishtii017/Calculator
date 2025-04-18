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
exports.id = "app/api/mock/numbers/[type]/route";
exports.ids = ["app/api/mock/numbers/[type]/route"];
exports.modules = {

/***/ "(rsc)/./app/api/mock/numbers/[type]/route.ts":
/*!**********************************************!*\
  !*** ./app/api/mock/numbers/[type]/route.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n// Mock data for testing when the real backend is not available\nconst mockData = {\n    p: {\n        windowPrevState: [],\n        windowCurrState: [\n            1,\n            3,\n            5,\n            7\n        ],\n        numbers: [\n            1,\n            3,\n            5,\n            7\n        ],\n        avg: 4.0\n    },\n    f: {\n        windowPrevState: [],\n        windowCurrState: [\n            1,\n            1,\n            2,\n            3,\n            5,\n            8\n        ],\n        numbers: [\n            1,\n            1,\n            2,\n            3,\n            5,\n            8\n        ],\n        avg: 3.33\n    },\n    e: {\n        windowPrevState: [\n            2,\n            4,\n            6,\n            8\n        ],\n        windowCurrState: [\n            10,\n            12,\n            14,\n            16,\n            18,\n            20\n        ],\n        numbers: [\n            2,\n            4,\n            6,\n            8,\n            10,\n            12,\n            14,\n            16,\n            18,\n            20\n        ],\n        avg: 11.0\n    },\n    r: {\n        windowPrevState: [\n            5,\n            10,\n            15\n        ],\n        windowCurrState: [\n            20,\n            25,\n            30,\n            35,\n            40\n        ],\n        numbers: [\n            5,\n            10,\n            15,\n            20,\n            25,\n            30,\n            35,\n            40\n        ],\n        avg: 22.5\n    }\n};\n// ✅ Correct way to access params from App Router\nasync function GET(request, context) {\n    const { type } = context.params;\n    // Simulate network delay\n    await new Promise((resolve)=>setTimeout(resolve, 500));\n    if (![\n        \"p\",\n        \"f\",\n        \"e\",\n        \"r\"\n    ].includes(type)) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Invalid number type. Use p, f, e, or r.\"\n        }, {\n            status: 400\n        });\n    }\n    // Return mock data based on the requested type\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(mockData[type]);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL21vY2svbnVtYmVycy9bdHlwZV0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkM7QUFFM0MsK0RBQStEO0FBQy9ELE1BQU1DLFdBQVc7SUFDZkMsR0FBRztRQUNEQyxpQkFBaUIsRUFBRTtRQUNuQkMsaUJBQWlCO1lBQUM7WUFBRztZQUFHO1lBQUc7U0FBRTtRQUM3QkMsU0FBUztZQUFDO1lBQUc7WUFBRztZQUFHO1NBQUU7UUFDckJDLEtBQUs7SUFDUDtJQUNBQyxHQUFHO1FBQ0RKLGlCQUFpQixFQUFFO1FBQ25CQyxpQkFBaUI7WUFBQztZQUFHO1lBQUc7WUFBRztZQUFHO1lBQUc7U0FBRTtRQUNuQ0MsU0FBUztZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztTQUFFO1FBQzNCQyxLQUFLO0lBQ1A7SUFDQUUsR0FBRztRQUNETCxpQkFBaUI7WUFBQztZQUFHO1lBQUc7WUFBRztTQUFFO1FBQzdCQyxpQkFBaUI7WUFBQztZQUFJO1lBQUk7WUFBSTtZQUFJO1lBQUk7U0FBRztRQUN6Q0MsU0FBUztZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBSTtZQUFJO1lBQUk7WUFBSTtZQUFJO1NBQUc7UUFDN0NDLEtBQUs7SUFDUDtJQUNBRyxHQUFHO1FBQ0ROLGlCQUFpQjtZQUFDO1lBQUc7WUFBSTtTQUFHO1FBQzVCQyxpQkFBaUI7WUFBQztZQUFJO1lBQUk7WUFBSTtZQUFJO1NBQUc7UUFDckNDLFNBQVM7WUFBQztZQUFHO1lBQUk7WUFBSTtZQUFJO1lBQUk7WUFBSTtZQUFJO1NBQUc7UUFDeENDLEtBQUs7SUFDUDtBQUNGO0FBRUEsaURBQWlEO0FBQzFDLGVBQWVJLElBQUlDLE9BQWdCLEVBQUVDLE9BQXFDO0lBQy9FLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdELFFBQVFFLE1BQU07SUFFL0IseUJBQXlCO0lBQ3pCLE1BQU0sSUFBSUMsUUFBUSxDQUFDQyxVQUFZQyxXQUFXRCxTQUFTO0lBRW5ELElBQUksQ0FBQztRQUFDO1FBQUs7UUFBSztRQUFLO0tBQUksQ0FBQ0UsUUFBUSxDQUFDTCxPQUFPO1FBQ3hDLE9BQU9iLHFEQUFZQSxDQUFDbUIsSUFBSSxDQUN0QjtZQUFFQyxPQUFPO1FBQTBDLEdBQ25EO1lBQUVDLFFBQVE7UUFBSTtJQUVsQjtJQUVBLCtDQUErQztJQUMvQyxPQUFPckIscURBQVlBLENBQUNtQixJQUFJLENBQUNsQixRQUFRLENBQUNZLEtBQThCO0FBQ2xFIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHNzaGFyXFxEb3dubG9hZHNcXGF2ZXJhZ2UtY2FsY3VsYXRvci14XFxhcHBcXGFwaVxcbW9ja1xcbnVtYmVyc1xcW3R5cGVdXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuLy8gTW9jayBkYXRhIGZvciB0ZXN0aW5nIHdoZW4gdGhlIHJlYWwgYmFja2VuZCBpcyBub3QgYXZhaWxhYmxlXG5jb25zdCBtb2NrRGF0YSA9IHtcbiAgcDoge1xuICAgIHdpbmRvd1ByZXZTdGF0ZTogW10sXG4gICAgd2luZG93Q3VyclN0YXRlOiBbMSwgMywgNSwgN10sXG4gICAgbnVtYmVyczogWzEsIDMsIDUsIDddLFxuICAgIGF2ZzogNC4wLFxuICB9LFxuICBmOiB7XG4gICAgd2luZG93UHJldlN0YXRlOiBbXSxcbiAgICB3aW5kb3dDdXJyU3RhdGU6IFsxLCAxLCAyLCAzLCA1LCA4XSxcbiAgICBudW1iZXJzOiBbMSwgMSwgMiwgMywgNSwgOF0sXG4gICAgYXZnOiAzLjMzLFxuICB9LFxuICBlOiB7XG4gICAgd2luZG93UHJldlN0YXRlOiBbMiwgNCwgNiwgOF0sXG4gICAgd2luZG93Q3VyclN0YXRlOiBbMTAsIDEyLCAxNCwgMTYsIDE4LCAyMF0sXG4gICAgbnVtYmVyczogWzIsIDQsIDYsIDgsIDEwLCAxMiwgMTQsIDE2LCAxOCwgMjBdLFxuICAgIGF2ZzogMTEuMCxcbiAgfSxcbiAgcjoge1xuICAgIHdpbmRvd1ByZXZTdGF0ZTogWzUsIDEwLCAxNV0sXG4gICAgd2luZG93Q3VyclN0YXRlOiBbMjAsIDI1LCAzMCwgMzUsIDQwXSxcbiAgICBudW1iZXJzOiBbNSwgMTAsIDE1LCAyMCwgMjUsIDMwLCAzNSwgNDBdLFxuICAgIGF2ZzogMjIuNSxcbiAgfSxcbn07XG5cbi8vIOKchSBDb3JyZWN0IHdheSB0byBhY2Nlc3MgcGFyYW1zIGZyb20gQXBwIFJvdXRlclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0OiBSZXF1ZXN0LCBjb250ZXh0OiB7IHBhcmFtczogeyB0eXBlOiBzdHJpbmcgfSB9KSB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gY29udGV4dC5wYXJhbXM7XG5cbiAgLy8gU2ltdWxhdGUgbmV0d29yayBkZWxheVxuICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCA1MDApKTtcblxuICBpZiAoIVtcInBcIiwgXCJmXCIsIFwiZVwiLCBcInJcIl0uaW5jbHVkZXModHlwZSkpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiBcIkludmFsaWQgbnVtYmVyIHR5cGUuIFVzZSBwLCBmLCBlLCBvciByLlwiIH0sXG4gICAgICB7IHN0YXR1czogNDAwIH1cbiAgICApO1xuICB9XG5cbiAgLy8gUmV0dXJuIG1vY2sgZGF0YSBiYXNlZCBvbiB0aGUgcmVxdWVzdGVkIHR5cGVcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKG1vY2tEYXRhW3R5cGUgYXMga2V5b2YgdHlwZW9mIG1vY2tEYXRhXSk7XG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIm1vY2tEYXRhIiwicCIsIndpbmRvd1ByZXZTdGF0ZSIsIndpbmRvd0N1cnJTdGF0ZSIsIm51bWJlcnMiLCJhdmciLCJmIiwiZSIsInIiLCJHRVQiLCJyZXF1ZXN0IiwiY29udGV4dCIsInR5cGUiLCJwYXJhbXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJpbmNsdWRlcyIsImpzb24iLCJlcnJvciIsInN0YXR1cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/mock/numbers/[type]/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmock%2Fnumbers%2F%5Btype%5D%2Froute&page=%2Fapi%2Fmock%2Fnumbers%2F%5Btype%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmock%2Fnumbers%2F%5Btype%5D%2Froute.ts&appDir=C%3A%5CUsers%5Csshar%5CDownloads%5Caverage-calculator-x%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csshar%5CDownloads%5Caverage-calculator-x&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmock%2Fnumbers%2F%5Btype%5D%2Froute&page=%2Fapi%2Fmock%2Fnumbers%2F%5Btype%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmock%2Fnumbers%2F%5Btype%5D%2Froute.ts&appDir=C%3A%5CUsers%5Csshar%5CDownloads%5Caverage-calculator-x%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csshar%5CDownloads%5Caverage-calculator-x&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_sshar_Downloads_average_calculator_x_app_api_mock_numbers_type_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/mock/numbers/[type]/route.ts */ \"(rsc)/./app/api/mock/numbers/[type]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/mock/numbers/[type]/route\",\n        pathname: \"/api/mock/numbers/[type]\",\n        filename: \"route\",\n        bundlePath: \"app/api/mock/numbers/[type]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\sshar\\\\Downloads\\\\average-calculator-x\\\\app\\\\api\\\\mock\\\\numbers\\\\[type]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_sshar_Downloads_average_calculator_x_app_api_mock_numbers_type_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZtb2NrJTJGbnVtYmVycyUyRiU1QnR5cGUlNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRm1vY2slMkZudW1iZXJzJTJGJTVCdHlwZSU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRm1vY2slMkZudW1iZXJzJTJGJTVCdHlwZSU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNzc2hhciU1Q0Rvd25sb2FkcyU1Q2F2ZXJhZ2UtY2FsY3VsYXRvci14JTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNzc2hhciU1Q0Rvd25sb2FkcyU1Q2F2ZXJhZ2UtY2FsY3VsYXRvci14JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUM0QztBQUN6SDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcc3NoYXJcXFxcRG93bmxvYWRzXFxcXGF2ZXJhZ2UtY2FsY3VsYXRvci14XFxcXGFwcFxcXFxhcGlcXFxcbW9ja1xcXFxudW1iZXJzXFxcXFt0eXBlXVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvbW9jay9udW1iZXJzL1t0eXBlXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL21vY2svbnVtYmVycy9bdHlwZV1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL21vY2svbnVtYmVycy9bdHlwZV0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxzc2hhclxcXFxEb3dubG9hZHNcXFxcYXZlcmFnZS1jYWxjdWxhdG9yLXhcXFxcYXBwXFxcXGFwaVxcXFxtb2NrXFxcXG51bWJlcnNcXFxcW3R5cGVdXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmock%2Fnumbers%2F%5Btype%5D%2Froute&page=%2Fapi%2Fmock%2Fnumbers%2F%5Btype%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmock%2Fnumbers%2F%5Btype%5D%2Froute.ts&appDir=C%3A%5CUsers%5Csshar%5CDownloads%5Caverage-calculator-x%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csshar%5CDownloads%5Caverage-calculator-x&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmock%2Fnumbers%2F%5Btype%5D%2Froute&page=%2Fapi%2Fmock%2Fnumbers%2F%5Btype%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmock%2Fnumbers%2F%5Btype%5D%2Froute.ts&appDir=C%3A%5CUsers%5Csshar%5CDownloads%5Caverage-calculator-x%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csshar%5CDownloads%5Caverage-calculator-x&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();