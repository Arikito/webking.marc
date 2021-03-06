<?php
/**
 * Template part for displaying posts
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package marctheme
 */

?>

<article id="post-<?php the_ID(); ?>" class="blog-list__item">
	<div class="col-md-6 col-lg-7">
		<?php if( has_post_thumbnail() ) :
			$default_attr = array(
				'class' => 'blog-list__thumbnail'
			);
			the_post_thumbnail('full', $default_attr);
		else : ?>
			<img src="<?php echo get_template_directory_uri(); ?>/img/videos-thumb.png" alt="" class="blog-list__thumbnail">
		<?php endif; ?>
	</div>
	<div class="col-md-6 col-lg-5">
		<div class="blog-list__title"><?php	the_title( '<a href="' . esc_url( get_permalink() ) . '" class="updates-list__title" rel="bookmark">', '</a>' );?></div>
		<div class="blog-list__description"><?php if(has_excerpt()){ do_excerpt(get_the_excerpt(), 100); }?></div>
		<div class="blog-list__footer">
			<div class="blog-list__date"><span class="icon-clock blog-list__date-icon"></span><?php marctheme_posted_on(); ?></div>
			<a href="<?php echo get_permalink(); ?>" class="blog-list__read-more btn btn-primary"><?php _e("Read more")?> <span class="icon-keyboard_arrow_right"></span></a>
		</div>
	</div>
</article>