
var PageName = 'xxx备份xxx';
var PageId = 'p2fb7a2c97fd54a848bb6b7e17759b854'
var PageUrl = 'xxx备份xxx.html'
document.title = 'xxx备份xxx';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

if (window.OnLoad) OnLoad();
