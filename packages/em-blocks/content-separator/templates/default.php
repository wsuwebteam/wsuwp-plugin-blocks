
<?php if (!empty($atts['is_hatched']) && 'default' !== $atts['is_hatched']) : ?>

    <h1>Nic is here!</h1>

<?php endif; ?>

<hr class="wsu-c-separator<?php if (!empty($atts['is_hatched']) && 'default' !== $atts['is_hatched']) : ?> wsu-c-separator--isHatched<?php endif; ?><?php if (!empty($atts['show_more_indicator'])  && 'default' != $atts['show_more_indicator']) : ?> wsu-c-separator--showMoreIndicator<?php endif; ?>" />