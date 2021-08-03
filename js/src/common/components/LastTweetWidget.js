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
  oncreate(vnode) {
    super.oncreate(vnode);
    $('.twitter-timeline').attr('data-tweet-limit', app.forum.attribute('tweet_number') || '2');
    $('.twitter-timeline').attr('data-theme', app.forum.attribute('theme') || 'light');
    $('.twitter-timeline').attr('href', app.forum.attribute('twhref') || 'https://twitter.com/flarum');
  }
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
      return (
            <div className="LastTweetWidget-content">
                <div class="tweet-item">
                    <a class="twitter-timeline"
                        data-link-color="#2393aa"
                        data-chrome="noheader nofooter noborders noscrollbar transparent"
                        aria-polite="polite">${isLoading}
                    </a>
                </div>
            </div>
        );
    }
}
