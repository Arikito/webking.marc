<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package marctheme
 */

get_header(); ?>
	<section class="image-page-header image-page-header_contacts container-fluid">
		<?php the_title( '<h1 class="image-page-header__title">', '</h1>' )?>
		<?php if(get_post_meta(get_the_ID(), 'page_description', true)){?>
			<p class="image-page-header__subtitle"><?php echo get_post_meta(get_the_ID(), 'page_description', true); ?></p>
		<?php }?>
	</section>
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<?php
			while ( have_posts() ) : the_post();

				get_template_part( 'template-parts/content', 'page' );

				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;

			endwhile; // End of the loop.
			?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
