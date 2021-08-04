import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import registerWidget from '../common/registerWidget';
import TweetFetch from '../common/components/TweetFetch';
import IndexPage from 'flarum/forum/components/IndexPage';

app.initializers.add('justoverclock/last-tweet', () => {
    registerWidget(app);
});
extend(IndexPage.prototype, ['oncreate', 'onbeforeupdate'], TweetFetch);
