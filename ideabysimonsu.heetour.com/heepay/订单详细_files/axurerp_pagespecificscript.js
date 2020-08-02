
var PageName = '订单详细';
var PageId = 'pc7e7861cf8164b408667a705eb674540'
var PageUrl = '订单详细.html'
document.title = '订单详细';

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
gv_vAlignTable['u247'] = 'center';
var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'center';
var u45 = document.getElementById('u45');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u226 = document.getElementById('u226');

var u142 = document.getElementById('u142');

var u180 = document.getElementById('u180');

var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'center';
var u190 = document.getElementById('u190');

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'center';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u104 = document.getElementById('u104');

var u93 = document.getElementById('u93');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u112 = document.getElementById('u112');

var u128 = document.getElementById('u128');

var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'center';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'center';
var u262 = document.getElementById('u262');

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u206 = document.getElementById('u206');

var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'center';
var u90 = document.getElementById('u90');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'center';
var u252 = document.getElementById('u252');

var u270 = document.getElementById('u270');

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u268 = document.getElementById('u268');

var u23 = document.getElementById('u23');

u23.style.cursor = 'pointer';
if (bIE) u23.attachEvent("onclick", Clicku23);
else u23.addEventListener("click", Clicku23, true);
function Clicku23(e)
{

if (true) {

	self.location.href="预警管理.html" + GetQuerystring();

}

}

var u246 = document.getElementById('u246');

var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'center';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u130 = document.getElementById('u130');

var u108 = document.getElementById('u108');

var u228 = document.getElementById('u228');

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'center';
var u100 = document.getElementById('u100');

var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'center';
var u37 = document.getElementById('u37');

var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'center';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'center';
var u248 = document.getElementById('u248');

var u21 = document.getElementById('u21');

u21.style.cursor = 'pointer';
if (bIE) u21.attachEvent("onclick", Clicku21);
else u21.addEventListener("click", Clicku21, true);
function Clicku21(e)
{

if (true) {

	self.location.href="后台.html" + GetQuerystring();

}

}
gv_vAlignTable['u21'] = 'top';
var u260 = document.getElementById('u260');

var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u240 = document.getElementById('u240');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u194 = document.getElementById('u194');

var u156 = document.getElementById('u156');

var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'center';
var u35 = document.getElementById('u35');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u126 = document.getElementById('u126');

var u170 = document.getElementById('u170');

var u264 = document.getElementById('u264');

var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'center';
var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'center';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u220 = document.getElementById('u220');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u84 = document.getElementById('u84');

var u106 = document.getElementById('u106');

var u9 = document.getElementById('u9');

u9.style.cursor = 'pointer';
if (bIE) u9.attachEvent("onclick", Clicku9);
else u9.addEventListener("click", Clicku9, true);
function Clicku9(e)
{

if (true) {

	self.location.href="记名卡档案管理.html" + GetQuerystring();

}

}

var u182 = document.getElementById('u182');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u198 = document.getElementById('u198');

var u81 = document.getElementById('u81');

var u144 = document.getElementById('u144');

var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'center';
var u172 = document.getElementById('u172');

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'center';
var u94 = document.getElementById('u94');

var u30 = document.getElementById('u30');

u30.style.cursor = 'pointer';
if (bIE) u30.attachEvent("onclick", Clicku30);
else u30.addEventListener("click", Clicku30, true);
function Clicku30(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u152 = document.getElementById('u152');

var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'center';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u168 = document.getElementById('u168');

var u7 = document.getElementById('u7');

u7.style.cursor = 'pointer';
if (bIE) u7.attachEvent("onclick", Clicku7);
else u7.addEventListener("click", Clicku7, true);
function Clicku7(e)
{

if (true) {

	self.location.href="订单管理.html" + GetQuerystring();

}

}

var u13 = document.getElementById('u13');

u13.style.cursor = 'pointer';
if (bIE) u13.attachEvent("onclick", Clicku13);
else u13.addEventListener("click", Clicku13, true);
function Clicku13(e)
{

if (true) {

	self.location.href="发票管理.html" + GetQuerystring();

}

}

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u96 = document.getElementById('u96');

var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'center';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'center';
var u254 = document.getElementById('u254');

var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'center';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u4 = document.getElementById('u4');

var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'center';
var u2 = document.getElementById('u2');

var u75 = document.getElementById('u75');

u75.style.cursor = 'pointer';
if (bIE) u75.attachEvent("onclick", Clicku75);
else u75.addEventListener("click", Clicku75, true);
function Clicku75(e)
{

if (true) {

	self.location.href="开具发票.html" + GetQuerystring();

}

}

var u132 = document.getElementById('u132');

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'center';
var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'center';
var u148 = document.getElementById('u148');

var u58 = document.getElementById('u58');

var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'center';
var u140 = document.getElementById('u140');

var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'center';
var u250 = document.getElementById('u250');

var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'center';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u234 = document.getElementById('u234');

var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'center';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u274 = document.getElementById('u274');

var u25 = document.getElementById('u25');

u25.style.cursor = 'pointer';
if (bIE) u25.attachEvent("onclick", Clicku25);
else u25.addEventListener("click", Clicku25, true);
function Clicku25(e)
{

if (true) {

	self.location.href="收款管理.html" + GetQuerystring();

}

}

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'center';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'center';
var u196 = document.getElementById('u196');

var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'center';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u160 = document.getElementById('u160');

var u39 = document.getElementById('u39');

var u70 = document.getElementById('u70');

u70.style.cursor = 'pointer';
if (bIE) u70.attachEvent("onclick", Clicku70);
else u70.addEventListener("click", Clicku70, true);
function Clicku70(e)
{

if (true) {

	self.location.href="出纳查帐.html" + GetQuerystring();

}

}

var u120 = document.getElementById('u120');

var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'center';
var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'center';
var u87 = document.getElementById('u87');

var u53 = document.getElementById('u53');

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u214 = document.getElementById('u214');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'center';
var u222 = document.getElementById('u222');

var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'center';
var u238 = document.getElementById('u238');

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u67 = document.getElementById('u67');

var u52 = document.getElementById('u52');

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'center';
var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u184 = document.getElementById('u184');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u146 = document.getElementById('u146');

var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'center';
var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u154 = document.getElementById('u154');

var u236 = document.getElementById('u236');

var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u202 = document.getElementById('u202');

var u17 = document.getElementById('u17');

u17.style.cursor = 'pointer';
if (bIE) u17.attachEvent("onclick", Clicku17);
else u17.addEventListener("click", Clicku17, true);
function Clicku17(e)
{

if (true) {

	self.location.href="卡企业管理.html" + GetQuerystring();

}

}

var u218 = document.getElementById('u218');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u210 = document.getElementById('u210');

var u242 = document.getElementById('u242');

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'center';
var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'center';
var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'center';
var u79 = document.getElementById('u79');

var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'center';
var u188 = document.getElementById('u188');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u134 = document.getElementById('u134');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'center';
var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'center';
var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'center';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'center';
var u158 = document.getElementById('u158');

var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u204 = document.getElementById('u204');

var u276 = document.getElementById('u276');

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u60 = document.getElementById('u60');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u150 = document.getElementById('u150');

var u43 = document.getElementById('u43');

var u114 = document.getElementById('u114');

var u89 = document.getElementById('u89');

var u174 = document.getElementById('u174');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'center';
var u124 = document.getElementById('u124');

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u122 = document.getElementById('u122');

var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'center';
var u138 = document.getElementById('u138');

var u136 = document.getElementById('u136');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u92 = document.getElementById('u92');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'center';
var u41 = document.getElementById('u41');

var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'center';
var u224 = document.getElementById('u224');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u72 = document.getElementById('u72');

u72.style.cursor = 'pointer';
if (bIE) u72.attachEvent("onclick", Clicku72);
else u72.addEventListener("click", Clicku72, true);
function Clicku72(e)
{

if (true) {

	self.location.href="充值确认.html" + GetQuerystring();

}

}

var u102 = document.getElementById('u102');

var u232 = document.getElementById('u232');

var u118 = document.getElementById('u118');

var u0 = document.getElementById('u0');

var u55 = document.getElementById('u55');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u83 = document.getElementById('u83');

var u110 = document.getElementById('u110');

var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'center';
var u86 = document.getElementById('u86');

var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'center';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u69 = document.getElementById('u69');

var u216 = document.getElementById('u216');

var u258 = document.getElementById('u258');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u212 = document.getElementById('u212');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'center';
var u186 = document.getElementById('u186');

var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'center';
var u166 = document.getElementById('u166');

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'center';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u19 = document.getElementById('u19');

u19.style.cursor = 'pointer';
if (bIE) u19.attachEvent("onclick", Clicku19);
else u19.addEventListener("click", Clicku19, true);
function Clicku19(e)
{

if (true) {

	self.location.href="添加手工单.html" + GetQuerystring();

}

}

var u50 = document.getElementById('u50');

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'center';
var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u266 = document.getElementById('u266');

var u15 = document.getElementById('u15');

u15.style.cursor = 'pointer';
if (bIE) u15.attachEvent("onclick", Clicku15);
else u15.addEventListener("click", Clicku15, true);
function Clicku15(e)
{

if (true) {

	self.location.href="消费记录统计.html" + GetQuerystring();

}

}

var u33 = document.getElementById('u33');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'center';
var u98 = document.getElementById('u98');

var u230 = document.getElementById('u230');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u208 = document.getElementById('u208');

var u64 = document.getElementById('u64');

var u164 = document.getElementById('u164');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u200 = document.getElementById('u200');

var u192 = document.getElementById('u192');

var u176 = document.getElementById('u176');

var u47 = document.getElementById('u47');

var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'center';
var u82 = document.getElementById('u82');

var u116 = document.getElementById('u116');

var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'center';
var u78 = document.getElementById('u78');

var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'center';
var u272 = document.getElementById('u272');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u11 = document.getElementById('u11');

u11.style.cursor = 'pointer';
if (bIE) u11.attachEvent("onclick", Clicku11);
else u11.addEventListener("click", Clicku11, true);
function Clicku11(e)
{

if (true) {

	self.location.href="不记名卡档案管理.html" + GetQuerystring();

}

}

var u162 = document.getElementById('u162');

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'center';
var u29 = document.getElementById('u29');

var u178 = document.getElementById('u178');

var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'center';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u244 = document.getElementById('u244');

if (window.OnLoad) OnLoad();
