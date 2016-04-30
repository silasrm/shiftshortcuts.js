# shiftshortcuts.js

Add support do shortcuts prefixed with Shift.

__Why shift?__ _Because control, alt/option and meta/windows/command keys is used by default operational systems shortcuts (Windows, OSX, Linux)._

Shortcuts don't execute when input:text (and yours variants input:email and etc) or textarea remains focused.

[Example: https://jsfiddle.net/silasrm/ju4mznpz/21/](https://jsfiddle.net/silasrm/ju4mznpz/21/)

##Initialize

~~~javascript
shiftShortcuts(function(whichKey, elTarget, e) {
  // User press Shift + A
  if(whichKey == 'A') {
    executeActionA();
  }
});

function executeActionA() {
  alert('A action executed!');
}
~~~

##Stop library.
~~~javascript
shiftShortcutsStop();
~~~
