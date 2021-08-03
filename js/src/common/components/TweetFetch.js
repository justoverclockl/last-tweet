export default function () {
    $(document).ready(function () {
        var target = document.querySelector('.twitter-item');

        var config = { attributes: true, childList: true, characterData: true };

        /*observer.observe(target, config);*/

        function LoadTweet(item) {
            if ($('.twitter-item').hasClass('Loaded')) {
                // do nothing
            } else {
                console.log('LoadTweet Fired ' + item);

                var timelineId = item;
                var media =
                    $('#' + timelineId)
                        .contents()
                        .find('.timeline-Tweet-media img')
                        .attr('src') || '';
                var tweet =
                    $('#' + timelineId)
                        .contents()
                        .find('.timeline-Tweet-text')
                        .html() || '';
                if (tweet) {
                    $('.twitter-item').html('').html(tweet);
                }
                $('.twitter-item').addClass('Loaded'); // prevent loop
            }
        }
    });
}
