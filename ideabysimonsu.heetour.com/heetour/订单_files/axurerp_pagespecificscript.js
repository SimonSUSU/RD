
var PageName = '订单';
var PageId = 'p9bb18e1541d844919a78a4ed3ee0a53e'
var PageUrl = '订单.html'
document.title = '订单';

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

eval(GetDynamicPanelScript('u169', 1));

eval(GetDynamicPanelScript('u214', 1));

eval(GetDynamicPanelScript('u251', 1));

eval(GetDynamicPanelScript('u266', 1));

var u62 = document.getElementById('u62');

var u256 = document.getElementById('u256');

u256.style.cursor = 'pointer';
if (bIE) u256.attachEvent("onclick", Clicku256);
else u256.addEventListener("click", Clicku256, true);
function Clicku256(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u256'] = 'top';
var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'center';
var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'top';
var u45 = document.getElementById('u45');

var u28 = document.getElementById('u28');

u28.style.cursor = 'pointer';
if (bIE) u28.attachEvent("onclick", Clicku28);
else u28.addEventListener("click", Clicku28, true);
function Clicku28(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'center';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'center';
var u180 = document.getElementById('u180');

var u251 = document.getElementById('u251');

var u190 = document.getElementById('u190');

var u59 = document.getElementById('u59');

var u231 = document.getElementById('u231');

u231.style.cursor = 'pointer';
if (bIE) u231.attachEvent("onclick", Clicku231);
else u231.addEventListener("click", Clicku231, true);
function Clicku231(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u231'] = 'top';
var u71 = document.getElementById('u71');

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'center';
var u93 = document.getElementById('u93');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u277 = document.getElementById('u277');

u277.style.cursor = 'pointer';
if (bIE) u277.attachEvent("onclick", Clicku277);
else u277.addEventListener("click", Clicku277, true);
function Clicku277(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u277'] = 'top';
var u73 = document.getElementById('u73');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'center';
var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'center';
var u282 = document.getElementById('u282');

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'center';
var u161 = document.getElementById('u161');

var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'center';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'center';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'center';
var u40 = document.getElementById('u40');

var u163 = document.getElementById('u163');

var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'top';
var u270 = document.getElementById('u270');

u270.style.cursor = 'pointer';
if (bIE) u270.attachEvent("onclick", Clicku270);
else u270.addEventListener("click", Clicku270, true);
function Clicku270(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u270'] = 'top';
var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u268 = document.getElementById('u268');

u268.style.cursor = 'pointer';
if (bIE) u268.attachEvent("onclick", Clicku268);
else u268.addEventListener("click", Clicku268, true);
function Clicku268(e)
{

if (true) {

	self.location.href="酒店客房订单.html" + GetQuerystring();

}

}
gv_vAlignTable['u268'] = 'top';
var u23 = document.getElementById('u23');

var u147 = document.getElementById('u147');

var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'top';
var u88 = document.getElementById('u88');

u88.style.cursor = 'pointer';
if (bIE) u88.attachEvent("onclick", Clicku88);
else u88.addEventListener("click", Clicku88, true);
function Clicku88(e)
{

if (true) {

	self.location.href="退出会员中心.html" + GetQuerystring();

}

}

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'center';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'center';
var u54 = document.getElementById('u54');

var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'top';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'top';
var u37 = document.getElementById('u37');

var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'center';
var u3 = document.getElementById('u3');

u3.style.cursor = 'pointer';
if (bIE) u3.attachEvent("onclick", Clicku3);
else u3.addEventListener("click", Clicku3, true);
function Clicku3(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}

var u105 = document.getElementById('u105');

var u68 = document.getElementById('u68');

var u159 = document.getElementById('u159');

var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'top';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'top';
var u113 = document.getElementById('u113');

var u240 = document.getElementById('u240');

if (bIE) u240.attachEvent("onmouseover", MouseOveru240);
else u240.addEventListener("mouseover", MouseOveru240, true);
function MouseOveru240(e)
{
if (!IsTrueMouseOver('u240',e)) return;
if (true) {

	SetPanelVisibilityu169("");

}

}

if (bIE) u240.attachEvent("onmouseout", MouseOutu240);
else u240.addEventListener("mouseout", MouseOutu240, true);
function MouseOutu240(e)
{
if (!IsTrueMouseOut('u240',e)) return;
if (true) {

	SetPanelVisibilityu169("hidden");

}

}

var u129 = document.getElementById('u129');

var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'center';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'center';
var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'top';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'center';
var u170 = document.getElementById('u170');

var u264 = document.getElementById('u264');
gv_vAlignTable['u264'] = 'center';
var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'center';
var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'center';
var u49 = document.getElementById('u49');

var u131 = document.getElementById('u131');

var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'center';
var u109 = document.getElementById('u109');

u109.style.cursor = 'pointer';
if (bIE) u109.attachEvent("onclick", Clicku109);
else u109.addEventListener("click", Clicku109, true);
function Clicku109(e)
{

if (true) {

	self.location.href="查看客房订单.html" + GetQuerystring();

}

}

var u97 = document.getElementById('u97');

var u63 = document.getElementById('u63');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
var u9 = document.getElementById('u9');

var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u46 = document.getElementById('u46');

var u198 = document.getElementById('u198');

var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'center';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'center';
var u172 = document.getElementById('u172');

var u151 = document.getElementById('u151');

var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'top';
var u253 = document.getElementById('u253');

u253.style.cursor = 'pointer';
if (bIE) u253.attachEvent("onclick", Clicku253);
else u253.addEventListener("click", Clicku253, true);
function Clicku253(e)
{

if (true) {

	self.location.href="登录.html" + GetQuerystring();

}

}
gv_vAlignTable['u253'] = 'top';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u77 = document.getElementById('u77');

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'center';
var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'center';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u168 = document.getElementById('u168');

u168.style.cursor = 'pointer';
if (bIE) u168.attachEvent("onclick", Clicku168);
else u168.addEventListener("click", Clicku168, true);
function Clicku168(e)
{

if (true) {

	self.location.href="查看客房订单.html" + GetQuerystring();

}

}
gv_vAlignTable['u168'] = 'top';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u13 = document.getElementById('u13');

u13.style.cursor = 'pointer';
if (bIE) u13.attachEvent("onclick", Clicku13);
else u13.addEventListener("click", Clicku13, true);
function Clicku13(e)
{

if (true) {

	self.location.href="个人资料.html" + GetQuerystring();

}

}

var u95 = document.getElementById('u95');

var u125 = document.getElementById('u125');

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
var u263 = document.getElementById('u263');

var u137 = document.getElementById('u137');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u165 = document.getElementById('u165');

u165.style.cursor = 'pointer';
if (bIE) u165.attachEvent("onclick", Clicku165);
else u165.addEventListener("click", Clicku165, true);
function Clicku165(e)
{

if (true) {

	self.location.href="查看客房订单.html" + GetQuerystring();

}

}
gv_vAlignTable['u165'] = 'top';
var u254 = document.getElementById('u254');

u254.style.cursor = 'pointer';
if (bIE) u254.attachEvent("onclick", Clicku254);
else u254.addEventListener("click", Clicku254, true);
function Clicku254(e)
{

if (true) {

	self.location.href="注册第一步.html" + GetQuerystring();

}

}
gv_vAlignTable['u254'] = 'top';
var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'center';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u4 = document.getElementById('u4');

var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'center';
var u2 = document.getElementById('u2');

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'center';
var u221 = document.getElementById('u221');

var u255 = document.getElementById('u255');

u255.style.cursor = 'pointer';
if (bIE) u255.attachEvent("onclick", Clicku255);
else u255.addEventListener("click", Clicku255, true);
function Clicku255(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u255'] = 'top';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'top';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'top';
var u250 = document.getElementById('u250');

u250.style.cursor = 'pointer';
if (bIE) u250.attachEvent("onclick", Clicku250);
else u250.addEventListener("click", Clicku250, true);
function Clicku250(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u250'] = 'top';
var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'center';
var u42 = document.getElementById('u42');

u42.style.cursor = 'pointer';
if (bIE) u42.attachEvent("onclick", Clicku42);
else u42.addEventListener("click", Clicku42, true);
function Clicku42(e)
{

if (true) {

	self.location.href="机票订单.html" + GetQuerystring();

}

}

var u145 = document.getElementById('u145');

var u234 = document.getElementById('u234');

u234.style.cursor = 'pointer';
if (bIE) u234.attachEvent("onclick", Clicku234);
else u234.addEventListener("click", Clicku234, true);
function Clicku234(e)
{

if (true) {

	self.location.href="海南酒店.html" + GetQuerystring();

}

}

var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'center';
var u103 = document.getElementById('u103');

var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'top';
var u25 = document.getElementById('u25');

u25.style.cursor = 'pointer';
if (bIE) u25.attachEvent("onclick", Clicku25);
else u25.addEventListener("click", Clicku25, true);
function Clicku25(e)
{

if (true) {

	self.location.href="支付卡管理.html" + GetQuerystring();

}

}

var u153 = document.getElementById('u153');

var u169 = document.getElementById('u169');

var u196 = document.getElementById('u196');

var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'top';
var u127 = document.getElementById('u127');

var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'center';
var u39 = document.getElementById('u39');

u39.style.cursor = 'pointer';
if (bIE) u39.attachEvent("onclick", Clicku39);
else u39.addEventListener("click", Clicku39, true);
function Clicku39(e)
{

if (true) {

	self.location.href="酒店套餐订单.html" + GetQuerystring();

}

}

var u70 = document.getElementById('u70');

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'center';
var u261 = document.getElementById('u261');

u261.style.cursor = 'pointer';
if (bIE) u261.attachEvent("onclick", Clicku261);
else u261.addEventListener("click", Clicku261, true);
function Clicku261(e)
{

if (true) {

	SetPanelVisibilityu266("");

	SetPanelVisibilityu251("hidden");

}

}

var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'center';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'center';
var u8 = document.getElementById('u8');

var u214 = document.getElementById('u214');

var u36 = document.getElementById('u36');

u36.style.cursor = 'pointer';
if (bIE) u36.attachEvent("onclick", Clicku36);
else u36.addEventListener("click", Clicku36, true);
function Clicku36(e)
{

if (true) {

	self.location.href="酒店餐饮订单.html" + GetQuerystring();

}

}

var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'center';
var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'center';
var u149 = document.getElementById('u149');

var u238 = document.getElementById('u238');

u238.style.cursor = 'pointer';
if (bIE) u238.attachEvent("onclick", Clicku238);
else u238.addEventListener("click", Clicku238, true);
function Clicku238(e)
{

if (true) {

	self.location.href="国内机票.html" + GetQuerystring();

}

}

var u20 = document.getElementById('u20');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u52 = document.getElementById('u52');

var u141 = document.getElementById('u141');

var u227 = document.getElementById('u227');

var u6 = document.getElementById('u6');

var u184 = document.getElementById('u184');

var u85 = document.getElementById('u85');

u85.style.cursor = 'pointer';
if (bIE) u85.attachEvent("onclick", Clicku85);
else u85.addEventListener("click", Clicku85, true);
function Clicku85(e)
{

if (true) {

	self.location.href="我的提问.html" + GetQuerystring();

}

}

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'top';
var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'center';
var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'top';
var u34 = document.getElementById('u34');

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'center';
var u236 = document.getElementById('u236');

u236.style.cursor = 'pointer';
if (bIE) u236.attachEvent("onclick", Clicku236);
else u236.addEventListener("click", Clicku236, true);
function Clicku236(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}

var u99 = document.getElementById('u99');

var u202 = document.getElementById('u202');

var u17 = document.getElementById('u17');

var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'center';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u65 = document.getElementById('u65');

var u48 = document.getElementById('u48');

var u121 = document.getElementById('u121');

var u210 = document.getElementById('u210');

var u242 = document.getElementById('u242');

var u167 = document.getElementById('u167');

u167.style.cursor = 'pointer';
if (bIE) u167.attachEvent("onclick", Clicku167);
else u167.addEventListener("click", Clicku167, true);
function Clicku167(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("确认要取消此订单？确认/返回"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}
gv_vAlignTable['u167'] = 'top';
var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'center';
var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'center';
var u215 = document.getElementById('u215');

var u79 = document.getElementById('u79');

var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'center';
var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'top';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u80 = document.getElementById('u80');

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'center';
var u51 = document.getElementById('u51');

var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'center';
var u143 = document.getElementById('u143');

var u76 = document.getElementById('u76');

var u155 = document.getElementById('u155');

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'center';
var u101 = document.getElementById('u101');

var u204 = document.getElementById('u204');

var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'top';
var u94 = document.getElementById('u94');

var u60 = document.getElementById('u60');

var u117 = document.getElementById('u117');

var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'top';
var u43 = document.getElementById('u43');

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u89 = document.getElementById('u89');

var u174 = document.getElementById('u174');

var u26 = document.getElementById('u26');

var u219 = document.getElementById('u219');

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u74 = document.getElementById('u74');

var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'center';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'center';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'center';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u57 = document.getElementById('u57');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'top';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u135 = document.getElementById('u135');

var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'center';
var u278 = document.getElementById('u278');

u278.style.cursor = 'pointer';
if (bIE) u278.attachEvent("onclick", Clicku278);
else u278.addEventListener("click", Clicku278, true);
function Clicku278(e)
{

if (true) {

	SetPanelVisibilityu251("");

	SetPanelVisibilityu266("hidden");

}

}

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'center';
var u232 = document.getElementById('u232');

var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'center';
var u0 = document.getElementById('u0');

var u55 = document.getElementById('u55');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u83 = document.getElementById('u83');

var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'center';
var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'top';
var u280 = document.getElementById('u280');

if (bIE) u280.attachEvent("onmouseover", MouseOveru280);
else u280.addEventListener("mouseover", MouseOveru280, true);
function MouseOveru280(e)
{
if (!IsTrueMouseOver('u280',e)) return;
if (true) {

	SetPanelVisibilityu214("");

}

}

if (bIE) u280.attachEvent("onmouseout", MouseOutu280);
else u280.addEventListener("mouseout", MouseOutu280, true);
function MouseOutu280(e)
{
if (!IsTrueMouseOut('u280',e)) return;
if (true) {

	SetPanelVisibilityu214("hidden");

}

}

var u86 = document.getElementById('u86');

var u223 = document.getElementById('u223');

var u115 = document.getElementById('u115');

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'center';
var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'top';
var u22 = document.getElementById('u22');

u22.style.cursor = 'pointer';
if (bIE) u22.attachEvent("onclick", Clicku22);
else u22.addEventListener("click", Clicku22, true);
function Clicku22(e)
{

if (true) {

	self.location.href="在线收藏夹.html" + GetQuerystring();

}

}

var u123 = document.getElementById('u123');

u123.style.cursor = 'pointer';
if (bIE) u123.attachEvent("onclick", Clicku123);
else u123.addEventListener("click", Clicku123, true);
function Clicku123(e)
{

if (true) {

	self.location.href="查看客房订单.html" + GetQuerystring();

}

}

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'top';
var u139 = document.getElementById('u139');

var u186 = document.getElementById('u186');

var u271 = document.getElementById('u271');

u271.style.cursor = 'pointer';
if (bIE) u271.attachEvent("onclick", Clicku271);
else u271.addEventListener("click", Clicku271, true);
function Clicku271(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u271'] = 'top';
var u166 = document.getElementById('u166');

u166.style.cursor = 'pointer';
if (bIE) u166.attachEvent("onclick", Clicku166);
else u166.addEventListener("click", Clicku166, true);
function Clicku166(e)
{

if (true) {

	self.location.href="修改客房订单.html" + GetQuerystring();

}

}
gv_vAlignTable['u166'] = 'top';
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

	self.location.href="常用旅客信息.html" + GetQuerystring();

}

}

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'center';
var u225 = document.getElementById('u225');

var u157 = document.getElementById('u157');

var u266 = document.getElementById('u266');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u33 = document.getElementById('u33');

u33.style.cursor = 'pointer';
if (bIE) u33.attachEvent("onclick", Clicku33);
else u33.addEventListener("click", Clicku33, true);
function Clicku33(e)
{

if (true) {

	self.location.href="酒店客房订单.html" + GetQuerystring();

}

}

var u107 = document.getElementById('u107');

var u246 = document.getElementById('u246');

var u269 = document.getElementById('u269');

u269.style.cursor = 'pointer';
if (bIE) u269.attachEvent("onclick", Clicku269);
else u269.addEventListener("click", Clicku269, true);
function Clicku269(e)
{

if (true) {

	self.location.href="退出会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u269'] = 'top';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'top';
var u16 = document.getElementById('u16');

u16.style.cursor = 'pointer';
if (bIE) u16.attachEvent("onclick", Clicku16);
else u16.addEventListener("click", Clicku16, true);
function Clicku16(e)
{

if (true) {

	self.location.href="修改密码.html" + GetQuerystring();

}

}

var u119 = document.getElementById('u119');

var u208 = document.getElementById('u208');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u164 = document.getElementById('u164');

var u111 = document.getElementById('u111');

var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'top';
var u192 = document.getElementById('u192');

var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'center';
var u82 = document.getElementById('u82');

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'center';
var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'center';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'top';
var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'top';
var u31 = document.getElementById('u31');

var u11 = document.getElementById('u11');

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'top';
var u29 = document.getElementById('u29');

var u178 = document.getElementById('u178');

var u229 = document.getElementById('u229');

u229.style.cursor = 'pointer';
if (bIE) u229.attachEvent("onclick", Clicku229);
else u229.addEventListener("click", Clicku229, true);
function Clicku229(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u229'] = 'top';
var u14 = document.getElementById('u14');

var u244 = document.getElementById('u244');

if (window.OnLoad) OnLoad();
