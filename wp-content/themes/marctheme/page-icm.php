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
			<?php
			while ( have_posts() ) : the_post(); ?>
				<section class="page-title container-fluid">
					<div class="container">
						<h1 class="page-title__title">Internal Control Monitor <span class="page-title__short-title">(ICM)</span></h1>
						<div><img class="page-title__image" src="<?php echo get_template_directory_uri(); ?>/img/illustrations/icm.svg" alt="image" /></div>
					</div>
				</section>
				<section class="prod-cont-item prod-cont-item_type_right-image" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<p class="prod-cont-item__descr-title">Monitor Configurations</p>
							</div>
							<div class="col-md-4 col-md-push-8">
								<div class="prod-cont-item__descr-image-block">
									<div class="prod-cont-item__descr-image svg-icon" data-icon="loupe">
										<img src="<?php echo get_template_directory_uri(); ?>/img/icm_mc.png" alt="loupe icon" />
									</div>
								</div>
							</div>
							<div class="col-md-8 col-md-pull-4">
								<div class="prod-cont-item__descr">
									<div class="prod-cont-item__descr-text">
										Demonstrates the continued effectiveness of application Controls
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="prod-cont-item prod-cont-item_type_left-image" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<p class="prod-cont-item__descr-title">Monitor Master Data Changes</p>
							</div>
							<div class="col-md-4">
								<div class="prod-cont-item__descr-image-block">
									<div class="prod-cont-item__descr-image svg-icon" data-icon="file">
										<img src="<?php echo get_template_directory_uri(); ?>/img/icm_mmdc.png" alt="file icon" />
									</div>
								</div>
							</div>
							<div class="col-md-8">
								<div class="prod-cont-item__descr">
									<div class="prod-cont-item__descr-text">
										Monitor changes to Master Data for suspicious activity Identifies unsual additions and deletions.
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="prod-cont-item prod-cont-item_type_right-image" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<p class="prod-cont-item__descr-title">Control Ownership</p>
							</div>
							<div class="col-md-4 col-md-push-8">
								<div class="prod-cont-item__descr-image-block">
									<div class="prod-cont-item__descr-image svg-icon" data-icon="meeting">
										<img src="<?php echo get_template_directory_uri(); ?>/img/icm_co.png" alt="meeting icon" />
									</div>
								</div>
							</div>
							<div class="col-md-8 col-md-pull-4">
								<div class="prod-cont-item__descr">
									<div class="prod-cont-item__descr-text">
										Enforce governance through control owner and workflow
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="prod-cont-item prod-cont-item_type_left-image" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<p class="prod-cont-item__descr-title">Control Catalogue</p>
							</div>
							<div class="col-md-4">
								<div class="prod-cont-item__descr-image-block">
									<div class="prod-cont-item__descr-image svg-icon" data-icon="case">
										<img src="<?php echo get_template_directory_uri(); ?>/img/icm_cс.png" alt="case icon" />
									</div>
								</div>
							</div>
							<div class="col-md-8">
								<div class="prod-cont-item__descr">
									<div class="prod-cont-item__descr-text">
										Create, document control catalogue in ICM.
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="prod-cont-item prod-cont-item_type_right-image" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<p class="prod-cont-item__descr-title">Continuous Control Monitoring</p>
							</div>
							<div class="col-md-4 col-md-push-8">
								<div class="prod-cont-item__descr-image-block">
									<div class="prod-cont-item__descr-image svg-icon" data-icon="clock">
										<img src="<?php echo get_template_directory_uri(); ?>/img/icm_ccm.png" alt="clock icon" />
									</div>
								</div>
							</div>
							<div class="col-md-8 col-md-pull-4">
								<div class="prod-cont-item__descr">
									<div class="prod-cont-item__descr-text">
										Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

										Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<?php //get_template_part( 'template-parts/content', 'page' );

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
