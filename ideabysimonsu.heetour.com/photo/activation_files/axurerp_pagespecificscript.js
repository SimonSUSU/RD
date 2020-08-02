
var PageName = 'activation';
var PageId = 'ped98081b265a49debeeafc551c4aad1a'
var PageUrl = 'activation.html'
document.title = 'activation';

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
gv_vAlignTable['u16'] = 'top';
var u7 = document.getElementById('u7');

u7.style.cursor = 'pointer';
if (bIE) u7.attachEvent("onclick", Clicku7);
else u7.addEventListener("click", Clicku7, true);
function Clicku7(e)
{

if (true) {

	self.location.href="index.html" + GetQuerystring();

}

}
gv_vAlignTable['u7'] = 'top';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
var u19 = document.getElementById('u19');

var u13 = document.getElementById('u13');

var u22 = document.getElementById('u22');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u5 = document.getElementById('u5');

u5.style.cursor = 'pointer';
if (bIE) u5.attachEvent("onclick", Clicku5);
else u5.addEventListener("click", Clicku5, true);
function Clicku5(e)
{

if (true) {

	self.location.href="reg.html" + GetQuerystring();

}

}
gv_vAlignTable['u5'] = 'top';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u0 = document.getElementById('u0');

u0.style.cursor = 'pointer';
if (bIE) u0.attachEvent("onclick", Clicku0);
else u0.addEventListener("click", Clicku0, true);
function Clicku0(e)
{

if (true) {

	self.location.href="login.html" + GetQuerystring();

}

}
gv_vAlignTable['u0'] = 'top';
var u26 = document.getElementById('u26');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u17 = document.getElementById('u17');

var u3 = document.getElementById('u3');

u3.style.cursor = 'pointer';
if (bIE) u3.attachEvent("onclick", Clicku3);
else u3.addEventListener("click", Clicku3, true);
function Clicku3(e)
{

if (true) {

	self.location.href="show.html" + GetQuerystring();

}

}

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u6 = document.getElementById('u6');

var u9 = document.getElementById('u9');

u9.style.cursor = 'pointer';
if (bIE) u9.attachEvent("onclick", Clicku9);
else u9.addEventListener("click", Clicku9, true);
function Clicku9(e)
{

if (true) {

	self.location.href="help.html" + GetQuerystring();

}

}

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u1 = document.getElementById('u1');

u1.style.cursor = 'pointer';
if (bIE) u1.attachEvent("onclick", Clicku1);
else u1.addEventListener("click", Clicku1, true);
function Clicku1(e)
{

if (true) {

	self.location.href="index.html" + GetQuerystring();

}

}

var u11 = document.getElementById('u11');

u11.style.cursor = 'pointer';
if (bIE) u11.attachEvent("onclick", Clicku11);
else u11.addEventListener("click", Clicku11, true);
function Clicku11(e)
{

if (true) {

	self.location.href="about.html" + GetQuerystring();

}

}

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u24 = document.getElementById('u24');

u24.style.cursor = 'pointer';
if (bIE) u24.attachEvent("onclick", Clicku24);
else u24.addEventListener("click", Clicku24, true);
function Clicku24(e)
{

if (true) {

	self.location.href="login.html" + GetQuerystring();

}

}
gv_vAlignTable['u24'] = 'top';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u27 = document.getElementById('u27');

if (window.OnLoad) OnLoad();
