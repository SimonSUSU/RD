
var PageName = '业主管理通道';
var PageId = 'p15aae85ea2134b3aa6eca2140e50df14'
var PageUrl = '业主管理通道.html'
document.title = '业主管理通道';

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

u16.style.cursor = 'pointer';
if (bIE) u16.attachEvent("onclick", Clicku16);
else u16.addEventListener("click", Clicku16, true);
function Clicku16(e)
{

if (true) {

	self.location.href="房型列表.html" + GetQuerystring();

}

}

var u7 = document.getElementById('u7');

u7.style.cursor = 'pointer';
if (bIE) u7.attachEvent("onclick", Clicku7);
else u7.addEventListener("click", Clicku7, true);
function Clicku7(e)
{

if (true) {

	self.location.href="注册.html" + GetQuerystring();

}

}
gv_vAlignTable['u7'] = 'top';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u2 = document.getElementById('u2');

u2.style.cursor = 'pointer';
if (bIE) u2.attachEvent("onclick", Clicku2);
else u2.addEventListener("click", Clicku2, true);
function Clicku2(e)
{

if (true) {

	self.location.href="首页.html" + GetQuerystring();

}

}
gv_vAlignTable['u2'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u22 = document.getElementById('u22');

u22.style.cursor = 'pointer';
if (bIE) u22.attachEvent("onclick", Clicku22);
else u22.addEventListener("click", Clicku22, true);
function Clicku22(e)
{

if (true) {

	self.location.href="我要咨询.html" + GetQuerystring();

}

}

var u12 = document.getElementById('u12');

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", Clicku12);
else u12.addEventListener("click", Clicku12, true);
function Clicku12(e)
{

if (true) {

	self.location.href="房型列表.html" + GetQuerystring();

}

}

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u10 = document.getElementById('u10');

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", Clicku10);
else u10.addEventListener("click", Clicku10, true);
function Clicku10(e)
{

if (true) {

	self.location.href="房型列表.html" + GetQuerystring();

}

}

var u0 = document.getElementById('u0');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'top';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u14 = document.getElementById('u14');

u14.style.cursor = 'pointer';
if (bIE) u14.attachEvent("onclick", Clicku14);
else u14.addEventListener("click", Clicku14, true);
function Clicku14(e)
{

if (true) {

	self.location.href="房型列表.html" + GetQuerystring();

}

}

var u6 = document.getElementById('u6');

u6.style.cursor = 'pointer';
if (bIE) u6.attachEvent("onclick", Clicku6);
else u6.addEventListener("click", Clicku6, true);
function Clicku6(e)
{

if (true) {

	self.location.href="登录.html" + GetQuerystring();

}

}
gv_vAlignTable['u6'] = 'top';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u18 = document.getElementById('u18');

u18.style.cursor = 'pointer';
if (bIE) u18.attachEvent("onclick", Clicku18);
else u18.addEventListener("click", Clicku18, true);
function Clicku18(e)
{

if (true) {

	self.location.href="房型地图列表.html" + GetQuerystring();

}

}

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u4 = document.getElementById('u4');

u4.style.cursor = 'pointer';
if (bIE) u4.attachEvent("onclick", Clicku4);
else u4.addEventListener("click", Clicku4, true);
function Clicku4(e)
{

if (true) {

	self.location.href="首页.html" + GetQuerystring();

}

}

if (window.OnLoad) OnLoad();
