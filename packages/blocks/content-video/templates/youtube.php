<?php namespace WSUWP\Plugin\Blocks; ?>
<div
	<?php if (!empty($atts['wrapper_class'])) : ?> class="<?php echo esc_attr( $atts['wrapper_class']); ?>"<?php endif; ?>
	<?php if (!empty($atts['id'])) : ?> id="<?php echo esc_attr( $atts['id'] ); ?>"<?php endif; ?>
>
	<div id="player"></div>
</div>

<script>
	// 2. This code loads the IFrame Player API code asynchronously.
	var tag = document.createElement('script');

	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	// 3. This function creates an <iframe> (and YouTube player)
	//    after the API code downloads.
	var player;
	
	function onYouTubeIframeAPIReady() {
		player = new YT.Player('player', {
			height: '300px',
			width: '100%',
			videoId: '<?php echo esc_js($atts['video_id']); ?>',
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
			},
		});
	}

	// 4. The API will call this function when the video player is ready.
	function onPlayerReady(event) {
		// event.target.playVideo();
	}

	// 5. The API calls this function when the player's state changes.
	//    The function indicates that when playing a video (state=1),
	//    the player should play for six seconds and then stop.
	var done = false;

	function onPlayerStateChange(event) {
		if (event.data == YT.PlayerState.PLAYING && !done) {
			setTimeout(stopVideo, 6000);
			done = true;
		}
	}

	function stopVideo() {
		player.stopVideo();
	}
</script>