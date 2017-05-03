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

get_header();
global $post;
$post_slug = $post->post_name; ?>

	<section class="image-page-header image-page-header_<?php echo $post_slug; ?> container-fluid">
		<div class="row">
			<h1 class="image-page-header__title">Product</h1>
			<?php the_title( '<div class="image-page-header__subtitle">', '</div>' )?>
		</div>
	</section>
	<div id="primary" class="content-area product-page">
		<main id="main" class="site-main" role="main">
			<section class="benefits">
				<div class="benefits__list snake">
					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
						<div class="benefits__item-number snake__number">1</div>
						<div class="benefits__item-content" data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-once="true">
							<div class="benefits__item-icon svg-icon" data-icon="loupe">
								<img src="<?php echo get_template_directory_uri(); ?>/img/icm_mc.png" alt="" />
							</div>
							<div class="benefits__item-info">
								<div class="benefits__item-title">Monitor Configurations</div>
								<div class="benefits__item-description">
									<p>Demonstrates the continued effectiveness of application Controls</p>
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
					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
						<div class="benefits__item-number snake__number">2</div>
						<div class="benefits__item-content" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-once="true">
							<div class="benefits__item-icon svg-icon" data-icon="file">
								<img src="<?php echo get_template_directory_uri(); ?>/img/icm_mmdc.png" alt="" />
							</div>
							<div class="benefits__item-info">
								<div class="benefits__item-title">Monitor Master Data Changes</div>
								<div class="benefits__item-description">
									<p>Monitor changes to Master Data for suspicious activity Identifies unsual additions and deletions.</p>
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
					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
						<div class="benefits__item-number snake__number">3</div>
						<div class="benefits__item-content" data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-once="true">
							<div class="benefits__item-icon svg-icon" data-icon="meeting">
								<img src="<?php echo get_template_directory_uri(); ?>/img/icm_co.png" alt="" />
							</div>
							<div class="benefits__item-info">
								<div class="benefits__item-title">Control Ownership</div>
								<div class="benefits__item-description">
									<p>Enforce governance through control owner and workflow</p>
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
					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
						<div class="benefits__item-number snake__number">4</div>
						<div class="benefits__item-content" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-once="true">
							<div class="benefits__item-icon svg-icon" data-icon="case">
								<img src="<?php echo get_template_directory_uri(); ?>/img/icm_cс.png" alt="" />
							</div>
							<div class="benefits__item-info">
								<div class="benefits__item-title">Control Catalogue</div>
								<div class="benefits__item-description">
									<p>Create, document control catalogue in ICM.</p>
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
					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
						<div class="benefits__item-number snake__number">5</div>
						<div class="benefits__item-content" data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-once="true">
							<div class="benefits__item-icon svg-icon" data-icon="clock">
								<img src="<?php echo get_template_directory_uri(); ?>/img/icm_ccm.png" alt="" />
							</div>
							<div class="benefits__item-info">
								<div class="benefits__item-title">Continuous Control Monitoring</div>
								<div class="benefits__item-description">
									<p>Monitors changes to Master Data for suspicious activity Identifies unusual additions and deletions.</p>
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
					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
						<div class="benefits__item-number snake__number">6</div>
						<div class="benefits__item-content" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-once="true">
							<div class="benefits__item-icon svg-icon" data-icon="chart">
								<img src="<?php echo get_template_directory_uri(); ?>/img/acm_dash.png" alt="" />
							</div>
							<div class="benefits__item-info">
								<div class="benefits__item-title">Dashboards</div>
								<div class="benefits__item-description">
									<p>Interactive dashboards to have overview on available controls by process, control failure stats etc.</p>
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
					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
						<div class="benefits__item-number snake__number">7</div>
						<div class="benefits__item-content" data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-once="true">
							<div class="benefits__item-icon svg-icon" data-icon="book">
								<img src="<?php echo get_template_directory_uri(); ?>/img/acm_crb.png" alt="" />
							</div>
							<div class="benefits__item-info">
								<div class="benefits__item-title">Manual control testing</div>
								<div class="benefits__item-description">
									<p>Test, assess all of your manual controls via ICM, thus avoid using excel based manual control testing burden.</p>
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
		</main><!-- #main -->
	</div><!-- #primary -->
<?php
get_sidebar();
get_footer();
