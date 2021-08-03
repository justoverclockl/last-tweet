import registerWidget from '../common/registerWidget';

app.initializers.add('justoverclock/last-tweet', () => {
    registerWidget(app);
    app.extensionData
      .for('justoverclock-last-tweet')
      .registerSetting({
        setting: 'justoverclock-last-tweet.tweet_number',
        name: 'tweet_number',
        label: app.translator.trans('justoverclock-last-tweet.admin.tweet_number'),
        help: app.translator.trans('justoverclock-last-tweet.admin.tweet_number-help'),
        type: 'number',
    })
      .registerSetting({
        setting: 'justoverclock-last-tweet.theme',
        name: 'theme',
        label: app.translator.trans('justoverclock-last-tweet.admin.theme'),
        help: app.translator.trans('justoverclock-last-tweet.admin.theme-help'),
        type: 'text',
      })
      .registerSetting({
        setting: 'justoverclock-last-tweet.twhref',
        name: 'twhref',
        label: app.translator.trans('justoverclock-last-tweet.admin.profile'),
        help: app.translator.trans('justoverclock-last-tweet.admin.profile-help'),
        type: 'URL',
      });
});
