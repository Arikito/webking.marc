<?php
/**
 * Template part for displaying posts
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package marctheme
 * @since 1.0
 * @version 1.0
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<section class="article-title container-fluid">
		<div class="container">
			<?php the_title( '<h1 class="article-title__tilte">', '</h1>' ); ?>
		</div>
	</section>
	<section class="article-content">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 article-content__date-block">
					<div class="article-content__date"><span class="icon-clock blog-list__date-icon"></span><?php marctheme_posted_on(); ?></div>
					<div class="article-content__decor-line"></div>
					<div class="article-content__category"><?php echo get_the_category(get_the_ID())[0]->cat_name;?></div>
				</div>
			</div>
		</div>
		<div class="article-content__content">
			<div class="container">
				<?php the_content(); ?>
			</div>
		</div>
	</section>

</article><!-- #post-## -->