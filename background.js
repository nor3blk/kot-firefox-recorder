browser.runtime.onMessage.addListener((_msg, _sender, sendResponse) => {
    sendResponse(true);
});
