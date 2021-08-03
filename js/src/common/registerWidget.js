import Widgets from 'flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets';

import LastTweetWidget from './components/LastTweetWidget';

export default function (app) {
    new Widgets()
        .add({
            key: 'LastTweet',
            component: LastTweetWidget,
            isDisabled: false,
            isUnique: true,
            placement: 'end',
            position: 1,
        })
        .extend(app, 'justoverclock-last-tweet');
}
