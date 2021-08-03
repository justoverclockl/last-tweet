/*
 * This file is part of justoverclock/last-tweet.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import Widget from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';

export default class LastTweetWidget extends Widget {
    className() {
        return 'LastTweetWidget';
    }

    icon() {
        // Widget icon.
        return 'fab fa-twitter';
    }

    title() {
        // Widget title.
        return app.translator.trans('justoverclock-last-tweet.forum.widget-title');
    }

    content() {
        const isLoading = app.translator.trans('justoverclock-last-tweet.forum.loading');
        const itemToFetch = app.forum.attribute('tweet_number');
        return (
            <div className="LastTweetWidget-content">
                <div class="tweet-item">
                    <a class="twitter-timeline"
                        href="https://twitter.com/flarumitalia"
                        data-theme="light"
                        data-link-color="#2393aa"
                        data-chrome="noheader nofooter noborders noscrollbar transparent"
                        data-tweet-limit="${itemToFetch}"
                        aria-polite="polite">${isLoading}
                    </a>
                </div>
            </div>
        );
    }
}
