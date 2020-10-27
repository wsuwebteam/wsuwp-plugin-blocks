<?php namespace WSUWP\Plugin\Blocks; ?>

<div
	<?php if (!empty($atts['wrapper_class'])) : ?> class="<?php echo esc_attr( $atts['wrapper_class']); ?>"<?php endif; ?>
	<?php if (!empty($atts['id'])) : ?> id="<?php echo esc_attr( $atts['id'] ); ?>"<?php endif; ?>
>
	<code class="not-supported">This video type is not currently supported. Please <a href="http://go.wsu.edu/webportal">contact web support</a> for help.</code>
</div>

<style>
	.not-supported {
		display: none;
		margin-top: 20px;
		margin-bottom: 20px;
		padding: 20px;
		background: whitesmoke;
	}

	.not-supported::after {
		content: "This message is only being displayed to users who are logged in.";
		display: block;
		font-size: 12px;
		font-style: italic;
		margin-top: 20px;
		color: #505050;
	}

	.logged-in .not-supported {
		display: block;
	}
</style>