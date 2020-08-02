
var PageName = '查看机票订单';
var PageId = 'pfb37f58f99a64da8b256f45e0c2b9ba5'
var PageUrl = '查看机票订单.html'
document.title = '查看机票订单';

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

eval(GetDynamicPanelScript('u343', 1));

eval(GetDynamicPanelScript('u306', 1));

eval(GetDynamicPanelScript('u261', 1));

eval(GetDynamicPanelScript('u358', 1));

eval(GetDynamicPanelScript('u250', 1));

var u33 = document.getElementById('u33');

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u126 = document.getElementById('u126');

var u296 = document.getElementById('u296');

var u332 = document.getElementById('u332');

if (bIE) u332.attachEvent("onmouseover", MouseOveru332);
else u332.addEventListener("mouseover", MouseOveru332, true);
function MouseOveru332(e)
{
if (!IsTrueMouseOver('u332',e)) return;
if (true) {

	SetPanelVisibilityu261("");

}

}

if (bIE) u332.attachEvent("onmouseout", MouseOutu332);
else u332.addEventListener("mouseout", MouseOutu332, true);
function MouseOutu332(e)
{
if (!IsTrueMouseOut('u332',e)) return;
if (true) {

	SetPanelVisibilityu261("hidden");

}

}

var u157 = document.getElementById('u157');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u86 = document.getElementById('u86');

var u162 = document.getElementById('u162');

var u0 = document.getElementById('u0');

var u262 = document.getElementById('u262');

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u74 = document.getElementById('u74');

var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'top';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'center';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'center';
var u104 = document.getElementById('u104');

var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'top';
var u323 = document.getElementById('u323');

u323.style.cursor = 'pointer';
if (bIE) u323.attachEvent("onclick", Clicku323);
else u323.addEventListener("click", Clicku323, true);
function Clicku323(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u323'] = 'top';
var u229 = document.getElementById('u229');

var u366 = document.getElementById('u366');
gv_vAlignTable['u366'] = 'top';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u331 = document.getElementById('u331');
gv_vAlignTable['u331'] = 'center';
var u270 = document.getElementById('u270');

var u128 = document.getElementById('u128');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'top';
var u306 = document.getElementById('u306');

var u278 = document.getElementById('u278');

var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'top';
var u261 = document.getElementById('u261');

var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'center';
var u324 = document.getElementById('u324');

var u346 = document.getElementById('u346');

u346.style.cursor = 'pointer';
if (bIE) u346.attachEvent("onclick", Clicku346);
else u346.addEventListener("click", Clicku346, true);
function Clicku346(e)
{

if (true) {

	self.location.href="注册第一步.html" + GetQuerystring();

}

}
gv_vAlignTable['u346'] = 'top';
var u32 = document.getElementById('u32');

u32.style.cursor = 'pointer';
if (bIE) u32.attachEvent("onclick", Clicku32);
else u32.addEventListener("click", Clicku32, true);
function Clicku32(e)
{

if (true) {

	self.location.href="订单.html" + GetQuerystring();

}

}

var u27 = document.getElementById('u27');

var u192 = document.getElementById('u192');

var u319 = document.getElementById('u319');

var u108 = document.getElementById('u108');

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u59 = document.getElementById('u59');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u360 = document.getElementById('u360');

u360.style.cursor = 'pointer';
if (bIE) u360.attachEvent("onclick", Clicku360);
else u360.addEventListener("click", Clicku360, true);
function Clicku360(e)
{

if (true) {

	self.location.href="酒店客房订单.html" + GetQuerystring();

}

}
gv_vAlignTable['u360'] = 'top';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u368 = document.getElementById('u368');
gv_vAlignTable['u368'] = 'top';
var u365 = document.getElementById('u365');
gv_vAlignTable['u365'] = 'top';
var u330 = document.getElementById('u330');

u330.style.cursor = 'pointer';
if (bIE) u330.attachEvent("onclick", Clicku330);
else u330.addEventListener("click", Clicku330, true);
function Clicku330(e)
{

if (true) {

	self.location.href="国内机票.html" + GetQuerystring();

}

}

var u314 = document.getElementById('u314');
gv_vAlignTable['u314'] = 'center';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u295 = document.getElementById('u295');
gv_vAlignTable['u295'] = 'center';
var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'center';
var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'center';
var u122 = document.getElementById('u122');

var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'top';
var u138 = document.getElementById('u138');

var u345 = document.getElementById('u345');

u345.style.cursor = 'pointer';
if (bIE) u345.attachEvent("onclick", Clicku345);
else u345.addEventListener("click", Clicku345, true);
function Clicku345(e)
{

if (true) {

	self.location.href="登录.html" + GetQuerystring();

}

}
gv_vAlignTable['u345'] = 'top';
var u349 = document.getElementById('u349');
gv_vAlignTable['u349'] = 'top';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'top';
var u231 = document.getElementById('u231');

var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'center';
var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'top';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'top';
var u102 = document.getElementById('u102');

var u180 = document.getElementById('u180');

var u369 = document.getElementById('u369');

u369.style.cursor = 'pointer';
if (bIE) u369.attachEvent("onclick", Clicku369);
else u369.addEventListener("click", Clicku369, true);
function Clicku369(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u369'] = 'top';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u77 = document.getElementById('u77');

var u300 = document.getElementById('u300');

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'center';
var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'center';
var u20 = document.getElementById('u20');

u20.style.cursor = 'pointer';
if (bIE) u20.attachEvent("onclick", Clicku20);
else u20.addEventListener("click", Clicku20, true);
function Clicku20(e)
{

if (true) {

	self.location.href="修改密码.html" + GetQuerystring();

}

}

var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'top';
var u364 = document.getElementById('u364');
gv_vAlignTable['u364'] = 'top';
var u264 = document.getElementById('u264');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u255 = document.getElementById('u255');

u255.style.cursor = 'pointer';
if (bIE) u255.attachEvent("onclick", Clicku255);
else u255.addEventListener("click", Clicku255, true);
function Clicku255(e)
{

if (true) {

	SetPanelVisibilityu250("hidden");

}

}

var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'center';
var u259 = document.getElementById('u259');

u259.style.cursor = 'pointer';
if (bIE) u259.attachEvent("onclick", Clicku259);
else u259.addEventListener("click", Clicku259, true);
function Clicku259(e)
{

if (true) {

SetWidgetRichText('u260', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'\\\'cb\\\'ce\\\'cc\\\'e5\'; color:#FF0000; font-size:13px;"><b>发送成功！请查收邮件！</b></span></div>'));

}

}

var u13 = document.getElementById('u13');

var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'top';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'center';
var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'top';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'center';
var u186 = document.getElementById('u186');

var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'center';
var u336 = document.getElementById('u336');

var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'top';
var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'center';
var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'center';
var u136 = document.getElementById('u136');

var u341 = document.getElementById('u341');
gv_vAlignTable['u341'] = 'top';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'top';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u140 = document.getElementById('u140');

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'center';
var u63 = document.getElementById('u63');

var u106 = document.getElementById('u106');

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'center';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u294 = document.getElementById('u294');

var u120 = document.getElementById('u120');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u205 = document.getElementById('u205');

var u302 = document.getElementById('u302');

var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'center';
var u40 = document.getElementById('u40');

u40.style.cursor = 'pointer';
if (bIE) u40.attachEvent("onclick", Clicku40);
else u40.addEventListener("click", Clicku40, true);
function Clicku40(e)
{

if (true) {

	self.location.href="酒店餐饮订单.html" + GetQuerystring();

}

}

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u160 = document.getElementById('u160');

var u72 = document.getElementById('u72');

var u80 = document.getElementById('u80');

var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'center';
var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'top';
var u168 = document.getElementById('u168');

var u227 = document.getElementById('u227');

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u362 = document.getElementById('u362');

u362.style.cursor = 'pointer';
if (bIE) u362.attachEvent("onclick", Clicku362);
else u362.addEventListener("click", Clicku362, true);
function Clicku362(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u362'] = 'top';
var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'top';
var u12 = document.getElementById('u12');

var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'center';
var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'top';
var u276 = document.getElementById('u276');

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'center';
var u334 = document.getElementById('u334');

var u282 = document.getElementById('u282');

var u258 = document.getElementById('u258');

var u342 = document.getElementById('u342');

u342.style.cursor = 'pointer';
if (bIE) u342.attachEvent("onclick", Clicku342);
else u342.addEventListener("click", Clicku342, true);
function Clicku342(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u342'] = 'top';
var u317 = document.getElementById('u317');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'center';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u284 = document.getElementById('u284');

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'center';
var u335 = document.getElementById('u335');
gv_vAlignTable['u335'] = 'center';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u134 = document.getElementById('u134');

var u92 = document.getElementById('u92');

u92.style.cursor = 'pointer';
if (bIE) u92.attachEvent("onclick", Clicku92);
else u92.addEventListener("click", Clicku92, true);
function Clicku92(e)
{

if (true) {

	self.location.href="退出会员中心.html" + GetQuerystring();

}

}

var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'center';
var u97 = document.getElementById('u97');

var u190 = document.getElementById('u190');

var u353 = document.getElementById('u353');

u353.style.cursor = 'pointer';
if (bIE) u353.attachEvent("onclick", Clicku353);
else u353.addEventListener("click", Clicku353, true);
function Clicku353(e)
{

if (true) {

	SetPanelVisibilityu358("");

	SetPanelVisibilityu343("hidden");

}

}

var u37 = document.getElementById('u37');

u37.style.cursor = 'pointer';
if (bIE) u37.attachEvent("onclick", Clicku37);
else u37.addEventListener("click", Clicku37, true);
function Clicku37(e)
{

if (true) {

	self.location.href="酒店客房订单.html" + GetQuerystring();

}

}

var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'top';
var u348 = document.getElementById('u348');

u348.style.cursor = 'pointer';
if (bIE) u348.attachEvent("onclick", Clicku348);
else u348.addEventListener("click", Clicku348, true);
function Clicku348(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u348'] = 'top';
var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'top';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u66 = document.getElementById('u66');

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'top';
var u118 = document.getElementById('u118');

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u288 = document.getElementById('u288');

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u356 = document.getElementById('u356');
gv_vAlignTable['u356'] = 'center';
var u43 = document.getElementById('u43');

u43.style.cursor = 'pointer';
if (bIE) u43.attachEvent("onclick", Clicku43);
else u43.addEventListener("click", Clicku43, true);
function Clicku43(e)
{

if (true) {

	self.location.href="酒店套餐订单.html" + GetQuerystring();

}

}

var u75 = document.getElementById('u75');

var u83 = document.getElementById('u83');

var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'top';
var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'top';
var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'top';
var u311 = document.getElementById('u311');

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'top';
var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'top';
var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'center';
var u52 = document.getElementById('u52');

var u69 = document.getElementById('u69');

var u316 = document.getElementById('u316');
gv_vAlignTable['u316'] = 'center';
var u30 = document.getElementById('u30');

var u326 = document.getElementById('u326');

u326.style.cursor = 'pointer';
if (bIE) u326.attachEvent("onclick", Clicku326);
else u326.addEventListener("click", Clicku326, true);
function Clicku326(e)
{

if (true) {

	self.location.href="海南酒店.html" + GetQuerystring();

}

}

var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'top';
var u132 = document.getElementById('u132');

var u184 = document.getElementById('u184');

var u347 = document.getElementById('u347');

u347.style.cursor = 'pointer';
if (bIE) u347.attachEvent("onclick", Clicku347);
else u347.addEventListener("click", Clicku347, true);
function Clicku347(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u347'] = 'top';
var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'center';
var u355 = document.getElementById('u355');

var u23 = document.getElementById('u23');

u23.style.cursor = 'pointer';
if (bIE) u23.attachEvent("onclick", Clicku23);
else u23.addEventListener("click", Clicku23, true);
function Clicku23(e)
{

if (true) {

	self.location.href="常用旅客信息.html" + GetQuerystring();

}

}

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'top';
var u352 = document.getElementById('u352');
gv_vAlignTable['u352'] = 'top';
var u61 = document.getElementById('u61');

var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'top';
var u370 = document.getElementById('u370');

u370.style.cursor = 'pointer';
if (bIE) u370.attachEvent("onclick", Clicku370);
else u370.addEventListener("click", Clicku370, true);
function Clicku370(e)
{

if (true) {

	SetPanelVisibilityu343("");

	SetPanelVisibilityu358("hidden");

}

}

var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'center';
var u78 = document.getElementById('u78');

var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'center';
var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u21 = document.getElementById('u21');

var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'center';
var u374 = document.getElementById('u374');

var u201 = document.getElementById('u201');

var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'center';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'top';
var u166 = document.getElementById('u166');

var u153 = document.getElementById('u153');

var u70 = document.getElementById('u70');

var u6 = document.getElementById('u6');

var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'center';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'top';
var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u146 = document.getElementById('u146');

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'center';
var u46 = document.getElementById('u46');

u46.style.cursor = 'pointer';
if (bIE) u46.attachEvent("onclick", Clicku46);
else u46.addEventListener("click", Clicku46, true);
function Clicku46(e)
{

if (true) {

	self.location.href="机票订单.html" + GetQuerystring();

}

}

var u150 = document.getElementById('u150');

var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'center';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u373 = document.getElementById('u373');
gv_vAlignTable['u373'] = 'center';
var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'center';
var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'top';
var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'center';
var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'top';
var u130 = document.getElementById('u130');

var u315 = document.getElementById('u315');

var u55 = document.getElementById('u55');

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u196 = document.getElementById('u196');

var u254 = document.getElementById('u254');

var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'center';
var u337 = document.getElementById('u337');
gv_vAlignTable['u337'] = 'center';
var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'top';
var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u351 = document.getElementById('u351');
gv_vAlignTable['u351'] = 'top';
var u359 = document.getElementById('u359');
gv_vAlignTable['u359'] = 'top';
var u375 = document.getElementById('u375');
gv_vAlignTable['u375'] = 'center';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u372 = document.getElementById('u372');

if (bIE) u372.attachEvent("onmouseover", MouseOveru372);
else u372.addEventListener("mouseover", MouseOveru372, true);
function MouseOveru372(e)
{
if (!IsTrueMouseOver('u372',e)) return;
if (true) {

	SetPanelVisibilityu306("");

}

}

if (bIE) u372.attachEvent("onmouseout", MouseOutu372);
else u372.addEventListener("mouseout", MouseOutu372, true);
function MouseOutu372(e)
{
if (!IsTrueMouseOut('u372',e)) return;
if (true) {

	SetPanelVisibilityu306("hidden");

}

}

var u64 = document.getElementById('u64');

var u328 = document.getElementById('u328');

u328.style.cursor = 'pointer';
if (bIE) u328.attachEvent("onclick", Clicku328);
else u328.addEventListener("click", Clicku328, true);
function Clicku328(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}

var u116 = document.getElementById('u116');

var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'center';
var u89 = document.getElementById('u89');

u89.style.cursor = 'pointer';
if (bIE) u89.attachEvent("onclick", Clicku89);
else u89.addEventListener("click", Clicku89, true);
function Clicku89(e)
{

if (true) {

	self.location.href="我的提问.html" + GetQuerystring();

}

}

var u100 = document.getElementById('u100');

var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'top';
var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'center';
var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'top';
var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'center';
var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'center';
var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'top';
var u41 = document.getElementById('u41');

var u170 = document.getElementById('u170');

var u58 = document.getElementById('u58');

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'center';
var u144 = document.getElementById('u144');

var u98 = document.getElementById('u98');

var u178 = document.getElementById('u178');

var u224 = document.getElementById('u224');

var u233 = document.getElementById('u233');

var u371 = document.getElementById('u371');
gv_vAlignTable['u371'] = 'center';
var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'top';
var u50 = document.getElementById('u50');

var u4 = document.getElementById('u4');

var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'center';
var u322 = document.getElementById('u322');
gv_vAlignTable['u322'] = 'top';
var u90 = document.getElementById('u90');

var u8 = document.getElementById('u8');

var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'top';
var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'center';
var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'center';
var u26 = document.getElementById('u26');

u26.style.cursor = 'pointer';
if (bIE) u26.attachEvent("onclick", Clicku26);
else u26.addEventListener("click", Clicku26, true);
function Clicku26(e)
{

if (true) {

	self.location.href="在线收藏夹.html" + GetQuerystring();

}

}

var u182 = document.getElementById('u182');

var u309 = document.getElementById('u309');

var u350 = document.getElementById('u350');
gv_vAlignTable['u350'] = 'top';
var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'top';
var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'top';
var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'center';
var u172 = document.getElementById('u172');

var u361 = document.getElementById('u361');

u361.style.cursor = 'pointer';
if (bIE) u361.attachEvent("onclick", Clicku361);
else u361.addEventListener("click", Clicku361, true);
function Clicku361(e)
{

if (true) {

	self.location.href="退出会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u361'] = 'top';
var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'top';
var u358 = document.getElementById('u358');

var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'center';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u35 = document.getElementById('u35');

var u321 = document.getElementById('u321');

u321.style.cursor = 'pointer';
if (bIE) u321.attachEvent("onclick", Clicku321);
else u321.addEventListener("click", Clicku321, true);
function Clicku321(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u321'] = 'top';
var u81 = document.getElementById('u81');

var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'center';
var u67 = document.getElementById('u67');

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u290 = document.getElementById('u290');

var u251 = document.getElementById('u251');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u164 = document.getElementById('u164');

var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'top';
var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'center';
var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'center';
var u142 = document.getElementById('u142');

var u363 = document.getElementById('u363');

u363.style.cursor = 'pointer';
if (bIE) u363.attachEvent("onclick", Clicku363);
else u363.addEventListener("click", Clicku363, true);
function Clicku363(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u363'] = 'top';
var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'top';
var u340 = document.getElementById('u340');
gv_vAlignTable['u340'] = 'top';
var u29 = document.getElementById('u29');

u29.style.cursor = 'pointer';
if (bIE) u29.attachEvent("onclick", Clicku29);
else u29.addEventListener("click", Clicku29, true);
function Clicku29(e)
{

if (true) {

	self.location.href="支付卡管理.html" + GetQuerystring();

}

}

var u367 = document.getElementById('u367');
gv_vAlignTable['u367'] = 'top';
var u44 = document.getElementById('u44');

var u84 = document.getElementById('u84');

var u124 = document.getElementById('u124');

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u223 = document.getElementById('u223');

var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'top';
var u17 = document.getElementById('u17');

u17.style.cursor = 'pointer';
if (bIE) u17.attachEvent("onclick", Clicku17);
else u17.addEventListener("click", Clicku17, true);
function Clicku17(e)
{

if (true) {

	self.location.href="个人资料.html" + GetQuerystring();

}

}

var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'center';
var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'center';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u272 = document.getElementById('u272');

var u38 = document.getElementById('u38');

var u112 = document.getElementById('u112');

var u53 = document.getElementById('u53');

var u250 = document.getElementById('u250');

var u49 = document.getElementById('u49');

var u93 = document.getElementById('u93');

var u313 = document.getElementById('u313');

var u194 = document.getElementById('u194');

var u357 = document.getElementById('u357');
gv_vAlignTable['u357'] = 'top';
var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'center';
var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'center';
var u339 = document.getElementById('u339');
gv_vAlignTable['u339'] = 'center';
var u2 = document.getElementById('u2');

var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u354 = document.getElementById('u354');
gv_vAlignTable['u354'] = 'center';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'top';
var u114 = document.getElementById('u114');

var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'center';
var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'top';
var u148 = document.getElementById('u148');

var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'top';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'center';
var u176 = document.getElementById('u176');

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'top';
var u10 = document.getElementById('u10');

var u158 = document.getElementById('u158');

var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'top';
var u15 = document.getElementById('u15');

var u155 = document.getElementById('u155');

var u249 = document.getElementById('u249');

u249.style.cursor = 'pointer';
if (bIE) u249.attachEvent("onclick", Clicku249);
else u249.addEventListener("click", Clicku249, true);
function Clicku249(e)
{

if (true) {

	SetPanelVisibilityu250("");

}

}

var u235 = document.getElementById('u235');

var u47 = document.getElementById('u47');

var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'top';
var u87 = document.getElementById('u87');

var u266 = document.getElementById('u266');

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
var u7 = document.getElementById('u7');

u7.style.cursor = 'pointer';
if (bIE) u7.attachEvent("onclick", Clicku7);
else u7.addEventListener("click", Clicku7, true);
function Clicku7(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}

var u110 = document.getElementById('u110');

var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'center';
var u307 = document.getElementById('u307');

var u174 = document.getElementById('u174');

var u24 = document.getElementById('u24');

var u312 = document.getElementById('u312');
gv_vAlignTable['u312'] = 'center';
var u56 = document.getElementById('u56');

var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'center';
var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'center';
var u343 = document.getElementById('u343');

var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'top';
var u188 = document.getElementById('u188');

var u248 = document.getElementById('u248');

u248.style.cursor = 'pointer';
if (bIE) u248.attachEvent("onclick", Clicku248);
else u248.addEventListener("click", Clicku248, true);
function Clicku248(e)
{

if (true) {

	NewWindow("打印客房订单.html" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}

var u338 = document.getElementById('u338');

var u18 = document.getElementById('u18');

if (window.OnLoad) OnLoad();
