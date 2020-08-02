
var PageName = '订单管理';
var PageId = 'p40242a88ab624c8ba357f58cb78c2697'
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
gv_vAlignTable['u62'] = 'center';
var u195 = document.getElementById('u195');

var u45 = document.getElementById('u45');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'center';
var u180 = document.getElementById('u180');

var u190 = document.getElementById('u190');

var u59 = document.getElementById('u59');

u59.style.cursor = 'pointer';
if (bIE) u59.attachEvent("onclick", Clicku59);
else u59.addEventListener("click", Clicku59, true);
function Clicku59(e)
{

if (true) {

	self.location.href="周边游管理.html" + GetQuerystring();

}

}

var u71 = document.getElementById('u71');

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'center';
var u93 = document.getElementById('u93');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u73 = document.getElementById('u73');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'center';
var u193 = document.getElementById('u193');

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'center';
var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'center';
var u91 = document.getElementById('u91');

u91.style.cursor = 'pointer';
if (bIE) u91.attachEvent("onclick", Clicku91);
else u91.addEventListener("click", Clicku91, true);
function Clicku91(e)
{

if (true) {

	self.location.href="添加_修改景点.html" + GetQuerystring();

}

}

var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'center';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'center';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'center';
var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u23 = document.getElementById('u23');

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'center';
var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'center';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'center';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'center';
var u37 = document.getElementById('u37');

u37.style.cursor = 'pointer';
if (bIE) u37.attachEvent("onclick", Clicku37);
else u37.addEventListener("click", Clicku37, true);
function Clicku37(e)
{

if (true) {

	self.location.href="自由行管理.html" + GetQuerystring();

}

}

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u105 = document.getElementById('u105');

u105.style.cursor = 'pointer';
if (bIE) u105.attachEvent("onclick", Clicku105);
else u105.addEventListener("click", Clicku105, true);
function Clicku105(e)
{

if (true) {

	self.location.href="别墅管理.html" + GetQuerystring();

}

}

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'center';
var u21 = document.getElementById('u21');

u21.style.cursor = 'pointer';
if (bIE) u21.attachEvent("onclick", Clicku21);
else u21.addEventListener("click", Clicku21, true);
function Clicku21(e)
{

if (true) {

	self.location.href="房态汇总.html" + GetQuerystring();

}

}

var u113 = document.getElementById('u113');

u113.style.cursor = 'pointer';
if (bIE) u113.attachEvent("onclick", Clicku113);
else u113.addEventListener("click", Clicku113, true);
function Clicku113(e)
{

if (true) {

	self.location.href="添加_修改票务.html" + GetQuerystring();

}

}

var u129 = document.getElementById('u129');

var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'center';
var u156 = document.getElementById('u156');

var u35 = document.getElementById('u35');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'center';
var u170 = document.getElementById('u170');

var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'top';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u131 = document.getElementById('u131');

u131.style.cursor = 'pointer';
if (bIE) u131.attachEvent("onclick", Clicku131);
else u131.addEventListener("click", Clicku131, true);
function Clicku131(e)
{

if (true) {

	self.location.href="餐饮美食.html" + GetQuerystring();

}

}

var u109 = document.getElementById('u109');

var u97 = document.getElementById('u97');

u97.style.cursor = 'pointer';
if (bIE) u97.attachEvent("onclick", Clicku97);
else u97.addEventListener("click", Clicku97, true);
function Clicku97(e)
{

if (true) {

	self.location.href="添加_编辑文章.html" + GetQuerystring();

}

}

var u63 = document.getElementById('u63');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
var u9 = document.getElementById('u9');

var u182 = document.getElementById('u182');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u81 = document.getElementById('u81');

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'center';
var u172 = document.getElementById('u172');

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u77 = document.getElementById('u77');

var u152 = document.getElementById('u152');

var u61 = document.getElementById('u61');

u61.style.cursor = 'pointer';
if (bIE) u61.attachEvent("onclick", Clicku61);
else u61.addEventListener("click", Clicku61, true);
function Clicku61(e)
{

if (true) {

	self.location.href="添加_修改周边游.html" + GetQuerystring();

}

}

var u168 = document.getElementById('u168');

var u7 = document.getElementById('u7');

u7.style.cursor = 'pointer';
if (bIE) u7.attachEvent("onclick", Clicku7);
else u7.addEventListener("click", Clicku7, true);
function Clicku7(e)
{

if (true) {

	self.location.href="添加_修改酒店.html" + GetQuerystring();

}

}

var u13 = document.getElementById('u13');

u13.style.cursor = 'pointer';
if (bIE) u13.attachEvent("onclick", Clicku13);
else u13.addEventListener("click", Clicku13, true);
function Clicku13(e)
{

if (true) {

	self.location.href="供应商管理.html" + GetQuerystring();

}

}

var u95 = document.getElementById('u95');

u95.style.cursor = 'pointer';
if (bIE) u95.attachEvent("onclick", Clicku95);
else u95.addEventListener("click", Clicku95, true);
function Clicku95(e)
{

if (true) {

	self.location.href="旅游指南.html" + GetQuerystring();

}

}

var u125 = document.getElementById('u125');

u125.style.cursor = 'pointer';
if (bIE) u125.attachEvent("onclick", Clicku125);
else u125.addEventListener("click", Clicku125, true);
function Clicku125(e)
{

if (true) {

	self.location.href="特产管理.html" + GetQuerystring();

}

}

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
var u137 = document.getElementById('u137');

u137.style.cursor = 'pointer';
if (bIE) u137.attachEvent("onclick", Clicku137);
else u137.addEventListener("click", Clicku137, true);
function Clicku137(e)
{

if (true) {

	self.location.href="广告管理.html" + GetQuerystring();

}

}

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'center';
var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'top';
var u27 = document.getElementById('u27');

u27.style.cursor = 'pointer';
if (bIE) u27.attachEvent("onclick", Clicku27);
else u27.addEventListener("click", Clicku27, true);
function Clicku27(e)
{

if (true) {

	self.location.href="后台首页.html" + GetQuerystring();

}

}

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u2 = document.getElementById('u2');

var u75 = document.getElementById('u75');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'center';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'center';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'center';
var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'top';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u145 = document.getElementById('u145');

u145.style.cursor = 'pointer';
if (bIE) u145.attachEvent("onclick", Clicku145);
else u145.addEventListener("click", Clicku145, true);
function Clicku145(e)
{

if (true) {

	self.location.href="其它订单.html" + GetQuerystring();

}

}

var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'center';
var u103 = document.getElementById('u103');

var u25 = document.getElementById('u25');

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'center';
var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'center';
var u127 = document.getElementById('u127');

u127.style.cursor = 'pointer';
if (bIE) u127.attachEvent("onclick", Clicku127);
else u127.addEventListener("click", Clicku127, true);
function Clicku127(e)
{

if (true) {

	self.location.href="添加修改特产.html" + GetQuerystring();

}

}

var u160 = document.getElementById('u160');

var u39 = document.getElementById('u39');

u39.style.cursor = 'pointer';
if (bIE) u39.attachEvent("onclick", Clicku39);
else u39.addEventListener("click", Clicku39, true);
function Clicku39(e)
{

if (true) {

	self.location.href="票务管理.html" + GetQuerystring();

}

}

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'center';
var u187 = document.getElementById('u187');

var u87 = document.getElementById('u87');

var u53 = document.getElementById('u53');

u53.style.cursor = 'pointer';
if (bIE) u53.attachEvent("onclick", Clicku53);
else u53.addEventListener("click", Clicku53, true);
function Clicku53(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'center';
var u149 = document.getElementById('u149');

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u67 = document.getElementById('u67');

u67.style.cursor = 'pointer';
if (bIE) u67.attachEvent("onclick", Clicku67);
else u67.addEventListener("click", Clicku67, true);
function Clicku67(e)
{

if (true) {

	self.location.href="添加_修改会员.html" + GetQuerystring();

}

}

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u141 = document.getElementById('u141');

u141.style.cursor = 'pointer';
if (bIE) u141.attachEvent("onclick", Clicku141);
else u141.addEventListener("click", Clicku141, true);
function Clicku141(e)
{

if (true) {

	self.location.href="秒杀抢购管理.html" + GetQuerystring();

}

}

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u184 = document.getElementById('u184');

var u85 = document.getElementById('u85');

u85.style.cursor = 'pointer';
if (bIE) u85.attachEvent("onclick", Clicku85);
else u85.addEventListener("click", Clicku85, true);
function Clicku85(e)
{

if (true) {

	self.location.href="添加_修改自由行.html" + GetQuerystring();

}

}

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u154 = document.getElementById('u154');

var u99 = document.getElementById('u99');

var u17 = document.getElementById('u17');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u65 = document.getElementById('u65');

u65.style.cursor = 'pointer';
if (bIE) u65.attachEvent("onclick", Clicku65);
else u65.addEventListener("click", Clicku65, true);
function Clicku65(e)
{

if (true) {

	self.location.href="会员管理.html" + GetQuerystring();

}

}

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u121 = document.getElementById('u121');

u121.style.cursor = 'pointer';
if (bIE) u121.attachEvent("onclick", Clicku121);
else u121.addEventListener("click", Clicku121, true);
function Clicku121(e)
{

if (true) {

	self.location.href="别墅群管理.html" + GetQuerystring();

}

}

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u79 = document.getElementById('u79');

u79.style.cursor = 'pointer';
if (bIE) u79.attachEvent("onclick", Clicku79);
else u79.addEventListener("click", Clicku79, true);
function Clicku79(e)
{

if (true) {

	self.location.href="信息控制管理.html" + GetQuerystring();

}

}

var u188 = document.getElementById('u188');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'center';
var u51 = document.getElementById('u51');

var u143 = document.getElementById('u143');

u143.style.cursor = 'pointer';
if (bIE) u143.attachEvent("onclick", Clicku143);
else u143.addEventListener("click", Clicku143, true);
function Clicku143(e)
{

if (true) {

	self.location.href="添加_修改秒杀抢购.html" + GetQuerystring();

}

}

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u158 = document.getElementById('u158');

var u101 = document.getElementById('u101');

u101.style.cursor = 'pointer';
if (bIE) u101.attachEvent("onclick", Clicku101);
else u101.addEventListener("click", Clicku101, true);
function Clicku101(e)
{

if (true) {

	self.location.href="管理员管理.html" + GetQuerystring();

}

}

var u147 = document.getElementById('u147');

u147.style.cursor = 'pointer';
if (bIE) u147.attachEvent("onclick", Clicku147);
else u147.addEventListener("click", Clicku147, true);
function Clicku147(e)
{

if (true) {

	self.location.href="角色管理.html" + GetQuerystring();

}

}

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u117 = document.getElementById('u117');

u117.style.cursor = 'pointer';
if (bIE) u117.attachEvent("onclick", Clicku117);
else u117.addEventListener("click", Clicku117, true);
function Clicku117(e)
{

if (true) {

	self.location.href="会员等级管理.html" + GetQuerystring();

}

}

var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u43 = document.getElementById('u43');

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u89 = document.getElementById('u89');

u89.style.cursor = 'pointer';
if (bIE) u89.attachEvent("onclick", Clicku89);
else u89.addEventListener("click", Clicku89, true);
function Clicku89(e)
{

if (true) {

	self.location.href="景点管理.html" + GetQuerystring();

}

}

var u174 = document.getElementById('u174');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'center';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'center';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'center';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u57 = document.getElementById('u57');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'center';
var u5 = document.getElementById('u5');

u5.style.cursor = 'pointer';
if (bIE) u5.attachEvent("onclick", Clicku5);
else u5.addEventListener("click", Clicku5, true);
function Clicku5(e)
{

if (true) {

	self.location.href="酒店管理.html" + GetQuerystring();

}

}

var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'center';
var u41 = document.getElementById('u41');

var u135 = document.getElementById('u135');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'center';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'center';
var u0 = document.getElementById('u0');

var u55 = document.getElementById('u55');

u55.style.cursor = 'pointer';
if (bIE) u55.attachEvent("onclick", Clicku55);
else u55.addEventListener("click", Clicku55, true);
function Clicku55(e)
{

if (true) {

	self.location.href="添加手工订单第一步.html" + GetQuerystring();

}

}

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u83 = document.getElementById('u83');

u83.style.cursor = 'pointer';
if (bIE) u83.attachEvent("onclick", Clicku83);
else u83.addEventListener("click", Clicku83, true);
function Clicku83(e)
{

if (true) {

	self.location.href="自由行管理.html" + GetQuerystring();

}

}

var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'center';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u115 = document.getElementById('u115');

var u69 = document.getElementById('u69');

u69.style.cursor = 'pointer';
if (bIE) u69.attachEvent("onclick", Clicku69);
else u69.addEventListener("click", Clicku69, true);
function Clicku69(e)
{

if (true) {

	self.location.href="添加_修改供应商.html" + GetQuerystring();

}

}

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u123 = document.getElementById('u123');

var u139 = document.getElementById('u139');

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'top';
var u166 = document.getElementById('u166');

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u133 = document.getElementById('u133');

u133.style.cursor = 'pointer';
if (bIE) u133.attachEvent("onclick", Clicku133);
else u133.addEventListener("click", Clicku133, true);
function Clicku133(e)
{

if (true) {

	self.location.href="添加餐饮美食.html" + GetQuerystring();

}

}

var u19 = document.getElementById('u19');

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u15 = document.getElementById('u15');

var u33 = document.getElementById('u33');

u33.style.cursor = 'pointer';
if (bIE) u33.attachEvent("onclick", Clicku33);
else u33.addEventListener("click", Clicku33, true);
function Clicku33(e)
{

if (true) {

	self.location.href="周边游管理.html" + GetQuerystring();

}

}

var u107 = document.getElementById('u107');

u107.style.cursor = 'pointer';
if (bIE) u107.attachEvent("onclick", Clicku107);
else u107.addEventListener("click", Clicku107, true);
function Clicku107(e)
{

if (true) {

	self.location.href="添加_修改别墅.html" + GetQuerystring();

}

}

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u119 = document.getElementById('u119');

u119.style.cursor = 'pointer';
if (bIE) u119.attachEvent("onclick", Clicku119);
else u119.addEventListener("click", Clicku119, true);
function Clicku119(e)
{

if (true) {

	self.location.href="别墅管理.html" + GetQuerystring();

}

}

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u164 = document.getElementById('u164');

var u111 = document.getElementById('u111');

u111.style.cursor = 'pointer';
if (bIE) u111.attachEvent("onclick", Clicku111);
else u111.addEventListener("click", Clicku111, true);
function Clicku111(e)
{

if (true) {

	self.location.href="票务管理.html" + GetQuerystring();

}

}

var u192 = document.getElementById('u192');

var u176 = document.getElementById('u176');

var u47 = document.getElementById('u47');

u47.style.cursor = 'pointer';
if (bIE) u47.attachEvent("onclick", Clicku47);
else u47.addEventListener("click", Clicku47, true);
function Clicku47(e)
{

if (true) {

	self.location.href="后台管理系统_登录.html" + GetQuerystring();

}

}
gv_vAlignTable['u47'] = 'top';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'center';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'center';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u31 = document.getElementById('u31');

u31.style.cursor = 'pointer';
if (bIE) u31.attachEvent("onclick", Clicku31);
else u31.addEventListener("click", Clicku31, true);
function Clicku31(e)
{

if (true) {

	self.location.href="酒店管理.html" + GetQuerystring();

}

}

var u11 = document.getElementById('u11');

var u162 = document.getElementById('u162');

u162.style.cursor = 'pointer';
if (bIE) u162.attachEvent("onclick", Clicku162);
else u162.addEventListener("click", Clicku162, true);
function Clicku162(e)
{

if (true) {

	self.location.href="修改订单.html" + GetQuerystring();

}

}

var u29 = document.getElementById('u29');

var u178 = document.getElementById('u178');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
if (window.OnLoad) OnLoad();
