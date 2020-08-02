
var PageName = '订单管理';
var PageId = 'p4cc1cd0226334567923178aa9bfd5bc4'
var PageUrl = '订单管理.html'
document.title = '订单管理';

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

var u62 = document.getElementById('u62');

var u256 = document.getElementById('u256');

var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'top';
var u195 = document.getElementById('u195');

var u45 = document.getElementById('u45');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'center';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'center';
var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'center';
var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'center';
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'center';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u231 = document.getElementById('u231');

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u104 = document.getElementById('u104');

u104.style.cursor = 'pointer';
if (bIE) u104.attachEvent("onclick", Clicku104);
else u104.addEventListener("click", Clicku104, true);
function Clicku104(e)
{

if (true) {

	self.location.href="订单详细.html" + GetQuerystring();

}

}

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'center';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u112 = document.getElementById('u112');

var u128 = document.getElementById('u128');

var u193 = document.getElementById('u193');

var u282 = document.getElementById('u282');

var u56 = document.getElementById('u56');

var u161 = document.getElementById('u161');

var u262 = document.getElementById('u262');

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'center';
var u173 = document.getElementById('u173');

var u90 = document.getElementById('u90');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u163 = document.getElementById('u163');

var u252 = document.getElementById('u252');

var u270 = document.getElementById('u270');

var u179 = document.getElementById('u179');

u179.style.cursor = 'pointer';
if (bIE) u179.attachEvent("onclick", Clicku179);
else u179.addEventListener("click", Clicku179, true);
function Clicku179(e)
{

if (true) {

	self.location.href="订单详细.html" + GetQuerystring();

}

}

var u268 = document.getElementById('u268');

u268.style.cursor = 'pointer';
if (bIE) u268.attachEvent("onclick", Clicku268);
else u268.addEventListener("click", Clicku268, true);
function Clicku268(e)
{

if (true) {

	self.location.href="充值管理.html" + GetQuerystring();

}

}

var u23 = document.getElementById('u23');

u23.style.cursor = 'pointer';
if (bIE) u23.attachEvent("onclick", Clicku23);
else u23.addEventListener("click", Clicku23, true);
function Clicku23(e)
{

if (true) {

	self.location.href="收款管理.html" + GetQuerystring();

}

}

var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'center';
var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'center';
var u88 = document.getElementById('u88');

var u130 = document.getElementById('u130');

var u108 = document.getElementById('u108');

var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'center';
var u54 = document.getElementById('u54');

var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'center';
var u100 = document.getElementById('u100');

var u177 = document.getElementById('u177');

var u37 = document.getElementById('u37');

u37.style.cursor = 'pointer';
if (bIE) u37.attachEvent("onclick", Clicku37);
else u37.addEventListener("click", Clicku37, true);
function Clicku37(e)
{

if (true) {

	self.location.href="订单详细.html" + GetQuerystring();

}

}

var u209 = document.getElementById('u209');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u68 = document.getElementById('u68');

var u159 = document.getElementById('u159');

var u248 = document.getElementById('u248');

var u21 = document.getElementById('u21');

u21.style.cursor = 'pointer';
if (bIE) u21.attachEvent("onclick", Clicku21);
else u21.addEventListener("click", Clicku21, true);
function Clicku21(e)
{

if (true) {

	self.location.href="预警管理.html" + GetQuerystring();

}

}

var u260 = document.getElementById('u260');

var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'center';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'center';
var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'center';
var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'center';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'center';
var u207 = document.getElementById('u207');

var u35 = document.getElementById('u35');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u126 = document.getElementById('u126');

u126.style.cursor = 'pointer';
if (bIE) u126.attachEvent("onclick", Clicku126);
else u126.addEventListener("click", Clicku126, true);
function Clicku126(e)
{

if (true) {

	self.location.href="订单详细.html" + GetQuerystring();

}

}

var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'center';
var u264 = document.getElementById('u264');

var u185 = document.getElementById('u185');

var u197 = document.getElementById('u197');

var u49 = document.getElementById('u49');

var u131 = document.getElementById('u131');

var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'center';
var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u84 = document.getElementById('u84');

var u106 = document.getElementById('u106');

var u9 = document.getElementById('u9');

u9.style.cursor = 'pointer';
if (bIE) u9.attachEvent("onclick", Clicku9);
else u9.addEventListener("click", Clicku9, true);
function Clicku9(e)
{

if (true) {

	self.location.href="不记名卡档案管理.html" + GetQuerystring();

}

}

var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'center';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'center';
var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'center';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'center';
var u233 = document.getElementById('u233');

u233.style.cursor = 'pointer';
if (bIE) u233.attachEvent("onclick", Clicku233);
else u233.addEventListener("click", Clicku233, true);
function Clicku233(e)
{

if (true) {

	self.location.href="订单详细.html" + GetQuerystring();

}

}

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'center';
var u151 = document.getElementById('u151');

u151.style.cursor = 'pointer';
if (bIE) u151.attachEvent("onclick", Clicku151);
else u151.addEventListener("click", Clicku151, true);
function Clicku151(e)
{

if (true) {

	self.location.href="订单详细.html" + GetQuerystring();

}

}

var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'top';
var u94 = document.getElementById('u94');

u94.style.cursor = 'pointer';
if (bIE) u94.attachEvent("onclick", Clicku94);
else u94.addEventListener("click", Clicku94, true);
function Clicku94(e)
{

if (true) {

	self.location.href="订单详细.html" + GetQuerystring();

}

}

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'center';
var u241 = document.getElementById('u241');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'center';
var u7 = document.getElementById('u7');

u7.style.cursor = 'pointer';
if (bIE) u7.attachEvent("onclick", Clicku7);
else u7.addEventListener("click", Clicku7, true);
function Clicku7(e)
{

if (true) {

	self.location.href="记名卡档案管理.html" + GetQuerystring();

}

}

var u284 = document.getElementById('u284');

var u13 = document.getElementById('u13');

u13.style.cursor = 'pointer';
if (bIE) u13.attachEvent("onclick", Clicku13);
else u13.addEventListener("click", Clicku13, true);
function Clicku13(e)
{

if (true) {

	self.location.href="消费记录统计.html" + GetQuerystring();

}

}

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u96 = document.getElementById('u96');

var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'center';
var u137 = document.getElementById('u137');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u165 = document.getElementById('u165');

var u254 = document.getElementById('u254');

var u181 = document.getElementById('u181');

var u27 = document.getElementById('u27');

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u243 = document.getElementById('u243');

var u2 = document.getElementById('u2');

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'center';
var u221 = document.getElementById('u221');

var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'center';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'center';
var u58 = document.getElementById('u58');

var u267 = document.getElementById('u267');

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'center';
var u183 = document.getElementById('u183');

var u250 = document.getElementById('u250');

var u199 = document.getElementById('u199');

var u288 = document.getElementById('u288');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u145 = document.getElementById('u145');

var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'center';
var u191 = document.getElementById('u191');

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u274 = document.getElementById('u274');

var u25 = document.getElementById('u25');

var u153 = document.getElementById('u153');

var u169 = document.getElementById('u169');

var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'center';
var u201 = document.getElementById('u201');

u201.style.cursor = 'pointer';
if (bIE) u201.attachEvent("onclick", Clicku201);
else u201.addEventListener("click", Clicku201, true);
function Clicku201(e)
{

if (true) {

	self.location.href="订单详细.html" + GetQuerystring();

}

}

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'center';
var u39 = document.getElementById('u39');

var u70 = document.getElementById('u70');

var u120 = document.getElementById('u120');

var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'center';
var u187 = document.getElementById('u187');

var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'center';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'center';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'center';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u171 = document.getElementById('u171');

var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'center';
var u149 = document.getElementById('u149');

var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'center';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u52 = document.getElementById('u52');

var u141 = document.getElementById('u141');

u141.style.cursor = 'pointer';
if (bIE) u141.attachEvent("onclick", Clicku141);
else u141.addEventListener("click", Clicku141, true);
function Clicku141(e)
{

if (true) {

	self.location.href="订单详细.html" + GetQuerystring();

}

}

var u227 = document.getElementById('u227');

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'center';
var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'center';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'center';
var u235 = document.getElementById('u235');

var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'center';
var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'center';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'center';
var u17 = document.getElementById('u17');

u17.style.cursor = 'pointer';
if (bIE) u17.attachEvent("onclick", Clicku17);
else u17.addEventListener("click", Clicku17, true);
function Clicku17(e)
{

if (true) {

	self.location.href="添加手工单.html" + GetQuerystring();

}

}

var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'center';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'center';
var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'center';
var u286 = document.getElementById('u286');

var u167 = document.getElementById('u167');

var u203 = document.getElementById('u203');

var u245 = document.getElementById('u245');

var u215 = document.getElementById('u215');

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
var u237 = document.getElementById('u237');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u80 = document.getElementById('u80');

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'center';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u239 = document.getElementById('u239');

var u143 = document.getElementById('u143');

var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'center';
var u76 = document.getElementById('u76');

var u155 = document.getElementById('u155');

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'center';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'center';
var u276 = document.getElementById('u276');

var u147 = document.getElementById('u147');

var u60 = document.getElementById('u60');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u43 = document.getElementById('u43');

var u114 = document.getElementById('u114');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'center';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u219 = document.getElementById('u219');

var u124 = document.getElementById('u124');

var u74 = document.getElementById('u74');

var u122 = document.getElementById('u122');

var u211 = document.getElementById('u211');

u211.style.cursor = 'pointer';
if (bIE) u211.attachEvent("onclick", Clicku211);
else u211.addEventListener("click", Clicku211, true);
function Clicku211(e)
{

if (true) {

	self.location.href="订单详细.html" + GetQuerystring();

}

}

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'center';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'center';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u92 = document.getElementById('u92');

var u5 = document.getElementById('u5');

u5.style.cursor = 'pointer';
if (bIE) u5.attachEvent("onclick", Clicku5);
else u5.addEventListener("click", Clicku5, true);
function Clicku5(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u189 = document.getElementById('u189');

u189.style.cursor = 'pointer';
if (bIE) u189.attachEvent("onclick", Clicku189);
else u189.addEventListener("click", Clicku189, true);
function Clicku189(e)
{

if (true) {

	self.location.href="订单详细.html" + GetQuerystring();

}

}

var u41 = document.getElementById('u41');

var u135 = document.getElementById('u135');

var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'center';
var u278 = document.getElementById('u278');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u290 = document.getElementById('u290');

u290.style.cursor = 'pointer';
if (bIE) u290.attachEvent("onclick", Clicku290);
else u290.addEventListener("click", Clicku290, true);
function Clicku290(e)
{

if (true) {

	self.location.href="添加手工单.html" + GetQuerystring();

}

}

var u72 = document.getElementById('u72');

var u102 = document.getElementById('u102');

var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'center';
var u118 = document.getElementById('u118');

var u0 = document.getElementById('u0');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u110 = document.getElementById('u110');

var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'center';
var u280 = document.getElementById('u280');

var u86 = document.getElementById('u86');

var u223 = document.getElementById('u223');

u223.style.cursor = 'pointer';
if (bIE) u223.attachEvent("onclick", Clicku223);
else u223.addEventListener("click", Clicku223, true);
function Clicku223(e)
{

if (true) {

	self.location.href="订单详细.html" + GetQuerystring();

}

}

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'center';
var u258 = document.getElementById('u258');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'center';
var u139 = document.getElementById('u139');

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'center';
var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'center';
var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u66 = document.getElementById('u66');

var u217 = document.getElementById('u217');

var u133 = document.getElementById('u133');

var u19 = document.getElementById('u19');

u19.style.cursor = 'pointer';
if (bIE) u19.attachEvent("onclick", Clicku19);
else u19.addEventListener("click", Clicku19, true);
function Clicku19(e)
{

if (true) {

	self.location.href="后台.html" + GetQuerystring();

}

}
gv_vAlignTable['u19'] = 'top';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u225 = document.getElementById('u225');

var u157 = document.getElementById('u157');

var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'top';
var u15 = document.getElementById('u15');

u15.style.cursor = 'pointer';
if (bIE) u15.attachEvent("onclick", Clicku15);
else u15.addEventListener("click", Clicku15, true);
function Clicku15(e)
{

if (true) {

	self.location.href="卡企业管理.html" + GetQuerystring();

}

}

var u33 = document.getElementById('u33');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'top';
var u98 = document.getElementById('u98');

var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'center';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'center';
var u64 = document.getElementById('u64');

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'center';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'center';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'center';
var u47 = document.getElementById('u47');

var u175 = document.getElementById('u175');

var u82 = document.getElementById('u82');

u82.style.cursor = 'pointer';
if (bIE) u82.attachEvent("onclick", Clicku82);
else u82.addEventListener("click", Clicku82, true);
function Clicku82(e)
{

if (true) {

	self.location.href="订单详细.html" + GetQuerystring();

}

}

var u116 = document.getElementById('u116');

u116.style.cursor = 'pointer';
if (bIE) u116.attachEvent("onclick", Clicku116);
else u116.addEventListener("click", Clicku116, true);
function Clicku116(e)
{

if (true) {

	self.location.href="订单详细.html" + GetQuerystring();

}

}

var u205 = document.getElementById('u205');

var u78 = document.getElementById('u78');

var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'center';
var u272 = document.getElementById('u272');

var u31 = document.getElementById('u31');

var u11 = document.getElementById('u11');

u11.style.cursor = 'pointer';
if (bIE) u11.attachEvent("onclick", Clicku11);
else u11.addEventListener("click", Clicku11, true);
function Clicku11(e)
{

if (true) {

	self.location.href="发票管理.html" + GetQuerystring();

}

}

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u213 = document.getElementById('u213');

var u29 = document.getElementById('u29');

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'center';
var u229 = document.getElementById('u229');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'center';
if (window.OnLoad) OnLoad();
