<div class="<?php echo esc_attr($atts['wrapper_classes']); ?>">
	<?php if ( !empty($atts['label'])) : ?>
		<div class="wsu-c-stat__label">
			<?php echo $atts['label']; ?>
		</div>
	<?php endif; ?>

	<?php if ( !empty($atts['value'])) : ?>
		<div class="wsu-c-stat__value">
			<?php echo $atts['value']; ?>
		</div>
	<?php endif; ?>

	<?php if ( !empty($atts['description'])) : ?>
		<div class="wsu-c-stat__description"><?php echo $atts['description']; ?></div>
	<?php endif; ?>
</div>