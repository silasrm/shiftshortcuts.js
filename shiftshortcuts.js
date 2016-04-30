/**
 * Add support do shortcuts prefixed with Shift
 *
 * Why shift?
 * R. Because control, alt/option and meta/windows/command keys is used 
 * by default operational systems shortcuts (Windows, OSX, Linux).
 *
 * Shortcuts don't execute when input:text (and yours variants 
 * input:email and etc) or textarea remains focused.
 */
// Cross-browser key translation
function shiftShortcutDoWhichKey(e) {
  e = e || window.event;
  var charCode = e.keyCode || e.which;
  
  return String.fromCharCode(charCode);
}

var shiftShortcutsCallback = 'undefined';
var shiftShortcutsListener = function (e) {
	shiftShortcutsListenerTreatment(e, shiftShortcutsCallback);
};

// Initialize event listener
function shiftShortcuts(callbackOut) {
	shiftShortcutsCallback = callbackOut;
	window.addEventListener(
  	'keypress', 
    shiftShortcutsListener, 
    false
  );
}

// Stop event listener
function shiftShortcutsStop() {
	window.removeEventListener(
	  'keypress', 
    shiftShortcutsListener, 
    false
  );
}

// Make logic treatment over event, key and target element, 
// and make call to callback function.
function shiftShortcutsListenerTreatment(e, callback) {
  e = e || window.event;
  var target = (e.target || e.srcElement);
  var fieldIsValid = !/textarea/i.test(target.tagName)
      && (!/input/i.test(target.tagName)
          || (target.type == 'radio' || target.type == 'checkbox' 
              || target.type == 'hidden' || target.type == 'button' 
              || target.type == 'submit' || target.type == 'reset' 
              || target.type == 'image')
         );

  if (fieldIsValid && e.shiftKey) {
    var whichKey = shiftShortcutDoWhichKey(e);

    if(typeof callback === 'function') {
      callback(whichKey, target, e);
    }
  } 
}
