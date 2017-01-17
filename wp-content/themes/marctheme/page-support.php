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
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			<section class="support">
				<div class="container">
					<p class="support__title">Support</p>
					<div class="row">
						<div class="col-md-6">
							<div class="support__block box-shadow">
								<div class="row">
									<div class="col-sm-4 support__image">
										<img src="<?php echo get_template_directory_uri(); ?>/img/product_icons/6.svg" alt="img">
									</div>
									<div class="col-sm-8 support__descr">
										<p class="support__descr-title">Videos</p>
										<p class="support__descr-text">Watch out help, how-to videos prepared on MARC application features.</p>
										<a href="<?php echo get_permalink( get_page_by_title( 'Videos' ) ) ?>" class="support__descr-btn btn btn-primary"><?php _e("Read more")?> <span class="icon-keyboard_arrow_right"></span></a>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="support__block box-shadow">
								<div class="row">
									<div class="col-sm-4 support__image">
										<img src="<?php echo get_template_directory_uri(); ?>/img/product_icons/7.svg" alt="img">
									</div>
									<div class="col-sm-8 support__descr">
										<p class="support__descr-title">Ideas</p>
										<p class="support__descr-text">Do you have new ideas about new features to be included in MARC?</p>
										<a href="https://marc4grc.freshdesk.com/support/discussions/forums/8000042725" target="_blank" class="support__descr-btn btn btn-primary"><?php _e("Read more")?> <span class="icon-keyboard_arrow_right"></span></a>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="support__block box-shadow">
								<div class="row">
									<div class="col-sm-4 support__image">
										<img src="<?php echo get_template_directory_uri(); ?>/img/product_icons/8.svg" alt="img">
									</div>
									<div class="col-sm-8 support__descr">
										<p class="support__descr-title">Support</p>
										<p class="support__descr-text">Log a ticket or write to support@marc4grc.com to log a ticket</p>
										<a href="https://marc4grc.freshdesk.com/support/tickets/new" class="support__descr-btn btn btn-primary" target="_blank"><?php _e("Read more")?> <span class="icon-keyboard_arrow_right"></span></a>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="support__block box-shadow">
								<div class="row">
									<div class="col-sm-4 support__image">
										<img src="<?php echo get_template_directory_uri(); ?>/img/product_icons/9.svg" alt="img">
									</div>
									<div class="col-sm-8 support__descr">
										<p class="support__descr-title">Forums</p>
										<p class="support__descr-text">Access M.A.R.C forums and participate in all the discussion</p>
										<a href="https://marc4grc.freshdesk.com/support/discussions" target="_blank" class="support__descr-btn btn btn-primary"><?php _e("Read more")?> <span class="icon-keyboard_arrow_right"></span></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
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
