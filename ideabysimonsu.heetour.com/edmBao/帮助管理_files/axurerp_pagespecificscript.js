
var PageName = '帮助管理';
var PageId = 'p2206572094a943119fd98c1d079f26fa'
var PageUrl = '帮助管理.html'
document.title = '帮助管理';

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
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'center';
var u59 = document.getElementById('u59');

var u231 = document.getElementById('u231');

var u71 = document.getElementById('u71');

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'center';
var u93 = document.getElementById('u93');

var u12 = document.getElementById('u12');

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", Clicku12);
else u12.addEventListener("click", Clicku12, true);
function Clicku12(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u73 = document.getElementById('u73');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'center';
var u193 = document.getElementById('u193');

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'center';
var u161 = document.getElementById('u161');

var u91 = document.getElementById('u91');

var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'center';
var u173 = document.getElementById('u173');

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'center';
var u40 = document.getElementById('u40');

var u163 = document.getElementById('u163');

var u179 = document.getElementById('u179');

var u23 = document.getElementById('u23');

u23.style.cursor = 'pointer';
if (bIE) u23.attachEvent("onclick", Clicku23);
else u23.addEventListener("click", Clicku23, true);
function Clicku23(e)
{

if (true) {

	self.location.href="合作伙伴管理.html" + GetQuerystring();

}

}

var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'center';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'center';
var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'center';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'center';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'center';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u177 = document.getElementById('u177');

var u37 = document.getElementById('u37');

var u209 = document.getElementById('u209');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u105 = document.getElementById('u105');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u159 = document.getElementById('u159');

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

var u113 = document.getElementById('u113');

var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'center';
var u129 = document.getElementById('u129');

var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'center';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'center';
var u207 = document.getElementById('u207');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u18 = document.getElementById('u18');

var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'center';
var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'center';
var u185 = document.getElementById('u185');

var u197 = document.getElementById('u197');

var u49 = document.getElementById('u49');

var u131 = document.getElementById('u131');

var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'center';
var u109 = document.getElementById('u109');

var u97 = document.getElementById('u97');

var u63 = document.getElementById('u63');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'center';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'center';
var u81 = document.getElementById('u81');

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'center';
var u233 = document.getElementById('u233');

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'center';
var u151 = document.getElementById('u151');

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u77 = document.getElementById('u77');

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'center';
var u241 = document.getElementById('u241');

var u61 = document.getElementById('u61');

var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'center';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u95 = document.getElementById('u95');

var u125 = document.getElementById('u125');

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
var u137 = document.getElementById('u137');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u165 = document.getElementById('u165');

var u181 = document.getElementById('u181');

var u27 = document.getElementById('u27');

u27.style.cursor = 'pointer';
if (bIE) u27.attachEvent("onclick", Clicku27);
else u27.addEventListener("click", Clicku27, true);
function Clicku27(e)
{

if (true) {

	self.location.href="帮助分类管理.html" + GetQuerystring();

}

}

var u4 = document.getElementById('u4');

u4.style.cursor = 'pointer';
if (bIE) u4.attachEvent("onclick", Clicku4);
else u4.addEventListener("click", Clicku4, true);
function Clicku4(e)
{

if (true) {

	self.location.href="用户管理（列表）.html" + GetQuerystring();

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

	self.location.href="用户反馈管理.html" + GetQuerystring();

}

}

var u75 = document.getElementById('u75');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'center';
var u221 = document.getElementById('u221');

var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'center';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'center';
var u183 = document.getElementById('u183');

var u199 = document.getElementById('u199');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u145 = document.getElementById('u145');

var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'center';
var u191 = document.getElementById('u191');

var u103 = document.getElementById('u103');

var u25 = document.getElementById('u25');

u25.style.cursor = 'pointer';
if (bIE) u25.attachEvent("onclick", Clicku25);
else u25.addEventListener("click", Clicku25, true);
function Clicku25(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u153 = document.getElementById('u153');

var u169 = document.getElementById('u169');

var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'center';
var u201 = document.getElementById('u201');

var u127 = document.getElementById('u127');

var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'center';
var u39 = document.getElementById('u39');

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'center';
var u187 = document.getElementById('u187');

var u87 = document.getElementById('u87');

var u53 = document.getElementById('u53');

var u8 = document.getElementById('u8');

u8.style.cursor = 'pointer';
if (bIE) u8.attachEvent("onclick", Clicku8);
else u8.addEventListener("click", Clicku8, true);
function Clicku8(e)
{

if (true) {

	self.location.href="收件人管理_1.html" + GetQuerystring();

}

}

var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'center';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u171 = document.getElementById('u171');

var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'center';
var u149 = document.getElementById('u149');

var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'center';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u67 = document.getElementById('u67');

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u141 = document.getElementById('u141');

var u227 = document.getElementById('u227');

var u6 = document.getElementById('u6');

u6.style.cursor = 'pointer';
if (bIE) u6.attachEvent("onclick", Clicku6);
else u6.addEventListener("click", Clicku6, true);
function Clicku6(e)
{

if (true) {

	self.location.href="邮件管理.html" + GetQuerystring();

}

}

var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'center';
var u85 = document.getElementById('u85');

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
gv_vAlignTable['u218'] = 'center';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u65 = document.getElementById('u65');

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'center';
var u121 = document.getElementById('u121');

var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'center';
var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'center';
var u167 = document.getElementById('u167');

var u203 = document.getElementById('u203');

var u245 = document.getElementById('u245');

var u215 = document.getElementById('u215');

var u79 = document.getElementById('u79');

var u237 = document.getElementById('u237');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'center';
var u51 = document.getElementById('u51');

var u239 = document.getElementById('u239');

var u143 = document.getElementById('u143');

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u155 = document.getElementById('u155');

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'center';
var u101 = document.getElementById('u101');

var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'center';
var u147 = document.getElementById('u147');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u117 = document.getElementById('u117');

var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u43 = document.getElementById('u43');

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u89 = document.getElementById('u89');

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'center';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u219 = document.getElementById('u219');

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'center';
var u211 = document.getElementById('u211');

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'center';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'center';
var u10 = document.getElementById('u10');

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", Clicku10);
else u10.addEventListener("click", Clicku10, true);
function Clicku10(e)
{

if (true) {

	self.location.href="发件人管理_1.html" + GetQuerystring();

}

}

var u57 = document.getElementById('u57');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'center';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u189 = document.getElementById('u189');

var u41 = document.getElementById('u41');

var u135 = document.getElementById('u135');

var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'center';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'center';
var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'center';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'center';
var u0 = document.getElementById('u0');

u0.style.cursor = 'pointer';
if (bIE) u0.attachEvent("onclick", Clicku0);
else u0.addEventListener("click", Clicku0, true);
function Clicku0(e)
{

if (true) {

	self.location.href="订单管理.html" + GetQuerystring();

}

}

var u55 = document.getElementById('u55');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u83 = document.getElementById('u83');

var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'center';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u223 = document.getElementById('u223');

var u115 = document.getElementById('u115');

var u69 = document.getElementById('u69');

var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'center';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u123 = document.getElementById('u123');

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'center';
var u139 = document.getElementById('u139');

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'center';
var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u217 = document.getElementById('u217');

var u133 = document.getElementById('u133');

var u19 = document.getElementById('u19');

u19.style.cursor = 'pointer';
if (bIE) u19.attachEvent("onclick", Clicku19);
else u19.addEventListener("click", Clicku19, true);
function Clicku19(e)
{

if (true) {

	self.location.href="后台登录.html" + GetQuerystring();

}

}
gv_vAlignTable['u19'] = 'top';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'center';
var u225 = document.getElementById('u225');

var u157 = document.getElementById('u157');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u107 = document.getElementById('u107');

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'center';
var u16 = document.getElementById('u16');

var u119 = document.getElementById('u119');

var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'center';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u111 = document.getElementById('u111');

var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'center';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'center';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'center';
var u47 = document.getElementById('u47');

var u175 = document.getElementById('u175');

var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'center';
var u205 = document.getElementById('u205');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u31 = document.getElementById('u31');

u31.style.cursor = 'pointer';
if (bIE) u31.attachEvent("onclick", Clicku31);
else u31.addEventListener("click", Clicku31, true);
function Clicku31(e)
{

if (true) {

	self.location.href="添加_修改文章.html" + GetQuerystring();

}

}

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u213 = document.getElementById('u213');

var u29 = document.getElementById('u29');

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'center';
var u229 = document.getElementById('u229');

var u14 = document.getElementById('u14');

u14.style.cursor = 'pointer';
if (bIE) u14.attachEvent("onclick", Clicku14);
else u14.addEventListener("click", Clicku14, true);
function Clicku14(e)
{

if (true) {

	self.location.href="合作伙伴管理.html" + GetQuerystring();

}

}

var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'center';
if (window.OnLoad) OnLoad();
