
var PageName = '第三步：行程内容(第2天)';
var PageId = 'pfb5b8121439b4861b062ad7ccb9a242c'
var PageUrl = '第三步：行程内容[第2天].html'
document.title = '第三步：行程内容(第2天)';

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

var u16 = document.getElementById('u16');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u2 = document.getElementById('u2');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u22 = document.getElementById('u22');

var u12 = document.getElementById('u12');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u8 = document.getElementById('u8');

var u10 = document.getElementById('u10');

var u0 = document.getElementById('u0');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u14 = document.getElementById('u14');

var u6 = document.getElementById('u6');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u20 = document.getElementById('u20');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u18 = document.getElementById('u18');

var u24 = document.getElementById('u24');

var u4 = document.getElementById('u4');

if (window.OnLoad) OnLoad();
