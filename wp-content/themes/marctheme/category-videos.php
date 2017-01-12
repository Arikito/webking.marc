<?php
/**
 * The template for displaying videos archive page
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package marctheme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
	<?php
	?>
	<section class="image-page-header image-page-header_videos container-fluid">
		<?php the_archive_title( '<h1 class="image-page-header__title">', ' <span class="image-page-header__quantity">()</span></h1>' )?> </h1>
		<?php the_archive_description( '<p class="image-page-header__subtitle">', '</p>' );?>
	</section>
	<?php if ( have_posts() ) :?>

			<?php
			$count = wp_count_posts('videos');
				var_dump($count);
			/* Start the Loop */
			while ( have_posts() ) : the_post();

				/*
				 * Include the Post-Format-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
				 */
				get_template_part( 'template-parts/content', get_post_format() );

			endwhile;

			the_posts_navigation();

		else :

			get_template_part( 'template-parts/content', 'none' );

		endif; ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
