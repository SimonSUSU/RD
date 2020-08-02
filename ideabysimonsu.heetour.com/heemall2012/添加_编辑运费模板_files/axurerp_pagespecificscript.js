
var PageName = '添加&编辑运费模板';
var PageId = 'pbeec78e0c34742a08c24b653f046443a'
var PageUrl = '添加_编辑运费模板.html'
document.title = '添加&编辑运费模板';

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

eval(GetDynamicPanelScript('u227', 1));

var u62 = document.getElementById('u62');

var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'center';
var u247 = document.getElementById('u247');

u247.style.cursor = 'pointer';
if (bIE) u247.attachEvent("onclick", Clicku247);
else u247.addEventListener("click", Clicku247, true);
function Clicku247(e)
{

if (true) {

	self.location.href="店铺设置.html" + GetQuerystring();

}

}

var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'center';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u28 = document.getElementById('u28');

var u226 = document.getElementById('u226');

var u142 = document.getElementById('u142');

var u180 = document.getElementById('u180');

var u251 = document.getElementById('u251');

u251.style.cursor = 'pointer';
if (bIE) u251.attachEvent("onclick", Clicku251);
else u251.addEventListener("click", Clicku251, true);
function Clicku251(e)
{

if (true) {

	self.location.href="主题设置.html" + GetQuerystring();

}

}

var u190 = document.getElementById('u190');

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'center';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u104 = document.getElementById('u104');

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u12 = document.getElementById('u12');

var u277 = document.getElementById('u277');

u277.style.cursor = 'pointer';
if (bIE) u277.attachEvent("onclick", Clicku277);
else u277.addEventListener("click", Clicku277, true);
function Clicku277(e)
{

if (true) {

	self.location.href="商家自助系统.html" + GetQuerystring();

}

}
gv_vAlignTable['u277'] = 'top';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u112 = document.getElementById('u112');

var u128 = document.getElementById('u128');

var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'center';
var u56 = document.getElementById('u56');

var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'top';
var u262 = document.getElementById('u262');

u262.style.cursor = 'pointer';
if (bIE) u262.attachEvent("onclick", Clicku262);
else u262.addEventListener("click", Clicku262, true);
function Clicku262(e)
{

if (true) {

	self.location.href="分类管理.html" + GetQuerystring();

}

}

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u206 = document.getElementById('u206');

var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'center';
var u90 = document.getElementById('u90');

var u40 = document.getElementById('u40');

var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'top';
var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'center';
var u270 = document.getElementById('u270');

u270.style.cursor = 'pointer';
if (bIE) u270.attachEvent("onclick", Clicku270);
else u270.addEventListener("click", Clicku270, true);
function Clicku270(e)
{

if (true) {

	self.location.href="资金管理.html" + GetQuerystring();

}

}

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u268 = document.getElementById('u268');

u268.style.cursor = 'pointer';
if (bIE) u268.attachEvent("onclick", Clicku268);
else u268.addEventListener("click", Clicku268, true);
function Clicku268(e)
{

if (true) {

	self.location.href="合作伙伴管理.html" + GetQuerystring();

}

}

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u246 = document.getElementById('u246');

u246.style.cursor = 'pointer';
if (bIE) u246.attachEvent("onclick", Clicku246);
else u246.addEventListener("click", Clicku246, true);
function Clicku246(e)
{

if (true) {

	self.location.href="搜索列表.html" + GetQuerystring();

}

}

var u257 = document.getElementById('u257');

u257.style.cursor = 'pointer';
if (bIE) u257.attachEvent("onclick", Clicku257);
else u257.addEventListener("click", Clicku257, true);
function Clicku257(e)
{

if (true) {

	self.location.href="咨询管理.html" + GetQuerystring();

}

}

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u130 = document.getElementById('u130');

var u108 = document.getElementById('u108');

var u228 = document.getElementById('u228');

var u54 = document.getElementById('u54');

var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'center';
var u100 = document.getElementById('u100');

var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'center';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'center';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u68 = document.getElementById('u68');

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'top';
var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'center';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'center';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'center';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u194 = document.getElementById('u194');

var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'center';
var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'center';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u126 = document.getElementById('u126');

var u170 = document.getElementById('u170');

var u264 = document.getElementById('u264');

u264.style.cursor = 'pointer';
if (bIE) u264.attachEvent("onclick", Clicku264);
else u264.addEventListener("click", Clicku264, true);
function Clicku264(e)
{

if (true) {

	self.location.href="订单管理.html" + GetQuerystring();

}

}

var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'center';
var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'center';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u131 = document.getElementById('u131');

var u220 = document.getElementById('u220');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u63 = document.getElementById('u63');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u106 = document.getElementById('u106');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u182 = document.getElementById('u182');

var u46 = document.getElementById('u46');

var u198 = document.getElementById('u198');

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u144 = document.getElementById('u144');

var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'center';
var u172 = document.getElementById('u172');

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u249 = document.getElementById('u249');

u249.style.cursor = 'pointer';
if (bIE) u249.attachEvent("onclick", Clicku249);
else u249.addEventListener("click", Clicku249, true);
function Clicku249(e)
{

if (true) {

	self.location.href="商家后台首页.html" + GetQuerystring();

}

}

var u94 = document.getElementById('u94');

var u30 = document.getElementById('u30');

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u152 = document.getElementById('u152');

u152.style.cursor = 'pointer';
if (bIE) u152.attachEvent("onclick", Clicku152);
else u152.addEventListener("click", Clicku152, true);
function Clicku152(e)
{

if (true) {

	SetPanelVisibilityu227("");

}

}
gv_vAlignTable['u152'] = 'top';
var u241 = document.getElementById('u241');

var u61 = document.getElementById('u61');

var u168 = document.getElementById('u168');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u96 = document.getElementById('u96');

var u253 = document.getElementById('u253');

u253.style.cursor = 'pointer';
if (bIE) u253.attachEvent("onclick", Clicku253);
else u253.addEventListener("click", Clicku253, true);
function Clicku253(e)
{

if (true) {

	self.location.href="商品管理.html" + GetQuerystring();

}

}

var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u44 = document.getElementById('u44');

var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'center';
var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'center';
var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'center';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u4 = document.getElementById('u4');

var u243 = document.getElementById('u243');

var u2 = document.getElementById('u2');

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u132 = document.getElementById('u132');

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'top';
var u255 = document.getElementById('u255');

u255.style.cursor = 'pointer';
if (bIE) u255.attachEvent("onclick", Clicku255);
else u255.addEventListener("click", Clicku255, true);
function Clicku255(e)
{

if (true) {

	self.location.href="特卖活动管理.html" + GetQuerystring();

}

}

var u148 = document.getElementById('u148');

var u58 = document.getElementById('u58');

var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'center';
var u140 = document.getElementById('u140');

var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'center';
var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'center';
var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'center';
var u42 = document.getElementById('u42');

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u234 = document.getElementById('u234');

u234.style.cursor = 'pointer';
if (bIE) u234.attachEvent("onclick", Clicku234);
else u234.addEventListener("click", Clicku234, true);
function Clicku234(e)
{

if (true) {

	SetPanelVisibilityu227("hidden");

}

}

var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'center';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u274 = document.getElementById('u274');

u274.style.cursor = 'pointer';
if (bIE) u274.attachEvent("onclick", Clicku274);
else u274.addEventListener("click", Clicku274, true);
function Clicku274(e)
{

if (true) {

	self.location.href="资料管理.html" + GetQuerystring();

}

}

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u153 = document.getElementById('u153');

u153.style.cursor = 'pointer';
if (bIE) u153.attachEvent("onclick", Clicku153);
else u153.addEventListener("click", Clicku153, true);
function Clicku153(e)
{

if (true) {

	SetPanelVisibilityu227("");

}

}
gv_vAlignTable['u153'] = 'top';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'center';
var u196 = document.getElementById('u196');

var u201 = document.getElementById('u201');

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u160 = document.getElementById('u160');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u70 = document.getElementById('u70');

var u120 = document.getElementById('u120');

var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'top';
var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'center';
var u87 = document.getElementById('u87');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u8 = document.getElementById('u8');

var u214 = document.getElementById('u214');

var u36 = document.getElementById('u36');

var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'center';
var u222 = document.getElementById('u222');

u222.style.cursor = 'pointer';
if (bIE) u222.attachEvent("onclick", Clicku222);
else u222.addEventListener("click", Clicku222, true);
function Clicku222(e)
{

if (true) {

	SetPanelVisibilityu227("");

}

}
gv_vAlignTable['u222'] = 'top';
var u149 = document.getElementById('u149');

var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'center';
var u20 = document.getElementById('u20');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u52 = document.getElementById('u52');

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'center';
var u227 = document.getElementById('u227');

var u6 = document.getElementById('u6');

u6.style.cursor = 'pointer';
if (bIE) u6.attachEvent("onclick", Clicku6);
else u6.addEventListener("click", Clicku6, true);
function Clicku6(e)
{

if (true) {

	self.location.href="运费管理.html" + GetQuerystring();

}

}
gv_vAlignTable['u6'] = 'top';
var u184 = document.getElementById('u184');

var u85 = document.getElementById('u85');

var u146 = document.getElementById('u146');

var u235 = document.getElementById('u235');

var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'center';
var u34 = document.getElementById('u34');

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'top';
var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'top';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u202 = document.getElementById('u202');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u218 = document.getElementById('u218');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u65 = document.getElementById('u65');

u65.style.cursor = 'pointer';
if (bIE) u65.attachEvent("onclick", Clicku65);
else u65.addEventListener("click", Clicku65, true);
function Clicku65(e)
{

if (true) {

	SetPanelVisibilityu227("");

}

}
gv_vAlignTable['u65'] = 'top';
var u48 = document.getElementById('u48');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u210 = document.getElementById('u210');

var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'center';
var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u203 = document.getElementById('u203');

var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'center';
var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'center';
var u79 = document.getElementById('u79');

var u237 = document.getElementById('u237');

var u188 = document.getElementById('u188');

var u32 = document.getElementById('u32');

var u80 = document.getElementById('u80');

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u239 = document.getElementById('u239');

u239.style.cursor = 'pointer';
if (bIE) u239.attachEvent("onclick", Clicku239);
else u239.addEventListener("click", Clicku239, true);
function Clicku239(e)
{

if (true) {

	self.location.href="商家后台首页.html" + GetQuerystring();

}

}

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'center';
var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'center';
var u76 = document.getElementById('u76');

var u155 = document.getElementById('u155');

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'top';
var u276 = document.getElementById('u276');

u276.style.cursor = 'pointer';
if (bIE) u276.attachEvent("onclick", Clicku276);
else u276.addEventListener("click", Clicku276, true);
function Clicku276(e)
{

if (true) {

	self.location.href="网站前端.html" + GetQuerystring();

}

}
gv_vAlignTable['u276'] = 'top';
var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u60 = document.getElementById('u60');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u150 = document.getElementById('u150');

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u114 = document.getElementById('u114');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u174 = document.getElementById('u174');

var u26 = document.getElementById('u26');

var u219 = document.getElementById('u219');

var u124 = document.getElementById('u124');

var u74 = document.getElementById('u74');

var u122 = document.getElementById('u122');

var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'center';
var u138 = document.getElementById('u138');

var u136 = document.getElementById('u136');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u92 = document.getElementById('u92');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'center';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u135 = document.getElementById('u135');

u135.style.cursor = 'pointer';
if (bIE) u135.attachEvent("onclick", Clicku135);
else u135.addEventListener("click", Clicku135, true);
function Clicku135(e)
{

if (true) {

	SetPanelVisibilityu227("");

}

}
gv_vAlignTable['u135'] = 'top';
var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'top';
var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'top';
var u24 = document.getElementById('u24');

var u72 = document.getElementById('u72');

var u102 = document.getElementById('u102');

var u232 = document.getElementById('u232');

u232.style.cursor = 'pointer';
if (bIE) u232.attachEvent("onclick", Clicku232);
else u232.addEventListener("click", Clicku232, true);
function Clicku232(e)
{

if (true) {

	SetPanelVisibilityu227("hidden");

}

}

var u118 = document.getElementById('u118');

var u0 = document.getElementById('u0');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u38 = document.getElementById('u38');

var u83 = document.getElementById('u83');

u83.style.cursor = 'pointer';
if (bIE) u83.attachEvent("onclick", Clicku83);
else u83.addEventListener("click", Clicku83, true);
function Clicku83(e)
{

if (true) {

	SetPanelVisibilityu227("");

}

}
gv_vAlignTable['u83'] = 'top';
var u110 = document.getElementById('u110');

var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'center';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u223 = document.getElementById('u223');

u223.style.cursor = 'pointer';
if (bIE) u223.attachEvent("onclick", Clicku223);
else u223.addEventListener("click", Clicku223, true);
function Clicku223(e)
{

if (true) {

	SetPanelVisibilityu227("");

}

}
gv_vAlignTable['u223'] = 'top';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u216 = document.getElementById('u216');

var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'center';
var u22 = document.getElementById('u22');

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

var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'center';
var u133 = document.getElementById('u133');

var u19 = document.getElementById('u19');

var u50 = document.getElementById('u50');

var u225 = document.getElementById('u225');

var u157 = document.getElementById('u157');

var u266 = document.getElementById('u266');

u266.style.cursor = 'pointer';
if (bIE) u266.attachEvent("onclick", Clicku266);
else u266.addEventListener("click", Clicku266, true);
function Clicku266(e)
{

if (true) {

	self.location.href="运费管理.html" + GetQuerystring();

}

}

var u15 = document.getElementById('u15');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'center';
var u98 = document.getElementById('u98');

var u230 = document.getElementById('u230');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u208 = document.getElementById('u208');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u164 = document.getElementById('u164');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u200 = document.getElementById('u200');

var u192 = document.getElementById('u192');

var u176 = document.getElementById('u176');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'center';
var u82 = document.getElementById('u82');

u82.style.cursor = 'pointer';
if (bIE) u82.attachEvent("onclick", Clicku82);
else u82.addEventListener("click", Clicku82, true);
function Clicku82(e)
{

if (true) {

	SetPanelVisibilityu227("");

}

}
gv_vAlignTable['u82'] = 'top';
var u116 = document.getElementById('u116');

var u205 = document.getElementById('u205');

u205.style.cursor = 'pointer';
if (bIE) u205.attachEvent("onclick", Clicku205);
else u205.addEventListener("click", Clicku205, true);
function Clicku205(e)
{

if (true) {

	SetPanelVisibilityu227("");

}

}
gv_vAlignTable['u205'] = 'top';
var u78 = document.getElementById('u78');

var u259 = document.getElementById('u259');

u259.style.cursor = 'pointer';
if (bIE) u259.attachEvent("onclick", Clicku259);
else u259.addEventListener("click", Clicku259, true);
function Clicku259(e)
{

if (true) {

	self.location.href="品牌管理.html" + GetQuerystring();

}

}

var u272 = document.getElementById('u272');

u272.style.cursor = 'pointer';
if (bIE) u272.attachEvent("onclick", Clicku272);
else u272.addEventListener("click", Clicku272, true);
function Clicku272(e)
{

if (true) {

	self.location.href="页面管理.html" + GetQuerystring();

}

}

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u162 = document.getElementById('u162');

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'center';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u178 = document.getElementById('u178');

var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'center';
var u14 = document.getElementById('u14');

var u244 = document.getElementById('u244');

if (window.OnLoad) OnLoad();
