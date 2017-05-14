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

	<section id="page-title" class="page-title container-fluid">
		<div class="row">
			<div class="container">
				<div class="col-md-12">
					<h1 class="page-title__title"><?php the_title(); ?></h1>
				</div>
				<?php has_post_thumbnail()?the_post_thumbnail():null; ?>
				<div class="col-md-8 col-md-offset-2 hidden">
					<p class="page-title__descr">Reliable Compliance Solutions made Accessible. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>
				</div>
			</div>
		</div>
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
