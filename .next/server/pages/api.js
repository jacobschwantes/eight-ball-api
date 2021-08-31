"use strict";
(() => {
var exports = {};
exports.id = "pages/api";
exports.ids = ["pages/api"];
exports.modules = {

/***/ "./pages/api/index.js":
/*!****************************!*\
  !*** ./pages/api/index.js ***!
  \****************************/
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
  let response;

  if (req.query.biased) {
    response = getReply(req.query.q, 'biased');
  } else {
    response = getReply(req.query.q, 'unbiased');
  }

  res.setHeader('Content-Type', 'application/json');
  res.json(response);
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vLy4vcGFnZXMvYXBpL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlbnRpbWVudFwiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNlbnRpbWVudCA9IHJlcXVpcmUoJ3NlbnRpbWVudCcpO1xyXG5jb25zdCBzZW50aW1lbnQgPSBuZXcgU2VudGltZW50KCk7XHJcbmNvbnN0IHBvc2l0aXZlID0gWyBcclxuICAnSXQgaXMgQ2VydGFpbi4nLCBcclxuICAnSXQgaXMgZGVjaWRlZGx5IHNvLicsIFxyXG4gICdXaXRob3V0IGEgZG91YnQuJywgXHJcbiAgJ1llcyBkZWZpbml0ZWx5LicsIFxyXG4gICdZb3UgbWF5IHJlbHkgb24gaXQuJywgXHJcbiAgJ0FzIEkgc2VlIGl0LCB5ZXMuJywgXHJcbiAgJ01vc3QgbGlrZWx5LicsXHJcbiAgJ091dGxvb2sgZ29vZC4nLFxyXG4gICdZZXMuJyxcclxuICAnU2lnbnMgcG9pbnQgdG8geWVzLidcclxuXTtcclxuXHJcbmNvbnN0IG5ldXRyYWwgPSBbXHJcbiAgJ1JlcGx5IGhhenksIHRyeSBhZ2Fpbi4nLFxyXG4gICdBc2sgYWdhaW4gbGF0ZXIuJyxcclxuICAnQmV0dGVyIG5vdCB0ZWxsIHlvdSBub3cuJyxcclxuICAnQ2Fubm90IHByZWRpY3Qgbm93LicsXHJcbiAgJ0NvbmNlbnRyYXRlIGFuZCBhc2sgYWdhaW4uJ1xyXG5dO1xyXG5cclxuY29uc3QgbmVnYXRpdmUgPSBbXHJcbiAgXCJEb24ndCBjb3VudCBvbiBpdC5cIixcclxuICAnTXkgcmVwbHkgaXMgbm8uJyxcclxuICAnTXkgc291cmNlcyBzYXkgbm8uJyxcclxuICAnT3V0bG9vayBub3Qgc28gZ29vZC4nLFxyXG4gICdWZXJ5IGRvdWJ0ZnVsLidcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRSZXBseSA9IChxdWVzdGlvbiwgY29uZGl0aW9uKSA9PiB7XHJcbiAgbGV0IHJhdGluZyA9IHNlbnRpbWVudC5hbmFseXplKHF1ZXN0aW9uKTtcclxuICBpZiAoY29uZGl0aW9uID09PSAnYmlhc2VkJykge1xyXG4gICAgICBpZiAocmF0aW5nLnNjb3JlID4gMCl7XHJcbiAgICAgICAgcmV0dXJuIHsncmVhZGluZyc6IHBvc2l0aXZlWyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NpdGl2ZS5sZW5ndGgpKV0sICdxdWVzdGlvbic6IHF1ZXN0aW9uLCAnc2VudGltZW50JzogcmF0aW5nfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHJhdGluZy5zY29yZSA8IDApe1xyXG4gICAgICAgIHJldHVybiB7J3JlYWRpbmcnOiBuZWdhdGl2ZVsoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmVnYXRpdmUubGVuZ3RoKSldLCAncXVlc3Rpb24nOiBxdWVzdGlvbiwgJ3NlbnRpbWVudCc6IHJhdGluZ31cclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4geydyZWFkaW5nJzogbmV1dHJhbFsoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV1dHJhbC5sZW5ndGgpKV0sICdxdWVzdGlvbic6IHF1ZXN0aW9uLCAnc2VudGltZW50JzogcmF0aW5nfVxyXG4gICAgICB9IFxyXG4gICAgfVxyXG4gIGVsc2Uge1xyXG4gICAgbGV0IGFsbFJlc3BvbnNlcyA9IHBvc2l0aXZlLmNvbmNhdChuZWdhdGl2ZSwgbmV1dHJhbCk7XHJcbiAgICByZXR1cm4geydyZWFkaW5nJzogYWxsUmVzcG9uc2VzWyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhbGxSZXNwb25zZXMubGVuZ3RoKSldLCAncXVlc3Rpb24nOiBxdWVzdGlvbn1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgbGV0IHJlc3BvbnNlO1xyXG4gICAgaWYgKHJlcS5xdWVyeS5iaWFzZWQpIHtcclxuICAgICAgICByZXNwb25zZSA9IGdldFJlcGx5KHJlcS5xdWVyeS5xLCAnYmlhc2VkJylcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJlc3BvbnNlID0gZ2V0UmVwbHkocmVxLnF1ZXJ5LnEsICd1bmJpYXNlZCcpXHJcbiAgICB9XHJcbiAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgcmVzLmpzb24ocmVzcG9uc2UpO1xyXG4gIH0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW50aW1lbnRcIik7Il0sIm5hbWVzIjpbIlNlbnRpbWVudCIsInJlcXVpcmUiLCJzZW50aW1lbnQiLCJwb3NpdGl2ZSIsIm5ldXRyYWwiLCJuZWdhdGl2ZSIsImdldFJlcGx5IiwicXVlc3Rpb24iLCJjb25kaXRpb24iLCJyYXRpbmciLCJhbmFseXplIiwic2NvcmUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJhbGxSZXNwb25zZXMiLCJjb25jYXQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicmVzcG9uc2UiLCJxdWVyeSIsImJpYXNlZCIsInEiLCJzZXRIZWFkZXIiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==