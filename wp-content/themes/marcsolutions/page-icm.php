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

 * @package marcsolutions

 */



get_header();

global $post;

$post_slug = $post->post_name; ?>



	<section class="image-page-header image-page-header_<?php echo $post_slug; ?> container-fluid">

		<div class="row">

			<?php the_title( '<h1 class="image-page-header__title">', '</h1>' )?>
			<?php if(get_post_meta(get_the_ID(), 'page_description', true)) : ?>
				<div class="image-page-header__subtitle"><?php echo get_post_meta(get_the_ID(), 'page_description', true); ?></div>
			<?php endif; ?>

		</div>

	</section>

	<div id="primary" class="content-area product-page">

		<main id="main" class="site-main" role="main">
			<section class="benefits">
				<p class="products__description section-description">Internal Control Monitor: monitors effectiveness of SAP Configuration, Master Data and Transactional key controls and report the discrepancies to business process owners.</p>
				<div class="section-separator"></div>

				<div class="benefits__list snake">

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">1</div>

						<div class="benefits__item-content" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="loupe">

								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/icm_mc.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Monitor Configurations</div>

								<div class="benefits__item-description">

									<p>Demonstrates the continued effectiveness of Application Controls</p>

									<ul>

										<li>Automated process for analysing sensitive SAP configurations and report exceptions.</li>

										<li>Example: Changes to three-way match configuration, PO release group changes.</li>

									</ul>

								</div>

							</div>

						</div>

					</div>

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">2</div>

						<div class="benefits__item-content" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="file">

								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/icm_mmdc.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Monitor Master Data Changes</div>

								<div class="benefits__item-description">

									<p>Monitor changes to Master Data for critical data elements. Identifies unusual additions and deletions.</p>

									<ul>

										<li>Connect multiple SAP systems to ICM and report critical data changes.</li>

										<li>Distribute reports to appropriate control owners and publish</li>

										</ul>

								</div>

							</div>

						</div>

					</div>

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">3</div>

						<div class="benefits__item-content" data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="meeting">

								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/icm_co.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Control Ownership</div>

								<div class="benefits__item-description">

									<p>Enforce governance through control owner and workflows.</p>

									<ul>

										<li>Report control deficiency to respective owners.</li>

										<li>Review issues/deficiencies and remediation status and report.</li>

									</ul>

								</div>

							</div>

						</div>

					</div>

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">4</div>

						<div class="benefits__item-content" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="case">

								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/icm_cc.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Control Catalogue</div>

								<div class="benefits__item-description">

									<p>Create, document control catalogue in ICM.</p>

									<ul>

										<li>ICM delivered with best practise controls in areas P2P, O2C, BASIC, FIN.</li>

										<li>Rapid deployment of ICM along with content reduce implementation time.</li>

									</ul>

								</div>

							</div>

						</div>

					</div>

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">5</div>

						<div class="benefits__item-content" data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="clock">

								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/icm_ccm.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Continuous Control Monitoring</div>

								<div class="benefits__item-description">

									<p>Automates changes to critical configuration settings. Identifies unusual additions and deletions.</p>

									<ul>

										<li>Connect multiple SAP systems to ICM and perform continuous check on configuration settings.</li>

										<li>Auto-generates red/green status per control and initiates alerts to appropriate control owners.</li>

									</ul>

								</div>

							</div>

						</div>

					</div>

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">6</div>

						<div class="benefits__item-content" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="chart">

								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/acm_dash.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Dashboards</div>

								<div class="benefits__item-description">

									<p>Interactive dashboards to have overview on available controls by process, control failure stats etc.</p>

									<ul>

										<li>Interactive dashboards to drilldown throughout control monitoring findings.</li>

										<li>Presents overall health status check of automated and manual control assessments.</li>

									</ul>

								</div>

							</div>

						</div>

					</div>

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">7</div>

						<div class="benefits__item-content" data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="book">

								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/acm_crb.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Manual control testing</div>

								<div class="benefits__item-description">

									<p>Facilitates execution of all of your manual controls via ICM, thus avoid using excel based manual control testing burden.</p>

									<ul>

										<li>Single source for definition of all automated and manual controls.</li>

										<li>Facilitates documentation and execution of control assessments and test procedures </li>

										<li>Provides insight to work papers, evidence of test executions and results.</li>

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

