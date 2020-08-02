
var PageName = '查询列表';
var PageId = 'p605ad5fd508d44f1a5ed8e6c54b5bd06'
var PageUrl = '查询列表.html'
document.title = '查询列表';

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

eval(GetDynamicPanelScript('u772', 1));

eval(GetDynamicPanelScript('u219', 1));

eval(GetDynamicPanelScript('u164', 1));

eval(GetDynamicPanelScript('u1119', 1));

eval(GetDynamicPanelScript('u519', 1));

eval(GetDynamicPanelScript('u819', 1));

eval(GetDynamicPanelScript('u464', 1));

eval(GetDynamicPanelScript('u172', 1));

eval(GetDynamicPanelScript('u1763', 1));

eval(GetDynamicPanelScript('u1681', 1));

eval(GetDynamicPanelScript('u764', 1));

eval(GetDynamicPanelScript('u472', 1));

eval(GetDynamicPanelScript('u1072', 1));

eval(GetDynamicPanelScript('u1421', 1));

eval(GetDynamicPanelScript('u1726', 1));

eval(GetDynamicPanelScript('u1064', 1));

eval(GetDynamicPanelScript('u1429', 1));

eval(GetDynamicPanelScript('u1476', 1));

eval(GetDynamicPanelScript('u1778', 1));

eval(GetDynamicPanelScript('u1796', 1));

var u405 = document.getElementById('u405');

var u858 = document.getElementById('u858');
gv_vAlignTable['u858'] = 'center';
var u767 = document.getElementById('u767');
gv_vAlignTable['u767'] = 'top';
var u751 = document.getElementById('u751');

u751.style.cursor = 'pointer';
if (bIE) u751.attachEvent("onclick", Clicku751);
else u751.addEventListener("click", Clicku751, true);
function Clicku751(e)
{

if (true) {

	SetPanelVisibilityu764("");

}

}

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u932 = document.getElementById('u932');

u932.style.cursor = 'pointer';
if (bIE) u932.attachEvent("onclick", Clicku932);
else u932.addEventListener("click", Clicku932, true);
function Clicku932(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}
gv_vAlignTable['u932'] = 'top';
var u602 = document.getElementById('u602');
gv_vAlignTable['u602'] = 'center';
var u615 = document.getElementById('u615');
gv_vAlignTable['u615'] = 'top';
var u572 = document.getElementById('u572');
gv_vAlignTable['u572'] = 'center';
var u381 = document.getElementById('u381');

var u540 = document.getElementById('u540');
gv_vAlignTable['u540'] = 'center';
var u1778 = document.getElementById('u1778');

var u404 = document.getElementById('u404');
gv_vAlignTable['u404'] = 'center';
var u1179 = document.getElementById('u1179');

var u766 = document.getElementById('u766');
gv_vAlignTable['u766'] = 'center';
var u761 = document.getElementById('u761');
gv_vAlignTable['u761'] = 'center';
var u947 = document.getElementById('u947');
gv_vAlignTable['u947'] = 'center';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u750 = document.getElementById('u750');
gv_vAlignTable['u750'] = 'center';
var u329 = document.getElementById('u329');

var u931 = document.getElementById('u931');
gv_vAlignTable['u931'] = 'center';
var u614 = document.getElementById('u614');
gv_vAlignTable['u614'] = 'top';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'top';
var u403 = document.getElementById('u403');

u403.style.cursor = 'pointer';
if (bIE) u403.attachEvent("onclick", Clicku403);
else u403.addEventListener("click", Clicku403, true);
function Clicku403(e)
{

if (true) {

	SetPanelVisibilityu472("");

	SetPanelVisibilityu519("hidden");

}

}

var u765 = document.getElementById('u765');

var u539 = document.getElementById('u539');

var u1697 = document.getElementById('u1697');
gv_vAlignTable['u1697'] = 'center';
var u1653 = document.getElementById('u1653');

var u1694 = document.getElementById('u1694');
gv_vAlignTable['u1694'] = 'top';
var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
var u826 = document.getElementById('u826');
gv_vAlignTable['u826'] = 'center';
var u328 = document.getElementById('u328');
gv_vAlignTable['u328'] = 'top';
var u930 = document.getElementById('u930');

var u1698 = document.getElementById('u1698');

var u749 = document.getElementById('u749');

var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'center';
var u1787 = document.getElementById('u1787');
gv_vAlignTable['u1787'] = 'top';
var u1786 = document.getElementById('u1786');
gv_vAlignTable['u1786'] = 'top';
var u764 = document.getElementById('u764');

var u538 = document.getElementById('u538');
gv_vAlignTable['u538'] = 'center';
var u1783 = document.getElementById('u1783');

u1783.style.cursor = 'pointer';
if (bIE) u1783.attachEvent("onclick", Clicku1783);
else u1783.addEventListener("click", Clicku1783, true);
function Clicku1783(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u1783'] = 'top';
var u1782 = document.getElementById('u1782');

u1782.style.cursor = 'pointer';
if (bIE) u1782.attachEvent("onclick", Clicku1782);
else u1782.addEventListener("click", Clicku1782, true);
function Clicku1782(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u1782'] = 'top';
var u945 = document.getElementById('u945');
gv_vAlignTable['u945'] = 'center';
var u1780 = document.getElementById('u1780');

u1780.style.cursor = 'pointer';
if (bIE) u1780.attachEvent("onclick", Clicku1780);
else u1780.addEventListener("click", Clicku1780, true);
function Clicku1780(e)
{

if (true) {

	self.location.href="酒店客房订单.html" + GetQuerystring();

}

}
gv_vAlignTable['u1780'] = 'top';
var u659 = document.getElementById('u659');
gv_vAlignTable['u659'] = 'center';
var u553 = document.getElementById('u553');

var u1788 = document.getElementById('u1788');
gv_vAlignTable['u1788'] = 'top';
var u1609 = document.getElementById('u1609');

var u1378 = document.getElementById('u1378');

var u417 = document.getElementById('u417');

var u791 = document.getElementById('u791');
gv_vAlignTable['u791'] = 'center';
var u748 = document.getElementById('u748');
gv_vAlignTable['u748'] = 'center';
var u1820 = document.getElementById('u1820');
gv_vAlignTable['u1820'] = 'top';
var u206 = document.getElementById('u206');

var u763 = document.getElementById('u763');
gv_vAlignTable['u763'] = 'center';
var u10 = document.getElementById('u10');

var u944 = document.getElementById('u944');

var u627 = document.getElementById('u627');
gv_vAlignTable['u627'] = 'top';
var u552 = document.getElementById('u552');
gv_vAlignTable['u552'] = 'center';
var u987 = document.getElementById('u987');

u987.style.cursor = 'pointer';
if (bIE) u987.attachEvent("onclick", Clicku987);
else u987.addEventListener("click", Clicku987, true);
function Clicku987(e)
{

if (true) {

	SetPanelVisibilityu1072("");

	SetPanelVisibilityu1119("hidden");

}

}

var u416 = document.getElementById('u416');
gv_vAlignTable['u416'] = 'center';
var u869 = document.getElementById('u869');

var u341 = document.getElementById('u341');

u341.style.cursor = 'pointer';
if (bIE) u341.attachEvent("onclick", Clicku341);
else u341.addEventListener("click", Clicku341, true);
function Clicku341(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}
gv_vAlignTable['u341'] = 'top';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'center';
var u567 = document.getElementById('u567');

var u943 = document.getElementById('u943');
gv_vAlignTable['u943'] = 'center';
var u462 = document.getElementById('u462');

u462.style.cursor = 'pointer';
if (bIE) u462.attachEvent("onclick", Clicku462);
else u462.addEventListener("click", Clicku462, true);
function Clicku462(e)
{

if (true) {

	SetPanelVisibilityu472("");

}

}

var u551 = document.getElementById('u551');

var u52 = document.getElementById('u52');

var u986 = document.getElementById('u986');
gv_vAlignTable['u986'] = 'center';
var u801 = document.getElementById('u801');
gv_vAlignTable['u801'] = 'center';
var u415 = document.getElementById('u415');

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'center';
var u868 = document.getElementById('u868');
gv_vAlignTable['u868'] = 'center';
var u777 = document.getElementById('u777');

u777.style.cursor = 'pointer';
if (bIE) u777.attachEvent("onclick", Clicku777);
else u777.addEventListener("click", Clicku777, true);
function Clicku777(e)
{

if (true) {

	SetPanelVisibilityu772("hidden");

}

}

var u340 = document.getElementById('u340');
gv_vAlignTable['u340'] = 'top';
var u204 = document.getElementById('u204');

var u789 = document.getElementById('u789');
gv_vAlignTable['u789'] = 'center';
var u566 = document.getElementById('u566');
gv_vAlignTable['u566'] = 'center';
var u942 = document.getElementById('u942');

var u46 = document.getElementById('u46');

var u550 = document.getElementById('u550');
gv_vAlignTable['u550'] = 'center';
var u129 = document.getElementById('u129');

var u985 = document.getElementById('u985');

var u414 = document.getElementById('u414');
gv_vAlignTable['u414'] = 'center';
var u776 = document.getElementById('u776');

var u957 = document.getElementById('u957');
gv_vAlignTable['u957'] = 'center';
var u393 = document.getElementById('u393');

var u67 = document.getElementById('u67');

u67.style.cursor = 'pointer';
if (bIE) u67.attachEvent("onclick", Clicku67);
else u67.addEventListener("click", Clicku67, true);
function Clicku67(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}
gv_vAlignTable['u67'] = 'top';
var u788 = document.getElementById('u788');

var u760 = document.getElementById('u760');

u760.style.cursor = 'pointer';
if (bIE) u760.attachEvent("onclick", Clicku760);
else u760.addEventListener("click", Clicku760, true);
function Clicku760(e)
{

if (true) {

	SetPanelVisibilityu764("");

}

}

var u339 = document.getElementById('u339');

u339.style.cursor = 'pointer';
if (bIE) u339.attachEvent("onclick", Clicku339);
else u339.addEventListener("click", Clicku339, true);
function Clicku339(e)
{

if (true) {

	self.location.href="图库_视频.html" + GetQuerystring();

}

}
gv_vAlignTable['u339'] = 'top';
var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'center';
var u354 = document.getElementById('u354');

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'center';
var u984 = document.getElementById('u984');
gv_vAlignTable['u984'] = 'center';
var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'center';
var u866 = document.getElementById('u866');
gv_vAlignTable['u866'] = 'center';
var u775 = document.getElementById('u775');
gv_vAlignTable['u775'] = 'top';
var u549 = document.getElementById('u549');

var u956 = document.getElementById('u956');

var u202 = document.getElementById('u202');

var u85 = document.getElementById('u85');

var u564 = document.getElementById('u564');
gv_vAlignTable['u564'] = 'center';
var u338 = document.getElementById('u338');
gv_vAlignTable['u338'] = 'center';
var u353 = document.getElementById('u353');
gv_vAlignTable['u353'] = 'center';
var u983 = document.getElementById('u983');

var u217 = document.getElementById('u217');

var u591 = document.getElementById('u591');

var u774 = document.getElementById('u774');
gv_vAlignTable['u774'] = 'center';
var u548 = document.getElementById('u548');
gv_vAlignTable['u548'] = 'center';
var u955 = document.getElementById('u955');
gv_vAlignTable['u955'] = 'center';
var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'center';
var u563 = document.getElementById('u563');

var u427 = document.getElementById('u427');

var u352 = document.getElementById('u352');

var u982 = document.getElementById('u982');
gv_vAlignTable['u982'] = 'center';
var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'top';
var u1434 = document.getElementById('u1434');

u1434.style.cursor = 'pointer';
if (bIE) u1434.attachEvent("onclick", Clicku1434);
else u1434.addEventListener("click", Clicku1434, true);
function Clicku1434(e)
{

if (true) {

	SetPanelVisibilityu1429("hidden");

}

}

var u590 = document.getElementById('u590');
gv_vAlignTable['u590'] = 'center';
var u773 = document.getElementById('u773');

var u141 = document.getElementById('u141');

var u245 = document.getElementById('u245');

var u562 = document.getElementById('u562');
gv_vAlignTable['u562'] = 'center';
var u997 = document.getElementById('u997');

var u879 = document.getElementById('u879');

var u351 = document.getElementById('u351');
gv_vAlignTable['u351'] = 'center';
var u32 = document.getElementById('u32');

u32.style.cursor = 'pointer';
if (bIE) u32.attachEvent("onclick", Clicku32);
else u32.addEventListener("click", Clicku32, true);
function Clicku32(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}
gv_vAlignTable['u32'] = 'top';
var u981 = document.getElementById('u981');

var u386 = document.getElementById('u386');
gv_vAlignTable['u386'] = 'center';
var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'center';
var u577 = document.getElementById('u577');

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'center';
var u589 = document.getElementById('u589');

var u366 = document.getElementById('u366');
gv_vAlignTable['u366'] = 'center';
var u996 = document.getElementById('u996');
gv_vAlignTable['u996'] = 'center';
var u26 = document.getElementById('u26');

var u89 = document.getElementById('u89');

var u878 = document.getElementById('u878');
gv_vAlignTable['u878'] = 'center';
var u350 = document.getElementById('u350');

var u980 = document.getElementById('u980');
gv_vAlignTable['u980'] = 'center';
var u214 = document.getElementById('u214');

var u799 = document.getElementById('u799');
gv_vAlignTable['u799'] = 'center';
var u771 = document.getElementById('u771');
gv_vAlignTable['u771'] = 'center';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u588 = document.getElementById('u588');
gv_vAlignTable['u588'] = 'center';
var u560 = document.getElementById('u560');
gv_vAlignTable['u560'] = 'center';
var u139 = document.getElementById('u139');

u139.style.cursor = 'pointer';
if (bIE) u139.attachEvent("onclick", Clicku139);
else u139.addEventListener("click", Clicku139, true);
function Clicku139(e)
{

if (true) {

	SetPanelVisibilityu219("");

}

}

var u995 = document.getElementById('u995');

var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'center';
var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'center';
var u798 = document.getElementById('u798');

var u575 = document.getElementById('u575');

var u349 = document.getElementById('u349');
gv_vAlignTable['u349'] = 'center';
var u1811 = document.getElementById('u1811');
gv_vAlignTable['u1811'] = 'top';
var u1810 = document.getElementById('u1810');
gv_vAlignTable['u1810'] = 'top';
var u530 = document.getElementById('u530');
gv_vAlignTable['u530'] = 'center';
var u364 = document.getElementById('u364');

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'center';
var u994 = document.getElementById('u994');
gv_vAlignTable['u994'] = 'center';
var u153 = document.getElementById('u153');

u153.style.cursor = 'pointer';
if (bIE) u153.attachEvent("onclick", Clicku153);
else u153.addEventListener("click", Clicku153, true);
function Clicku153(e)
{

if (true) {

	SetPanelVisibilityu164("");

}

}

var u1309 = document.getElementById('u1309');

var u391 = document.getElementById('u391');

u391.style.cursor = 'pointer';
if (bIE) u391.attachEvent("onclick", Clicku391);
else u391.addEventListener("click", Clicku391, true);
function Clicku391(e)
{

if (true) {

	SetPanelVisibilityu519("");

}

}

var u574 = document.getElementById('u574');
gv_vAlignTable['u574'] = 'center';
var u348 = document.getElementById('u348');

var u502 = document.getElementById('u502');

var u363 = document.getElementById('u363');
gv_vAlignTable['u363'] = 'top';
var u993 = document.getElementById('u993');

var u1022 = document.getElementById('u1022');
gv_vAlignTable['u1022'] = 'center';
var u227 = document.getElementById('u227');

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'center';
var u390 = document.getElementById('u390');
gv_vAlignTable['u390'] = 'center';
var u573 = document.getElementById('u573');

var u309 = document.getElementById('u309');

var u362 = document.getElementById('u362');
gv_vAlignTable['u362'] = 'top';
var u992 = document.getElementById('u992');
gv_vAlignTable['u992'] = 'center';
var u938 = document.getElementById('u938');
gv_vAlignTable['u938'] = 'center';
var u151 = document.getElementById('u151');

u151.style.cursor = 'pointer';
if (bIE) u151.attachEvent("onclick", Clicku151);
else u151.addEventListener("click", Clicku151, true);
function Clicku151(e)
{

if (true) {

	SetPanelVisibilityu164("");

}

}

var u12 = document.getElementById('u12');

var u377 = document.getElementById('u377');

var u731 = document.getElementById('u731');

var u389 = document.getElementById('u389');

var u361 = document.getElementById('u361');
gv_vAlignTable['u361'] = 'center';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u565 = document.getElementById('u565');

var u523 = document.getElementById('u523');
gv_vAlignTable['u523'] = 'center';
var u599 = document.getElementById('u599');

var u376 = document.getElementById('u376');
gv_vAlignTable['u376'] = 'center';
var u1215 = document.getElementById('u1215');
gv_vAlignTable['u1215'] = 'top';
var u1214 = document.getElementById('u1214');
gv_vAlignTable['u1214'] = 'top';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u482 = document.getElementById('u482');

var u388 = document.getElementById('u388');
gv_vAlignTable['u388'] = 'center';
var u165 = document.getElementById('u165');

var u598 = document.getElementById('u598');
gv_vAlignTable['u598'] = 'center';
var u570 = document.getElementById('u570');
gv_vAlignTable['u570'] = 'center';
var u149 = document.getElementById('u149');

var u164 = document.getElementById('u164');

var u1707 = document.getElementById('u1707');
gv_vAlignTable['u1707'] = 'top';
var u1706 = document.getElementById('u1706');
gv_vAlignTable['u1706'] = 'top';
var u1705 = document.getElementById('u1705');
gv_vAlignTable['u1705'] = 'center';
var u1704 = document.getElementById('u1704');

var u1703 = document.getElementById('u1703');
gv_vAlignTable['u1703'] = 'center';
var u752 = document.getElementById('u752');
gv_vAlignTable['u752'] = 'center';
var u359 = document.getElementById('u359');
gv_vAlignTable['u359'] = 'center';
var u1709 = document.getElementById('u1709');
gv_vAlignTable['u1709'] = 'center';
var u1708 = document.getElementById('u1708');

var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'center';
var u374 = document.getElementById('u374');
gv_vAlignTable['u374'] = 'center';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'center';
var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'center';
var u542 = document.getElementById('u542');
gv_vAlignTable['u542'] = 'center';
var u754 = document.getElementById('u754');
gv_vAlignTable['u754'] = 'center';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
var u190 = document.getElementById('u190');

var u373 = document.getElementById('u373');

var u631 = document.getElementById('u631');
gv_vAlignTable['u631'] = 'center';
var u162 = document.getElementById('u162');

u162.style.cursor = 'pointer';
if (bIE) u162.attachEvent("onclick", Clicku162);
else u162.addEventListener("click", Clicku162, true);
function Clicku162(e)
{

if (true) {

	SetPanelVisibilityu172("");

}

}

var u514 = document.getElementById('u514');

var u518 = document.getElementById('u518');
gv_vAlignTable['u518'] = 'center';
var u293 = document.getElementById('u293');

var u978 = document.getElementById('u978');
gv_vAlignTable['u978'] = 'center';
var u1185 = document.getElementById('u1185');

var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'center';
var u790 = document.getElementById('u790');

var u177 = document.getElementById('u177');

u177.style.cursor = 'pointer';
if (bIE) u177.attachEvent("onclick", Clicku177);
else u177.addEventListener("click", Clicku177, true);
function Clicku177(e)
{

if (true) {

	SetPanelVisibilityu172("hidden");

}

}

var u1188 = document.getElementById('u1188');
gv_vAlignTable['u1188'] = 'center';
var u306 = document.getElementById('u306');
gv_vAlignTable['u306'] = 'center';
var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'center';
var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'center';
var u850 = document.getElementById('u850');
gv_vAlignTable['u850'] = 'center';
var u946 = document.getElementById('u946');

var u399 = document.getElementById('u399');

var u371 = document.getElementById('u371');

var u188 = document.getElementById('u188');

var u160 = document.getElementById('u160');

u160.style.cursor = 'pointer';
if (bIE) u160.attachEvent("onclick", Clicku160);
else u160.addEventListener("click", Clicku160, true);
function Clicku160(e)
{

if (true) {

	SetPanelVisibilityu164("");

}

}

var u365 = document.getElementById('u365');

var u1618 = document.getElementById('u1618');
gv_vAlignTable['u1618'] = 'center';
var u600 = document.getElementById('u600');
gv_vAlignTable['u600'] = 'center';
var u1047 = document.getElementById('u1047');

var u1046 = document.getElementById('u1046');
gv_vAlignTable['u1046'] = 'center';
var u1045 = document.getElementById('u1045');

var u1044 = document.getElementById('u1044');
gv_vAlignTable['u1044'] = 'center';
var u1043 = document.getElementById('u1043');

var u370 = document.getElementById('u370');

var u1041 = document.getElementById('u1041');

var u1040 = document.getElementById('u1040');
gv_vAlignTable['u1040'] = 'center';
var u1049 = document.getElementById('u1049');

var u1048 = document.getElementById('u1048');
gv_vAlignTable['u1048'] = 'center';
var u719 = document.getElementById('u719');

u719.style.cursor = 'pointer';
if (bIE) u719.attachEvent("onclick", Clicku719);
else u719.addEventListener("click", Clicku719, true);
function Clicku719(e)
{

if (true) {

	SetPanelVisibilityu772("");

	SetPanelVisibilityu819("hidden");

}

}

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'center';
var u1037 = document.getElementById('u1037');

var u1036 = document.getElementById('u1036');
gv_vAlignTable['u1036'] = 'center';
var u1035 = document.getElementById('u1035');

var u1034 = document.getElementById('u1034');
gv_vAlignTable['u1034'] = 'center';
var u1033 = document.getElementById('u1033');

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'center';
var u1031 = document.getElementById('u1031');

var u1030 = document.getElementById('u1030');
gv_vAlignTable['u1030'] = 'center';
var u967 = document.getElementById('u967');

u967.style.cursor = 'pointer';
if (bIE) u967.attachEvent("onclick", Clicku967);
else u967.addEventListener("click", Clicku967, true);
function Clicku967(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}
gv_vAlignTable['u967'] = 'top';
var u1039 = document.getElementById('u1039');

u1039.style.cursor = 'pointer';
if (bIE) u1039.attachEvent("onclick", Clicku1039);
else u1039.addEventListener("click", Clicku1039, true);
function Clicku1039(e)
{

if (true) {

	SetPanelVisibilityu1119("");

}

}

var u1038 = document.getElementById('u1038');
gv_vAlignTable['u1038'] = 'center';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'center';
var u1053 = document.getElementById('u1053');

u1053.style.cursor = 'pointer';
if (bIE) u1053.attachEvent("onclick", Clicku1053);
else u1053.addEventListener("click", Clicku1053, true);
function Clicku1053(e)
{

if (true) {

	SetPanelVisibilityu1064("");

}

}

var u1050 = document.getElementById('u1050');
gv_vAlignTable['u1050'] = 'center';
var u1027 = document.getElementById('u1027');

var u1026 = document.getElementById('u1026');
gv_vAlignTable['u1026'] = 'center';
var u1025 = document.getElementById('u1025');

var u1024 = document.getElementById('u1024');
gv_vAlignTable['u1024'] = 'center';
var u1023 = document.getElementById('u1023');

u1023.style.cursor = 'pointer';
if (bIE) u1023.attachEvent("onclick", Clicku1023);
else u1023.addEventListener("click", Clicku1023, true);
function Clicku1023(e)
{

if (true) {

	SetPanelVisibilityu1119("");

}

}

var u173 = document.getElementById('u173');

var u1021 = document.getElementById('u1021');

var u1020 = document.getElementById('u1020');
gv_vAlignTable['u1020'] = 'center';
var u1029 = document.getElementById('u1029');

var u1028 = document.getElementById('u1028');
gv_vAlignTable['u1028'] = 'center';
var u613 = document.getElementById('u613');
gv_vAlignTable['u613'] = 'top';
var u1177 = document.getElementById('u1177');

var u1176 = document.getElementById('u1176');
gv_vAlignTable['u1176'] = 'center';
var u1175 = document.getElementById('u1175');

var u1174 = document.getElementById('u1174');
gv_vAlignTable['u1174'] = 'center';
var u1173 = document.getElementById('u1173');

var u1172 = document.getElementById('u1172');
gv_vAlignTable['u1172'] = 'center';
var u1171 = document.getElementById('u1171');

var u1170 = document.getElementById('u1170');
gv_vAlignTable['u1170'] = 'center';
var u1546 = document.getElementById('u1546');

var u1016 = document.getElementById('u1016');
gv_vAlignTable['u1016'] = 'center';
var u1015 = document.getElementById('u1015');

var u1178 = document.getElementById('u1178');
gv_vAlignTable['u1178'] = 'center';
var u1013 = document.getElementById('u1013');

var u172 = document.getElementById('u172');

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u1010 = document.getElementById('u1010');
gv_vAlignTable['u1010'] = 'center';
var u1019 = document.getElementById('u1019');

u1019.style.cursor = 'pointer';
if (bIE) u1019.attachEvent("onclick", Clicku1019);
else u1019.addEventListener("click", Clicku1019, true);
function Clicku1019(e)
{

if (true) {

	SetPanelVisibilityu1072("");

	SetPanelVisibilityu1119("hidden");

}

}

var u1589 = document.getElementById('u1589');
gv_vAlignTable['u1589'] = 'top';
var u612 = document.getElementById('u612');
gv_vAlignTable['u612'] = 'center';
var u1167 = document.getElementById('u1167');

var u1166 = document.getElementById('u1166');
gv_vAlignTable['u1166'] = 'center';
var u1165 = document.getElementById('u1165');

var u1164 = document.getElementById('u1164');
gv_vAlignTable['u1164'] = 'center';
var u1163 = document.getElementById('u1163');

var u1162 = document.getElementById('u1162');
gv_vAlignTable['u1162'] = 'center';
var u1161 = document.getElementById('u1161');

var u1160 = document.getElementById('u1160');
gv_vAlignTable['u1160'] = 'center';
var u520 = document.getElementById('u520');

var u1007 = document.getElementById('u1007');

u1007.style.cursor = 'pointer';
if (bIE) u1007.attachEvent("onclick", Clicku1007);
else u1007.addEventListener("click", Clicku1007, true);
function Clicku1007(e)
{

if (true) {

	SetPanelVisibilityu1119("");

}

}

var u1006 = document.getElementById('u1006');
gv_vAlignTable['u1006'] = 'center';
var u1169 = document.getElementById('u1169');

var u1168 = document.getElementById('u1168');
gv_vAlignTable['u1168'] = 'center';
var u1003 = document.getElementById('u1003');

u1003.style.cursor = 'pointer';
if (bIE) u1003.attachEvent("onclick", Clicku1003);
else u1003.addEventListener("click", Clicku1003, true);
function Clicku1003(e)
{

if (true) {

	SetPanelVisibilityu1072("");

	SetPanelVisibilityu1119("hidden");

}

}

var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'center';
var u1001 = document.getElementById('u1001');

var u1000 = document.getElementById('u1000');
gv_vAlignTable['u1000'] = 'center';
var u487 = document.getElementById('u487');
gv_vAlignTable['u487'] = 'center';
var u1009 = document.getElementById('u1009');

var u1008 = document.getElementById('u1008');
gv_vAlignTable['u1008'] = 'center';
var u669 = document.getElementById('u669');
gv_vAlignTable['u669'] = 'center';
var u611 = document.getElementById('u611');

var u1157 = document.getElementById('u1157');

var u1156 = document.getElementById('u1156');
gv_vAlignTable['u1156'] = 'center';
var u1155 = document.getElementById('u1155');

var u1154 = document.getElementById('u1154');
gv_vAlignTable['u1154'] = 'center';
var u1153 = document.getElementById('u1153');

var u1152 = document.getElementById('u1152');
gv_vAlignTable['u1152'] = 'center';
var u1151 = document.getElementById('u1151');

var u1150 = document.getElementById('u1150');
gv_vAlignTable['u1150'] = 'center';
var u400 = document.getElementById('u400');
gv_vAlignTable['u400'] = 'center';
var u1159 = document.getElementById('u1159');

var u1158 = document.getElementById('u1158');
gv_vAlignTable['u1158'] = 'center';
var u198 = document.getElementById('u198');

var u170 = document.getElementById('u170');

var u626 = document.getElementById('u626');

u626.style.cursor = 'pointer';
if (bIE) u626.attachEvent("onclick", Clicku626);
else u626.addEventListener("click", Clicku626, true);
function Clicku626(e)
{

if (true) {

	self.location.href="酒店点评.html" + GetQuerystring();

}

}
gv_vAlignTable['u626'] = 'top';
var u807 = document.getElementById('u807');
gv_vAlignTable['u807'] = 'center';
var u610 = document.getElementById('u610');
gv_vAlignTable['u610'] = 'center';
var u1147 = document.getElementById('u1147');

var u1146 = document.getElementById('u1146');
gv_vAlignTable['u1146'] = 'center';
var u1145 = document.getElementById('u1145');

var u1144 = document.getElementById('u1144');
gv_vAlignTable['u1144'] = 'center';
var u1143 = document.getElementById('u1143');

var u1142 = document.getElementById('u1142');
gv_vAlignTable['u1142'] = 'center';
var u1141 = document.getElementById('u1141');

var u1140 = document.getElementById('u1140');
gv_vAlignTable['u1140'] = 'center';
var u834 = document.getElementById('u834');
gv_vAlignTable['u834'] = 'center';
var u1149 = document.getElementById('u1149');

var u1148 = document.getElementById('u1148');
gv_vAlignTable['u1148'] = 'center';
var u625 = document.getElementById('u625');
gv_vAlignTable['u625'] = 'top';
var u806 = document.getElementById('u806');

var u1137 = document.getElementById('u1137');

var u1136 = document.getElementById('u1136');
gv_vAlignTable['u1136'] = 'center';
var u1135 = document.getElementById('u1135');

var u1134 = document.getElementById('u1134');
gv_vAlignTable['u1134'] = 'center';
var u1133 = document.getElementById('u1133');

var u1132 = document.getElementById('u1132');
gv_vAlignTable['u1132'] = 'center';
var u1131 = document.getElementById('u1131');

var u1130 = document.getElementById('u1130');
gv_vAlignTable['u1130'] = 'center';
var u609 = document.getElementById('u609');

var u1139 = document.getElementById('u1139');

var u1138 = document.getElementById('u1138');
gv_vAlignTable['u1138'] = 'center';
var u941 = document.getElementById('u941');

u941.style.cursor = 'pointer';
if (bIE) u941.attachEvent("onclick", Clicku941);
else u941.addEventListener("click", Clicku941, true);
function Clicku941(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}
gv_vAlignTable['u941'] = 'top';
var u91 = document.getElementById('u91');

u91.style.cursor = 'pointer';
if (bIE) u91.attachEvent("onclick", Clicku91);
else u91.addEventListener("click", Clicku91, true);
function Clicku91(e)
{

if (true) {

	SetPanelVisibilityu219("");

}

}

var u624 = document.getElementById('u624');
gv_vAlignTable['u624'] = 'top';
var u805 = document.getElementById('u805');
gv_vAlignTable['u805'] = 'center';
var u413 = document.getElementById('u413');

var u1127 = document.getElementById('u1127');

var u1126 = document.getElementById('u1126');
gv_vAlignTable['u1126'] = 'center';
var u1125 = document.getElementById('u1125');

var u1124 = document.getElementById('u1124');

var u1123 = document.getElementById('u1123');
gv_vAlignTable['u1123'] = 'center';
var u1122 = document.getElementById('u1122');

u1122.style.cursor = 'pointer';
if (bIE) u1122.attachEvent("onclick", Clicku1122);
else u1122.addEventListener("click", Clicku1122, true);
function Clicku1122(e)
{

if (true) {

	SetPanelVisibilityu1119("hidden");

}

}

var u1121 = document.getElementById('u1121');
gv_vAlignTable['u1121'] = 'center';
var u1120 = document.getElementById('u1120');

var u608 = document.getElementById('u608');
gv_vAlignTable['u608'] = 'center';
var u1695 = document.getElementById('u1695');
gv_vAlignTable['u1695'] = 'top';
var u1129 = document.getElementById('u1129');

var u1128 = document.getElementById('u1128');
gv_vAlignTable['u1128'] = 'center';
var u940 = document.getElementById('u940');
gv_vAlignTable['u940'] = 'top';
var u623 = document.getElementById('u623');
gv_vAlignTable['u623'] = 'top';
var u1699 = document.getElementById('u1699');
gv_vAlignTable['u1699'] = 'center';
var u1277 = document.getElementById('u1277');

u1277.style.cursor = 'pointer';
if (bIE) u1277.attachEvent("onclick", Clicku1277);
else u1277.addEventListener("click", Clicku1277, true);
function Clicku1277(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u1276 = document.getElementById('u1276');
gv_vAlignTable['u1276'] = 'center';
var u1275 = document.getElementById('u1275');

u1275.style.cursor = 'pointer';
if (bIE) u1275.attachEvent("onclick", Clicku1275);
else u1275.addEventListener("click", Clicku1275, true);
function Clicku1275(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u1274 = document.getElementById('u1274');
gv_vAlignTable['u1274'] = 'center';
var u1273 = document.getElementById('u1273');

var u1272 = document.getElementById('u1272');
gv_vAlignTable['u1272'] = 'center';
var u1271 = document.getElementById('u1271');

var u1270 = document.getElementById('u1270');
gv_vAlignTable['u1270'] = 'top';
var u412 = document.getElementById('u412');
gv_vAlignTable['u412'] = 'center';
var u1117 = document.getElementById('u1117');

var u1116 = document.getElementById('u1116');
gv_vAlignTable['u1116'] = 'top';
var u1279 = document.getElementById('u1279');

u1279.style.cursor = 'pointer';
if (bIE) u1279.attachEvent("onclick", Clicku1279);
else u1279.addEventListener("click", Clicku1279, true);
function Clicku1279(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u1114 = document.getElementById('u1114');

var u1113 = document.getElementById('u1113');
gv_vAlignTable['u1113'] = 'top';
var u1112 = document.getElementById('u1112');
gv_vAlignTable['u1112'] = 'top';
var u1111 = document.getElementById('u1111');
gv_vAlignTable['u1111'] = 'center';
var u1110 = document.getElementById('u1110');

var u470 = document.getElementById('u470');

var u1119 = document.getElementById('u1119');

var u1118 = document.getElementById('u1118');
gv_vAlignTable['u1118'] = 'center';
var u622 = document.getElementById('u622');

var u1666 = document.getElementById('u1666');
gv_vAlignTable['u1666'] = 'top';
var u1267 = document.getElementById('u1267');

var u1266 = document.getElementById('u1266');
gv_vAlignTable['u1266'] = 'center';
var u1265 = document.getElementById('u1265');

var u1264 = document.getElementById('u1264');
gv_vAlignTable['u1264'] = 'top';
var u1263 = document.getElementById('u1263');

var u1262 = document.getElementById('u1262');

u1262.style.cursor = 'pointer';
if (bIE) u1262.attachEvent("onclick", Clicku1262);
else u1262.addEventListener("click", Clicku1262, true);
function Clicku1262(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u1261 = document.getElementById('u1261');
gv_vAlignTable['u1261'] = 'center';
var u1260 = document.getElementById('u1260');

var u411 = document.getElementById('u411');

var u1669 = document.getElementById('u1669');

var u1107 = document.getElementById('u1107');
gv_vAlignTable['u1107'] = 'center';
var u1106 = document.getElementById('u1106');

var u1269 = document.getElementById('u1269');
gv_vAlignTable['u1269'] = 'top';
var u1268 = document.getElementById('u1268');
gv_vAlignTable['u1268'] = 'center';
var u1103 = document.getElementById('u1103');
gv_vAlignTable['u1103'] = 'center';
var u1102 = document.getElementById('u1102');

var u1101 = document.getElementById('u1101');
gv_vAlignTable['u1101'] = 'center';
var u1100 = document.getElementById('u1100');

var u637 = document.getElementById('u637');

u637.style.cursor = 'pointer';
if (bIE) u637.attachEvent("onclick", Clicku637);
else u637.addEventListener("click", Clicku637, true);
function Clicku637(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}

var u200 = document.getElementById('u200');

var u442 = document.getElementById('u442');
gv_vAlignTable['u442'] = 'center';
var u1109 = document.getElementById('u1109');
gv_vAlignTable['u1109'] = 'top';
var u1108 = document.getElementById('u1108');

var u426 = document.getElementById('u426');
gv_vAlignTable['u426'] = 'center';
var u1679 = document.getElementById('u1679');

var u1257 = document.getElementById('u1257');
gv_vAlignTable['u1257'] = 'top';
var u1256 = document.getElementById('u1256');

var u1255 = document.getElementById('u1255');

var u1254 = document.getElementById('u1254');
gv_vAlignTable['u1254'] = 'top';
var u1253 = document.getElementById('u1253');
gv_vAlignTable['u1253'] = 'top';
var u1252 = document.getElementById('u1252');
gv_vAlignTable['u1252'] = 'center';
var u1251 = document.getElementById('u1251');

var u1250 = document.getElementById('u1250');

var u410 = document.getElementById('u410');
gv_vAlignTable['u410'] = 'center';
var u1259 = document.getElementById('u1259');

var u1258 = document.getElementById('u1258');

u1258.style.cursor = 'pointer';
if (bIE) u1258.attachEvent("onclick", Clicku1258);
else u1258.addEventListener("click", Clicku1258, true);
function Clicku1258(e)
{

if (true) {

	SetPanelVisibilityu1796("");

}

}

if (bIE) u1258.attachEvent("onfocus", Focusu1258);
else u1258.addEventListener("focus", Focusu1258, true);
function Focusu1258(e)
{

if (true) {

	SetPanelVisibilityu1796("");

}

}

if (bIE) u1258.attachEvent("onblur", LostFocusu1258);
else u1258.addEventListener("blur", LostFocusu1258, true);
function LostFocusu1258(e)
{

if (true) {

	SetPanelVisibilityu1796("hidden");

}

}

var u953 = document.getElementById('u953');
gv_vAlignTable['u953'] = 'center';
var u636 = document.getElementById('u636');
gv_vAlignTable['u636'] = 'center';
var u817 = document.getElementById('u817');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'center';
var u425 = document.getElementById('u425');

var u1247 = document.getElementById('u1247');
gv_vAlignTable['u1247'] = 'top';
var u1246 = document.getElementById('u1246');
gv_vAlignTable['u1246'] = 'top';
var u1245 = document.getElementById('u1245');
gv_vAlignTable['u1245'] = 'top';
var u1244 = document.getElementById('u1244');
gv_vAlignTable['u1244'] = 'top';
var u1243 = document.getElementById('u1243');

var u1242 = document.getElementById('u1242');
gv_vAlignTable['u1242'] = 'top';
var u1241 = document.getElementById('u1241');
gv_vAlignTable['u1241'] = 'center';
var u1240 = document.getElementById('u1240');

var u1249 = document.getElementById('u1249');
gv_vAlignTable['u1249'] = 'top';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u952 = document.getElementById('u952');

var u635 = document.getElementById('u635');

var u409 = document.getElementById('u409');

var u816 = document.getElementById('u816');
gv_vAlignTable['u816'] = 'top';
var u424 = document.getElementById('u424');
gv_vAlignTable['u424'] = 'center';
var u1237 = document.getElementById('u1237');
gv_vAlignTable['u1237'] = 'center';
var u1236 = document.getElementById('u1236');

var u1235 = document.getElementById('u1235');
gv_vAlignTable['u1235'] = 'center';
var u1234 = document.getElementById('u1234');

var u1233 = document.getElementById('u1233');
gv_vAlignTable['u1233'] = 'center';
var u1232 = document.getElementById('u1232');

var u1231 = document.getElementById('u1231');
gv_vAlignTable['u1231'] = 'center';
var u1230 = document.getElementById('u1230');

var u619 = document.getElementById('u619');

var u1239 = document.getElementById('u1239');
gv_vAlignTable['u1239'] = 'center';
var u1238 = document.getElementById('u1238');

var u951 = document.getElementById('u951');
gv_vAlignTable['u951'] = 'center';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'center';
var u634 = document.getElementById('u634');
gv_vAlignTable['u634'] = 'center';
var u408 = document.getElementById('u408');
gv_vAlignTable['u408'] = 'center';
var u815 = document.getElementById('u815');
gv_vAlignTable['u815'] = 'center';
var u929 = document.getElementById('u929');

var u423 = document.getElementById('u423');

u423.style.cursor = 'pointer';
if (bIE) u423.attachEvent("onclick", Clicku423);
else u423.addEventListener("click", Clicku423, true);
function Clicku423(e)
{

if (true) {

	SetPanelVisibilityu519("");

}

}

var u1227 = document.getElementById('u1227');
gv_vAlignTable['u1227'] = 'top';
var u1226 = document.getElementById('u1226');

u1226.style.cursor = 'pointer';
if (bIE) u1226.attachEvent("onclick", Clicku1226);
else u1226.addEventListener("click", Clicku1226, true);
function Clicku1226(e)
{

if (true) {

	self.location.href="酒店点评.html" + GetQuerystring();

}

}
gv_vAlignTable['u1226'] = 'top';
var u1225 = document.getElementById('u1225');
gv_vAlignTable['u1225'] = 'top';
var u1224 = document.getElementById('u1224');
gv_vAlignTable['u1224'] = 'top';
var u1223 = document.getElementById('u1223');
gv_vAlignTable['u1223'] = 'top';
var u1222 = document.getElementById('u1222');

var u1221 = document.getElementById('u1221');
gv_vAlignTable['u1221'] = 'center';
var u1220 = document.getElementById('u1220');

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'top';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u1229 = document.getElementById('u1229');

var u1228 = document.getElementById('u1228');
gv_vAlignTable['u1228'] = 'top';
var u950 = document.getElementById('u950');

var u633 = document.getElementById('u633');

var u1377 = document.getElementById('u1377');
gv_vAlignTable['u1377'] = 'center';
var u1376 = document.getElementById('u1376');

u1376.style.cursor = 'pointer';
if (bIE) u1376.attachEvent("onclick", Clicku1376);
else u1376.addEventListener("click", Clicku1376, true);
function Clicku1376(e)
{

if (true) {

	SetPanelVisibilityu1429("");

	SetPanelVisibilityu1476("hidden");

}

}

var u1375 = document.getElementById('u1375');
gv_vAlignTable['u1375'] = 'center';
var u1374 = document.getElementById('u1374');

var u1373 = document.getElementById('u1373');
gv_vAlignTable['u1373'] = 'center';
var u1372 = document.getElementById('u1372');

var u1371 = document.getElementById('u1371');
gv_vAlignTable['u1371'] = 'center';
var u1370 = document.getElementById('u1370');

var u422 = document.getElementById('u422');
gv_vAlignTable['u422'] = 'center';
var u1217 = document.getElementById('u1217');

var u1216 = document.getElementById('u1216');

var u1379 = document.getElementById('u1379');
gv_vAlignTable['u1379'] = 'center';
var u558 = document.getElementById('u558');
gv_vAlignTable['u558'] = 'center';
var u1213 = document.getElementById('u1213');
gv_vAlignTable['u1213'] = 'top';
var u1212 = document.getElementById('u1212');
gv_vAlignTable['u1212'] = 'center';
var u1211 = document.getElementById('u1211');

var u1210 = document.getElementById('u1210');
gv_vAlignTable['u1210'] = 'center';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'center';
var u1219 = document.getElementById('u1219');

var u1218 = document.getElementById('u1218');
gv_vAlignTable['u1218'] = 'center';
var u437 = document.getElementById('u437');

var u1367 = document.getElementById('u1367');
gv_vAlignTable['u1367'] = 'center';
var u1366 = document.getElementById('u1366');

var u1365 = document.getElementById('u1365');
gv_vAlignTable['u1365'] = 'center';
var u1364 = document.getElementById('u1364');

u1364.style.cursor = 'pointer';
if (bIE) u1364.attachEvent("onclick", Clicku1364);
else u1364.addEventListener("click", Clicku1364, true);
function Clicku1364(e)
{

if (true) {

	SetPanelVisibilityu1476("");

}

}

var u1363 = document.getElementById('u1363');
gv_vAlignTable['u1363'] = 'center';
var u1362 = document.getElementById('u1362');

var u1361 = document.getElementById('u1361');
gv_vAlignTable['u1361'] = 'center';
var u949 = document.getElementById('u949');
gv_vAlignTable['u949'] = 'center';
var u421 = document.getElementById('u421');

var u1207 = document.getElementById('u1207');

var u1206 = document.getElementById('u1206');
gv_vAlignTable['u1206'] = 'center';
var u1205 = document.getElementById('u1205');

var u1368 = document.getElementById('u1368');

var u1203 = document.getElementById('u1203');

var u1202 = document.getElementById('u1202');
gv_vAlignTable['u1202'] = 'center';
var u964 = document.getElementById('u964');

var u1200 = document.getElementById('u1200');
gv_vAlignTable['u1200'] = 'center';
var u647 = document.getElementById('u647');
gv_vAlignTable['u647'] = 'center';
var u210 = document.getElementById('u210');

var u1554 = document.getElementById('u1554');

var u1209 = document.getElementById('u1209');

var u1208 = document.getElementById('u1208');
gv_vAlignTable['u1208'] = 'center';
var u436 = document.getElementById('u436');
gv_vAlignTable['u436'] = 'center';
var u1357 = document.getElementById('u1357');
gv_vAlignTable['u1357'] = 'center';
var u1356 = document.getElementById('u1356');

var u1355 = document.getElementById('u1355');
gv_vAlignTable['u1355'] = 'center';
var u1354 = document.getElementById('u1354');

var u33 = document.getElementById('u33');

var u991 = document.getElementById('u991');

u991.style.cursor = 'pointer';
if (bIE) u991.attachEvent("onclick", Clicku991);
else u991.addEventListener("click", Clicku991, true);
function Clicku991(e)
{

if (true) {

	SetPanelVisibilityu1119("");

}

}

var u1351 = document.getElementById('u1351');
gv_vAlignTable['u1351'] = 'center';
var u948 = document.getElementById('u948');

var u420 = document.getElementById('u420');
gv_vAlignTable['u420'] = 'center';
var u1359 = document.getElementById('u1359');
gv_vAlignTable['u1359'] = 'center';
var u1358 = document.getElementById('u1358');

var u963 = document.getElementById('u963');
gv_vAlignTable['u963'] = 'top';
var u646 = document.getElementById('u646');

var u827 = document.getElementById('u827');

var u54 = document.getElementById('u54');

var u435 = document.getElementById('u435');

var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'top';
var u1347 = document.getElementById('u1347');
gv_vAlignTable['u1347'] = 'center';
var u1346 = document.getElementById('u1346');

var u1345 = document.getElementById('u1345');
gv_vAlignTable['u1345'] = 'center';
var u1344 = document.getElementById('u1344');

u1344.style.cursor = 'pointer';
if (bIE) u1344.attachEvent("onclick", Clicku1344);
else u1344.addEventListener("click", Clicku1344, true);
function Clicku1344(e)
{

if (true) {

	SetPanelVisibilityu1429("");

	SetPanelVisibilityu1476("hidden");

}

}

var u1343 = document.getElementById('u1343');
gv_vAlignTable['u1343'] = 'center';
var u1342 = document.getElementById('u1342');

var u1341 = document.getElementById('u1341');
gv_vAlignTable['u1341'] = 'center';
var u1340 = document.getElementById('u1340');

var u224 = document.getElementById('u224');

var u1349 = document.getElementById('u1349');
gv_vAlignTable['u1349'] = 'center';
var u1348 = document.getElementById('u1348');

u1348.style.cursor = 'pointer';
if (bIE) u1348.attachEvent("onclick", Clicku1348);
else u1348.addEventListener("click", Clicku1348, true);
function Clicku1348(e)
{

if (true) {

	SetPanelVisibilityu1476("");

}

}

var u962 = document.getElementById('u962');
gv_vAlignTable['u962'] = 'top';
var u645 = document.getElementById('u645');
gv_vAlignTable['u645'] = 'center';
var u419 = document.getElementById('u419');

u419.style.cursor = 'pointer';
if (bIE) u419.attachEvent("onclick", Clicku419);
else u419.addEventListener("click", Clicku419, true);
function Clicku419(e)
{

if (true) {

	SetPanelVisibilityu472("");

	SetPanelVisibilityu519("hidden");

}

}

var u387 = document.getElementById('u387');

u387.style.cursor = 'pointer';
if (bIE) u387.attachEvent("onclick", Clicku387);
else u387.addEventListener("click", Clicku387, true);
function Clicku387(e)
{

if (true) {

	SetPanelVisibilityu472("");

	SetPanelVisibilityu519("hidden");

}

}

var u1105 = document.getElementById('u1105');
gv_vAlignTable['u1105'] = 'center';
var u1104 = document.getElementById('u1104');

var u434 = document.getElementById('u434');
gv_vAlignTable['u434'] = 'center';
var u208 = document.getElementById('u208');

var u1337 = document.getElementById('u1337');
gv_vAlignTable['u1337'] = 'center';
var u1336 = document.getElementById('u1336');

var u1335 = document.getElementById('u1335');
gv_vAlignTable['u1335'] = 'center';
var u1334 = document.getElementById('u1334');

var u1333 = document.getElementById('u1333');
gv_vAlignTable['u1333'] = 'center';
var u1332 = document.getElementById('u1332');

var u1331 = document.getElementById('u1331');
gv_vAlignTable['u1331'] = 'center';
var u1330 = document.getElementById('u1330');

var u302 = document.getElementById('u302');
gv_vAlignTable['u302'] = 'center';
var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'center';
var u1012 = document.getElementById('u1012');
gv_vAlignTable['u1012'] = 'center';
var u1339 = document.getElementById('u1339');
gv_vAlignTable['u1339'] = 'center';
var u1338 = document.getElementById('u1338');

var u989 = document.getElementById('u989');

var u961 = document.getElementById('u961');
gv_vAlignTable['u961'] = 'center';
var u644 = document.getElementById('u644');

var u418 = document.getElementById('u418');
gv_vAlignTable['u418'] = 'center';
var u687 = document.getElementById('u687');

u687.style.cursor = 'pointer';
if (bIE) u687.attachEvent("onclick", Clicku687);
else u687.addEventListener("click", Clicku687, true);
function Clicku687(e)
{

if (true) {

	SetPanelVisibilityu772("");

	SetPanelVisibilityu819("hidden");

}

}

var u433 = document.getElementById('u433');

var u569 = document.getElementById('u569');

var u976 = document.getElementById('u976');
gv_vAlignTable['u976'] = 'center';
var u222 = document.getElementById('u222');

u222.style.cursor = 'pointer';
if (bIE) u222.attachEvent("onclick", Clicku222);
else u222.addEventListener("click", Clicku222, true);
function Clicku222(e)
{

if (true) {

	SetPanelVisibilityu219("hidden");

}

}

var u87 = document.getElementById('u87');

u87.style.cursor = 'pointer';
if (bIE) u87.attachEvent("onclick", Clicku87);
else u87.addEventListener("click", Clicku87, true);
function Clicku87(e)
{

if (true) {

	SetPanelVisibilityu172("");

	SetPanelVisibilityu219("hidden");

}

}

var u358 = document.getElementById('u358');

var u988 = document.getElementById('u988');
gv_vAlignTable['u988'] = 'center';
var u960 = document.getElementById('u960');

var u643 = document.getElementById('u643');
gv_vAlignTable['u643'] = 'center';
var u1477 = document.getElementById('u1477');

var u1476 = document.getElementById('u1476');

var u1475 = document.getElementById('u1475');
gv_vAlignTable['u1475'] = 'center';
var u779 = document.getElementById('u779');

var u1473 = document.getElementById('u1473');
gv_vAlignTable['u1473'] = 'top';
var u1472 = document.getElementById('u1472');
gv_vAlignTable['u1472'] = 'center';
var u1471 = document.getElementById('u1471');

var u1470 = document.getElementById('u1470');
gv_vAlignTable['u1470'] = 'top';
var u237 = document.getElementById('u237');

var u58 = document.getElementById('u58');

var u1478 = document.getElementById('u1478');
gv_vAlignTable['u1478'] = 'center';
var u531 = document.getElementById('u531');

var u975 = document.getElementById('u975');

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'center';
var u447 = document.getElementById('u447');

var u1319 = document.getElementById('u1319');
gv_vAlignTable['u1319'] = 'top';
var u1467 = document.getElementById('u1467');

var u1466 = document.getElementById('u1466');
gv_vAlignTable['u1466'] = 'top';
var u1465 = document.getElementById('u1465');

var u1464 = document.getElementById('u1464');
gv_vAlignTable['u1464'] = 'center';
var u1463 = document.getElementById('u1463');

var u1462 = document.getElementById('u1462');
gv_vAlignTable['u1462'] = 'center';
var u1461 = document.getElementById('u1461');

var u1460 = document.getElementById('u1460');
gv_vAlignTable['u1460'] = 'center';
var u1479 = document.getElementById('u1479');

u1479.style.cursor = 'pointer';
if (bIE) u1479.attachEvent("onclick", Clicku1479);
else u1479.addEventListener("click", Clicku1479, true);
function Clicku1479(e)
{

if (true) {

	SetPanelVisibilityu1476("hidden");

}

}

var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'center';
var u1469 = document.getElementById('u1469');
gv_vAlignTable['u1469'] = 'top';
var u1468 = document.getElementById('u1468');
gv_vAlignTable['u1468'] = 'center';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u974 = document.getElementById('u974');
gv_vAlignTable['u974'] = 'center';
var u657 = document.getElementById('u657');
gv_vAlignTable['u657'] = 'center';
var u220 = document.getElementById('u220');

var u1032 = document.getElementById('u1032');
gv_vAlignTable['u1032'] = 'center';
var u446 = document.getElementById('u446');
gv_vAlignTable['u446'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u684 = document.getElementById('u684');
gv_vAlignTable['u684'] = 'center';
var u430 = document.getElementById('u430');
gv_vAlignTable['u430'] = 'center';
var u508 = document.getElementById('u508');

var u973 = document.getElementById('u973');

var u656 = document.getElementById('u656');

var u939 = document.getElementById('u939');

u939.style.cursor = 'pointer';
if (bIE) u939.attachEvent("onclick", Clicku939);
else u939.addEventListener("click", Clicku939, true);
function Clicku939(e)
{

if (true) {

	self.location.href="图库_视频.html" + GetQuerystring();

}

}
gv_vAlignTable['u939'] = 'top';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u445 = document.getElementById('u445');

var u219 = document.getElementById('u219');

var u683 = document.getElementById('u683');

var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'center';
var u1504 = document.getElementById('u1504');

var u732 = document.getElementById('u732');
gv_vAlignTable['u732'] = 'center';
var u672 = document.getElementById('u672');
gv_vAlignTable['u672'] = 'center';
var u972 = document.getElementById('u972');
gv_vAlignTable['u972'] = 'center';
var u655 = document.getElementById('u655');
gv_vAlignTable['u655'] = 'center';
var u342 = document.getElementById('u342');

var u444 = document.getElementById('u444');
gv_vAlignTable['u444'] = 'center';
var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'center';
var u682 = document.getElementById('u682');
gv_vAlignTable['u682'] = 'center';
var u233 = document.getElementById('u233');

var u1728 = document.getElementById('u1728');
gv_vAlignTable['u1728'] = 'center';
var u369 = document.getElementById('u369');
gv_vAlignTable['u369'] = 'center';
var u999 = document.getElementById('u999');

var u971 = document.getElementById('u971');

var u158 = document.getElementById('u158');

var u314 = document.getElementById('u314');
gv_vAlignTable['u314'] = 'top';
var u697 = document.getElementById('u697');

var u443 = document.getElementById('u443');

var u367 = document.getElementById('u367');

u367.style.cursor = 'pointer';
if (bIE) u367.attachEvent("onclick", Clicku367);
else u367.addEventListener("click", Clicku367, true);
function Clicku367(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}
gv_vAlignTable['u367'] = 'top';
var u579 = document.getElementById('u579');

var u486 = document.getElementById('u486');

var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'center';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u368 = document.getElementById('u368');

var u998 = document.getElementById('u998');
gv_vAlignTable['u998'] = 'center';
var u970 = document.getElementById('u970');

var u571 = document.getElementById('u571');

var u1717 = document.getElementById('u1717');
gv_vAlignTable['u1717'] = 'center';
var u1716 = document.getElementById('u1716');

var u696 = document.getElementById('u696');
gv_vAlignTable['u696'] = 'center';
var u247 = document.getElementById('u247');

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u578 = document.getElementById('u578');
gv_vAlignTable['u578'] = 'center';
var u1719 = document.getElementById('u1719');
gv_vAlignTable['u1719'] = 'top';
var u759 = document.getElementById('u759');
gv_vAlignTable['u759'] = 'center';
var u231 = document.getElementById('u231');

var u1369 = document.getElementById('u1369');
gv_vAlignTable['u1369'] = 'center';
var u457 = document.getElementById('u457');
gv_vAlignTable['u457'] = 'top';
var u695 = document.getElementById('u695');

var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'center';
var u372 = document.getElementById('u372');
gv_vAlignTable['u372'] = 'center';
var u14 = document.getElementById('u14');

var u484 = document.getElementById('u484');

var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'center';
var u802 = document.getElementById('u802');

var u456 = document.getElementById('u456');
gv_vAlignTable['u456'] = 'center';
var u35 = document.getElementById('u35');

var u519 = document.getElementById('u519');

var u694 = document.getElementById('u694');
gv_vAlignTable['u694'] = 'center';
var u979 = document.getElementById('u979');

var u1195 = document.getElementById('u1195');

var u1191 = document.getElementById('u1191');

var u483 = document.getElementById('u483');
gv_vAlignTable['u483'] = 'center';
var u307 = document.getElementById('u307');

var u398 = document.getElementById('u398');
gv_vAlignTable['u398'] = 'center';
var u455 = document.getElementById('u455');

u455.style.cursor = 'pointer';
if (bIE) u455.attachEvent("onclick", Clicku455);
else u455.addEventListener("click", Clicku455, true);
function Clicku455(e)
{

if (true) {

	SetPanelVisibilityu464("");

}

}

var u693 = document.getElementById('u693');

var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'center';
var u287 = document.getElementById('u287');

var u1815 = document.getElementById('u1815');
gv_vAlignTable['u1815'] = 'top';
var u568 = document.getElementById('u568');
gv_vAlignTable['u568'] = 'center';
var u169 = document.getElementById('u169');

u169.style.cursor = 'pointer';
if (bIE) u169.attachEvent("onclick", Clicku169);
else u169.addEventListener("click", Clicku169, true);
function Clicku169(e)
{

if (true) {

	self.location.href="酒店客房订单_1.html" + GetQuerystring();

}

}

var u402 = document.getElementById('u402');
gv_vAlignTable['u402'] = 'center';
var u692 = document.getElementById('u692');
gv_vAlignTable['u692'] = 'center';
var u243 = document.getElementById('u243');

var u379 = document.getElementById('u379');

var u587 = document.getElementById('u587');

var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'center';
var u18 = document.getElementById('u18');

var u168 = document.getElementById('u168');

var u620 = document.getElementById('u620');

var u1387 = document.getElementById('u1387');
gv_vAlignTable['u1387'] = 'center';
var u496 = document.getElementById('u496');

var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'center';
var u6 = document.getElementById('u6');

var u39 = document.getElementById('u39');

u39.style.cursor = 'pointer';
if (bIE) u39.attachEvent("onclick", Clicku39);
else u39.addEventListener("click", Clicku39, true);
function Clicku39(e)
{

if (true) {

	self.location.href="图库_视频.html" + GetQuerystring();

}

}
gv_vAlignTable['u39'] = 'top';
var u378 = document.getElementById('u378');
gv_vAlignTable['u378'] = 'center';
var u285 = document.getElementById('u285');

var u257 = document.getElementById('u257');

var u1060 = document.getElementById('u1060');

u1060.style.cursor = 'pointer';
if (bIE) u1060.attachEvent("onclick", Clicku1060);
else u1060.addEventListener("click", Clicku1060, true);
function Clicku1060(e)
{

if (true) {

	SetPanelVisibilityu1064("");

}

}

var u495 = document.getElementById('u495');
gv_vAlignTable['u495'] = 'center';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'center';
var u769 = document.getElementById('u769');

u769.style.cursor = 'pointer';
if (bIE) u769.attachEvent("onclick", Clicku769);
else u769.addEventListener("click", Clicku769, true);
function Clicku769(e)
{

if (true) {

	self.location.href="酒店客房订单_1.html" + GetQuerystring();

}

}

var u842 = document.getElementById('u842');
gv_vAlignTable['u842'] = 'center';
var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'center';
var u375 = document.getElementById('u375');

var u225 = document.getElementById('u225');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u494 = document.getElementById('u494');

var u559 = document.getElementById('u559');

var u1597 = document.getElementById('u1597');
gv_vAlignTable['u1597'] = 'top';
var u1485 = document.getElementById('u1485');
gv_vAlignTable['u1485'] = 'center';
var u1595 = document.getElementById('u1595');
gv_vAlignTable['u1595'] = 'top';
var u1594 = document.getElementById('u1594');
gv_vAlignTable['u1594'] = 'top';
var u1550 = document.getElementById('u1550');

var u814 = document.getElementById('u814');

var u255 = document.getElementById('u255');

var u493 = document.getElementById('u493');
gv_vAlignTable['u493'] = 'center';
var u431 = document.getElementById('u431');

var u1097 = document.getElementById('u1097');
gv_vAlignTable['u1097'] = 'center';
var u1096 = document.getElementById('u1096');

var u1095 = document.getElementById('u1095');
gv_vAlignTable['u1095'] = 'center';
var u527 = document.getElementById('u527');

var u1093 = document.getElementById('u1093');
gv_vAlignTable['u1093'] = 'center';
var u1092 = document.getElementById('u1092');

var u1091 = document.getElementById('u1091');
gv_vAlignTable['u1091'] = 'center';
var u1090 = document.getElementById('u1090');

var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'center';
var u1099 = document.getElementById('u1099');
gv_vAlignTable['u1099'] = 'center';
var u1098 = document.getElementById('u1098');

var u1278 = document.getElementById('u1278');
gv_vAlignTable['u1278'] = 'center';
var u297 = document.getElementById('u297');

var u1087 = document.getElementById('u1087');
gv_vAlignTable['u1087'] = 'center';
var u1086 = document.getElementById('u1086');

var u1085 = document.getElementById('u1085');
gv_vAlignTable['u1085'] = 'center';
var u1084 = document.getElementById('u1084');

var u1083 = document.getElementById('u1083');
gv_vAlignTable['u1083'] = 'center';
var u179 = document.getElementById('u179');

var u1081 = document.getElementById('u1081');

var u1080 = document.getElementById('u1080');
gv_vAlignTable['u1080'] = 'center';
var u281 = document.getElementById('u281');

var u800 = document.getElementById('u800');

var u1089 = document.getElementById('u1089');
gv_vAlignTable['u1089'] = 'center';
var u1088 = document.getElementById('u1088');

var u576 = document.getElementById('u576');
gv_vAlignTable['u576'] = 'center';
var u660 = document.getElementById('u660');

var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'center';
var u317 = document.getElementById('u317');

var u4 = document.getElementById('u4');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'center';
var u1749 = document.getElementById('u1749');
gv_vAlignTable['u1749'] = 'center';
var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'center';
var u1360 = document.getElementById('u1360');

u1360.style.cursor = 'pointer';
if (bIE) u1360.attachEvent("onclick", Clicku1360);
else u1360.addEventListener("click", Clicku1360, true);
function Clicku1360(e)
{

if (true) {

	SetPanelVisibilityu1429("");

	SetPanelVisibilityu1476("hidden");

}

}

var u632 = document.getElementById('u632');

u632.style.cursor = 'pointer';
if (bIE) u632.attachEvent("onclick", Clicku632);
else u632.addEventListener("click", Clicku632, true);
function Clicku632(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}
gv_vAlignTable['u632'] = 'top';
var u295 = document.getElementById('u295');

var u707 = document.getElementById('u707');

u707.style.cursor = 'pointer';
if (bIE) u707.attachEvent("onclick", Clicku707);
else u707.addEventListener("click", Clicku707, true);
function Clicku707(e)
{

if (true) {

	SetPanelVisibilityu819("");

}

}

var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'center';
var u813 = document.getElementById('u813');
gv_vAlignTable['u813'] = 'top';
var u706 = document.getElementById('u706');
gv_vAlignTable['u706'] = 'center';
var u60 = document.getElementById('u60');

var u812 = document.getElementById('u812');
gv_vAlignTable['u812'] = 'top';
var u471 = document.getElementById('u471');
gv_vAlignTable['u471'] = 'center';
var u1197 = document.getElementById('u1197');

var u1196 = document.getElementById('u1196');
gv_vAlignTable['u1196'] = 'center';
var u705 = document.getElementById('u705');

var u1194 = document.getElementById('u1194');
gv_vAlignTable['u1194'] = 'center';
var u1193 = document.getElementById('u1193');

var u1192 = document.getElementById('u1192');
gv_vAlignTable['u1192'] = 'center';
var u1678 = document.getElementById('u1678');
gv_vAlignTable['u1678'] = 'top';
var u1190 = document.getElementById('u1190');
gv_vAlignTable['u1190'] = 'center';
var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'center';
var u811 = document.getElementById('u811');
gv_vAlignTable['u811'] = 'center';
var u1199 = document.getElementById('u1199');

var u1198 = document.getElementById('u1198');
gv_vAlignTable['u1198'] = 'center';
var u1187 = document.getElementById('u1187');

var u1186 = document.getElementById('u1186');
gv_vAlignTable['u1186'] = 'center';
var u704 = document.getElementById('u704');
gv_vAlignTable['u704'] = 'center';
var u1184 = document.getElementById('u1184');
gv_vAlignTable['u1184'] = 'center';
var u1183 = document.getElementById('u1183');

var u1182 = document.getElementById('u1182');
gv_vAlignTable['u1182'] = 'center';
var u1181 = document.getElementById('u1181');

var u1180 = document.getElementById('u1180');
gv_vAlignTable['u1180'] = 'center';
var u235 = document.getElementById('u235');

var u810 = document.getElementById('u810');

var u1189 = document.getElementById('u1189');

var u2 = document.getElementById('u2');

var u629 = document.getElementById('u629');

var u670 = document.getElementById('u670');

var u93 = document.getElementById('u93');

var u825 = document.getElementById('u825');

var u303 = document.getElementById('u303');

var u703 = document.getElementById('u703');

u703.style.cursor = 'pointer';
if (bIE) u703.attachEvent("onclick", Clicku703);
else u703.addEventListener("click", Clicku703, true);
function Clicku703(e)
{

if (true) {

	SetPanelVisibilityu772("");

	SetPanelVisibilityu819("hidden");

}

}

var u1327 = document.getElementById('u1327');

var u1326 = document.getElementById('u1326');
gv_vAlignTable['u1326'] = 'center';
var u1325 = document.getElementById('u1325');

var u1324 = document.getElementById('u1324');

u1324.style.cursor = 'pointer';
if (bIE) u1324.attachEvent("onclick", Clicku1324);
else u1324.addEventListener("click", Clicku1324, true);
function Clicku1324(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}
gv_vAlignTable['u1324'] = 'top';
var u1323 = document.getElementById('u1323');
gv_vAlignTable['u1323'] = 'center';
var u1322 = document.getElementById('u1322');

var u1321 = document.getElementById('u1321');

var u1320 = document.getElementById('u1320');
gv_vAlignTable['u1320'] = 'top';
var u628 = document.getElementById('u628');
gv_vAlignTable['u628'] = 'top';
var u809 = document.getElementById('u809');
gv_vAlignTable['u809'] = 'top';
var u1329 = document.getElementById('u1329');
gv_vAlignTable['u1329'] = 'center';
var u1328 = document.getElementById('u1328');

var u824 = document.getElementById('u824');

var u507 = document.getElementById('u507');
gv_vAlignTable['u507'] = 'center';
var u1317 = document.getElementById('u1317');

var u1316 = document.getElementById('u1316');
gv_vAlignTable['u1316'] = 'center';
var u1315 = document.getElementById('u1315');

var u1314 = document.getElementById('u1314');
gv_vAlignTable['u1314'] = 'center';
var u1313 = document.getElementById('u1313');

var u1312 = document.getElementById('u1312');
gv_vAlignTable['u1312'] = 'center';
var u1311 = document.getElementById('u1311');

var u1310 = document.getElementById('u1310');
gv_vAlignTable['u1310'] = 'center';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u808 = document.getElementById('u808');

var u717 = document.getElementById('u717');

var u1318 = document.getElementById('u1318');
gv_vAlignTable['u1318'] = 'center';
var u823 = document.getElementById('u823');
gv_vAlignTable['u823'] = 'center';
var u506 = document.getElementById('u506');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u1307 = document.getElementById('u1307');

var u1306 = document.getElementById('u1306');
gv_vAlignTable['u1306'] = 'center';
var u1305 = document.getElementById('u1305');

var u1304 = document.getElementById('u1304');
gv_vAlignTable['u1304'] = 'center';
var u1303 = document.getElementById('u1303');

var u1302 = document.getElementById('u1302');
gv_vAlignTable['u1302'] = 'center';
var u1301 = document.getElementById('u1301');

var u1300 = document.getElementById('u1300');
gv_vAlignTable['u1300'] = 'center';
var u716 = document.getElementById('u716');
gv_vAlignTable['u716'] = 'center';
var u1308 = document.getElementById('u1308');
gv_vAlignTable['u1308'] = 'center';
var u641 = document.getElementById('u641');

u641.style.cursor = 'pointer';
if (bIE) u641.attachEvent("onclick", Clicku641);
else u641.addEventListener("click", Clicku641, true);
function Clicku641(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}
gv_vAlignTable['u641'] = 'top';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u1457 = document.getElementById('u1457');

var u822 = document.getElementById('u822');

u822.style.cursor = 'pointer';
if (bIE) u822.attachEvent("onclick", Clicku822);
else u822.addEventListener("click", Clicku822, true);
function Clicku822(e)
{

if (true) {

	SetPanelVisibilityu819("hidden");

}

}

var u1455 = document.getElementById('u1455');

var u505 = document.getElementById('u505');
gv_vAlignTable['u505'] = 'center';
var u1453 = document.getElementById('u1453');

var u1452 = document.getElementById('u1452');
gv_vAlignTable['u1452'] = 'center';
var u1451 = document.getElementById('u1451');

var u1450 = document.getElementById('u1450');
gv_vAlignTable['u1450'] = 'center';
var u1459 = document.getElementById('u1459');

var u1458 = document.getElementById('u1458');
gv_vAlignTable['u1458'] = 'center';
var u1297 = document.getElementById('u1297');
gv_vAlignTable['u1297'] = 'top';
var u1296 = document.getElementById('u1296');

u1296.style.cursor = 'pointer';
if (bIE) u1296.attachEvent("onclick", Clicku1296);
else u1296.addEventListener("click", Clicku1296, true);
function Clicku1296(e)
{

if (true) {

	self.location.href="图库_视频.html" + GetQuerystring();

}

}
gv_vAlignTable['u1296'] = 'top';
var u715 = document.getElementById('u715');

var u1294 = document.getElementById('u1294');

u1294.style.cursor = 'pointer';
if (bIE) u1294.attachEvent("onclick", Clicku1294);
else u1294.addEventListener("click", Clicku1294, true);
function Clicku1294(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}

var u1293 = document.getElementById('u1293');
gv_vAlignTable['u1293'] = 'center';
var u1292 = document.getElementById('u1292');

var u1291 = document.getElementById('u1291');
gv_vAlignTable['u1291'] = 'center';
var u1290 = document.getElementById('u1290');

var u640 = document.getElementById('u640');
gv_vAlignTable['u640'] = 'top';
var u1447 = document.getElementById('u1447');

var u1446 = document.getElementById('u1446');
gv_vAlignTable['u1446'] = 'center';
var u1445 = document.getElementById('u1445');

var u1299 = document.getElementById('u1299');

var u1298 = document.getElementById('u1298');

u1298.style.cursor = 'pointer';
if (bIE) u1298.attachEvent("onclick", Clicku1298);
else u1298.addEventListener("click", Clicku1298, true);
function Clicku1298(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}
gv_vAlignTable['u1298'] = 'top';
var u1442 = document.getElementById('u1442');
gv_vAlignTable['u1442'] = 'center';
var u1441 = document.getElementById('u1441');

var u1440 = document.getElementById('u1440');
gv_vAlignTable['u1440'] = 'center';
var u1449 = document.getElementById('u1449');

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u0 = document.getElementById('u0');

var u429 = document.getElementById('u429');

var u928 = document.getElementById('u928');
gv_vAlignTable['u928'] = 'top';
var u836 = document.getElementById('u836');
gv_vAlignTable['u836'] = 'center';
var u1286 = document.getElementById('u1286');
gv_vAlignTable['u1286'] = 'center';
var u714 = document.getElementById('u714');
gv_vAlignTable['u714'] = 'center';
var u1284 = document.getElementById('u1284');
gv_vAlignTable['u1284'] = 'center';
var u1283 = document.getElementById('u1283');

u1283.style.cursor = 'pointer';
if (bIE) u1283.attachEvent("onclick", Clicku1283);
else u1283.addEventListener("click", Clicku1283, true);
function Clicku1283(e)
{

if (true) {

	self.location.href="地图查询.html" + GetQuerystring();

}

}

var u1282 = document.getElementById('u1282');
gv_vAlignTable['u1282'] = 'center';
var u1281 = document.getElementById('u1281');

u1281.style.cursor = 'pointer';
if (bIE) u1281.attachEvent("onclick", Clicku1281);
else u1281.addEventListener("click", Clicku1281, true);
function Clicku1281(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u1280 = document.getElementById('u1280');
gv_vAlignTable['u1280'] = 'center';
var u1437 = document.getElementById('u1437');
gv_vAlignTable['u1437'] = 'center';
var u820 = document.getElementById('u820');

var u1435 = document.getElementById('u1435');
gv_vAlignTable['u1435'] = 'center';
var u503 = document.getElementById('u503');
gv_vAlignTable['u503'] = 'center';
var u1433 = document.getElementById('u1433');

var u1432 = document.getElementById('u1432');
gv_vAlignTable['u1432'] = 'top';
var u1431 = document.getElementById('u1431');
gv_vAlignTable['u1431'] = 'center';
var u1430 = document.getElementById('u1430');

var u488 = document.getElementById('u488');

var u639 = document.getElementById('u639');

u639.style.cursor = 'pointer';
if (bIE) u639.attachEvent("onclick", Clicku639);
else u639.addEventListener("click", Clicku639, true);
function Clicku639(e)
{

if (true) {

	self.location.href="图库_视频.html" + GetQuerystring();

}

}
gv_vAlignTable['u639'] = 'top';
var u721 = document.getElementById('u721');

var u1439 = document.getElementById('u1439');

var u1438 = document.getElementById('u1438');

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'center';
var u654 = document.getElementById('u654');

var u428 = document.getElementById('u428');
gv_vAlignTable['u428'] = 'center';
var u835 = document.getElementById('u835');

var u680 = document.getElementById('u680');
gv_vAlignTable['u680'] = 'center';
var u1427 = document.getElementById('u1427');

var u1426 = document.getElementById('u1426');

u1426.style.cursor = 'pointer';
if (bIE) u1426.attachEvent("onclick", Clicku1426);
else u1426.addEventListener("click", Clicku1426, true);
function Clicku1426(e)
{

if (true) {

	self.location.href="酒店客房订单_1.html" + GetQuerystring();

}

}

var u1425 = document.getElementById('u1425');

var u1424 = document.getElementById('u1424');
gv_vAlignTable['u1424'] = 'top';
var u1423 = document.getElementById('u1423');
gv_vAlignTable['u1423'] = 'center';
var u1422 = document.getElementById('u1422');

var u1421 = document.getElementById('u1421');

var u1420 = document.getElementById('u1420');
gv_vAlignTable['u1420'] = 'center';
var u1115 = document.getElementById('u1115');
gv_vAlignTable['u1115'] = 'center';
var u819 = document.getElementById('u819');

var u1429 = document.getElementById('u1429');

var u1428 = document.getElementById('u1428');
gv_vAlignTable['u1428'] = 'center';
var u653 = document.getElementById('u653');
gv_vAlignTable['u653'] = 'center';
var u1577 = document.getElementById('u1577');

var u1576 = document.getElementById('u1576');

var u1575 = document.getElementById('u1575');
gv_vAlignTable['u1575'] = 'center';
var u517 = document.getElementById('u517');

var u1573 = document.getElementById('u1573');

var u1572 = document.getElementById('u1572');
gv_vAlignTable['u1572'] = 'top';
var u1571 = document.getElementById('u1571');
gv_vAlignTable['u1571'] = 'top';
var u1570 = document.getElementById('u1570');
gv_vAlignTable['u1570'] = 'top';
var u1417 = document.getElementById('u1417');

u1417.style.cursor = 'pointer';
if (bIE) u1417.attachEvent("onclick", Clicku1417);
else u1417.addEventListener("click", Clicku1417, true);
function Clicku1417(e)
{

if (true) {

	SetPanelVisibilityu1421("");

}

}

var u1416 = document.getElementById('u1416');
gv_vAlignTable['u1416'] = 'center';
var u1579 = document.getElementById('u1579');

var u1578 = document.getElementById('u1578');
gv_vAlignTable['u1578'] = 'center';
var u1413 = document.getElementById('u1413');
gv_vAlignTable['u1413'] = 'center';
var u1412 = document.getElementById('u1412');

u1412.style.cursor = 'pointer';
if (bIE) u1412.attachEvent("onclick", Clicku1412);
else u1412.addEventListener("click", Clicku1412, true);
function Clicku1412(e)
{

if (true) {

	SetPanelVisibilityu1421("");

}

}

var u1411 = document.getElementById('u1411');
gv_vAlignTable['u1411'] = 'center';
var u1410 = document.getElementById('u1410');

u1410.style.cursor = 'pointer';
if (bIE) u1410.attachEvent("onclick", Clicku1410);
else u1410.addEventListener("click", Clicku1410, true);
function Clicku1410(e)
{

if (true) {

	SetPanelVisibilityu1421("");

}

}

var u20 = document.getElementById('u20');

var u476 = document.getElementById('u476');

var u818 = document.getElementById('u818');
gv_vAlignTable['u818'] = 'center';
var u727 = document.getElementById('u727');

var u1418 = document.getElementById('u1418');
gv_vAlignTable['u1418'] = 'center';
var u652 = document.getElementById('u652');

var u1567 = document.getElementById('u1567');
gv_vAlignTable['u1567'] = 'center';
var u833 = document.getElementById('u833');

var u1565 = document.getElementById('u1565');
gv_vAlignTable['u1565'] = 'center';
var u516 = document.getElementById('u516');
gv_vAlignTable['u516'] = 'top';
var u1563 = document.getElementById('u1563');
gv_vAlignTable['u1563'] = 'center';
var u1562 = document.getElementById('u1562');

var u1561 = document.getElementById('u1561');
gv_vAlignTable['u1561'] = 'center';
var u969 = document.getElementById('u969');
gv_vAlignTable['u969'] = 'center';
var u441 = document.getElementById('u441');

var u41 = document.getElementById('u41');

u41.style.cursor = 'pointer';
if (bIE) u41.attachEvent("onclick", Clicku41);
else u41.addEventListener("click", Clicku41, true);
function Clicku41(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}
gv_vAlignTable['u41'] = 'top';
var u1407 = document.getElementById('u1407');
gv_vAlignTable['u1407'] = 'center';
var u1406 = document.getElementById('u1406');

var u1569 = document.getElementById('u1569');
gv_vAlignTable['u1569'] = 'center';
var u1404 = document.getElementById('u1404');

var u1608 = document.getElementById('u1608');
gv_vAlignTable['u1608'] = 'top';
var u1402 = document.getElementById('u1402');

var u1401 = document.getElementById('u1401');
gv_vAlignTable['u1401'] = 'center';
var u1400 = document.getElementById('u1400');

var u667 = document.getElementById('u667');

u667.style.cursor = 'pointer';
if (bIE) u667.attachEvent("onclick", Clicku667);
else u667.addEventListener("click", Clicku667, true);
function Clicku667(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}
gv_vAlignTable['u667'] = 'top';
var u1409 = document.getElementById('u1409');
gv_vAlignTable['u1409'] = 'center';
var u1408 = document.getElementById('u1408');

u1408.style.cursor = 'pointer';
if (bIE) u1408.attachEvent("onclick", Clicku1408);
else u1408.addEventListener("click", Clicku1408, true);
function Clicku1408(e)
{

if (true) {

	SetPanelVisibilityu1421("");

}

}

var u651 = document.getElementById('u651');
gv_vAlignTable['u651'] = 'center';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u532 = document.getElementById('u532');
gv_vAlignTable['u532'] = 'center';
var u1557 = document.getElementById('u1557');
gv_vAlignTable['u1557'] = 'center';
var u1556 = document.getElementById('u1556');

var u1555 = document.getElementById('u1555');
gv_vAlignTable['u1555'] = 'center';
var u515 = document.getElementById('u515');
gv_vAlignTable['u515'] = 'center';
var u1553 = document.getElementById('u1553');
gv_vAlignTable['u1553'] = 'center';
var u1552 = document.getElementById('u1552');

var u1551 = document.getElementById('u1551');
gv_vAlignTable['u1551'] = 'center';
var u968 = document.getElementById('u968');

var u440 = document.getElementById('u440');
gv_vAlignTable['u440'] = 'center';
var u1559 = document.getElementById('u1559');
gv_vAlignTable['u1559'] = 'center';
var u1558 = document.getElementById('u1558');

var u666 = document.getElementById('u666');
gv_vAlignTable['u666'] = 'center';
var u847 = document.getElementById('u847');

var u1396 = document.getElementById('u1396');

u1396.style.cursor = 'pointer';
if (bIE) u1396.attachEvent("onclick", Clicku1396);
else u1396.addEventListener("click", Clicku1396, true);
function Clicku1396(e)
{

if (true) {

	SetPanelVisibilityu1476("");

}

}

var u1395 = document.getElementById('u1395');
gv_vAlignTable['u1395'] = 'center';
var u1394 = document.getElementById('u1394');

var u1393 = document.getElementById('u1393');
gv_vAlignTable['u1393'] = 'center';
var u1392 = document.getElementById('u1392');

var u1391 = document.getElementById('u1391');
gv_vAlignTable['u1391'] = 'center';
var u1390 = document.getElementById('u1390');

var u650 = document.getElementById('u650');

var u229 = document.getElementById('u229');

var u1547 = document.getElementById('u1547');
gv_vAlignTable['u1547'] = 'center';
var u831 = document.getElementById('u831');

var u1545 = document.getElementById('u1545');
gv_vAlignTable['u1545'] = 'center';
var u1399 = document.getElementById('u1399');
gv_vAlignTable['u1399'] = 'center';
var u1398 = document.getElementById('u1398');

var u1542 = document.getElementById('u1542');

var u1541 = document.getElementById('u1541');
gv_vAlignTable['u1541'] = 'center';
var u1540 = document.getElementById('u1540');

var u1042 = document.getElementById('u1042');
gv_vAlignTable['u1042'] = 'center';
var u1082 = document.getElementById('u1082');

var u1549 = document.getElementById('u1549');
gv_vAlignTable['u1549'] = 'center';
var u1548 = document.getElementById('u1548');

var u1772 = document.getElementById('u1772');
gv_vAlignTable['u1772'] = 'top';
var u665 = document.getElementById('u665');

var u439 = document.getElementById('u439');

u439.style.cursor = 'pointer';
if (bIE) u439.attachEvent("onclick", Clicku439);
else u439.addEventListener("click", Clicku439, true);
function Clicku439(e)
{

if (true) {

	SetPanelVisibilityu519("");

}

}

var u1817 = document.getElementById('u1817');
gv_vAlignTable['u1817'] = 'top';
var u1816 = document.getElementById('u1816');
gv_vAlignTable['u1816'] = 'top';
var u846 = document.getElementById('u846');
gv_vAlignTable['u846'] = 'center';
var u1386 = document.getElementById('u1386');

var u1385 = document.getElementById('u1385');
gv_vAlignTable['u1385'] = 'center';
var u1384 = document.getElementById('u1384');

var u1383 = document.getElementById('u1383');
gv_vAlignTable['u1383'] = 'center';
var u1382 = document.getElementById('u1382');

var u1381 = document.getElementById('u1381');
gv_vAlignTable['u1381'] = 'center';
var u1380 = document.getElementById('u1380');

u1380.style.cursor = 'pointer';
if (bIE) u1380.attachEvent("onclick", Clicku1380);
else u1380.addEventListener("click", Clicku1380, true);
function Clicku1380(e)
{

if (true) {

	SetPanelVisibilityu1476("");

}

}

var u1518 = document.getElementById('u1518');

var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'center';
var u1537 = document.getElementById('u1537');
gv_vAlignTable['u1537'] = 'center';
var u830 = document.getElementById('u830');
gv_vAlignTable['u830'] = 'center';
var u1535 = document.getElementById('u1535');
gv_vAlignTable['u1535'] = 'center';
var u1389 = document.getElementById('u1389');
gv_vAlignTable['u1389'] = 'center';
var u1388 = document.getElementById('u1388');

var u1532 = document.getElementById('u1532');

var u1531 = document.getElementById('u1531');
gv_vAlignTable['u1531'] = 'center';
var u1530 = document.getElementById('u1530');

var u649 = document.getElementById('u649');
gv_vAlignTable['u649'] = 'center';
var u1539 = document.getElementById('u1539');
gv_vAlignTable['u1539'] = 'center';
var u1538 = document.getElementById('u1538');

var u95 = document.getElementById('u95');

var u664 = document.getElementById('u664');

var u438 = document.getElementById('u438');
gv_vAlignTable['u438'] = 'center';
var u1807 = document.getElementById('u1807');
gv_vAlignTable['u1807'] = 'top';
var u1806 = document.getElementById('u1806');
gv_vAlignTable['u1806'] = 'top';
var u845 = document.getElementById('u845');

var u1804 = document.getElementById('u1804');
gv_vAlignTable['u1804'] = 'top';
var u1803 = document.getElementById('u1803');
gv_vAlignTable['u1803'] = 'top';
var u1802 = document.getElementById('u1802');
gv_vAlignTable['u1802'] = 'center';
var u1801 = document.getElementById('u1801');

u1801.style.cursor = 'pointer';
if (bIE) u1801.attachEvent("onclick", Clicku1801);
else u1801.addEventListener("click", Clicku1801, true);
function Clicku1801(e)
{

if (true) {

	SetPanelVisibilityu1796("hidden");

}

}

var u1800 = document.getElementById('u1800');

var u453 = document.getElementById('u453');

u453.style.cursor = 'pointer';
if (bIE) u453.attachEvent("onclick", Clicku453);
else u453.addEventListener("click", Clicku453, true);
function Clicku453(e)
{

if (true) {

	SetPanelVisibilityu464("");

}

}

var u1510 = document.getElementById('u1510');

var u1527 = document.getElementById('u1527');
gv_vAlignTable['u1527'] = 'center';
var u1526 = document.getElementById('u1526');

var u1525 = document.getElementById('u1525');
gv_vAlignTable['u1525'] = 'center';
var u1524 = document.getElementById('u1524');

var u1523 = document.getElementById('u1523');
gv_vAlignTable['u1523'] = 'center';
var u1522 = document.getElementById('u1522');

var u1521 = document.getElementById('u1521');
gv_vAlignTable['u1521'] = 'center';
var u1520 = document.getElementById('u1520');

var u648 = document.getElementById('u648');

var u1529 = document.getElementById('u1529');
gv_vAlignTable['u1529'] = 'center';
var u1528 = document.getElementById('u1528');

var u663 = document.getElementById('u663');
gv_vAlignTable['u663'] = 'top';
var u1677 = document.getElementById('u1677');

var u1676 = document.getElementById('u1676');
gv_vAlignTable['u1676'] = 'top';
var u1675 = document.getElementById('u1675');

var u1674 = document.getElementById('u1674');
gv_vAlignTable['u1674'] = 'top';
var u1673 = document.getElementById('u1673');

var u1672 = document.getElementById('u1672');
gv_vAlignTable['u1672'] = 'top';
var u1671 = document.getElementById('u1671');

var u1670 = document.getElementById('u1670');
gv_vAlignTable['u1670'] = 'top';
var u452 = document.getElementById('u452');
gv_vAlignTable['u452'] = 'center';
var u887 = document.getElementById('u887');

var u1517 = document.getElementById('u1517');
gv_vAlignTable['u1517'] = 'center';
var u1516 = document.getElementById('u1516');

var u1515 = document.getElementById('u1515');
gv_vAlignTable['u1515'] = 'center';
var u1514 = document.getElementById('u1514');

var u1513 = document.getElementById('u1513');
gv_vAlignTable['u1513'] = 'center';
var u1512 = document.getElementById('u1512');

var u1511 = document.getElementById('u1511');
gv_vAlignTable['u1511'] = 'center';
var u690 = document.getElementById('u690');
gv_vAlignTable['u690'] = 'center';
var u241 = document.getElementById('u241');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u1519 = document.getElementById('u1519');
gv_vAlignTable['u1519'] = 'center';
var u105 = document.getElementById('u105');

var u467 = document.getElementById('u467');
gv_vAlignTable['u467'] = 'top';
var u1667 = document.getElementById('u1667');

var u843 = document.getElementById('u843');

var u1665 = document.getElementById('u1665');

var u1664 = document.getElementById('u1664');
gv_vAlignTable['u1664'] = 'top';
var u1663 = document.getElementById('u1663');

var u1662 = document.getElementById('u1662');
gv_vAlignTable['u1662'] = 'top';
var u1661 = document.getElementById('u1661');

var u1660 = document.getElementById('u1660');
gv_vAlignTable['u1660'] = 'top';
var u451 = document.getElementById('u451');

u451.style.cursor = 'pointer';
if (bIE) u451.attachEvent("onclick", Clicku451);
else u451.addEventListener("click", Clicku451, true);
function Clicku451(e)
{

if (true) {

	SetPanelVisibilityu464("");

}

}

var u42 = document.getElementById('u42');

var u886 = document.getElementById('u886');
gv_vAlignTable['u886'] = 'center';
var u1507 = document.getElementById('u1507');
gv_vAlignTable['u1507'] = 'center';
var u1506 = document.getElementById('u1506');

var u1505 = document.getElementById('u1505');
gv_vAlignTable['u1505'] = 'center';
var u315 = document.getElementById('u315');
gv_vAlignTable['u315'] = 'top';
var u1503 = document.getElementById('u1503');
gv_vAlignTable['u1503'] = 'center';
var u1502 = document.getElementById('u1502');

var u1501 = document.getElementById('u1501');
gv_vAlignTable['u1501'] = 'center';
var u1500 = document.getElementById('u1500');

var u677 = document.getElementById('u677');

var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'center';
var u1726 = document.getElementById('u1726');

var u1724 = document.getElementById('u1724');
gv_vAlignTable['u1724'] = 'top';
var u1509 = document.getElementById('u1509');
gv_vAlignTable['u1509'] = 'center';
var u1508 = document.getElementById('u1508');

var u758 = document.getElementById('u758');

var u689 = document.getElementById('u689');

var u466 = document.getElementById('u466');
gv_vAlignTable['u466'] = 'center';
var u1657 = document.getElementById('u1657');

var u1656 = document.getElementById('u1656');
gv_vAlignTable['u1656'] = 'top';
var u1655 = document.getElementById('u1655');

var u1654 = document.getElementById('u1654');
gv_vAlignTable['u1654'] = 'top';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u1652 = document.getElementById('u1652');
gv_vAlignTable['u1652'] = 'top';
var u1651 = document.getElementById('u1651');

var u1650 = document.getElementById('u1650');
gv_vAlignTable['u1650'] = 'top';
var u450 = document.getElementById('u450');
gv_vAlignTable['u450'] = 'center';
var u885 = document.getElementById('u885');

var u1659 = document.getElementById('u1659');

var u1658 = document.getElementById('u1658');
gv_vAlignTable['u1658'] = 'top';
var u676 = document.getElementById('u676');
gv_vAlignTable['u676'] = 'center';
var u857 = document.getElementById('u857');

var u103 = document.getElementById('u103');

u103.style.cursor = 'pointer';
if (bIE) u103.attachEvent("onclick", Clicku103);
else u103.addEventListener("click", Clicku103, true);
function Clicku103(e)
{

if (true) {

	SetPanelVisibilityu172("");

	SetPanelVisibilityu219("hidden");

}

}

var u1444 = document.getElementById('u1444');
gv_vAlignTable['u1444'] = 'center';
var u1443 = document.getElementById('u1443');

var u688 = document.getElementById('u688');
gv_vAlignTable['u688'] = 'center';
var u465 = document.getElementById('u465');

var u239 = document.getElementById('u239');

var u504 = document.getElementById('u504');

var u1647 = document.getElementById('u1647');

var u1646 = document.getElementById('u1646');
gv_vAlignTable['u1646'] = 'top';
var u1645 = document.getElementById('u1645');

var u1644 = document.getElementById('u1644');
gv_vAlignTable['u1644'] = 'top';
var u1643 = document.getElementById('u1643');
gv_vAlignTable['u1643'] = 'top';
var u1642 = document.getElementById('u1642');
gv_vAlignTable['u1642'] = 'top';
var u1641 = document.getElementById('u1641');
gv_vAlignTable['u1641'] = 'top';
var u1640 = document.getElementById('u1640');

var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'center';
var u685 = document.getElementById('u685');

var u884 = document.getElementById('u884');
gv_vAlignTable['u884'] = 'center';
var u1649 = document.getElementById('u1649');

var u1648 = document.getElementById('u1648');
gv_vAlignTable['u1648'] = 'top';
var u675 = document.getElementById('u675');

var u449 = document.getElementById('u449');

var u856 = document.getElementById('u856');
gv_vAlignTable['u856'] = 'center';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'center';
var u464 = document.getElementById('u464');

var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'center';
var u1637 = document.getElementById('u1637');
gv_vAlignTable['u1637'] = 'top';
var u107 = document.getElementById('u107');

u107.style.cursor = 'pointer';
if (bIE) u107.attachEvent("onclick", Clicku107);
else u107.addEventListener("click", Clicku107, true);
function Clicku107(e)
{

if (true) {

	SetPanelVisibilityu219("");

}

}

var u1635 = document.getElementById('u1635');
gv_vAlignTable['u1635'] = 'top';
var u1634 = document.getElementById('u1634');

var u1633 = document.getElementById('u1633');
gv_vAlignTable['u1633'] = 'top';
var u1632 = document.getElementById('u1632');

var u1631 = document.getElementById('u1631');
gv_vAlignTable['u1631'] = 'top';
var u1630 = document.getElementById('u1630');
gv_vAlignTable['u1630'] = 'top';
var u253 = document.getElementById('u253');

var u883 = document.getElementById('u883');

var u1639 = document.getElementById('u1639');
gv_vAlignTable['u1639'] = 'top';
var u117 = document.getElementById('u117');

var u491 = document.getElementById('u491');
gv_vAlignTable['u491'] = 'center';
var u674 = document.getElementById('u674');
gv_vAlignTable['u674'] = 'center';
var u448 = document.getElementById('u448');
gv_vAlignTable['u448'] = 'center';
var u855 = document.getElementById('u855');

var u101 = document.getElementById('u101');

var u463 = document.getElementById('u463');
gv_vAlignTable['u463'] = 'center';
var u1627 = document.getElementById('u1627');
gv_vAlignTable['u1627'] = 'top';
var u1626 = document.getElementById('u1626');
gv_vAlignTable['u1626'] = 'top';
var u1625 = document.getElementById('u1625');
gv_vAlignTable['u1625'] = 'top';
var u1624 = document.getElementById('u1624');
gv_vAlignTable['u1624'] = 'top';
var u1623 = document.getElementById('u1623');
gv_vAlignTable['u1623'] = 'top';
var u1622 = document.getElementById('u1622');
gv_vAlignTable['u1622'] = 'top';
var u1621 = document.getElementById('u1621');
gv_vAlignTable['u1621'] = 'top';
var u1620 = document.getElementById('u1620');
gv_vAlignTable['u1620'] = 'top';
var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'center';
var u882 = document.getElementById('u882');
gv_vAlignTable['u882'] = 'center';
var u1629 = document.getElementById('u1629');
gv_vAlignTable['u1629'] = 'top';
var u1628 = document.getElementById('u1628');
gv_vAlignTable['u1628'] = 'top';
var u490 = document.getElementById('u490');

var u673 = document.getElementById('u673');

var u1777 = document.getElementById('u1777');
gv_vAlignTable['u1777'] = 'top';
var u1776 = document.getElementById('u1776');
gv_vAlignTable['u1776'] = 'center';
var u1775 = document.getElementById('u1775');

var u1774 = document.getElementById('u1774');
gv_vAlignTable['u1774'] = 'center';
var u1773 = document.getElementById('u1773');

u1773.style.cursor = 'pointer';
if (bIE) u1773.attachEvent("onclick", Clicku1773);
else u1773.addEventListener("click", Clicku1773, true);
function Clicku1773(e)
{

if (true) {

	SetPanelVisibilityu1778("");

	SetPanelVisibilityu1763("hidden");

}

}

var u1638 = document.getElementById('u1638');

var u1771 = document.getElementById('u1771');
gv_vAlignTable['u1771'] = 'top';
var u1770 = document.getElementById('u1770');
gv_vAlignTable['u1770'] = 'top';
var u267 = document.getElementById('u267');

var u897 = document.getElementById('u897');

var u1617 = document.getElementById('u1617');

var u1616 = document.getElementById('u1616');
gv_vAlignTable['u1616'] = 'center';
var u1615 = document.getElementById('u1615');

var u1614 = document.getElementById('u1614');
gv_vAlignTable['u1614'] = 'center';
var u1613 = document.getElementById('u1613');

var u1612 = document.getElementById('u1612');
gv_vAlignTable['u1612'] = 'center';
var u1611 = document.getElementById('u1611');

var u1610 = document.getElementById('u1610');
gv_vAlignTable['u1610'] = 'center';
var u251 = document.getElementById('u251');

var u22 = document.getElementById('u22');

var u881 = document.getElementById('u881');

var u1619 = document.getElementById('u1619');
gv_vAlignTable['u1619'] = 'top';
var u115 = document.getElementById('u115');

var u1397 = document.getElementById('u1397');
gv_vAlignTable['u1397'] = 'center';
var u1353 = document.getElementById('u1353');
gv_vAlignTable['u1353'] = 'center';
var u477 = document.getElementById('u477');

u477.style.cursor = 'pointer';
if (bIE) u477.attachEvent("onclick", Clicku477);
else u477.addEventListener("click", Clicku477, true);
function Clicku477(e)
{

if (true) {

	SetPanelVisibilityu472("hidden");

}

}

var u1350 = document.getElementById('u1350');

var u1767 = document.getElementById('u1767');

u1767.style.cursor = 'pointer';
if (bIE) u1767.attachEvent("onclick", Clicku1767);
else u1767.addEventListener("click", Clicku1767, true);
function Clicku1767(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u1767'] = 'top';
var u1766 = document.getElementById('u1766');

u1766.style.cursor = 'pointer';
if (bIE) u1766.attachEvent("onclick", Clicku1766);
else u1766.addEventListener("click", Clicku1766, true);
function Clicku1766(e)
{

if (true) {

	self.location.href="注册第一步.html" + GetQuerystring();

}

}
gv_vAlignTable['u1766'] = 'top';
var u1765 = document.getElementById('u1765');

u1765.style.cursor = 'pointer';
if (bIE) u1765.attachEvent("onclick", Clicku1765);
else u1765.addEventListener("click", Clicku1765, true);
function Clicku1765(e)
{

if (true) {

	self.location.href="登录.html" + GetQuerystring();

}

}
gv_vAlignTable['u1765'] = 'top';
var u1764 = document.getElementById('u1764');
gv_vAlignTable['u1764'] = 'top';
var u1636 = document.getElementById('u1636');

var u1762 = document.getElementById('u1762');

u1762.style.cursor = 'pointer';
if (bIE) u1762.attachEvent("onclick", Clicku1762);
else u1762.addEventListener("click", Clicku1762, true);
function Clicku1762(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u1762'] = 'top';
var u580 = document.getElementById('u580');
gv_vAlignTable['u580'] = 'center';
var u1760 = document.getElementById('u1760');
gv_vAlignTable['u1760'] = 'top';
var u489 = document.getElementById('u489');
gv_vAlignTable['u489'] = 'center';
var u461 = document.getElementById('u461');
gv_vAlignTable['u461'] = 'center';
var u896 = document.getElementById('u896');
gv_vAlignTable['u896'] = 'center';
var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'top';
var u1805 = document.getElementById('u1805');
gv_vAlignTable['u1805'] = 'top';
var u1769 = document.getElementById('u1769');
gv_vAlignTable['u1769'] = 'top';
var u1768 = document.getElementById('u1768');

u1768.style.cursor = 'pointer';
if (bIE) u1768.attachEvent("onclick", Clicku1768);
else u1768.addEventListener("click", Clicku1768, true);
function Clicku1768(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u1768'] = 'top';
var u16 = document.getElementById('u16');

var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'center';
var u880 = document.getElementById('u880');
gv_vAlignTable['u880'] = 'center';
var u1809 = document.getElementById('u1809');
gv_vAlignTable['u1809'] = 'top';
var u1808 = document.getElementById('u1808');
gv_vAlignTable['u1808'] = 'top';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u699 = document.getElementById('u699');

var u671 = document.getElementById('u671');

var u1757 = document.getElementById('u1757');
gv_vAlignTable['u1757'] = 'center';
var u1756 = document.getElementById('u1756');

var u1755 = document.getElementById('u1755');
gv_vAlignTable['u1755'] = 'center';
var u1754 = document.getElementById('u1754');

var u37 = document.getElementById('u37');

u37.style.cursor = 'pointer';
if (bIE) u37.attachEvent("onclick", Clicku37);
else u37.addEventListener("click", Clicku37, true);
function Clicku37(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}

var u1752 = document.getElementById('u1752');

if (bIE) u1752.attachEvent("onmouseover", MouseOveru1752);
else u1752.addEventListener("mouseover", MouseOveru1752, true);
function MouseOveru1752(e)
{
if (!IsTrueMouseOver('u1752',e)) return;
if (true) {

	SetPanelVisibilityu1681("");

}

}

if (bIE) u1752.attachEvent("onmouseout", MouseOutu1752);
else u1752.addEventListener("mouseout", MouseOutu1752, true);
function MouseOutu1752(e)
{
if (!IsTrueMouseOut('u1752',e)) return;
if (true) {

	SetPanelVisibilityu1681("hidden");

}

}

var u1751 = document.getElementById('u1751');
gv_vAlignTable['u1751'] = 'center';
var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'center';
var u1078 = document.getElementById('u1078');
gv_vAlignTable['u1078'] = 'center';
var u460 = document.getElementById('u460');

u460.style.cursor = 'pointer';
if (bIE) u460.attachEvent("onclick", Clicku460);
else u460.addEventListener("click", Clicku460, true);
function Clicku460(e)
{

if (true) {

	SetPanelVisibilityu464("");

}

}

var u895 = document.getElementById('u895');

var u1759 = document.getElementById('u1759');
gv_vAlignTable['u1759'] = 'center';
var u1758 = document.getElementById('u1758');

var u698 = document.getElementById('u698');
gv_vAlignTable['u698'] = 'center';
var u475 = document.getElementById('u475');
gv_vAlignTable['u475'] = 'top';
var u249 = document.getElementById('u249');

var u1747 = document.getElementById('u1747');
gv_vAlignTable['u1747'] = 'center';
var u1746 = document.getElementById('u1746');

u1746.style.cursor = 'pointer';
if (bIE) u1746.attachEvent("onclick", Clicku1746);
else u1746.addEventListener("click", Clicku1746, true);
function Clicku1746(e)
{

if (true) {

	self.location.href="海南酒店.html" + GetQuerystring();

}

}

var u1745 = document.getElementById('u1745');
gv_vAlignTable['u1745'] = 'center';
var u1744 = document.getElementById('u1744');

var u99 = document.getElementById('u99');

var u1742 = document.getElementById('u1742');
gv_vAlignTable['u1742'] = 'top';
var u1741 = document.getElementById('u1741');

u1741.style.cursor = 'pointer';
if (bIE) u1741.attachEvent("onclick", Clicku1741);
else u1741.addEventListener("click", Clicku1741, true);
function Clicku1741(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u1741'] = 'top';
var u1740 = document.getElementById('u1740');
gv_vAlignTable['u1740'] = 'center';
var u264 = document.getElementById('u264');
gv_vAlignTable['u264'] = 'center';
var u894 = document.getElementById('u894');
gv_vAlignTable['u894'] = 'center';
var u1566 = document.getElementById('u1566');

var u1564 = document.getElementById('u1564');

var u1748 = document.getElementById('u1748');

u1748.style.cursor = 'pointer';
if (bIE) u1748.attachEvent("onclick", Clicku1748);
else u1748.addEventListener("click", Clicku1748, true);
function Clicku1748(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}

var u1560 = document.getElementById('u1560');

var u73 = document.getElementById('u73');

var u459 = document.getElementById('u459');
gv_vAlignTable['u459'] = 'center';
var u1568 = document.getElementById('u1568');

var u291 = document.getElementById('u291');

var u474 = document.getElementById('u474');
gv_vAlignTable['u474'] = 'center';
var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'center';
var u432 = document.getElementById('u432');
gv_vAlignTable['u432'] = 'center';
var u263 = document.getElementById('u263');

var u893 = document.getElementById('u893');

var u127 = document.getElementById('u127');

var u290 = document.getElementById('u290');
gv_vAlignTable['u290'] = 'center';
var u473 = document.getElementById('u473');

var u1585 = document.getElementById('u1585');
gv_vAlignTable['u1585'] = 'top';
var u1584 = document.getElementById('u1584');
gv_vAlignTable['u1584'] = 'top';
var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'center';
var u892 = document.getElementById('u892');
gv_vAlignTable['u892'] = 'center';
var u618 = document.getElementById('u618');
gv_vAlignTable['u618'] = 'center';
var u56 = document.getElementById('u56');

var u277 = document.getElementById('u277');

var u661 = document.getElementById('u661');
gv_vAlignTable['u661'] = 'center';
var u1796 = document.getElementById('u1796');

var u1753 = document.getElementById('u1753');
gv_vAlignTable['u1753'] = 'center';
var u1750 = document.getElementById('u1750');

u1750.style.cursor = 'pointer';
if (bIE) u1750.attachEvent("onclick", Clicku1750);
else u1750.addEventListener("click", Clicku1750, true);
function Clicku1750(e)
{

if (true) {

	self.location.href="国内机票.html" + GetQuerystring();

}

}

var u289 = document.getElementById('u289');

var u261 = document.getElementById('u261');

var u8 = document.getElementById('u8');

var u499 = document.getElementById('u499');
gv_vAlignTable['u499'] = 'center';
var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'center';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'center';
var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'center';
var u592 = document.getElementById('u592');
gv_vAlignTable['u592'] = 'center';
var u700 = document.getElementById('u700');
gv_vAlignTable['u700'] = 'center';
var u498 = document.getElementById('u498');

var u275 = document.getElementById('u275');

var u1448 = document.getElementById('u1448');
gv_vAlignTable['u1448'] = 'center';
var u259 = document.getElementById('u259');

var u77 = document.getElementById('u77');

var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'center';
var u859 = document.getElementById('u859');

var u772 = document.getElementById('u772');

var u472 = document.getElementById('u472');

var u273 = document.getElementById('u273');

var u283 = document.getElementById('u283');

var u713 = document.getElementById('u713');

var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'center';
var u702 = document.getElementById('u702');
gv_vAlignTable['u702'] = 'center';
var u320 = document.getElementById('u320');

var u712 = document.getElementById('u712');
gv_vAlignTable['u712'] = 'center';
var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'center';
var u1005 = document.getElementById('u1005');

var u1004 = document.getElementById('u1004');
gv_vAlignTable['u1004'] = 'center';
var u1002 = document.getElementById('u1002');
gv_vAlignTable['u1002'] = 'center';
var u299 = document.getElementById('u299');

var u271 = document.getElementById('u271');

var u711 = document.getElementById('u711');

var u301 = document.getElementById('u301');

var u500 = document.getElementById('u500');

var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'center';
var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'center';
var u726 = document.getElementById('u726');
gv_vAlignTable['u726'] = 'center';
var u907 = document.getElementById('u907');

var u710 = document.getElementById('u710');
gv_vAlignTable['u710'] = 'center';
var u725 = document.getElementById('u725');

var u906 = document.getElementById('u906');
gv_vAlignTable['u906'] = 'center';
var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'top';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u701 = document.getElementById('u701');

var u480 = document.getElementById('u480');
gv_vAlignTable['u480'] = 'center';
var u709 = document.getElementById('u709');

var u724 = document.getElementById('u724');
gv_vAlignTable['u724'] = 'center';
var u905 = document.getElementById('u905');

var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'center';
var u513 = document.getElementById('u513');
gv_vAlignTable['u513'] = 'top';
var u708 = document.getElementById('u708');
gv_vAlignTable['u708'] = 'center';
var u723 = document.getElementById('u723');

u723.style.cursor = 'pointer';
if (bIE) u723.attachEvent("onclick", Clicku723);
else u723.addEventListener("click", Clicku723, true);
function Clicku723(e)
{

if (true) {

	SetPanelVisibilityu819("");

}

}

var u753 = document.getElementById('u753');

u753.style.cursor = 'pointer';
if (bIE) u753.attachEvent("onclick", Clicku753);
else u753.addEventListener("click", Clicku753, true);
function Clicku753(e)
{

if (true) {

	SetPanelVisibilityu764("");

}

}

var u904 = document.getElementById('u904');
gv_vAlignTable['u904'] = 'center';
var u512 = document.getElementById('u512');
gv_vAlignTable['u512'] = 'top';
var u360 = document.getElementById('u360');

var u829 = document.getElementById('u829');

var u1405 = document.getElementById('u1405');
gv_vAlignTable['u1405'] = 'center';
var u1403 = document.getElementById('u1403');
gv_vAlignTable['u1403'] = 'center';
var u722 = document.getElementById('u722');
gv_vAlignTable['u722'] = 'center';
var u903 = document.getElementById('u903');

var u597 = document.getElementById('u597');

var u511 = document.getElementById('u511');
gv_vAlignTable['u511'] = 'center';
var u24 = document.getElementById('u24');

var u332 = document.getElementById('u332');

u332.style.cursor = 'pointer';
if (bIE) u332.attachEvent("onclick", Clicku332);
else u332.addEventListener("click", Clicku332, true);
function Clicku332(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}
gv_vAlignTable['u332'] = 'top';
var u681 = document.getElementById('u681');

var u828 = document.getElementById('u828');
gv_vAlignTable['u828'] = 'center';
var u737 = document.getElementById('u737');

var u300 = document.getElementById('u300');
gv_vAlignTable['u300'] = 'center';
var u526 = document.getElementById('u526');
gv_vAlignTable['u526'] = 'center';
var u902 = document.getElementById('u902');
gv_vAlignTable['u902'] = 'center';
var u510 = document.getElementById('u510');

var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'center';
var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'center';
var u736 = document.getElementById('u736');
gv_vAlignTable['u736'] = 'center';
var u917 = document.getElementById('u917');

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u525 = document.getElementById('u525');

var u901 = document.getElementById('u901');

var u561 = document.getElementById('u561');

var u1497 = document.getElementById('u1497');
gv_vAlignTable['u1497'] = 'center';
var u1496 = document.getElementById('u1496');

var u735 = document.getElementById('u735');

var u1494 = document.getElementById('u1494');

var u1493 = document.getElementById('u1493');
gv_vAlignTable['u1493'] = 'center';
var u1492 = document.getElementById('u1492');

var u916 = document.getElementById('u916');

var u1490 = document.getElementById('u1490');

var u841 = document.getElementById('u841');

var u81 = document.getElementById('u81');

var u524 = document.getElementById('u524');

var u1498 = document.getElementById('u1498');

var u79 = document.getElementById('u79');

var u313 = document.getElementById('u313');
gv_vAlignTable['u313'] = 'top';
var u1487 = document.getElementById('u1487');
gv_vAlignTable['u1487'] = 'center';
var u1486 = document.getElementById('u1486');

var u734 = document.getElementById('u734');
gv_vAlignTable['u734'] = 'center';
var u1484 = document.getElementById('u1484');

var u1483 = document.getElementById('u1483');
gv_vAlignTable['u1483'] = 'center';
var u1482 = document.getElementById('u1482');

var u915 = document.getElementById('u915');
gv_vAlignTable['u915'] = 'top';
var u1480 = document.getElementById('u1480');
gv_vAlignTable['u1480'] = 'center';
var u492 = document.getElementById('u492');

var u840 = document.getElementById('u840');
gv_vAlignTable['u840'] = 'center';
var u1489 = document.getElementById('u1489');
gv_vAlignTable['u1489'] = 'center';
var u1488 = document.getElementById('u1488');

var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'top';
var u392 = document.getElementById('u392');
gv_vAlignTable['u392'] = 'center';
var u312 = document.getElementById('u312');
gv_vAlignTable['u312'] = 'center';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
var u509 = document.getElementById('u509');
gv_vAlignTable['u509'] = 'top';
var u965 = document.getElementById('u965');

var u733 = document.getElementById('u733');

var u1094 = document.getElementById('u1094');

var u914 = document.getElementById('u914');
gv_vAlignTable['u914'] = 'top';
var u522 = document.getElementById('u522');

u522.style.cursor = 'pointer';
if (bIE) u522.attachEvent("onclick", Clicku522);
else u522.addEventListener("click", Clicku522, true);
function Clicku522(e)
{

if (true) {

	SetPanelVisibilityu519("hidden");

}

}

var u658 = document.getElementById('u658');

var u762 = document.getElementById('u762');

u762.style.cursor = 'pointer';
if (bIE) u762.attachEvent("onclick", Clicku762);
else u762.addEventListener("click", Clicku762, true);
function Clicku762(e)
{

if (true) {

	SetPanelVisibilityu772("");

}

}

var u839 = document.getElementById('u839');

var u311 = document.getElementById('u311');

var u854 = document.getElementById('u854');
gv_vAlignTable['u854'] = 'center';
var u537 = document.getElementById('u537');

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u554 = document.getElementById('u554');
gv_vAlignTable['u554'] = 'center';
var u521 = document.getElementById('u521');
gv_vAlignTable['u521'] = 'center';
var u838 = document.getElementById('u838');
gv_vAlignTable['u838'] = 'center';
var u747 = document.getElementById('u747');

var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'center';
var u738 = document.getElementById('u738');
gv_vAlignTable['u738'] = 'center';
var u853 = document.getElementById('u853');

var u536 = document.getElementById('u536');
gv_vAlignTable['u536'] = 'center';
var u668 = document.getElementById('u668');

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u1607 = document.getElementById('u1607');
gv_vAlignTable['u1607'] = 'center';
var u1606 = document.getElementById('u1606');

var u1605 = document.getElementById('u1605');

var u1604 = document.getElementById('u1604');
gv_vAlignTable['u1604'] = 'top';
var u1603 = document.getElementById('u1603');
gv_vAlignTable['u1603'] = 'top';
var u1602 = document.getElementById('u1602');
gv_vAlignTable['u1602'] = 'top';
var u1601 = document.getElementById('u1601');
gv_vAlignTable['u1601'] = 'top';
var u1600 = document.getElementById('u1600');
gv_vAlignTable['u1600'] = 'top';
var u1287 = document.getElementById('u1287');

var u746 = document.getElementById('u746');
gv_vAlignTable['u746'] = 'center';
var u1285 = document.getElementById('u1285');

var u927 = document.getElementById('u927');
gv_vAlignTable['u927'] = 'top';
var u485 = document.getElementById('u485');
gv_vAlignTable['u485'] = 'center';
var u64 = document.getElementById('u64');

var u852 = document.getElementById('u852');
gv_vAlignTable['u852'] = 'center';
var u535 = document.getElementById('u535');

var u1248 = document.getElementById('u1248');

var u1289 = document.getElementById('u1289');

u1289.style.cursor = 'pointer';
if (bIE) u1289.attachEvent("onclick", Clicku1289);
else u1289.addEventListener("click", Clicku1289, true);
function Clicku1289(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}
gv_vAlignTable['u1289'] = 'top';
var u1288 = document.getElementById('u1288');
gv_vAlignTable['u1288'] = 'center';
var u316 = document.getElementById('u316');

var u324 = document.getElementById('u324');
gv_vAlignTable['u324'] = 'top';
var u860 = document.getElementById('u860');
gv_vAlignTable['u860'] = 'center';
var u867 = document.getElementById('u867');

var u1596 = document.getElementById('u1596');
gv_vAlignTable['u1596'] = 'top';
var u745 = document.getElementById('u745');

var u113 = document.getElementById('u113');

var u1593 = document.getElementById('u1593');
gv_vAlignTable['u1593'] = 'top';
var u1592 = document.getElementById('u1592');
gv_vAlignTable['u1592'] = 'top';
var u1591 = document.getElementById('u1591');
gv_vAlignTable['u1591'] = 'top';
var u1590 = document.getElementById('u1590');
gv_vAlignTable['u1590'] = 'top';
var u642 = document.getElementById('u642');

var u851 = document.getElementById('u851');

var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u1599 = document.getElementById('u1599');
gv_vAlignTable['u1599'] = 'top';
var u1598 = document.getElementById('u1598');
gv_vAlignTable['u1598'] = 'top';
var u1736 = document.getElementById('u1736');
gv_vAlignTable['u1736'] = 'center';
var u1734 = document.getElementById('u1734');
gv_vAlignTable['u1734'] = 'center';
var u1733 = document.getElementById('u1733');

var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'top';
var u1738 = document.getElementById('u1738');
gv_vAlignTable['u1738'] = 'center';
var u832 = document.getElementById('u832');
gv_vAlignTable['u832'] = 'center';
var u1587 = document.getElementById('u1587');

var u1586 = document.getElementById('u1586');

var u744 = document.getElementById('u744');
gv_vAlignTable['u744'] = 'center';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u1583 = document.getElementById('u1583');

u1583.style.cursor = 'pointer';
if (bIE) u1583.attachEvent("onclick", Clicku1583);
else u1583.addEventListener("click", Clicku1583, true);
function Clicku1583(e)
{

if (true) {

	self.location.href="酒店点评.html" + GetQuerystring();

}

}
gv_vAlignTable['u1583'] = 'top';
var u1582 = document.getElementById('u1582');
gv_vAlignTable['u1582'] = 'top';
var u1581 = document.getElementById('u1581');
gv_vAlignTable['u1581'] = 'top';
var u1580 = document.getElementById('u1580');
gv_vAlignTable['u1580'] = 'top';
var u1737 = document.getElementById('u1737');

var u787 = document.getElementById('u787');
gv_vAlignTable['u787'] = 'center';
var u1735 = document.getElementById('u1735');

var u533 = document.getElementById('u533');

var u1588 = document.getElementById('u1588');
gv_vAlignTable['u1588'] = 'top';
var u1732 = document.getElementById('u1732');
gv_vAlignTable['u1732'] = 'center';
var u1731 = document.getElementById('u1731');

var u1730 = document.getElementById('u1730');
gv_vAlignTable['u1730'] = 'center';
var u1456 = document.getElementById('u1456');
gv_vAlignTable['u1456'] = 'center';
var u1454 = document.getElementById('u1454');
gv_vAlignTable['u1454'] = 'center';
var u1495 = document.getElementById('u1495');
gv_vAlignTable['u1495'] = 'center';
var u1739 = document.getElementById('u1739');

var u322 = document.getElementById('u322');

var u1491 = document.getElementById('u1491');
gv_vAlignTable['u1491'] = 'center';
var u97 = document.getElementById('u97');

var u458 = document.getElementById('u458');

var u804 = document.getElementById('u804');

var u865 = document.getElementById('u865');

var u743 = document.getElementById('u743');

var u111 = document.getElementById('u111');

var u686 = document.getElementById('u686');
gv_vAlignTable['u686'] = 'center';
var u1689 = document.getElementById('u1689');
gv_vAlignTable['u1689'] = 'top';
var u1727 = document.getElementById('u1727');

var u786 = document.getElementById('u786');

var u1725 = document.getElementById('u1725');
gv_vAlignTable['u1725'] = 'top';
var u337 = document.getElementById('u337');

u337.style.cursor = 'pointer';
if (bIE) u337.attachEvent("onclick", Clicku337);
else u337.addEventListener("click", Clicku337, true);
function Clicku337(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}

var u1723 = document.getElementById('u1723');
gv_vAlignTable['u1723'] = 'center';
var u1722 = document.getElementById('u1722');

var u1721 = document.getElementById('u1721');
gv_vAlignTable['u1721'] = 'center';
var u1720 = document.getElementById('u1720');

var u68 = document.getElementById('u68');

var u977 = document.getElementById('u977');

var u601 = document.getElementById('u601');

var u849 = document.getElementById('u849');

var u1729 = document.getElementById('u1729');

var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'center';
var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'top';
var u864 = document.getElementById('u864');
gv_vAlignTable['u864'] = 'center';
var u547 = document.getElementById('u547');

var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'center';
var u778 = document.getElementById('u778');
gv_vAlignTable['u778'] = 'center';
var u785 = document.getElementById('u785');
gv_vAlignTable['u785'] = 'center';
var u1715 = document.getElementById('u1715');
gv_vAlignTable['u1715'] = 'center';
var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'center';
var u1713 = document.getElementById('u1713');
gv_vAlignTable['u1713'] = 'top';
var u1712 = document.getElementById('u1712');
gv_vAlignTable['u1712'] = 'top';
var u1711 = document.getElementById('u1711');
gv_vAlignTable['u1711'] = 'center';
var u1710 = document.getElementById('u1710');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u891 = document.getElementById('u891');

var u848 = document.getElementById('u848');
gv_vAlignTable['u848'] = 'center';
var u757 = document.getElementById('u757');
gv_vAlignTable['u757'] = 'top';
var u125 = document.getElementById('u125');

var u863 = document.getElementById('u863');

var u546 = document.getElementById('u546');
gv_vAlignTable['u546'] = 'center';
var u1687 = document.getElementById('u1687');
gv_vAlignTable['u1687'] = 'center';
var u44 = document.getElementById('u44');

var u959 = document.getElementById('u959');
gv_vAlignTable['u959'] = 'center';
var u1684 = document.getElementById('u1684');

var u784 = document.getElementById('u784');

var u176 = document.getElementById('u176');

var u335 = document.getElementById('u335');

var u109 = document.getElementById('u109');

var u1702 = document.getElementById('u1702');

var u1701 = document.getElementById('u1701');
gv_vAlignTable['u1701'] = 'top';
var u1700 = document.getElementById('u1700');
gv_vAlignTable['u1700'] = 'top';
var u890 = document.getElementById('u890');
gv_vAlignTable['u890'] = 'center';
var u756 = document.getElementById('u756');
gv_vAlignTable['u756'] = 'center';
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u1543 = document.getElementById('u1543');
gv_vAlignTable['u1543'] = 'center';
var u65 = document.getElementById('u65');

var u862 = document.getElementById('u862');
gv_vAlignTable['u862'] = 'center';
var u545 = document.getElementById('u545');

var u319 = document.getElementById('u319');

var u783 = document.getElementById('u783');
gv_vAlignTable['u783'] = 'center';
var u334 = document.getElementById('u334');
gv_vAlignTable['u334'] = 'center';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u497 = document.getElementById('u497');
gv_vAlignTable['u497'] = 'center';
var u877 = document.getElementById('u877');

var u1696 = document.getElementById('u1696');

var u755 = document.getElementById('u755');

u755.style.cursor = 'pointer';
if (bIE) u755.attachEvent("onclick", Clicku755);
else u755.addEventListener("click", Clicku755, true);
function Clicku755(e)
{

if (true) {

	SetPanelVisibilityu764("");

}

}

var u123 = document.getElementById('u123');

u123.style.cursor = 'pointer';
if (bIE) u123.attachEvent("onclick", Clicku123);
else u123.addEventListener("click", Clicku123, true);
function Clicku123(e)
{

if (true) {

	SetPanelVisibilityu219("");

}

}

var u1693 = document.getElementById('u1693');
gv_vAlignTable['u1693'] = 'center';
var u1692 = document.getElementById('u1692');

var u1691 = document.getElementById('u1691');
gv_vAlignTable['u1691'] = 'center';
var u1690 = document.getElementById('u1690');

var u1814 = document.getElementById('u1814');
gv_vAlignTable['u1814'] = 'top';
var u1813 = document.getElementById('u1813');
gv_vAlignTable['u1813'] = 'top';
var u1812 = document.getElementById('u1812');
gv_vAlignTable['u1812'] = 'top';
var u889 = document.getElementById('u889');

var u861 = document.getElementById('u861');

var u544 = document.getElementById('u544');
gv_vAlignTable['u544'] = 'center';
var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'center';
var u1819 = document.getElementById('u1819');
gv_vAlignTable['u1819'] = 'top';
var u1818 = document.getElementById('u1818');
gv_vAlignTable['u1818'] = 'top';
var u782 = document.getElementById('u782');

var u333 = document.getElementById('u333');

var u469 = document.getElementById('u469');

u469.style.cursor = 'pointer';
if (bIE) u469.attachEvent("onclick", Clicku469);
else u469.addEventListener("click", Clicku469, true);
function Clicku469(e)
{

if (true) {

	self.location.href="酒店客房订单_1.html" + GetQuerystring();

}

}

var u876 = document.getElementById('u876');
gv_vAlignTable['u876'] = 'center';
var u1686 = document.getElementById('u1686');

var u1685 = document.getElementById('u1685');
gv_vAlignTable['u1685'] = 'center';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'center';
var u1683 = document.getElementById('u1683');
gv_vAlignTable['u1683'] = 'center';
var u1682 = document.getElementById('u1682');

var u1681 = document.getElementById('u1681');

var u1680 = document.getElementById('u1680');
gv_vAlignTable['u1680'] = 'top';
var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'center';
var u888 = document.getElementById('u888');
gv_vAlignTable['u888'] = 'center';
var u797 = document.getElementById('u797');
gv_vAlignTable['u797'] = 'center';
var u543 = document.getElementById('u543');

var u1688 = document.getElementById('u1688');
gv_vAlignTable['u1688'] = 'top';
var u844 = document.getElementById('u844');
gv_vAlignTable['u844'] = 'center';
var u679 = document.getElementById('u679');

var u781 = document.getElementById('u781');

var u137 = document.getElementById('u137');

var u48 = document.getElementById('u48');

var u468 = document.getElementById('u468');

var u875 = document.getElementById('u875');

var u121 = document.getElementById('u121');

var u1574 = document.getElementById('u1574');

var u796 = document.getElementById('u796');

var u347 = document.getElementById('u347');
gv_vAlignTable['u347'] = 'center';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u678 = document.getElementById('u678');
gv_vAlignTable['u678'] = 'center';
var u585 = document.getElementById('u585');

var u331 = document.getElementById('u331');
gv_vAlignTable['u331'] = 'center';
var u874 = document.getElementById('u874');
gv_vAlignTable['u874'] = 'center';
var u557 = document.getElementById('u557');

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'center';
var u795 = document.getElementById('u795');
gv_vAlignTable['u795'] = 'center';
var u346 = document.getElementById('u346');

var u1499 = document.getElementById('u1499');
gv_vAlignTable['u1499'] = 'center';
var u584 = document.getElementById('u584');
gv_vAlignTable['u584'] = 'center';
var u330 = document.getElementById('u330');

var u1533 = document.getElementById('u1533');
gv_vAlignTable['u1533'] = 'center';
var u1743 = document.getElementById('u1743');

u1743.style.cursor = 'pointer';
if (bIE) u1743.attachEvent("onclick", Clicku1743);
else u1743.addEventListener("click", Clicku1743, true);
function Clicku1743(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u1743'] = 'top';
var u1544 = document.getElementById('u1544');

var u873 = document.getElementById('u873');

var u556 = document.getElementById('u556');
gv_vAlignTable['u556'] = 'center';
var u720 = document.getElementById('u720');
gv_vAlignTable['u720'] = 'center';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u794 = document.getElementById('u794');

var u345 = document.getElementById('u345');
gv_vAlignTable['u345'] = 'center';
var u119 = document.getElementById('u119');

u119.style.cursor = 'pointer';
if (bIE) u119.attachEvent("onclick", Clicku119);
else u119.addEventListener("click", Clicku119, true);
function Clicku119(e)
{

if (true) {

	SetPanelVisibilityu172("");

	SetPanelVisibilityu219("hidden");

}

}

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u583 = document.getElementById('u583');

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'center';
var u662 = document.getElementById('u662');
gv_vAlignTable['u662'] = 'top';
var u1763 = document.getElementById('u1763');

var u1761 = document.getElementById('u1761');
gv_vAlignTable['u1761'] = 'top';
var u872 = document.getElementById('u872');
gv_vAlignTable['u872'] = 'center';
var u75 = document.getElementById('u75');

var u555 = document.getElementById('u555');

var u837 = document.getElementById('u837');

var u793 = document.getElementById('u793');
gv_vAlignTable['u793'] = 'center';
var u344 = document.getElementById('u344');

var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'center';
var u454 = document.getElementById('u454');
gv_vAlignTable['u454'] = 'center';
var u1797 = document.getElementById('u1797');

var u582 = document.getElementById('u582');
gv_vAlignTable['u582'] = 'center';
var u1795 = document.getElementById('u1795');
gv_vAlignTable['u1795'] = 'center';
var u133 = document.getElementById('u133');

var u1793 = document.getElementById('u1793');
gv_vAlignTable['u1793'] = 'center';
var u1792 = document.getElementById('u1792');

if (bIE) u1792.attachEvent("onmouseover", MouseOveru1792);
else u1792.addEventListener("mouseover", MouseOveru1792, true);
function MouseOveru1792(e)
{
if (!IsTrueMouseOver('u1792',e)) return;
if (true) {

	SetPanelVisibilityu1726("");

}

}

if (bIE) u1792.attachEvent("onmouseout", MouseOutu1792);
else u1792.addEventListener("mouseout", MouseOutu1792, true);
function MouseOutu1792(e)
{
if (!IsTrueMouseOut('u1792',e)) return;
if (true) {

	SetPanelVisibilityu1726("hidden");

}

}

var u1791 = document.getElementById('u1791');
gv_vAlignTable['u1791'] = 'center';
var u1790 = document.getElementById('u1790');

u1790.style.cursor = 'pointer';
if (bIE) u1790.attachEvent("onclick", Clicku1790);
else u1790.addEventListener("click", Clicku1790, true);
function Clicku1790(e)
{

if (true) {

	SetPanelVisibilityu1763("");

	SetPanelVisibilityu1778("hidden");

}

}

var u638 = document.getElementById('u638');
gv_vAlignTable['u638'] = 'center';
var u269 = document.getElementById('u269');

var u899 = document.getElementById('u899');

var u871 = document.getElementById('u871');

var u1799 = document.getElementById('u1799');
gv_vAlignTable['u1799'] = 'top';
var u1798 = document.getElementById('u1798');
gv_vAlignTable['u1798'] = 'center';
var u792 = document.getElementById('u792');

var u343 = document.getElementById('u343');
gv_vAlignTable['u343'] = 'center';
var u479 = document.getElementById('u479');

var u909 = document.getElementById('u909');

var u581 = document.getElementById('u581');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'center';
var u28 = document.getElementById('u28');

var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'center';
var u898 = document.getElementById('u898');
gv_vAlignTable['u898'] = 'center';
var u870 = document.getElementById('u870');
gv_vAlignTable['u870'] = 'center';
var u596 = document.getElementById('u596');
gv_vAlignTable['u596'] = 'center';
var u147 = document.getElementById('u147');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u478 = document.getElementById('u478');
gv_vAlignTable['u478'] = 'center';
var u385 = document.getElementById('u385');

var u131 = document.getElementById('u131');

var u357 = document.getElementById('u357');
gv_vAlignTable['u357'] = 'center';
var u595 = document.getElementById('u595');

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'center';
var u384 = document.getElementById('u384');
gv_vAlignTable['u384'] = 'center';
var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'center';
var u265 = document.getElementById('u265');

var u356 = document.getElementById('u356');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u594 = document.getElementById('u594');
gv_vAlignTable['u594'] = 'center';
var u145 = document.getElementById('u145');

var u382 = document.getElementById('u382');
gv_vAlignTable['u382'] = 'center';
var u383 = document.getElementById('u383');

var u586 = document.getElementById('u586');
gv_vAlignTable['u586'] = 'center';
var u355 = document.getElementById('u355');
gv_vAlignTable['u355'] = 'center';
var u593 = document.getElementById('u593');

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'center';
var u501 = document.getElementById('u501');
gv_vAlignTable['u501'] = 'center';
var u1017 = document.getElementById('u1017');

var u1014 = document.getElementById('u1014');
gv_vAlignTable['u1014'] = 'center';
var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'center';
var u1011 = document.getElementById('u1011');

var u1018 = document.getElementById('u1018');
gv_vAlignTable['u1018'] = 'center';
var u1481 = document.getElementById('u1481');

var u397 = document.getElementById('u397');

var u143 = document.getElementById('u143');

var u279 = document.getElementById('u279');

var u186 = document.getElementById('u186');

var u900 = document.getElementById('u900');
gv_vAlignTable['u900'] = 'center';
var u1714 = document.getElementById('u1714');

var u1718 = document.getElementById('u1718');
gv_vAlignTable['u1718'] = 'top';
var u730 = document.getElementById('u730');
gv_vAlignTable['u730'] = 'center';
var u396 = document.getElementById('u396');
gv_vAlignTable['u396'] = 'center';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'center';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'center';
var u691 = document.getElementById('u691');

u691.style.cursor = 'pointer';
if (bIE) u691.attachEvent("onclick", Clicku691);
else u691.addEventListener("click", Clicku691, true);
function Clicku691(e)
{

if (true) {

	SetPanelVisibilityu819("");

}

}

var u380 = document.getElementById('u380');
gv_vAlignTable['u380'] = 'center';
var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'top';
var u1668 = document.getElementById('u1668');
gv_vAlignTable['u1668'] = 'top';
var u1204 = document.getElementById('u1204');
gv_vAlignTable['u1204'] = 'center';
var u395 = document.getElementById('u395');

var u1201 = document.getElementById('u1201');

var u481 = document.getElementById('u481');

var u184 = document.getElementById('u184');

var u803 = document.getElementById('u803');
gv_vAlignTable['u803'] = 'center';
var u1352 = document.getElementById('u1352');

var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'center';
var u954 = document.getElementById('u954');

var u958 = document.getElementById('u958');

var u394 = document.getElementById('u394');
gv_vAlignTable['u394'] = 'center';
var u913 = document.getElementById('u913');
gv_vAlignTable['u913'] = 'top';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'center';
var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'center';
var u155 = document.getElementById('u155');

u155.style.cursor = 'pointer';
if (bIE) u155.attachEvent("onclick", Clicku155);
else u155.addEventListener("click", Clicku155, true);
function Clicku155(e)
{

if (true) {

	SetPanelVisibilityu164("");

}

}

var u70 = document.getElementById('u70');

var u912 = document.getElementById('u912');
gv_vAlignTable['u912'] = 'center';
var u182 = document.getElementById('u182');

var u1415 = document.getElementById('u1415');

var u1414 = document.getElementById('u1414');
gv_vAlignTable['u1414'] = 'top';
var u1436 = document.getElementById('u1436');

var u1419 = document.getElementById('u1419');

u1419.style.cursor = 'pointer';
if (bIE) u1419.attachEvent("onclick", Clicku1419);
else u1419.addEventListener("click", Clicku1419, true);
function Clicku1419(e)
{

if (true) {

	SetPanelVisibilityu1429("");

}

}

var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'center';
var u911 = document.getElementById('u911');

var u181 = document.getElementById('u181');

var u926 = document.getElementById('u926');

u926.style.cursor = 'pointer';
if (bIE) u926.attachEvent("onclick", Clicku926);
else u926.addEventListener("click", Clicku926, true);
function Clicku926(e)
{

if (true) {

	self.location.href="酒店点评.html" + GetQuerystring();

}

}
gv_vAlignTable['u926'] = 'top';
var u196 = document.getElementById('u196');

var u305 = document.getElementById('u305');

var u910 = document.getElementById('u910');
gv_vAlignTable['u910'] = 'center';
var u770 = document.getElementById('u770');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u729 = document.getElementById('u729');

var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'center';
var u925 = document.getElementById('u925');
gv_vAlignTable['u925'] = 'top';
var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'center';
var u990 = document.getElementById('u990');
gv_vAlignTable['u990'] = 'center';
var u742 = document.getElementById('u742');
gv_vAlignTable['u742'] = 'center';
var u728 = document.getElementById('u728');
gv_vAlignTable['u728'] = 'center';
var u821 = document.getElementById('u821');
gv_vAlignTable['u821'] = 'center';
var u1779 = document.getElementById('u1779');
gv_vAlignTable['u1779'] = 'top';
var u924 = document.getElementById('u924');
gv_vAlignTable['u924'] = 'top';
var u607 = document.getElementById('u607');

var u534 = document.getElementById('u534');
gv_vAlignTable['u534'] = 'center';
var u194 = document.getElementById('u194');

var u621 = document.getElementById('u621');
gv_vAlignTable['u621'] = 'center';
var u718 = document.getElementById('u718');
gv_vAlignTable['u718'] = 'center';
var u908 = document.getElementById('u908');
gv_vAlignTable['u908'] = 'center';
var u326 = document.getElementById('u326');

u326.style.cursor = 'pointer';
if (bIE) u326.attachEvent("onclick", Clicku326);
else u326.addEventListener("click", Clicku326, true);
function Clicku326(e)
{

if (true) {

	self.location.href="酒店点评.html" + GetQuerystring();

}

}
gv_vAlignTable['u326'] = 'top';
var u1785 = document.getElementById('u1785');
gv_vAlignTable['u1785'] = 'top';
var u923 = document.getElementById('u923');
gv_vAlignTable['u923'] = 'top';
var u606 = document.getElementById('u606');
gv_vAlignTable['u606'] = 'center';
var u50 = document.getElementById('u50');

var u966 = document.getElementById('u966');
gv_vAlignTable['u966'] = 'center';
var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'center';
var u741 = document.getElementById('u741');

var u71 = document.getElementById('u71');

var u922 = document.getElementById('u922');

var u605 = document.getElementById('u605');

var u192 = document.getElementById('u192');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u937 = document.getElementById('u937');

u937.style.cursor = 'pointer';
if (bIE) u937.attachEvent("onclick", Clicku937);
else u937.addEventListener("click", Clicku937, true);
function Clicku937(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}

var u740 = document.getElementById('u740');
gv_vAlignTable['u740'] = 'center';
var u1536 = document.getElementById('u1536');

var u921 = document.getElementById('u921');
gv_vAlignTable['u921'] = 'center';
var u1534 = document.getElementById('u1534');

var u604 = document.getElementById('u604');
gv_vAlignTable['u604'] = 'center';
var u739 = document.getElementById('u739');

u739.style.cursor = 'pointer';
if (bIE) u739.attachEvent("onclick", Clicku739);
else u739.addEventListener("click", Clicku739, true);
function Clicku739(e)
{

if (true) {

	SetPanelVisibilityu819("");

}

}

var u1794 = document.getElementById('u1794');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u529 = document.getElementById('u529');

var u135 = document.getElementById('u135');

var u936 = document.getElementById('u936');
gv_vAlignTable['u936'] = 'center';
var u1474 = document.getElementById('u1474');

var u83 = document.getElementById('u83');

var u780 = document.getElementById('u780');
gv_vAlignTable['u780'] = 'center';
var u920 = document.getElementById('u920');

var u603 = document.getElementById('u603');

var u1295 = document.getElementById('u1295');
gv_vAlignTable['u1295'] = 'center';
var u1077 = document.getElementById('u1077');

u1077.style.cursor = 'pointer';
if (bIE) u1077.attachEvent("onclick", Clicku1077);
else u1077.addEventListener("click", Clicku1077, true);
function Clicku1077(e)
{

if (true) {

	SetPanelVisibilityu1072("hidden");

}

}

var u1076 = document.getElementById('u1076');

var u1075 = document.getElementById('u1075');
gv_vAlignTable['u1075'] = 'top';
var u1074 = document.getElementById('u1074');
gv_vAlignTable['u1074'] = 'center';
var u1073 = document.getElementById('u1073');

var u1072 = document.getElementById('u1072');

var u1071 = document.getElementById('u1071');
gv_vAlignTable['u1071'] = 'center';
var u1070 = document.getElementById('u1070');

var u1079 = document.getElementById('u1079');

var u528 = document.getElementById('u528');
gv_vAlignTable['u528'] = 'center';
var u935 = document.getElementById('u935');

var u401 = document.getElementById('u401');

var u407 = document.getElementById('u407');

u407.style.cursor = 'pointer';
if (bIE) u407.attachEvent("onclick", Clicku407);
else u407.addEventListener("click", Clicku407, true);
function Clicku407(e)
{

if (true) {

	SetPanelVisibilityu519("");

}

}

var u1067 = document.getElementById('u1067');
gv_vAlignTable['u1067'] = 'top';
var u1066 = document.getElementById('u1066');
gv_vAlignTable['u1066'] = 'center';
var u1065 = document.getElementById('u1065');

var u1064 = document.getElementById('u1064');

var u1063 = document.getElementById('u1063');
gv_vAlignTable['u1063'] = 'center';
var u1062 = document.getElementById('u1062');

u1062.style.cursor = 'pointer';
if (bIE) u1062.attachEvent("onclick", Clicku1062);
else u1062.addEventListener("click", Clicku1062, true);
function Clicku1062(e)
{

if (true) {

	SetPanelVisibilityu1072("");

}

}

var u1061 = document.getElementById('u1061');
gv_vAlignTable['u1061'] = 'center';
var u919 = document.getElementById('u919');

var u1069 = document.getElementById('u1069');

u1069.style.cursor = 'pointer';
if (bIE) u1069.attachEvent("onclick", Clicku1069);
else u1069.addEventListener("click", Clicku1069, true);
function Clicku1069(e)
{

if (true) {

	self.location.href="酒店客房订单_1.html" + GetQuerystring();

}

}

var u1068 = document.getElementById('u1068');

var u1784 = document.getElementById('u1784');
gv_vAlignTable['u1784'] = 'top';
var u934 = document.getElementById('u934');
gv_vAlignTable['u934'] = 'center';
var u1781 = document.getElementById('u1781');

u1781.style.cursor = 'pointer';
if (bIE) u1781.attachEvent("onclick", Clicku1781);
else u1781.addEventListener("click", Clicku1781, true);
function Clicku1781(e)
{

if (true) {

	self.location.href="退出会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u1781'] = 'top';
var u617 = document.getElementById('u617');

var u768 = document.getElementById('u768');

var u1789 = document.getElementById('u1789');

u1789.style.cursor = 'pointer';
if (bIE) u1789.attachEvent("onclick", Clicku1789);
else u1789.addEventListener("click", Clicku1789, true);
function Clicku1789(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u1789'] = 'top';
var u406 = document.getElementById('u406');
gv_vAlignTable['u406'] = 'center';
var u1057 = document.getElementById('u1057');
gv_vAlignTable['u1057'] = 'top';
var u1056 = document.getElementById('u1056');
gv_vAlignTable['u1056'] = 'center';
var u1055 = document.getElementById('u1055');

u1055.style.cursor = 'pointer';
if (bIE) u1055.attachEvent("onclick", Clicku1055);
else u1055.addEventListener("click", Clicku1055, true);
function Clicku1055(e)
{

if (true) {

	SetPanelVisibilityu1064("");

}

}

var u1054 = document.getElementById('u1054');
gv_vAlignTable['u1054'] = 'center';
var u30 = document.getElementById('u30');

var u1052 = document.getElementById('u1052');
gv_vAlignTable['u1052'] = 'center';
var u1051 = document.getElementById('u1051');

u1051.style.cursor = 'pointer';
if (bIE) u1051.attachEvent("onclick", Clicku1051);
else u1051.addEventListener("click", Clicku1051, true);
function Clicku1051(e)
{

if (true) {

	SetPanelVisibilityu1064("");

}

}

var u918 = document.getElementById('u918');
gv_vAlignTable['u918'] = 'center';
var u1059 = document.getElementById('u1059');
gv_vAlignTable['u1059'] = 'center';
var u1058 = document.getElementById('u1058');

var u630 = document.getElementById('u630');

var u933 = document.getElementById('u933');

var u616 = document.getElementById('u616');

var u541 = document.getElementById('u541');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
if (window.OnLoad) OnLoad();
