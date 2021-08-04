export default function () {
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
            $('.twitter-item').addClass('Loaded');
        }
    }
}
