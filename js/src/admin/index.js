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
    });
});
