browser.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
    if (msg === 'NOT_LOGGED_IN') {
        document.getElementById('notice').innerHTML = '<div class="notification is-info"><a href="https://s3.kingtime.jp/independent/recorder/personal/" target="blank">Myレコーダー</a>から事前のログインとページの再読み込みをしてください。</div>'
    }

    sendResponse(true);
});
