<?php
/**
 * Template part for displaying posts
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package marctheme
 */

?>

<article class="updates-list__item clearfix">
	<div class="updates-list__image-block col-sm-4">
		<?php if(has_post_thumbnail()) :
			the_post_thumbnail();
		else :?>
			<img src="<?php echo get_template_directory_uri(); ?>/img/videos-thumb.png" alt="img">
		<?php endif; ?>
	</div>
	<div class="updates-list__descr col-sm-8">
		<?php the_title( '<a href="'.esc_url( get_permalink() ).'" class="updates-list__title" rel="bookmark">', '</a>' );?>
		<div class="updates-list__descr-text">
			<?php the_excerpt();?>
		</div>
		<div class="updates-list__footer">
			<p class="updates-list__date"><?php marctheme_posted_on(); ?></p>
			<div class="updates-list__footer-decor-line"></div>
			<a href="<?php echo get_permalink(); ?>" class="updates-list__btn btn btn-primary"><?php _e("Read more")?> <span class="icon-keyboard_arrow_right"></span></a>
		</div>
	</div>
</article>