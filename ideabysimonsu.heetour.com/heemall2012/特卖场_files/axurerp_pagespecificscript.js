
var PageName = '特卖场';
var PageId = 'p5b0ed959387b4543804b51463367e0d6'
var PageUrl = '特卖场.html'
document.title = '特卖场';

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
gv_vAlignTable['u62'] = 'center';
var u247 = document.getElementById('u247');

var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'top';
var u45 = document.getElementById('u45');

var u28 = document.getElementById('u28');

var u226 = document.getElementById('u226');

u226.style.cursor = 'pointer';
if (bIE) u226.attachEvent("onclick", Clicku226);
else u226.addEventListener("click", Clicku226, true);
function Clicku226(e)
{

if (true) {

	self.location.href="帮助中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u226'] = 'top';
var u142 = document.getElementById('u142');

u142.style.cursor = 'pointer';
if (bIE) u142.attachEvent("onclick", Clicku142);
else u142.addEventListener("click", Clicku142, true);
function Clicku142(e)
{

if (true) {

	self.location.href="特卖场详细页.html" + GetQuerystring();

}

}

var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'top';
var u251 = document.getElementById('u251');

u251.style.cursor = 'pointer';
if (bIE) u251.attachEvent("onclick", Clicku251);
else u251.addEventListener("click", Clicku251, true);
function Clicku251(e)
{

if (true) {

	self.location.href="商家自助系统.html" + GetQuerystring();

}

}
gv_vAlignTable['u251'] = 'top';
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'top';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u231 = document.getElementById('u231');

u231.style.cursor = 'pointer';
if (bIE) u231.attachEvent("onclick", Clicku231);
else u231.addEventListener("click", Clicku231, true);
function Clicku231(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u71 = document.getElementById('u71');

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u12 = document.getElementById('u12');

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'top';
var u56 = document.getElementById('u56');

var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'center';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u173 = document.getElementById('u173');

var u90 = document.getElementById('u90');

u90.style.cursor = 'pointer';
if (bIE) u90.attachEvent("onclick", Clicku90);
else u90.addEventListener("click", Clicku90, true);
function Clicku90(e)
{

if (true) {

	self.location.href="特卖场详细页.html" + GetQuerystring();

}

}

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'center';
var u252 = document.getElementById('u252');

u252.style.cursor = 'pointer';
if (bIE) u252.attachEvent("onclick", Clicku252);
else u252.addEventListener("click", Clicku252, true);
function Clicku252(e)
{

if (true) {

	self.location.href="品牌导航.html" + GetQuerystring();

}

}

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'center';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'center';
var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u108 = document.getElementById('u108');

var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'center';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u100 = document.getElementById('u100');

var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'top';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'top';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'top';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'top';
var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'center';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u113 = document.getElementById('u113');

var u240 = document.getElementById('u240');

var u129 = document.getElementById('u129');

u129.style.cursor = 'pointer';
if (bIE) u129.attachEvent("onclick", Clicku129);
else u129.addEventListener("click", Clicku129, true);
function Clicku129(e)
{

if (true) {

	self.location.href="特卖场详细页.html" + GetQuerystring();

}

}

var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'top';
var u35 = document.getElementById('u35');

var u18 = document.getElementById('u18');

var u126 = document.getElementById('u126');

var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'top';
var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'top';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'top';
var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'center';
var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u97 = document.getElementById('u97');

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u84 = document.getElementById('u84');

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'top';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u233 = document.getElementById('u233');

u233.style.cursor = 'pointer';
if (bIE) u233.attachEvent("onclick", Clicku233);
else u233.addEventListener("click", Clicku233, true);
function Clicku233(e)
{

if (true) {

	self.location.href="签约商户.html" + GetQuerystring();

}

}

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'top';
var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u249 = document.getElementById('u249');

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u30 = document.getElementById('u30');

var u77 = document.getElementById('u77');

u77.style.cursor = 'pointer';
if (bIE) u77.attachEvent("onclick", Clicku77);
else u77.addEventListener("click", Clicku77, true);
function Clicku77(e)
{

if (true) {

	self.location.href="特卖场详细页.html" + GetQuerystring();

}

}

var u152 = document.getElementById('u152');

var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'center';
var u61 = document.getElementById('u61');

var u168 = document.getElementById('u168');

u168.style.cursor = 'pointer';
if (bIE) u168.attachEvent("onclick", Clicku168);
else u168.addEventListener("click", Clicku168, true);
function Clicku168(e)
{

if (true) {

	self.location.href="特卖场详细页.html" + GetQuerystring();

}

}

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u95 = document.getElementById('u95');

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'center';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u165 = document.getElementById('u165');

var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'top';
var u181 = document.getElementById('u181');

u181.style.cursor = 'pointer';
if (bIE) u181.attachEvent("onclick", Clicku181);
else u181.addEventListener("click", Clicku181, true);
function Clicku181(e)
{

if (true) {

	self.location.href="特卖场详细页.html" + GetQuerystring();

}

}

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u243 = document.getElementById('u243');

var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'top';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
var u221 = document.getElementById('u221');

u221.style.cursor = 'pointer';
if (bIE) u221.attachEvent("onclick", Clicku221);
else u221.addEventListener("click", Clicku221, true);
function Clicku221(e)
{

if (true) {

	self.location.href="网站前端.html" + GetQuerystring();

}

}

var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'top';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'center';
var u58 = document.getElementById('u58');

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'center';
var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'top';
var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'center';
var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'top';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'center';
var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'top';
var u103 = document.getElementById('u103');

u103.style.cursor = 'pointer';
if (bIE) u103.attachEvent("onclick", Clicku103);
else u103.addEventListener("click", Clicku103, true);
function Clicku103(e)
{

if (true) {

	self.location.href="特卖场详细页.html" + GetQuerystring();

}

}

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'center';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'top';
var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'top';
var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'top';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u160 = document.getElementById('u160');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'center';
var u87 = document.getElementById('u87');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u8 = document.getElementById('u8');

var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'top';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'top';
var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'center';
var u149 = document.getElementById('u149');

var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'center';
var u20 = document.getElementById('u20');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u227 = document.getElementById('u227');

u227.style.cursor = 'pointer';
if (bIE) u227.attachEvent("onclick", Clicku227);
else u227.addEventListener("click", Clicku227, true);
function Clicku227(e)
{

if (true) {

	self.location.href="网站前端.html" + GetQuerystring();

}

}

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'top';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'top';
var u235 = document.getElementById('u235');

u235.style.cursor = 'pointer';
if (bIE) u235.attachEvent("onclick", Clicku235);
else u235.addEventListener("click", Clicku235, true);
function Clicku235(e)
{

if (true) {

	NewWindow("http://www.heesale.com/" + "", "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'top';
var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'center';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'top';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u48 = document.getElementById('u48');

var u121 = document.getElementById('u121');

var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'top';
var u242 = document.getElementById('u242');

u242.style.cursor = 'pointer';
if (bIE) u242.attachEvent("onclick", Clicku242);
else u242.addEventListener("click", Clicku242, true);
function Clicku242(e)
{

if (true) {

	self.location.href="搜索列表.html" + GetQuerystring();

}

}

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'top';
var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'top';
var u245 = document.getElementById('u245');

u245.style.cursor = 'pointer';
if (bIE) u245.attachEvent("onclick", Clicku245);
else u245.addEventListener("click", Clicku245, true);
function Clicku245(e)
{

if (true) {

	self.location.href="购物车_第一步.html" + GetQuerystring();

}

}

var u215 = document.getElementById('u215');

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u237 = document.getElementById('u237');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'top';
var u32 = document.getElementById('u32');

var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u134 = document.getElementById('u134');

var u51 = document.getElementById('u51');

u51.style.cursor = 'pointer';
if (bIE) u51.attachEvent("onclick", Clicku51);
else u51.addEventListener("click", Clicku51, true);
function Clicku51(e)
{

if (true) {

	self.location.href="特卖场详细页.html" + GetQuerystring();

}

}

var u239 = document.getElementById('u239');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u155 = document.getElementById('u155');

u155.style.cursor = 'pointer';
if (bIE) u155.attachEvent("onclick", Clicku155);
else u155.addEventListener("click", Clicku155, true);
function Clicku155(e)
{

if (true) {

	self.location.href="特卖场详细页.html" + GetQuerystring();

}

}

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'top';
var u147 = document.getElementById('u147');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u43 = document.getElementById('u43');

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'center';
var u26 = document.getElementById('u26');

var u219 = document.getElementById('u219');

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u74 = document.getElementById('u74');

var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'center';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'top';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u136 = document.getElementById('u136');

var u10 = document.getElementById('u10');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'top';
var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'top';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'center';
var u224 = document.getElementById('u224');

u224.style.cursor = 'pointer';
if (bIE) u224.attachEvent("onclick", Clicku224);
else u224.addEventListener("click", Clicku224, true);
function Clicku224(e)
{

if (true) {

	self.location.href="会员注册.html" + GetQuerystring();

}

}
gv_vAlignTable['u224'] = 'top';
var u24 = document.getElementById('u24');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'center';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u0 = document.getElementById('u0');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u38 = document.getElementById('u38');

u38.style.cursor = 'pointer';
if (bIE) u38.attachEvent("onclick", Clicku38);
else u38.addEventListener("click", Clicku38, true);
function Clicku38(e)
{

if (true) {

	self.location.href="特卖场详细页.html" + GetQuerystring();

}

}

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u110 = document.getElementById('u110');

var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u223 = document.getElementById('u223');

u223.style.cursor = 'pointer';
if (bIE) u223.attachEvent("onclick", Clicku223);
else u223.addEventListener("click", Clicku223, true);
function Clicku223(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u223'] = 'top';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u69 = document.getElementById('u69');

var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'center';
var u22 = document.getElementById('u22');

var u123 = document.getElementById('u123');

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'top';
var u139 = document.getElementById('u139');

var u186 = document.getElementById('u186');

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u217 = document.getElementById('u217');

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u225 = document.getElementById('u225');

u225.style.cursor = 'pointer';
if (bIE) u225.attachEvent("onclick", Clicku225);
else u225.addEventListener("click", Clicku225, true);
function Clicku225(e)
{

if (true) {

	self.location.href="我的订单.html" + GetQuerystring();

}

}
gv_vAlignTable['u225'] = 'top';
var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'top';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'center';
var u16 = document.getElementById('u16');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'top';
var u64 = document.getElementById('u64');

u64.style.cursor = 'pointer';
if (bIE) u64.attachEvent("onclick", Clicku64);
else u64.addEventListener("click", Clicku64, true);
function Clicku64(e)
{

if (true) {

	self.location.href="特卖场详细页.html" + GetQuerystring();

}

}

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'top';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'top';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'center';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u175 = document.getElementById('u175');

var u82 = document.getElementById('u82');

var u116 = document.getElementById('u116');

u116.style.cursor = 'pointer';
if (bIE) u116.attachEvent("onclick", Clicku116);
else u116.addEventListener("click", Clicku116, true);
function Clicku116(e)
{

if (true) {

	self.location.href="特卖场详细页.html" + GetQuerystring();

}

}

var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'top';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u162 = document.getElementById('u162');

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'top';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u178 = document.getElementById('u178');

var u229 = document.getElementById('u229');

var u14 = document.getElementById('u14');

var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'center';
if (window.OnLoad) OnLoad();
