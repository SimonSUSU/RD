
var PageName = 'New Page 1';
var PageId = 'p06d2ccc533854307be9de5aaf98a5b52'
var PageUrl = 'New_Page_1.html'
document.title = 'New Page 1';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&CSUM=1';
}

function PopulateVariables(value) {
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad(e) {

}

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u5 = document.getElementById('u5');

var u0 = document.getElementById('u0');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u3 = document.getElementById('u3');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u6 = document.getElementById('u6');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u12 = document.getElementById('u12');

var u4 = document.getElementById('u4');

var u11 = document.getElementById('u11');

var u7 = document.getElementById('u7');

var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'top';
var u8 = document.getElementById('u8');

if (window.OnLoad) OnLoad();
