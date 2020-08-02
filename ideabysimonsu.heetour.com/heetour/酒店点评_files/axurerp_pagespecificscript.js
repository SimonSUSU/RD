
var PageName = '酒店点评';
var PageId = 'p1953edc403c34505896e1ab4c2e3abf3'
var PageUrl = '酒店点评.html'
document.title = '酒店点评';

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

eval(GetDynamicPanelScript('u411', 1));

eval(GetDynamicPanelScript('u297', 1));

eval(GetDynamicPanelScript('u523', 1));

eval(GetDynamicPanelScript('u424', 1));

eval(GetDynamicPanelScript('u538', 1));

eval(GetDynamicPanelScript('u394', 1));

eval(GetDynamicPanelScript('u486', 1));

eval(GetDynamicPanelScript('u441', 1));

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u402 = document.getElementById('u402');
gv_vAlignTable['u402'] = 'center';
var u65 = document.getElementById('u65');

var u545 = document.getElementById('u545');
gv_vAlignTable['u545'] = 'top';
var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'center';
var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'top';
var u420 = document.getElementById('u420');
gv_vAlignTable['u420'] = 'top';
var u332 = document.getElementById('u332');

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
var u417 = document.getElementById('u417');

u417.style.cursor = 'pointer';
if (bIE) u417.attachEvent("onclick", Clicku417);
else u417.addEventListener("click", Clicku417, true);
function Clicku417(e)
{

if (true) {

	SetPanelVisibilityu411("hidden");

}

}

var u555 = document.getElementById('u555');
gv_vAlignTable['u555'] = 'center';
var u86 = document.getElementById('u86');

var u428 = document.getElementById('u428');

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'top';
var u0 = document.getElementById('u0');
gv_vAlignTable['u0'] = 'top';
var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'top';
var u131 = document.getElementById('u131');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u506 = document.getElementById('u506');

u506.style.cursor = 'pointer';
if (bIE) u506.attachEvent("onclick", Clicku506);
else u506.addEventListener("click", Clicku506, true);
function Clicku506(e)
{

if (true) {

	self.location.href="海南酒店.html" + GetQuerystring();

}

}

var u493 = document.getElementById('u493');

var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'center';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u386 = document.getElementById('u386');
gv_vAlignTable['u386'] = 'center';
var u510 = document.getElementById('u510');

u510.style.cursor = 'pointer';
if (bIE) u510.attachEvent("onclick", Clicku510);
else u510.addEventListener("click", Clicku510, true);
function Clicku510(e)
{

if (true) {

	self.location.href="国内机票.html" + GetQuerystring();

}

}

var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'center';
var u234 = document.getElementById('u234');

var u104 = document.getElementById('u104');

var u242 = document.getElementById('u242');

var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'top';
var u518 = document.getElementById('u518');

var u391 = document.getElementById('u391');
gv_vAlignTable['u391'] = 'top';
var u541 = document.getElementById('u541');

u541.style.cursor = 'pointer';
if (bIE) u541.attachEvent("onclick", Clicku541);
else u541.addEventListener("click", Clicku541, true);
function Clicku541(e)
{

if (true) {

	self.location.href="退出会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u541'] = 'top';
var u440 = document.getElementById('u440');
gv_vAlignTable['u440'] = 'top';
var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'center';
var u399 = document.getElementById('u399');

var u366 = document.getElementById('u366');

var u51 = document.getElementById('u51');

var u459 = document.getElementById('u459');
gv_vAlignTable['u459'] = 'center';
var u331 = document.getElementById('u331');
gv_vAlignTable['u331'] = 'top';
var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'top';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u416 = document.getElementById('u416');

u416.style.cursor = 'pointer';
if (bIE) u416.attachEvent("onclick", Clicku416);
else u416.addEventListener("click", Clicku416, true);
function Clicku416(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("收藏成功，请到会员中心的xxxxx查看。"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'top';
var u306 = document.getElementById('u306');
gv_vAlignTable['u306'] = 'center';
var u278 = document.getElementById('u278');

var u240 = document.getElementById('u240');

var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'top';
var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'top';
var u324 = document.getElementById('u324');

var u346 = document.getElementById('u346');
gv_vAlignTable['u346'] = 'center';
var u32 = document.getElementById('u32');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'top';
var u319 = document.getElementById('u319');

var u108 = document.getElementById('u108');

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'center';
var u489 = document.getElementById('u489');

var u549 = document.getElementById('u549');

u549.style.cursor = 'pointer';
if (bIE) u549.attachEvent("onclick", Clicku549);
else u549.addEventListener("click", Clicku549, true);
function Clicku549(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u549'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'top';
var u360 = document.getElementById('u360');
gv_vAlignTable['u360'] = 'center';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u529 = document.getElementById('u529');
gv_vAlignTable['u529'] = 'top';
var u9 = document.getElementById('u9');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u368 = document.getElementById('u368');

u368.style.cursor = 'pointer';
if (bIE) u368.attachEvent("onclick", Clicku368);
else u368.addEventListener("click", Clicku368, true);
function Clicku368(e)
{

if (true) {

	NewWindow("打印酒店.html" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}
gv_vAlignTable['u368'] = 'top';
var u401 = document.getElementById('u401');

u401.style.cursor = 'pointer';
if (bIE) u401.attachEvent("onclick", Clicku401);
else u401.addEventListener("click", Clicku401, true);
function Clicku401(e)
{

if (true) {

	SetPanelVisibilityu394("hidden");

}

}

var u365 = document.getElementById('u365');

u365.style.cursor = 'pointer';
if (bIE) u365.attachEvent("onclick", Clicku365);
else u365.addEventListener("click", Clicku365, true);
function Clicku365(e)
{

if (true) {

	SetPanelVisibilityu411("");

}

}
gv_vAlignTable['u365'] = 'top';
var u330 = document.getElementById('u330');

var u314 = document.getElementById('u314');

var u125 = document.getElementById('u125');

var u36 = document.getElementById('u36');

var u295 = document.getElementById('u295');
gv_vAlignTable['u295'] = 'top';
var u415 = document.getElementById('u415');

var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'top';
var u143 = document.getElementById('u143');

var u454 = document.getElementById('u454');
gv_vAlignTable['u454'] = 'top';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'center';
var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'top';
var u450 = document.getElementById('u450');

var u505 = document.getElementById('u505');
gv_vAlignTable['u505'] = 'center';
var u504 = document.getElementById('u504');

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'center';
var u345 = document.getElementById('u345');

var u474 = document.getElementById('u474');

var u439 = document.getElementById('u439');
gv_vAlignTable['u439'] = 'top';
var u349 = document.getElementById('u349');

var u211 = document.getElementById('u211');

var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'center';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'center';
var u215 = document.getElementById('u215');

var u137 = document.getElementById('u137');

var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'top';
var u539 = document.getElementById('u539');
gv_vAlignTable['u539'] = 'top';
var u102 = document.getElementById('u102');

var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'top';
var u369 = document.getElementById('u369');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u300 = document.getElementById('u300');
gv_vAlignTable['u300'] = 'top';
var u141 = document.getElementById('u141');

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u226 = document.getElementById('u226');

var u364 = document.getElementById('u364');
gv_vAlignTable['u364'] = 'center';
var u540 = document.getElementById('u540');

u540.style.cursor = 'pointer';
if (bIE) u540.attachEvent("onclick", Clicku540);
else u540.addEventListener("click", Clicku540, true);
function Clicku540(e)
{

if (true) {

	self.location.href="酒店客房订单.html" + GetQuerystring();

}

}
gv_vAlignTable['u540'] = 'top';
var u458 = document.getElementById('u458');

var u264 = document.getElementById('u264');
gv_vAlignTable['u264'] = 'top';
var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u476 = document.getElementById('u476');

var u414 = document.getElementById('u414');
gv_vAlignTable['u414'] = 'top';
var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'top';
var u183 = document.getElementById('u183');

var u424 = document.getElementById('u424');

var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'top';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u466 = document.getElementById('u466');
gv_vAlignTable['u466'] = 'top';
var u305 = document.getElementById('u305');

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'center';
var u387 = document.getElementById('u387');
gv_vAlignTable['u387'] = 'top';
var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'center';
var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'top';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u186 = document.getElementById('u186');

var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'center';
var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'top';
var u480 = document.getElementById('u480');

var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'top';
var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'top';
var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'center';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'center';
var u341 = document.getElementById('u341');
gv_vAlignTable['u341'] = 'center';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u488 = document.getElementById('u488');
gv_vAlignTable['u488'] = 'center';
var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'center';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'center';
var u48 = document.getElementById('u48');

var u63 = document.getElementById('u63');

var u106 = document.getElementById('u106');

var u88 = document.getElementById('u88');

var u400 = document.getElementById('u400');

u400.style.cursor = 'pointer';
if (bIE) u400.attachEvent("onclick", Clicku400);
else u400.addEventListener("click", Clicku400, true);
function Clicku400(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("提交成功。感谢你的参与。我们会..."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'top';
var u408 = document.getElementById('u408');

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u537 = document.getElementById('u537');
gv_vAlignTable['u537'] = 'top';
var u205 = document.getElementById('u205');

var u302 = document.getElementById('u302');

var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'top';
var u40 = document.getElementById('u40');

var u3 = document.getElementById('u3');

var u390 = document.getElementById('u390');
gv_vAlignTable['u390'] = 'top';
var u160 = document.getElementById('u160');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u467 = document.getElementById('u467');
gv_vAlignTable['u467'] = 'top';
var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'top';
var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'center';
var u503 = document.getElementById('u503');

u503.style.cursor = 'pointer';
if (bIE) u503.attachEvent("onclick", Clicku503);
else u503.addEventListener("click", Clicku503, true);
function Clicku503(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u503'] = 'top';
var u168 = document.getElementById('u168');

var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'center';
var u546 = document.getElementById('u546');
gv_vAlignTable['u546'] = 'top';
var u96 = document.getElementById('u96');

var u384 = document.getElementById('u384');
gv_vAlignTable['u384'] = 'center';
var u521 = document.getElementById('u521');
gv_vAlignTable['u521'] = 'top';
var u16 = document.getElementById('u16');

var u362 = document.getElementById('u362');
gv_vAlignTable['u362'] = 'center';
var u232 = document.getElementById('u232');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u447 = document.getElementById('u447');
gv_vAlignTable['u447'] = 'center';
var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'top';
var u522 = document.getElementById('u522');

u522.style.cursor = 'pointer';
if (bIE) u522.attachEvent("onclick", Clicku522);
else u522.addEventListener("click", Clicku522, true);
function Clicku522(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u522'] = 'top';
var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'top';
var u276 = document.getElementById('u276');

var u421 = document.getElementById('u421');

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'center';
var u451 = document.getElementById('u451');
gv_vAlignTable['u451'] = 'center';
var u334 = document.getElementById('u334');

var u282 = document.getElementById('u282');

var u523 = document.getElementById('u523');

var u514 = document.getElementById('u514');

var u377 = document.getElementById('u377');

u377.style.cursor = 'pointer';
if (bIE) u377.attachEvent("onclick", Clicku377);
else u377.addEventListener("click", Clicku377, true);
function Clicku377(e)
{

if (true) {

	self.location.href="酒店详情.html" + GetQuerystring();

}

}

var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'top';
var u342 = document.getElementById('u342');
gv_vAlignTable['u342'] = 'top';
var u317 = document.getElementById('u317');
gv_vAlignTable['u317'] = 'center';
var u139 = document.getElementById('u139');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u487 = document.getElementById('u487');

var u284 = document.getElementById('u284');

var u525 = document.getElementById('u525');

u525.style.cursor = 'pointer';
if (bIE) u525.attachEvent("onclick", Clicku525);
else u525.addEventListener("click", Clicku525, true);
function Clicku525(e)
{

if (true) {

	self.location.href="登录.html" + GetQuerystring();

}

}
gv_vAlignTable['u525'] = 'top';
var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'top';
var u335 = document.getElementById('u335');
gv_vAlignTable['u335'] = 'center';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'center';
var u431 = document.getElementById('u431');

u431.style.cursor = 'pointer';
if (bIE) u431.attachEvent("onclick", Clicku431);
else u431.addEventListener("click", Clicku431, true);
function Clicku431(e)
{

if (true) {

	SetPanelVisibilityu424("hidden");

}

}

var u526 = document.getElementById('u526');

u526.style.cursor = 'pointer';
if (bIE) u526.attachEvent("onclick", Clicku526);
else u526.addEventListener("click", Clicku526, true);
function Clicku526(e)
{

if (true) {

	self.location.href="注册第一步.html" + GetQuerystring();

}

}
gv_vAlignTable['u526'] = 'top';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u228 = document.getElementById('u228');

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u516 = document.getElementById('u516');

var u190 = document.getElementById('u190');

var u353 = document.getElementById('u353');

var u37 = document.getElementById('u37');

u37.style.cursor = 'pointer';
if (bIE) u37.attachEvent("onclick", Clicku37);
else u37.addEventListener("click", Clicku37, true);
function Clicku37(e)
{

if (true) {

	SetPanelVisibilityu297("");

}

}

var u198 = document.getElementById('u198');

var u348 = document.getElementById('u348');
gv_vAlignTable['u348'] = 'center';
var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'center';
var u407 = document.getElementById('u407');
gv_vAlignTable['u407'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'top';
var u34 = document.getElementById('u34');

var u153 = document.getElementById('u153');

var u412 = document.getElementById('u412');

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u123 = document.getElementById('u123');

var u376 = document.getElementById('u376');
gv_vAlignTable['u376'] = 'top';
var u280 = document.getElementById('u280');

var u430 = document.getElementById('u430');

u430.style.cursor = 'pointer';
if (bIE) u430.attachEvent("onclick", Clicku430);
else u430.addEventListener("click", Clicku430, true);
function Clicku430(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("你的提问已成功提交，请耐心等待我们的反馈。"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u118 = document.getElementById('u118');

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'top';
var u438 = document.getElementById('u438');

var u465 = document.getElementById('u465');
gv_vAlignTable['u465'] = 'center';
var u11 = document.getElementById('u11');

var u515 = document.getElementById('u515');
gv_vAlignTable['u515'] = 'center';
var u28 = document.getElementById('u28');

var u356 = document.getElementById('u356');
gv_vAlignTable['u356'] = 'center';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u502 = document.getElementById('u502');
gv_vAlignTable['u502'] = 'top';
var u75 = document.getElementById('u75');

var u554 = document.getElementById('u554');

var u83 = document.getElementById('u83');

var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'center';
var u213 = document.getElementById('u213');

var u383 = document.getElementById('u383');

u383.style.cursor = 'pointer';
if (bIE) u383.attachEvent("onclick", Clicku383);
else u383.addEventListener("click", Clicku383, true);
function Clicku383(e)
{

if (true) {

	self.location.href="交通指引.html" + GetQuerystring();

}

}

var u520 = document.getElementById('u520');
gv_vAlignTable['u520'] = 'top';
var u445 = document.getElementById('u445');
gv_vAlignTable['u445'] = 'center';
var u244 = document.getElementById('u244');

var u311 = document.getElementById('u311');
gv_vAlignTable['u311'] = 'top';
var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'center';
var u432 = document.getElementById('u432');
gv_vAlignTable['u432'] = 'center';
var u528 = document.getElementById('u528');

u528.style.cursor = 'pointer';
if (bIE) u528.attachEvent("onclick", Clicku528);
else u528.addEventListener("click", Clicku528, true);
function Clicku528(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u528'] = 'top';
var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'center';
var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'center';
var u1 = document.getElementById('u1');

var u512 = document.getElementById('u512');

if (bIE) u512.attachEvent("onmouseover", MouseOveru512);
else u512.addEventListener("mouseover", MouseOveru512, true);
function MouseOveru512(e)
{
if (!IsTrueMouseOver('u512',e)) return;
if (true) {

	SetPanelVisibilityu441("");

}

}

if (bIE) u512.attachEvent("onmouseout", MouseOutu512);
else u512.addEventListener("mouseout", MouseOutu512, true);
function MouseOutu512(e)
{
if (!IsTrueMouseOut('u512',e)) return;
if (true) {

	SetPanelVisibilityu441("hidden");

}

}

var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'center';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u469 = document.getElementById('u469');
gv_vAlignTable['u469'] = 'center';
var u490 = document.getElementById('u490');
gv_vAlignTable['u490'] = 'center';
var u69 = document.getElementById('u69');

var u434 = document.getElementById('u434');
gv_vAlignTable['u434'] = 'top';
var u519 = document.getElementById('u519');
gv_vAlignTable['u519'] = 'center';
var u316 = document.getElementById('u316');

var u30 = document.getElementById('u30');

var u326 = document.getElementById('u326');

var u246 = document.getElementById('u246');

var u194 = document.getElementById('u194');

var u435 = document.getElementById('u435');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'center';
var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'center';
var u347 = document.getElementById('u347');

var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'center';
var u355 = document.getElementById('u355');

var u449 = document.getElementById('u449');
gv_vAlignTable['u449'] = 'top';
var u491 = document.getElementById('u491');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u553 = document.getElementById('u553');
gv_vAlignTable['u553'] = 'center';
var u221 = document.getElementById('u221');

var u352 = document.getElementById('u352');
gv_vAlignTable['u352'] = 'center';
var u499 = document.getElementById('u499');

var u61 = document.getElementById('u61');

var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'top';
var u370 = document.getElementById('u370');
gv_vAlignTable['u370'] = 'center';
var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'center';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'top';
var u151 = document.getElementById('u151');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u378 = document.getElementById('u378');
gv_vAlignTable['u378'] = 'center';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u236 = document.getElementById('u236');

var u374 = document.getElementById('u374');

var u201 = document.getElementById('u201');

var u468 = document.getElementById('u468');

var u411 = document.getElementById('u411');

var u135 = document.getElementById('u135');

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'top';
var u419 = document.getElementById('u419');
gv_vAlignTable['u419'] = 'top';
var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'center';
var u463 = document.getElementById('u463');
gv_vAlignTable['u463'] = 'center';
var u166 = document.getElementById('u166');

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u397 = document.getElementById('u397');
gv_vAlignTable['u397'] = 'top';
var u460 = document.getElementById('u460');
gv_vAlignTable['u460'] = 'top';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'center';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u524 = document.getElementById('u524');
gv_vAlignTable['u524'] = 'top';
var u552 = document.getElementById('u552');

if (bIE) u552.attachEvent("onmouseover", MouseOveru552);
else u552.addEventListener("mouseover", MouseOveru552, true);
function MouseOveru552(e)
{
if (!IsTrueMouseOver('u552',e)) return;
if (true) {

	SetPanelVisibilityu486("");

}

}

if (bIE) u552.attachEvent("onmouseout", MouseOutu552);
else u552.addEventListener("mouseout", MouseOutu552, true);
function MouseOutu552(e)
{
if (!IsTrueMouseOut('u552',e)) return;
if (true) {

	SetPanelVisibilityu486("hidden");

}

}

var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'top';
var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'center';
var u501 = document.getElementById('u501');

u501.style.cursor = 'pointer';
if (bIE) u501.attachEvent("onclick", Clicku501);
else u501.addEventListener("click", Clicku501, true);
function Clicku501(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u501'] = 'top';
var u14 = document.getElementById('u14');

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'center';
var u443 = document.getElementById('u443');
gv_vAlignTable['u443'] = 'center';
var u427 = document.getElementById('u427');
gv_vAlignTable['u427'] = 'top';
var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'center';
var u46 = document.getElementById('u46');

var u382 = document.getElementById('u382');
gv_vAlignTable['u382'] = 'center';
var u517 = document.getElementById('u517');
gv_vAlignTable['u517'] = 'center';
var u509 = document.getElementById('u509');
gv_vAlignTable['u509'] = 'center';
var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u230 = document.getElementById('u230');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u373 = document.getElementById('u373');

u373.style.cursor = 'pointer';
if (bIE) u373.attachEvent("onclick", Clicku373);
else u373.addEventListener("click", Clicku373, true);
function Clicku373(e)
{

if (true) {

	SetPanelVisibilityu394("");

}

}
gv_vAlignTable['u373'] = 'top';
var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'top';
var u238 = document.getElementById('u238');

var u532 = document.getElementById('u532');
gv_vAlignTable['u532'] = 'top';
var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'top';
var u462 = document.getElementById('u462');

var u533 = document.getElementById('u533');

u533.style.cursor = 'pointer';
if (bIE) u533.attachEvent("onclick", Clicku533);
else u533.addEventListener("click", Clicku533, true);
function Clicku533(e)
{

if (true) {

	SetPanelVisibilityu538("");

	SetPanelVisibilityu523("hidden");

}

}

var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'top';
var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u315 = document.getElementById('u315');
gv_vAlignTable['u315'] = 'center';
var u55 = document.getElementById('u55');

var u534 = document.getElementById('u534');
gv_vAlignTable['u534'] = 'center';
var u485 = document.getElementById('u485');
gv_vAlignTable['u485'] = 'top';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u196 = document.getElementById('u196');

var u254 = document.getElementById('u254');

var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'center';
var u535 = document.getElementById('u535');

var u337 = document.getElementById('u337');
gv_vAlignTable['u337'] = 'top';
var u477 = document.getElementById('u477');
gv_vAlignTable['u477'] = 'center';
var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'top';
var u145 = document.getElementById('u145');

var u442 = document.getElementById('u442');

var u351 = document.getElementById('u351');

var u475 = document.getElementById('u475');
gv_vAlignTable['u475'] = 'center';
var u498 = document.getElementById('u498');
gv_vAlignTable['u498'] = 'center';
var u527 = document.getElementById('u527');

u527.style.cursor = 'pointer';
if (bIE) u527.attachEvent("onclick", Clicku527);
else u527.addEventListener("click", Clicku527, true);
function Clicku527(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u527'] = 'top';
var u359 = document.getElementById('u359');

var u375 = document.getElementById('u375');
gv_vAlignTable['u375'] = 'center';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u531 = document.getElementById('u531');
gv_vAlignTable['u531'] = 'top';
var u372 = document.getElementById('u372');
gv_vAlignTable['u372'] = 'center';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u328 = document.getElementById('u328');
gv_vAlignTable['u328'] = 'top';
var u116 = document.getElementById('u116');

var u452 = document.getElementById('u452');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u100 = document.getElementById('u100');

var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'top';
var u385 = document.getElementById('u385');

u385.style.cursor = 'pointer';
if (bIE) u385.attachEvent("onclick", Clicku385);
else u385.addEventListener("click", Clicku385, true);
function Clicku385(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u453 = document.getElementById('u453');
gv_vAlignTable['u453'] = 'center';
var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'top';
var u461 = document.getElementById('u461');
gv_vAlignTable['u461'] = 'top';
var u418 = document.getElementById('u418');
gv_vAlignTable['u418'] = 'center';
var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'top';
var u395 = document.getElementById('u395');

var u441 = document.getElementById('u441');

var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'center';
var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'center';
var u149 = document.getElementById('u149');

var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'center';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u550 = document.getElementById('u550');

u550.style.cursor = 'pointer';
if (bIE) u550.attachEvent("onclick", Clicku550);
else u550.addEventListener("click", Clicku550, true);
function Clicku550(e)
{

if (true) {

	SetPanelVisibilityu523("");

	SetPanelVisibilityu538("hidden");

}

}

var u170 = document.getElementById('u170');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u73 = document.getElementById('u73');

var u303 = document.getElementById('u303');

u303.style.cursor = 'pointer';
if (bIE) u303.attachEvent("onclick", Clicku303);
else u303.addEventListener("click", Clicku303, true);
function Clicku303(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'center';
var u433 = document.getElementById('u433');
gv_vAlignTable['u433'] = 'top';
var u98 = document.getElementById('u98');

var u178 = document.getElementById('u178');

var u500 = document.getElementById('u500');
gv_vAlignTable['u500'] = 'center';
var u224 = document.getElementById('u224');

var u393 = document.getElementById('u393');
gv_vAlignTable['u393'] = 'center';
var u381 = document.getElementById('u381');

u381.style.cursor = 'pointer';
if (bIE) u381.attachEvent("onclick", Clicku381);
else u381.addEventListener("click", Clicku381, true);
function Clicku381(e)
{

if (true) {

	self.location.href="图库_视频.html" + GetQuerystring();

}

}

var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'center';
var u371 = document.getElementById('u371');

var u219 = document.getElementById('u219');

var u456 = document.getElementById('u456');

var u389 = document.getElementById('u389');
gv_vAlignTable['u389'] = 'center';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u273 = document.getElementById('u273');

var u322 = document.getElementById('u322');
gv_vAlignTable['u322'] = 'center';
var u90 = document.getElementById('u90');

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u486 = document.getElementById('u486');

var u394 = document.getElementById('u394');

var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'top';
var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'center';
var u444 = document.getElementById('u444');

var u252 = document.getElementById('u252');

var u484 = document.getElementById('u484');
gv_vAlignTable['u484'] = 'top';
var u508 = document.getElementById('u508');

u508.style.cursor = 'pointer';
if (bIE) u508.attachEvent("onclick", Clicku508);
else u508.addEventListener("click", Clicku508, true);
function Clicku508(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}

var u26 = document.getElementById('u26');

var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u547 = document.getElementById('u547');
gv_vAlignTable['u547'] = 'top';
var u309 = document.getElementById('u309');
gv_vAlignTable['u309'] = 'top';
var u379 = document.getElementById('u379');

u379.style.cursor = 'pointer';
if (bIE) u379.attachEvent("onclick", Clicku379);
else u379.addEventListener("click", Clicku379, true);
function Clicku379(e)
{

if (true) {

	self.location.href="配置设施.html" + GetQuerystring();

}

}

var u446 = document.getElementById('u446');

var u350 = document.getElementById('u350');
gv_vAlignTable['u350'] = 'center';
var u203 = document.getElementById('u203');

var u426 = document.getElementById('u426');
gv_vAlignTable['u426'] = 'center';
var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'center';
var u172 = document.getElementById('u172');

var u361 = document.getElementById('u361');

var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'center';
var u358 = document.getElementById('u358');
gv_vAlignTable['u358'] = 'center';
var u455 = document.getElementById('u455');
gv_vAlignTable['u455'] = 'top';
var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'center';
var u398 = document.getElementById('u398');

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u321 = document.getElementById('u321');

var u81 = document.getElementById('u81');

var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'center';
var u422 = document.getElementById('u422');

var u406 = document.getElementById('u406');

var u67 = document.getElementById('u67');

var u544 = document.getElementById('u544');
gv_vAlignTable['u544'] = 'top';
var u133 = document.getElementById('u133');

var u479 = document.getElementById('u479');
gv_vAlignTable['u479'] = 'top';
var u290 = document.getElementById('u290');
gv_vAlignTable['u290'] = 'top';
var u410 = document.getElementById('u410');
gv_vAlignTable['u410'] = 'top';
var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'center';
var u121 = document.getElementById('u121');

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u298 = document.getElementById('u298');

var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'center';
var u448 = document.getElementById('u448');
gv_vAlignTable['u448'] = 'top';
var u301 = document.getElementById('u301');

var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'center';
var u363 = document.getElementById('u363');

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'center';
var u507 = document.getElementById('u507');
gv_vAlignTable['u507'] = 'center';
var u340 = document.getElementById('u340');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u367 = document.getElementById('u367');
gv_vAlignTable['u367'] = 'center';
var u44 = document.getElementById('u44');

var u425 = document.getElementById('u425');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u223 = document.getElementById('u223');

u223.style.cursor = 'pointer';
if (bIE) u223.attachEvent("onclick", Clicku223);
else u223.addEventListener("click", Clicku223, true);
function Clicku223(e)
{

if (true) {

	SetPanelVisibilityu297("");

}

}

var u380 = document.getElementById('u380');
gv_vAlignTable['u380'] = 'center';
var u530 = document.getElementById('u530');
gv_vAlignTable['u530'] = 'top';
var u548 = document.getElementById('u548');
gv_vAlignTable['u548'] = 'top';
var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'center';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'top';
var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'center';
var u388 = document.getElementById('u388');

u388.style.cursor = 'pointer';
if (bIE) u388.attachEvent("onclick", Clicku388);
else u388.addEventListener("click", Clicku388, true);
function Clicku388(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}

var u538 = document.getElementById('u538');

var u405 = document.getElementById('u405');
gv_vAlignTable['u405'] = 'top';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u272 = document.getElementById('u272');

var u542 = document.getElementById('u542');

u542.style.cursor = 'pointer';
if (bIE) u542.attachEvent("onclick", Clicku542);
else u542.addEventListener("click", Clicku542, true);
function Clicku542(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u542'] = 'top';
var u38 = document.getElementById('u38');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u53 = document.getElementById('u53');

var u250 = document.getElementById('u250');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u481 = document.getElementById('u481');
gv_vAlignTable['u481'] = 'center';
var u473 = document.getElementById('u473');
gv_vAlignTable['u473'] = 'top';
var u313 = document.getElementById('u313');
gv_vAlignTable['u313'] = 'top';
var u483 = document.getElementById('u483');
gv_vAlignTable['u483'] = 'center';
var u492 = document.getElementById('u492');
gv_vAlignTable['u492'] = 'center';
var u181 = document.getElementById('u181');

var u357 = document.getElementById('u357');

var u543 = document.getElementById('u543');

u543.style.cursor = 'pointer';
if (bIE) u543.attachEvent("onclick", Clicku543);
else u543.addEventListener("click", Clicku543, true);
function Clicku543(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u543'] = 'top';
var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'top';
var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'center';
var u339 = document.getElementById('u339');
gv_vAlignTable['u339'] = 'center';
var u494 = document.getElementById('u494');
gv_vAlignTable['u494'] = 'center';
var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
var u156 = document.getElementById('u156');

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u409 = document.getElementById('u409');
gv_vAlignTable['u409'] = 'top';
var u513 = document.getElementById('u513');
gv_vAlignTable['u513'] = 'center';
var u354 = document.getElementById('u354');
gv_vAlignTable['u354'] = 'center';
var u79 = document.getElementById('u79');

var u403 = document.getElementById('u403');
gv_vAlignTable['u403'] = 'top';
var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'center';
var u114 = document.getElementById('u114');

var u404 = document.getElementById('u404');
gv_vAlignTable['u404'] = 'top';
var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'center';
var u536 = document.getElementById('u536');
gv_vAlignTable['u536'] = 'center';
var u297 = document.getElementById('u297');

var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'center';
var u497 = document.getElementById('u497');

var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'center';
var u436 = document.getElementById('u436');
gv_vAlignTable['u436'] = 'center';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'center';
var u472 = document.getElementById('u472');
gv_vAlignTable['u472'] = 'top';
var u429 = document.getElementById('u429');

var u464 = document.getElementById('u464');

var u176 = document.getElementById('u176');

var u71 = document.getElementById('u71');

var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'top';
var u396 = document.getElementById('u396');
gv_vAlignTable['u396'] = 'center';
var u470 = document.getElementById('u470');

var u551 = document.getElementById('u551');
gv_vAlignTable['u551'] = 'center';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u423 = document.getElementById('u423');
gv_vAlignTable['u423'] = 'top';
var u158 = document.getElementById('u158');

var u496 = document.getElementById('u496');
gv_vAlignTable['u496'] = 'center';
var u217 = document.getElementById('u217');

var u478 = document.getElementById('u478');
gv_vAlignTable['u478'] = 'top';
var u495 = document.getElementById('u495');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u511 = document.getElementById('u511');
gv_vAlignTable['u511'] = 'center';
var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'center';
var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'center';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u392 = document.getElementById('u392');

u392.style.cursor = 'pointer';
if (bIE) u392.attachEvent("onclick", Clicku392);
else u392.addEventListener("click", Clicku392, true);
function Clicku392(e)
{

if (true) {

	self.location.href="交通指引.html" + GetQuerystring();

}

}

var u413 = document.getElementById('u413');
gv_vAlignTable['u413'] = 'center';
var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'top';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'top';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
var u7 = document.getElementById('u7');

var u110 = document.getElementById('u110');

var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'top';
var u307 = document.getElementById('u307');

var u174 = document.getElementById('u174');

var u471 = document.getElementById('u471');
gv_vAlignTable['u471'] = 'center';
var u24 = document.getElementById('u24');

var u312 = document.getElementById('u312');
gv_vAlignTable['u312'] = 'top';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'center';
var u482 = document.getElementById('u482');

var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'top';
var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'top';
var u343 = document.getElementById('u343');
gv_vAlignTable['u343'] = 'top';
var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'center';
var u188 = document.getElementById('u188');

var u248 = document.getElementById('u248');

var u338 = document.getElementById('u338');

u338.style.cursor = 'pointer';
if (bIE) u338.attachEvent("onclick", Clicku338);
else u338.addEventListener("click", Clicku338, true);
function Clicku338(e)
{

if (true) {

	SetPanelVisibilityu297("hidden");

}

}

var u457 = document.getElementById('u457');
gv_vAlignTable['u457'] = 'center';
var u437 = document.getElementById('u437');
gv_vAlignTable['u437'] = 'top';
var u18 = document.getElementById('u18');

if (window.OnLoad) OnLoad();
