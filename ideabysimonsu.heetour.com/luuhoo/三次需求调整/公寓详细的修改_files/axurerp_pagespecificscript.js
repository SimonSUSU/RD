
var PageName = '公寓详细的修改';
var PageId = 'pa7fe734662c9443abb41808540da8624'
var PageUrl = '公寓详细的修改.html'
document.title = '公寓详细的修改';

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

var u2 = document.getElementById('u2');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u0 = document.getElementById('u0');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u4 = document.getElementById('u4');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'top';
if (window.OnLoad) OnLoad();
