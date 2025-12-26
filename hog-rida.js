define("ace/theme/tomorrow_night", ["require", "exports", "module", "ace/lib/dom"], function(require, exports, module) {
  exports.isDark = true;
  exports.cssClass = "ace-tomorrow_night-theme";
  exports.cssText = `
.ace_editor.ace-tomorrow_night-theme {
  background-image: url('https://media1.tenor.com/m/E1QRYiemnM0AAAAC/hog-rider.gif');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
}

.ace-tomorrow_night-theme .ace_scroller,
.ace-tomorrow_night-theme .ace_content,
.ace-tomorrow_night-theme .ace_marker-layer,
.ace-tomorrow_night-theme .ace_gutter {
  background: transparent;
}

.ace-tomorrow_night-theme .ace_gutter {
  color: #ffffff;
}

.ace-tomorrow_night-theme .ace_print-margin {
  width: 1px;
  background: transparent;
}

.ace-tomorrow_night-theme .ace_selection {
  background-color: #14791B;
}

.ace-tomorrow_night-theme .ace_active-line,
.ace-tomorrow_night-theme .ace_gutter-active-line {
  background: transparent;
}

.ace-tomorrow_night-theme .ace_selected-word {
  border: none;
  background-color: #14791B;
}

.ace_editor.ace-tomorrow_night-theme,
.ace-tomorrow_night-theme,
.ace-tomorrow_night-theme .ace_text-layer,
.ace-tomorrow_night-theme .ace_keyword,
.ace-tomorrow_night-theme .ace_string,
.ace-tomorrow_night-theme .ace_constant,
.ace-tomorrow_night-theme .ace_variable,
.ace-tomorrow_night-theme .ace_support,
.ace-tomorrow_night-theme .ace_function,
.ace-tomorrow_night-theme .ace_type,
.ace-tomorrow_night-theme .ace_meta,
.ace-tomorrow_night-theme .ace_comment {
  color: #ffffff !important;
}

.ace-tomorrow_night-theme .ace_invisible {
  color: transparent;
}

.ace-tomorrow_night-theme .ace_invalid,
.ace-tomorrow_night-theme .ace_invalid.ace_deprecated {
  color: #ffffff;
  background-color: transparent;
}
`;

  var dom = require("../lib/dom");
  dom.importCssString(exports.cssText, exports.cssClass);
});
