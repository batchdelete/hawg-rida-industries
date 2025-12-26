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

.ace-tomorrow_night-theme .ace_text-layer {
  text-shadow: 0 0 2px rgba(0,0,0,0.8);
}
`;

  var dom = require("../lib/dom");
  dom.importCssString(exports.cssText, exports.cssClass);

  if (!window.__hogRiderOverlappingLoaded) {
    window.__hogRiderOverlappingLoaded = true;

    const SOUND_URL = "https://www.myinstants.com/media/sounds/hog-rider.mp3";

    document.addEventListener("keydown", function () {
      if (!document.querySelector(".ace_editor.ace_focus")) return;

      const sound = new Audio(SOUND_URL);
      sound.volume = 0.4;
      sound.play().catch(() => {});
    });
  }
});
