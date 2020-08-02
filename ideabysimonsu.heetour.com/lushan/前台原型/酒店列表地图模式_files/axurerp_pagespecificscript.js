
var PageName = '酒店列表地图模式';
var PageId = 'pfcb38719be754d31a0843599751a2d0a'
var PageUrl = '酒店列表地图模式.html'
document.title = '酒店列表地图模式';

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
gv_vAlignTable['u62'] = 'top';
var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'center';
var u195 = document.getElementById('u195');

var u45 = document.getElementById('u45');

var u28 = document.getElementById('u28');

u28.style.cursor = 'pointer';
if (bIE) u28.attachEvent("onclick", Clicku28);
else u28.addEventListener("click", Clicku28, true);
function Clicku28(e)
{

if (true) {

	self.location.href="我要咨询.html" + GetQuerystring();

}

}
gv_vAlignTable['u28'] = 'top';
var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'center';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'center';
var u180 = document.getElementById('u180');

var u251 = document.getElementById('u251');

var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'center';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u231 = document.getElementById('u231');

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'center';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u12 = document.getElementById('u12');

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", Clicku12);
else u12.addEventListener("click", Clicku12, true);
function Clicku12(e)
{

if (true) {

	self.location.href="抢购展示页.html" + GetQuerystring();

}

}

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u128 = document.getElementById('u128');

var u193 = document.getElementById('u193');

var u56 = document.getElementById('u56');

var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'top';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
var u206 = document.getElementById('u206');

var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'center';
var u90 = document.getElementById('u90');

var u40 = document.getElementById('u40');

var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'center';
var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'center';
var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u246 = document.getElementById('u246');

var u88 = document.getElementById('u88');

var u130 = document.getElementById('u130');

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u228 = document.getElementById('u228');

u228.style.cursor = 'pointer';
if (bIE) u228.attachEvent("onclick", Clicku228);
else u228.addEventListener("click", Clicku228, true);
function Clicku228(e)
{

if (true) {

	self.location.href="酒店详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u228'] = 'top';
var u54 = document.getElementById('u54');

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'center';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'center';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u105 = document.getElementById('u105');

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

	self.location.href="注册.html" + GetQuerystring();

}

}
gv_vAlignTable['u21'] = 'top';
var u113 = document.getElementById('u113');

var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'center';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'center';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'center';
var u207 = document.getElementById('u207');

u207.style.cursor = 'pointer';
if (bIE) u207.attachEvent("onclick", Clicku207);
else u207.addEventListener("click", Clicku207, true);
function Clicku207(e)
{

if (true) {

	self.location.href="酒店详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u207'] = 'top';
var u35 = document.getElementById('u35');

var u18 = document.getElementById('u18');

u18.style.cursor = 'pointer';
if (bIE) u18.attachEvent("onclick", Clicku18);
else u18.addEventListener("click", Clicku18, true);
function Clicku18(e)
{

if (true) {

	self.location.href="首页.html" + GetQuerystring();

}

}

var u126 = document.getElementById('u126');

var u170 = document.getElementById('u170');

var u185 = document.getElementById('u185');

var u197 = document.getElementById('u197');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u220 = document.getElementById('u220');

var u109 = document.getElementById('u109');

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u63 = document.getElementById('u63');

u63.style.cursor = 'pointer';
if (bIE) u63.attachEvent("onclick", Clicku63);
else u63.addEventListener("click", Clicku63, true);
function Clicku63(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u84 = document.getElementById('u84');

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'center';
var u81 = document.getElementById('u81');

u81.style.cursor = 'pointer';
if (bIE) u81.attachEvent("onclick", Clicku81);
else u81.addEventListener("click", Clicku81, true);
function Clicku81(e)
{

if (true) {

	self.location.href="酒店详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u81'] = 'top';
var u144 = document.getElementById('u144');

u144.style.cursor = 'pointer';
if (bIE) u144.attachEvent("onclick", Clicku144);
else u144.addEventListener("click", Clicku144, true);
function Clicku144(e)
{

if (true) {

	self.location.href="酒店详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u144'] = 'top';
var u233 = document.getElementById('u233');

var u172 = document.getElementById('u172');

var u151 = document.getElementById('u151');

var u249 = document.getElementById('u249');

var u94 = document.getElementById('u94');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u77 = document.getElementById('u77');

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'center';
var u241 = document.getElementById('u241');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u168 = document.getElementById('u168');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u96 = document.getElementById('u96');

var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'top';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u165 = document.getElementById('u165');

u165.style.cursor = 'pointer';
if (bIE) u165.attachEvent("onclick", Clicku165);
else u165.addEventListener("click", Clicku165, true);
function Clicku165(e)
{

if (true) {

	self.location.href="酒店详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u165'] = 'top';
var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'center';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u4 = document.getElementById('u4');

u4.style.cursor = 'pointer';
if (bIE) u4.attachEvent("onclick", Clicku4);
else u4.addEventListener("click", Clicku4, true);
function Clicku4(e)
{

if (true) {

	self.location.href="门票.html" + GetQuerystring();

}

}

var u243 = document.getElementById('u243');

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

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u132 = document.getElementById('u132');

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'center';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'center';
var u58 = document.getElementById('u58');

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u183 = document.getElementById('u183');

var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'center';
var u199 = document.getElementById('u199');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u145 = document.getElementById('u145');

var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'center';
var u191 = document.getElementById('u191');

var u103 = document.getElementById('u103');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u153 = document.getElementById('u153');

var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'center';
var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'center';
var u201 = document.getElementById('u201');

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'center';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u70 = document.getElementById('u70');

var u120 = document.getElementById('u120');

var u187 = document.getElementById('u187');

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u8 = document.getElementById('u8');

u8.style.cursor = 'pointer';
if (bIE) u8.attachEvent("onclick", Clicku8);
else u8.addEventListener("click", Clicku8, true);
function Clicku8(e)
{

if (true) {

	self.location.href="别墅.html" + GetQuerystring();

}

}

var u214 = document.getElementById('u214');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'center';
var u222 = document.getElementById('u222');

var u149 = document.getElementById('u149');

var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'center';
var u20 = document.getElementById('u20');

u20.style.cursor = 'pointer';
if (bIE) u20.attachEvent("onclick", Clicku20);
else u20.addEventListener("click", Clicku20, true);
function Clicku20(e)
{

if (true) {

	self.location.href="登录.html" + GetQuerystring();

}

}
gv_vAlignTable['u20'] = 'top';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u52 = document.getElementById('u52');

var u141 = document.getElementById('u141');

var u227 = document.getElementById('u227');

var u6 = document.getElementById('u6');

u6.style.cursor = 'pointer';
if (bIE) u6.attachEvent("onclick", Clicku6);
else u6.addEventListener("click", Clicku6, true);
function Clicku6(e)
{

if (true) {

	self.location.href="酒店.html" + GetQuerystring();

}

}

var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'center';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'center';
var u235 = document.getElementById('u235');

var u34 = document.getElementById('u34');

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'center';
var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'center';
var u99 = document.getElementById('u99');

var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'center';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
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

	self.location.href="酒店列表.html" + GetQuerystring();

}

}

var u48 = document.getElementById('u48');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u210 = document.getElementById('u210');

var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'center';
var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'top';
var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'top';
var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'center';
var u79 = document.getElementById('u79');

var u237 = document.getElementById('u237');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u134 = document.getElementById('u134');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u239 = document.getElementById('u239');

var u143 = document.getElementById('u143');

var u76 = document.getElementById('u76');

u76.style.cursor = 'pointer';
if (bIE) u76.attachEvent("onclick", Clicku76);
else u76.addEventListener("click", Clicku76, true);
function Clicku76(e)
{

if (true) {

	self.location.href="酒店列表.html" + GetQuerystring();

}

}

var u155 = document.getElementById('u155');

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'center';
var u101 = document.getElementById('u101');

var u204 = document.getElementById('u204');

var u147 = document.getElementById('u147');

var u60 = document.getElementById('u60');

var u117 = document.getElementById('u117');

var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u43 = document.getElementById('u43');

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u174 = document.getElementById('u174');

var u26 = document.getElementById('u26');

u26.style.cursor = 'pointer';
if (bIE) u26.attachEvent("onclick", Clicku26);
else u26.addEventListener("click", Clicku26, true);
function Clicku26(e)
{

if (true) {

	self.location.href="我要咨询.html" + GetQuerystring();

}

}
gv_vAlignTable['u26'] = 'top';
var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'center';
var u124 = document.getElementById('u124');

var u74 = document.getElementById('u74');

var u122 = document.getElementById('u122');

var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'center';
var u138 = document.getElementById('u138');

var u136 = document.getElementById('u136');

var u10 = document.getElementById('u10');

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", Clicku10);
else u10.addEventListener("click", Clicku10, true);
function Clicku10(e)
{

if (true) {

	self.location.href="周边游.html" + GetQuerystring();

}

}

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u92 = document.getElementById('u92');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u189 = document.getElementById('u189');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'center';
var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'top';
var u24 = document.getElementById('u24');

u24.style.cursor = 'pointer';
if (bIE) u24.attachEvent("onclick", Clicku24);
else u24.addEventListener("click", Clicku24, true);
function Clicku24(e)
{

if (true) {

	self.location.href="特色餐饮.html" + GetQuerystring();

}

}

var u72 = document.getElementById('u72');

var u102 = document.getElementById('u102');

u102.style.cursor = 'pointer';
if (bIE) u102.attachEvent("onclick", Clicku102);
else u102.addEventListener("click", Clicku102, true);
function Clicku102(e)
{

if (true) {

	self.location.href="酒店详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u102'] = 'top';
var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'center';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'center';
var u0 = document.getElementById('u0');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u38 = document.getElementById('u38');

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'center';
var u86 = document.getElementById('u86');

var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'center';
var u115 = document.getElementById('u115');

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u216 = document.getElementById('u216');

var u22 = document.getElementById('u22');

u22.style.cursor = 'pointer';
if (bIE) u22.attachEvent("onclick", Clicku22);
else u22.addEventListener("click", Clicku22, true);
function Clicku22(e)
{

if (true) {

	self.location.href="景点.html" + GetQuerystring();

}

}

var u123 = document.getElementById('u123');

u123.style.cursor = 'pointer';
if (bIE) u123.attachEvent("onclick", Clicku123);
else u123.addEventListener("click", Clicku123, true);
function Clicku123(e)
{

if (true) {

	self.location.href="酒店详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u123'] = 'top';
var u212 = document.getElementById('u212');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'center';
var u186 = document.getElementById('u186');

u186.style.cursor = 'pointer';
if (bIE) u186.attachEvent("onclick", Clicku186);
else u186.addEventListener("click", Clicku186, true);
function Clicku186(e)
{

if (true) {

	self.location.href="酒店详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u186'] = 'top';
var u166 = document.getElementById('u166');

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'center';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u50 = document.getElementById('u50');

var u225 = document.getElementById('u225');

var u157 = document.getElementById('u157');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u107 = document.getElementById('u107');

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'center';
var u16 = document.getElementById('u16');

u16.style.cursor = 'pointer';
if (bIE) u16.attachEvent("onclick", Clicku16);
else u16.addEventListener("click", Clicku16, true);
function Clicku16(e)
{

if (true) {

	self.location.href="旅游指南.html" + GetQuerystring();

}

}

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u208 = document.getElementById('u208');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u164 = document.getElementById('u164');

var u111 = document.getElementById('u111');

var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'center';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'center';
var u176 = document.getElementById('u176');

var u47 = document.getElementById('u47');

var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'center';
var u82 = document.getElementById('u82');

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'center';
var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'center';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u31 = document.getElementById('u31');

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u162 = document.getElementById('u162');

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'center';
var u29 = document.getElementById('u29');

var u178 = document.getElementById('u178');

var u229 = document.getElementById('u229');

var u14 = document.getElementById('u14');

u14.style.cursor = 'pointer';
if (bIE) u14.attachEvent("onclick", Clicku14);
else u14.addEventListener("click", Clicku14, true);
function Clicku14(e)
{

if (true) {

	self.location.href="旅游特产.html" + GetQuerystring();

}

}

var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'center';
if (window.OnLoad) OnLoad();
