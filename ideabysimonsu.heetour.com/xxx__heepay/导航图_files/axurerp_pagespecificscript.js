
var PageName = '导航图';
var PageId = 'pcbad778e36d14808b15c91dc1349921b'
var PageUrl = '导航图.html'
document.title = '导航图';

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
gv_vAlignTable['u16'] = 'center';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u15 = document.getElementById('u15');

u15.style.cursor = 'pointer';
if (bIE) u15.attachEvent("onclick", Clicku15);
else u15.addEventListener("click", Clicku15, true);
function Clicku15(e)
{

if (true) {

	NewWindow("呼叫中心整合需求.html" + GetQuerystring(), "", "directories=1, height=600, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=1000", true, 1000, 600);

}

}

var u2 = document.getElementById('u2');

u2.style.cursor = 'pointer';
if (bIE) u2.attachEvent("onclick", Clicku2);
else u2.addEventListener("click", Clicku2, true);
function Clicku2(e)
{

if (true) {

	NewWindow("购卡_充值的流程.html" + GetQuerystring(), "", "directories=1, height=600, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=1000", true, 1000, 600);

}

}

var u13 = document.getElementById('u13');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'top';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u8 = document.getElementById('u8');

u8.style.cursor = 'pointer';
if (bIE) u8.attachEvent("onclick", Clicku8);
else u8.addEventListener("click", Clicku8, true);
function Clicku8(e)
{

if (true) {

	NewWindow("前台.html" + GetQuerystring(), "", "directories=1, height=600, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=1000", true, 1000, 600);

}

}

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u0 = document.getElementById('u0');

u0.style.cursor = 'pointer';
if (bIE) u0.attachEvent("onclick", Clicku0);
else u0.addEventListener("click", Clicku0, true);
function Clicku0(e)
{

if (true) {

	NewWindow("安全架构.html" + GetQuerystring(), "", "directories=1, height=600, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=1000", true, 1000, 600);

}

}

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u6 = document.getElementById('u6');

u6.style.cursor = 'pointer';
if (bIE) u6.attachEvent("onclick", Clicku6);
else u6.addEventListener("click", Clicku6, true);
function Clicku6(e)
{

if (true) {

	NewWindow("后台.html" + GetQuerystring(), "", "directories=1, height=600, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=1000", true, 1000, 600);

}

}

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u11 = document.getElementById('u11');

var u4 = document.getElementById('u4');

u4.style.cursor = 'pointer';
if (bIE) u4.attachEvent("onclick", Clicku4);
else u4.addEventListener("click", Clicku4, true);
function Clicku4(e)
{

if (true) {

	NewWindow("接口文档.html" + GetQuerystring(), "", "directories=1, height=600, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=1000", true, 1000, 600);

}

}

if (window.OnLoad) OnLoad();
