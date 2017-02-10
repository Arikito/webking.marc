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
						<h1 class="page-title__title">Compliant Access Management <span class="page-title__short-title">(CAM)</span></h1>
						<div><img class="page-title__image" src="<?php echo get_template_directory_uri(); ?>/img/illustrations/cam.svg" alt="cam illustration" /></div>
					</div>
				</section>
				<section class="prod-cont-item prod-cont-item_type_right-image" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-once="true">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<p class="prod-cont-item__descr-title">Compliant User Provisioning</p>
							</div>
							<div class="col-md-4 col-md-push-8">
								<div class="prod-cont-item__descr-image-block">
									<div class="prod-cont-item__descr-image svg-icon" data-icon="process">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cam_cup.png" alt="process icon" />
									</div>
								</div>
							</div>
							<div class="col-md-8 col-md-pull-4">
								<div class="prod-cont-item__descr">
									<div class="prod-cont-item__descr-text">
										<p>Execute the risk analysis before provisioning any user changes in SAP to avoid introducing new risks.</p>
										<ul>
											<li>View SoD conflict information / Statistics on interactive dashboards.</li>
											<li>Historical information view in dash boards.</li>
											<li>Export results option to PDF, EXCEL files and as a JPG.</li>
											<li>Summary drill down option like risks by business process, criticality ,number of active uses, expired users of a selected system.
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="prod-cont-item prod-cont-item_type_left-image" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-once="true">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<p class="prod-cont-item__descr-title">Notifications Templates</p>
							</div>
							<div class="col-md-4">
								<div class="prod-cont-item__descr-image-block">
									<div class="prod-cont-item__descr-image svg-icon" data-icon="letter">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cam_nt.png" alt="letter icon" />
									</div>
								</div>
							</div>
							<div class="col-md-8">
								<div class="prod-cont-item__descr">
									<div class="prod-cont-item__descr-text">
										<p>Customize the approval, user notification emails according to the company Logo, signatures, policy information etc.</p>
										<ul>
											<li>View SoD conflict information / Statistics on interactive dashboards.</li>
											<li>Historical information view in dash boards.</li>
											<li>Export results option to PDF, EXCEL files and as a JPG.</li>
											<li>Summary drill down option like risks by business process, criticality ,number of active uses, expired users of a selected system.
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="prod-cont-item prod-cont-item_type_right-image" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-once="true">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<p class="prod-cont-item__descr-title">Dashboards</p>
							</div>
							<div class="col-md-4 col-md-push-8">
								<div class="prod-cont-item__descr-image-block">
									<div class="prod-cont-item__descr-image svg-icon" data-icon="board">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cam_dash.png" alt="board icon" />
									</div>
								</div>
							</div>
							<div class="col-md-8 col-md-pull-4">
								<div class="prod-cont-item__descr">
									<div class="prod-cont-item__descr-text">
										<p>Execute the risk analysis before provisioning any user changes in SAP to avoid introducing new risks.</p>
										<ul>
											<li>View SoD conflict information / Statistics on interactive dashboards.</li>
											<li>Historical information view in dash boards.</li>
											<li>Export results option to PDF, EXCEL files and as a JPG.</li>
											<li>Summary drill down option like risks by business process, criticality ,number of active uses, expired users of a selected system.
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="prod-cont-item prod-cont-item_type_left-image" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-once="true">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<p class="prod-cont-item__descr-title">Workflow</p>
							</div>
							<div class="col-md-4">
								<div class="prod-cont-item__descr-image-block">
									<div class="prod-cont-item__descr-image svg-icon" data-icon="chain">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cam_wf.png" alt="chain icon" />
									</div>
								</div>
							</div>
							<div class="col-md-8">
								<div class="prod-cont-item__descr">
									<div class="prod-cont-item__descr-text">
										<p>Execute the risk analysis before provisioning any user changes in SAP to avoid introducing new risks.</p>
										<ul>
											<li>View SoD conflict information / Statistics on interactive dashboards.</li>
											<li>Historical information view in dash boards.</li>
											<li>Export results option to PDF, EXCEL files and as a JPG.</li>
											<li>Summary drill down option like risks by business process, criticality ,number of active uses, expired users of a selected system.
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="prod-cont-item prod-cont-item_type_right-image" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-once="true">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<p class="prod-cont-item__descr-title">Password Reset / Unlock</p>
							</div>
							<div class="col-md-4 col-md-push-8">
								<div class="prod-cont-item__descr-image-block">
									<div class="prod-cont-item__descr-image svg-icon" data-icon="lock">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cam_pass.png" alt="lock icon" />
									</div>
								</div>
							</div>
							<div class="col-md-8 col-md-pull-4">
								<div class="prod-cont-item__descr">
									<div class="prod-cont-item__descr-text">
										<p>Execute the risk analysis before provisioning any user changes in SAP to avoid introducing new risks.</p>
										<ul>
											<li>View SoD conflict information / Statistics on interactive dashboards.</li>
											<li>Historical information view in dash boards.</li>
											<li>Export results option to PDF, EXCEL files and as a JPG.</li>
											<li>Summary drill down option like risks by business process, criticality ,number of active uses, expired users of a selected system.
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<?php // get_template_part( 'template-parts/content', 'page' );

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
