
var PageName = '我的收货地址';
var PageId = 'pcac698ed766946929b5d3fb98f3968d8'
var PageUrl = '我的收货地址.html'
document.title = '我的收货地址';

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

u62.style.cursor = 'pointer';
if (bIE) u62.attachEvent("onclick", Clicku62);
else u62.addEventListener("click", Clicku62, true);
function Clicku62(e)
{

if (true) {

	self.location.href="收货地址修改、添加.html" + GetQuerystring();

}

}

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'center';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
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

	self.location.href="会员中心首页.html" + GetQuerystring();

}

}

var u73 = document.getElementById('u73');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'center';
var u56 = document.getElementById('u56');

var u161 = document.getElementById('u161');

var u91 = document.getElementById('u91');

var u173 = document.getElementById('u173');

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'center';
var u40 = document.getElementById('u40');

var u163 = document.getElementById('u163');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'center';
var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'center';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u54 = document.getElementById('u54');

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u177 = document.getElementById('u177');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u105 = document.getElementById('u105');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u159 = document.getElementById('u159');

u159.style.cursor = 'pointer';
if (bIE) u159.attachEvent("onclick", Clicku159);
else u159.addEventListener("click", Clicku159, true);
function Clicku159(e)
{

if (true) {

	self.location.href="收货地址修改、添加.html" + GetQuerystring();

}

}

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u113 = document.getElementById('u113');

var u129 = document.getElementById('u129');

var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'center';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u18 = document.getElementById('u18');

u18.style.cursor = 'pointer';
if (bIE) u18.attachEvent("onclick", Clicku18);
else u18.addEventListener("click", Clicku18, true);
function Clicku18(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'center';
var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'center';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u131 = document.getElementById('u131');

var u109 = document.getElementById('u109');

var u97 = document.getElementById('u97');

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
var u9 = document.getElementById('u9');

u9.style.cursor = 'pointer';
if (bIE) u9.attachEvent("onclick", Clicku9);
else u9.addEventListener("click", Clicku9, true);
function Clicku9(e)
{

if (true) {

	NewWindow("搜索列表.html" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}

var u46 = document.getElementById('u46');

var u81 = document.getElementById('u81');

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'center';
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
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'center';
var u7 = document.getElementById('u7');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u95 = document.getElementById('u95');

u95.style.cursor = 'pointer';
if (bIE) u95.attachEvent("onclick", Clicku95);
else u95.addEventListener("click", Clicku95, true);
function Clicku95(e)
{

if (true) {

	self.location.href="收货地址修改、添加.html" + GetQuerystring();

}

}

var u125 = document.getElementById('u125');

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
var u137 = document.getElementById('u137');

var u44 = document.getElementById('u44');

var u165 = document.getElementById('u165');

var u27 = document.getElementById('u27');

u27.style.cursor = 'pointer';
if (bIE) u27.attachEvent("onclick", Clicku27);
else u27.addEventListener("click", Clicku27, true);
function Clicku27(e)
{

if (true) {

	self.location.href="购物车_第一步.html" + GetQuerystring();

}

}

var u4 = document.getElementById('u4');

var u2 = document.getElementById('u2');

u2.style.cursor = 'pointer';
if (bIE) u2.attachEvent("onclick", Clicku2);
else u2.addEventListener("click", Clicku2, true);
function Clicku2(e)
{

if (true) {

	self.location.href="会员中心首页.html" + GetQuerystring();

}

}

var u75 = document.getElementById('u75');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'center';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'center';
var u58 = document.getElementById('u58');

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'center';
var u42 = document.getElementById('u42');

var u145 = document.getElementById('u145');

var u103 = document.getElementById('u103');

var u25 = document.getElementById('u25');

var u153 = document.getElementById('u153');

var u169 = document.getElementById('u169');

var u127 = document.getElementById('u127');

u127.style.cursor = 'pointer';
if (bIE) u127.attachEvent("onclick", Clicku127);
else u127.addEventListener("click", Clicku127, true);
function Clicku127(e)
{

if (true) {

	self.location.href="收货地址修改、添加.html" + GetQuerystring();

}

}

var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'center';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'center';
var u87 = document.getElementById('u87');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u36 = document.getElementById('u36');

var u171 = document.getElementById('u171');

var u149 = document.getElementById('u149');

var u20 = document.getElementById('u20');

u20.style.cursor = 'pointer';
if (bIE) u20.attachEvent("onclick", Clicku20);
else u20.addEventListener("click", Clicku20, true);
function Clicku20(e)
{

if (true) {

	self.location.href="绑定我的卡.html" + GetQuerystring();

}

}

var u67 = document.getElementById('u67');

var u52 = document.getElementById('u52');

var u141 = document.getElementById('u141');

var u6 = document.getElementById('u6');

var u85 = document.getElementById('u85');

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'center';
var u34 = document.getElementById('u34');

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'center';
var u99 = document.getElementById('u99');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u48 = document.getElementById('u48');

var u121 = document.getElementById('u121');

var u167 = document.getElementById('u167');

var u79 = document.getElementById('u79');

u79.style.cursor = 'pointer';
if (bIE) u79.attachEvent("onclick", Clicku79);
else u79.addEventListener("click", Clicku79, true);
function Clicku79(e)
{

if (true) {

	self.location.href="收货地址修改、添加.html" + GetQuerystring();

}

}

var u32 = document.getElementById('u32');

u32.style.cursor = 'pointer';
if (bIE) u32.attachEvent("onclick", Clicku32);
else u32.addEventListener("click", Clicku32, true);
function Clicku32(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u32'] = 'top';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'center';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u143 = document.getElementById('u143');

u143.style.cursor = 'pointer';
if (bIE) u143.attachEvent("onclick", Clicku143);
else u143.addEventListener("click", Clicku143, true);
function Clicku143(e)
{

if (true) {

	self.location.href="收货地址修改、添加.html" + GetQuerystring();

}

}

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u155 = document.getElementById('u155');

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'center';
var u101 = document.getElementById('u101');

var u147 = document.getElementById('u147');

var u60 = document.getElementById('u60');

var u117 = document.getElementById('u117');

var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u89 = document.getElementById('u89');

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'center';
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

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", Clicku10);
else u10.addEventListener("click", Clicku10, true);
function Clicku10(e)
{

if (true) {

	self.location.href="我的订单.html" + GetQuerystring();

}

}

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'center';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u135 = document.getElementById('u135');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'center';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'center';
var u0 = document.getElementById('u0');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u38 = document.getElementById('u38');

var u83 = document.getElementById('u83');

var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'center';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u115 = document.getElementById('u115');

var u69 = document.getElementById('u69');

var u22 = document.getElementById('u22');

u22.style.cursor = 'pointer';
if (bIE) u22.attachEvent("onclick", Clicku22);
else u22.addEventListener("click", Clicku22, true);
function Clicku22(e)
{

if (true) {

	self.location.href="个人资料.html" + GetQuerystring();

}

}

var u123 = document.getElementById('u123');

var u139 = document.getElementById('u139');

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u66 = document.getElementById('u66');

u66.style.cursor = 'pointer';
if (bIE) u66.attachEvent("onclick", Clicku66);
else u66.addEventListener("click", Clicku66, true);
function Clicku66(e)
{

if (true) {

	self.location.href="收货地址修改、添加.html" + GetQuerystring();

}

}
gv_vAlignTable['u66'] = 'top';
var u133 = document.getElementById('u133');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u50 = document.getElementById('u50');

var u157 = document.getElementById('u157');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u107 = document.getElementById('u107');

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u16 = document.getElementById('u16');

u16.style.cursor = 'pointer';
if (bIE) u16.attachEvent("onclick", Clicku16);
else u16.addEventListener("click", Clicku16, true);
function Clicku16(e)
{

if (true) {

	self.location.href="我的收藏.html" + GetQuerystring();

}

}

var u119 = document.getElementById('u119');

var u64 = document.getElementById('u64');

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u111 = document.getElementById('u111');

u111.style.cursor = 'pointer';
if (bIE) u111.attachEvent("onclick", Clicku111);
else u111.addEventListener("click", Clicku111, true);
function Clicku111(e)
{

if (true) {

	self.location.href="收货地址修改、添加.html" + GetQuerystring();

}

}

var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'center';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u175 = document.getElementById('u175');

u175.style.cursor = 'pointer';
if (bIE) u175.attachEvent("onclick", Clicku175);
else u175.addEventListener("click", Clicku175, true);
function Clicku175(e)
{

if (true) {

	self.location.href="收货地址修改、添加.html" + GetQuerystring();

}

}

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

	self.location.href="网站前端.html" + GetQuerystring();

}

}
gv_vAlignTable['u31'] = 'top';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u29 = document.getElementById('u29');

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'center';
var u14 = document.getElementById('u14');

u14.style.cursor = 'pointer';
if (bIE) u14.attachEvent("onclick", Clicku14);
else u14.addEventListener("click", Clicku14, true);
function Clicku14(e)
{

if (true) {

	self.location.href="我的咨询.html" + GetQuerystring();

}

}

if (window.OnLoad) OnLoad();
