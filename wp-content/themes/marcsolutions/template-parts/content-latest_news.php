<?php
/**
 * Template part for displaying posts
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package marcsolutions
 */

?>
<article class="latest_news__item news_item">
	<div class="news_item__thumb">
		<?php if ( has_post_thumbnail() ) :
			the_post_thumbnail();
		else :
			echo '<img class="news_item__thumb_placeholder" src="'.get_template_directory_uri().'/img/Latest-news-2.jpg" />';
		endif; ?>
	</div>
	<div class="news_item__title-table">
		<?php the_title( '<a href="'.esc_url( get_permalink() ).'" class="news_item__title" rel="bookmark">', '</a>' );?>
		<div class="news_item__date"><?php echo get_the_date(__( 'M j, Y' )); ?></div>
	</div>
	<!-- <p class="news_item__description"><?php echo get_the_excerpt();?></p> -->
	<!-- <a href="<?php echo esc_url( get_permalink() ) ?>" class="btn btn-primary">Learn more</a> -->
</article>