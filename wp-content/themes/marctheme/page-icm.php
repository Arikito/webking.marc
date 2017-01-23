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
										<ul>
											<li>Connect multiple SAP systems to ACM and perform online Risk Analysis to real-time reports.</li>
											<li>Prepare SoD, Critical access reports at User and Role level and publish</li>
											<li>Reports are generated at blazing speed and stored in database and can be reviewed at later stages.</li>
											<li>Facilitate to run the access check at function level and SoD level, no separate risks to be defined in order to run at function level.</li>
										</ul>
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
										<ul>
											<li>Connect multiple SAP systems to ACM and perform online Risk Analysis to real-time reports.</li>
											<li>Prepare SoD, Critical access reports at User and Role level and publish</li>
											<li>Reports are generated at blazing speed and stored in database and can be reviewed at later stages.</li>
											<li>Facilitate to run the access check at function level and SoD level, no separate risks to be defined in order to run at function level.</li>
										</ul>
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
										<ul>
											<li>Connect multiple SAP systems to ACM and perform online Risk Analysis to real-time reports.</li>
											<li>Prepare SoD, Critical access reports at User and Role level and publish</li>
											<li>Reports are generated at blazing speed and stored in database and can be reviewed at later stages.</li>
											<li>Facilitate to run the access check at function level and SoD level, no separate risks to be defined in order to run at function level.</li>
										</ul>
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
										<ul>
											<li>Connect multiple SAP systems to ACM and perform online Risk Analysis to real-time reports.</li>
											<li>Prepare SoD, Critical access reports at User and Role level and publish</li>
											<li>Reports are generated at blazing speed and stored in database and can be reviewed at later stages.</li>
											<li>Facilitate to run the access check at function level and SoD level, no separate risks to be defined in order to run at function level.</li>
										</ul>
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
										Monitors changes to Master Data for suspicious activity Identifies unusual additions and deletions.
										<ul>
											<li>Connect multiple SAP systems to ACM and perform online Risk Analysis to real-time reports.</li>
											<li>Prepare SoD, Critical access reports at User and Role level and publish</li>
											<li>Reports are generated at blazing speed and stored in database and can be reviewed at later stages.</li>
											<li>Facilitate to run the access check at function level and SoD level, no separate risks to be defined in order to run at function level.</li>
										</ul>
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
								<p class="prod-cont-item__descr-title">Dashboards</p>
							</div>
							<div class="col-md-4">
								<div class="prod-cont-item__descr-image-block">
									<div class="prod-cont-item__descr-image svg-icon" data-icon="chart">
										<img src="<?php echo get_template_directory_uri(); ?>/img/acm_dash.png" alt="chart icon" />
									</div>
								</div>
							</div>
							<div class="col-md-8">
								<div class="prod-cont-item__descr">
									<div class="prod-cont-item__descr-text">
										Interactive dashboards to have overview on available controls by process, control failure stats etc.
										<ul>
											<li>Connect multiple SAP systems to ACM and perform online Risk Analysis to real-time reports.</li>
											<li>Prepare SoD, Critical access reports at User and Role level and publish</li>
											<li>Reports are generated at blazing speed and stored in database and can be reviewed at later stages.</li>
											<li>Facilitate to run the access check at function level and SoD level, no separate risks to be defined in order to run at function level.</li>
										</ul>
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
								<p class="prod-cont-item__descr-title">Manual control testing</p>
							</div>
							<div class="col-md-4 col-md-push-8">
								<div class="prod-cont-item__descr-image-block">
									<div class="prod-cont-item__descr-image svg-icon" data-icon="book">
										<img src="<?php echo get_template_directory_uri(); ?>/img/acm_crb.png" alt="book icon" />
									</div>
								</div>
							</div>
							<div class="col-md-8 col-md-pull-4">
								<div class="prod-cont-item__descr">
									<div class="prod-cont-item__descr-text">
										Test, assess all of your manual controls via ICM, thus avoid using excel based manual control testing burden.
											<ul>
											<li>Connect multiple SAP systems to ACM and perform online Risk Analysis to real-time reports.</li>
											<li>Prepare SoD, Critical access reports at User and Role level and publish</li>
											<li>Reports are generated at blazing speed and stored in database and can be reviewed at later stages.</li>
											<li>Facilitate to run the access check at function level and SoD level, no separate risks to be defined in order to run at function level.</li>
										</ul>
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
