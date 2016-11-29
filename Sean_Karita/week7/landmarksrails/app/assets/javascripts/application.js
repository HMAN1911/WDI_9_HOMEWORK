// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$(element)
  .data('counter', 0) // begin counter at zero
  .click(function() {
  var counter = $(this).data('counter'); // get
  $(this).data('counter', counter + 1); // set
  // do something else...
});

function excerpt(str, nwords) {
var words = str.split(' ');
words.splice(nwords, words.length-1);
return words.join(' ') +
(words.length !== str.split(' ').length ? '&hellip;' : '');
}

$(element)
  .data('counter', 0) // begin counter at zero
  .click(function() {
  var counter = $(this).data('counter'); // get
  $(this).data('counter', counter + 1); // set
  // do something else...
});

function checkMail(email){
	var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (filter.test(email)) {
		return true;
	}
	return false;
}

<form method="POST" name="wordcount">
  <script language="JavaScript">

function countit(){

var formcontent=document.wordcount.wordcount2.value
formcontent=formcontent.split(" ")
document.wordcount.wordcount3.value=formcontent.length
}
</script>
<table border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td width="100%"><textarea rows="12" name="wordcount2" cols="60" wrap="virtual"></textarea></td>
    </tr>
    <tr>
      <td width="100%"><div align="right"><p><input type="button" value="Calculate Words"
      onClick="countit()"> <input type="text" name="wordcount3" size="20"></p>
      <div align="center"><center><p><font face="arial" size="-2">This free script provided by</font>
      <font face="arial, helvetica" size="-2"><a href="http://javascriptkit.com">JavaScript
      Kit</a></font></p>
      </center></div></div></td>
    </tr>
  </table>
</form>
