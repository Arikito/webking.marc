<?php
/**
 * Template part for displaying posts
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package marctheme
 */

?>
<div class="col-sm-6 col-md-4">
	<article id="post-<?php the_ID(); ?>" class="videos-list__item">
			<?php if( has_post_thumbnail() ) :
				$default_attr = array(
					'class' => 'videos-list__thumb'
				);
				the_post_thumbnail('full', $default_attr);
			else : ?>
				<img src="<?php echo get_template_directory_uri(); ?>/img/videos-thumb.png" alt="" class="videos-list__thumb">
			<?php endif; ?>
			<h2 class="videos-list__title"><?php	the_title( '<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a>' );?></h2>
			<div class="videos-list__item-footer">
				<a class="videos-list__item-category" href="#">Main</a>
				<div class="videos-list__views"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> 875</div>
			</div>
	</article>
</div>