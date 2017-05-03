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
	<div class="col-md-3">
		<?php if( has_post_thumbnail() ) :
			the_post_thumbnail('full', array('class' => 'blog-list__thumbnail'));
		else : ?>
			<img src="<?php echo get_template_directory_uri(); ?>/img/videos-thumb.png" alt="" class="blog-list__thumbnail">
		<?php endif; ?>
	</div>
	<div class="col-md-9">
		<h1 class="blog-list__title"><?php the_title( '<a href="' . esc_url( get_permalink() ) . '" class="updates-list__title" rel="bookmark">', '</a>' );?></h1>
		<div class="blog-list__subtitle">
			<div class="blog-list__date"><?php _e('Posted'); ?> <?php echo get_the_date(__( 'M j, Y' )); ?> <?php _e('by'); ?> <?php the_author_posts_link(); ?> </div>
		</div>
		<div class="blog-list__description">
			<?php if(has_excerpt()) :
				the_excerpt();
			else :
				do_excerpt(get_the_content(), 100);
			endif; ?>
			<a href="<?php echo get_permalink(); ?>" class="blog-list__read-more"><?php _e("Read more")?></a>
		</div>
	</div>
</article>