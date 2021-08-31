"use strict";
(() => {
var exports = {};
exports.id = "pages/api/biased";
exports.ids = ["pages/api/biased"];
exports.modules = {

/***/ "./pages/api/biased.js":
/*!*****************************!*\
  !*** ./pages/api/biased.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getReply": () => (/* binding */ getReply),
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const Sentiment = __webpack_require__(/*! sentiment */ "sentiment");

const sentiment = new Sentiment();
const positive = ['It is Certain.', 'It is decidedly so.', 'Without a doubt.', 'Yes definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.'];
const neutral = ['Reply hazy, try again.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.'];
const negative = ["Don't count on it.", 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];
const getReply = (question, condition) => {
  let rating = sentiment.analyze(question);

  if (condition === 'biased') {
    if (rating.score > 0) {
      return {
        'reading': positive[Math.floor(Math.random() * positive.length)],
        'question': question,
        'sentiment': rating
      };
    } else if (rating.score < 0) {
      return {
        'reading': negative[Math.floor(Math.random() * negative.length)],
        'question': question,
        'sentiment': rating
      };
    } else {
      return {
        'reading': neutral[Math.floor(Math.random() * neutral.length)],
        'question': question,
        'sentiment': rating
      };
    }
  } else {
    let allResponses = positive.concat(negative, neutral);
    return {
      'reading': allResponses[Math.floor(Math.random() * allResponses.length)],
      'question': question
    };
  }
};
function handler(req, res) {
  let response = getReply(req.query.q, 'biased');
  res.setHeader('Content-Type', 'application/json');
  res.json({
    response
  });
}

/***/ }),

/***/ "sentiment":
/*!****************************!*\
  !*** external "sentiment" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("sentiment");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/biased.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2JpYXNlZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxTQUFTLEdBQUdDLG1CQUFPLENBQUMsNEJBQUQsQ0FBekI7O0FBQ0EsTUFBTUMsU0FBUyxHQUFHLElBQUlGLFNBQUosRUFBbEI7QUFDQSxNQUFNRyxRQUFRLEdBQUcsQ0FDZixnQkFEZSxFQUVmLHFCQUZlLEVBR2Ysa0JBSGUsRUFJZixpQkFKZSxFQUtmLHFCQUxlLEVBTWYsbUJBTmUsRUFPZixjQVBlLEVBUWYsZUFSZSxFQVNmLE1BVGUsRUFVZixxQkFWZSxDQUFqQjtBQWFBLE1BQU1DLE9BQU8sR0FBRyxDQUNkLHdCQURjLEVBRWQsa0JBRmMsRUFHZCwwQkFIYyxFQUlkLHFCQUpjLEVBS2QsNEJBTGMsQ0FBaEI7QUFRQSxNQUFNQyxRQUFRLEdBQUcsQ0FDZixvQkFEZSxFQUVmLGlCQUZlLEVBR2Ysb0JBSGUsRUFJZixzQkFKZSxFQUtmLGdCQUxlLENBQWpCO0FBUU8sTUFBTUMsUUFBUSxHQUFHLENBQUNDLFFBQUQsRUFBV0MsU0FBWCxLQUF5QjtBQUMvQyxNQUFJQyxNQUFNLEdBQUdQLFNBQVMsQ0FBQ1EsT0FBVixDQUFrQkgsUUFBbEIsQ0FBYjs7QUFDQSxNQUFJQyxTQUFTLEtBQUssUUFBbEIsRUFBNEI7QUFDeEIsUUFBSUMsTUFBTSxDQUFDRSxLQUFQLEdBQWUsQ0FBbkIsRUFBcUI7QUFDbkIsYUFBTztBQUFDLG1CQUFXUixRQUFRLENBQUVTLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JYLFFBQVEsQ0FBQ1ksTUFBcEMsQ0FBRixDQUFwQjtBQUFxRSxvQkFBWVIsUUFBakY7QUFBMkYscUJBQWFFO0FBQXhHLE9BQVA7QUFDRCxLQUZELE1BR0ssSUFBSUEsTUFBTSxDQUFDRSxLQUFQLEdBQWUsQ0FBbkIsRUFBcUI7QUFDeEIsYUFBTztBQUFDLG1CQUFXTixRQUFRLENBQUVPLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JULFFBQVEsQ0FBQ1UsTUFBcEMsQ0FBRixDQUFwQjtBQUFxRSxvQkFBWVIsUUFBakY7QUFBMkYscUJBQWFFO0FBQXhHLE9BQVA7QUFDRCxLQUZJLE1BR0E7QUFDSCxhQUFPO0FBQUMsbUJBQVdMLE9BQU8sQ0FBRVEsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQlYsT0FBTyxDQUFDVyxNQUFuQyxDQUFGLENBQW5CO0FBQW1FLG9CQUFZUixRQUEvRTtBQUF5RixxQkFBYUU7QUFBdEcsT0FBUDtBQUNEO0FBQ0YsR0FWSCxNQVdLO0FBQ0gsUUFBSU8sWUFBWSxHQUFHYixRQUFRLENBQUNjLE1BQVQsQ0FBZ0JaLFFBQWhCLEVBQTBCRCxPQUExQixDQUFuQjtBQUNBLFdBQU87QUFBQyxpQkFBV1ksWUFBWSxDQUFFSixJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCRSxZQUFZLENBQUNELE1BQXhDLENBQUYsQ0FBeEI7QUFBNkUsa0JBQVlSO0FBQXpGLEtBQVA7QUFDRDtBQUNGLENBakJNO0FBcUJRLFNBQVNXLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCQyxHQUF0QixFQUEyQjtBQUN0QyxNQUFJQyxRQUFRLEdBQUdmLFFBQVEsQ0FBQ2EsR0FBRyxDQUFDRyxLQUFKLENBQVVDLENBQVgsRUFBYyxRQUFkLENBQXZCO0FBQ0FILEVBQUFBLEdBQUcsQ0FBQ0ksU0FBSixDQUFjLGNBQWQsRUFBOEIsa0JBQTlCO0FBQ0FKLEVBQUFBLEdBQUcsQ0FBQ0ssSUFBSixDQUFTO0FBQUVKLElBQUFBO0FBQUYsR0FBVDtBQUNEOzs7Ozs7Ozs7O0FDeERIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2JpYXNlZC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW50aW1lbnRcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTZW50aW1lbnQgPSByZXF1aXJlKCdzZW50aW1lbnQnKTtcclxuY29uc3Qgc2VudGltZW50ID0gbmV3IFNlbnRpbWVudCgpO1xyXG5jb25zdCBwb3NpdGl2ZSA9IFsgXHJcbiAgJ0l0IGlzIENlcnRhaW4uJywgXHJcbiAgJ0l0IGlzIGRlY2lkZWRseSBzby4nLCBcclxuICAnV2l0aG91dCBhIGRvdWJ0LicsIFxyXG4gICdZZXMgZGVmaW5pdGVseS4nLCBcclxuICAnWW91IG1heSByZWx5IG9uIGl0LicsIFxyXG4gICdBcyBJIHNlZSBpdCwgeWVzLicsIFxyXG4gICdNb3N0IGxpa2VseS4nLFxyXG4gICdPdXRsb29rIGdvb2QuJyxcclxuICAnWWVzLicsXHJcbiAgJ1NpZ25zIHBvaW50IHRvIHllcy4nXHJcbl07XHJcblxyXG5jb25zdCBuZXV0cmFsID0gW1xyXG4gICdSZXBseSBoYXp5LCB0cnkgYWdhaW4uJyxcclxuICAnQXNrIGFnYWluIGxhdGVyLicsXHJcbiAgJ0JldHRlciBub3QgdGVsbCB5b3Ugbm93LicsXHJcbiAgJ0Nhbm5vdCBwcmVkaWN0IG5vdy4nLFxyXG4gICdDb25jZW50cmF0ZSBhbmQgYXNrIGFnYWluLidcclxuXTtcclxuXHJcbmNvbnN0IG5lZ2F0aXZlID0gW1xyXG4gIFwiRG9uJ3QgY291bnQgb24gaXQuXCIsXHJcbiAgJ015IHJlcGx5IGlzIG5vLicsXHJcbiAgJ015IHNvdXJjZXMgc2F5IG5vLicsXHJcbiAgJ091dGxvb2sgbm90IHNvIGdvb2QuJyxcclxuICAnVmVyeSBkb3VidGZ1bC4nXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UmVwbHkgPSAocXVlc3Rpb24sIGNvbmRpdGlvbikgPT4ge1xyXG4gIGxldCByYXRpbmcgPSBzZW50aW1lbnQuYW5hbHl6ZShxdWVzdGlvbik7XHJcbiAgaWYgKGNvbmRpdGlvbiA9PT0gJ2JpYXNlZCcpIHtcclxuICAgICAgaWYgKHJhdGluZy5zY29yZSA+IDApe1xyXG4gICAgICAgIHJldHVybiB7J3JlYWRpbmcnOiBwb3NpdGl2ZVsoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zaXRpdmUubGVuZ3RoKSldLCAncXVlc3Rpb24nOiBxdWVzdGlvbiwgJ3NlbnRpbWVudCc6IHJhdGluZ31cclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChyYXRpbmcuc2NvcmUgPCAwKXtcclxuICAgICAgICByZXR1cm4geydyZWFkaW5nJzogbmVnYXRpdmVbKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5lZ2F0aXZlLmxlbmd0aCkpXSwgJ3F1ZXN0aW9uJzogcXVlc3Rpb24sICdzZW50aW1lbnQnOiByYXRpbmd9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHsncmVhZGluZyc6IG5ldXRyYWxbKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ldXRyYWwubGVuZ3RoKSldLCAncXVlc3Rpb24nOiBxdWVzdGlvbiwgJ3NlbnRpbWVudCc6IHJhdGluZ31cclxuICAgICAgfSBcclxuICAgIH1cclxuICBlbHNlIHtcclxuICAgIGxldCBhbGxSZXNwb25zZXMgPSBwb3NpdGl2ZS5jb25jYXQobmVnYXRpdmUsIG5ldXRyYWwpO1xyXG4gICAgcmV0dXJuIHsncmVhZGluZyc6IGFsbFJlc3BvbnNlc1soTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWxsUmVzcG9uc2VzLmxlbmd0aCkpXSwgJ3F1ZXN0aW9uJzogcXVlc3Rpb259XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGxldCByZXNwb25zZSA9IGdldFJlcGx5KHJlcS5xdWVyeS5xLCAnYmlhc2VkJylcclxuICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICByZXMuanNvbih7IHJlc3BvbnNlIH0pO1xyXG4gIH0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW50aW1lbnRcIik7Il0sIm5hbWVzIjpbIlNlbnRpbWVudCIsInJlcXVpcmUiLCJzZW50aW1lbnQiLCJwb3NpdGl2ZSIsIm5ldXRyYWwiLCJuZWdhdGl2ZSIsImdldFJlcGx5IiwicXVlc3Rpb24iLCJjb25kaXRpb24iLCJyYXRpbmciLCJhbmFseXplIiwic2NvcmUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJhbGxSZXNwb25zZXMiLCJjb25jYXQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicmVzcG9uc2UiLCJxdWVyeSIsInEiLCJzZXRIZWFkZXIiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==