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
							<div class="benefits__item-icon svg-icon" data-icon="key">
								<img src="<?php echo get_template_directory_uri(); ?>/img/pam_pa.png" alt="" />
							</div>
							<div class="benefits__item-info">
								<div class="benefits__item-title">Privilege Access</div>
								<div class="benefits__item-description">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</p>
									<ul>
										<li>View SoD conflict information / Statistics on interactive dashboards.</li>
										<li>Historical information view in dash boards.</li>
										<li>Export results option to PDF, EXCEL files and as a JPG.</li>
										<li>Summary drill down option like risks by business process, criticality ,number of active uses, expired users of a selected system.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
						<div class="benefits__item-number snake__number">2</div>
						<div class="benefits__item-content" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-once="true">
							<div class="benefits__item-icon svg-icon" data-icon="settings">
								<img src="<?php echo get_template_directory_uri(); ?>/img/pam_ec.png" alt="" />
							</div>
							<div class="benefits__item-info">
								<div class="benefits__item-title">Easy Configuration</div>
								<div class="benefits__item-description">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</p>
									<ul>
										<li>View SoD conflict information / Statistics on interactive dashboards.</li>
										<li>Historical information view in dash boards.</li>
										<li>Export results option to PDF, EXCEL files and as a JPG.</li>
										<li>Summary drill down option like risks by business process, criticality ,number of active uses, expired users of a selected system.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
						<div class="benefits__item-number snake__number">3</div>
						<div class="benefits__item-content" data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-once="true">
							<div class="benefits__item-icon svg-icon" data-icon="chain">
								<img src="<?php echo get_template_directory_uri(); ?>/img/pam_wf.png" alt="" />
							</div>
							<div class="benefits__item-info">
								<div class="benefits__item-title">Workflow</div>
								<div class="benefits__item-description">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</p>
									<ul>
										<li>View SoD conflict information / Statistics on interactive dashboards.</li>
										<li>Historical information view in dash boards.</li>
										<li>Export results option to PDF, EXCEL files and as a JPG.</li>
										<li>Summary drill down option like risks by business process, criticality ,number of active uses, expired users of a selected system.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
						<div class="benefits__item-number snake__number">4</div>
						<div class="benefits__item-content" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-once="true">
							<div class="benefits__item-icon svg-icon" data-icon="mail">
								<img src="<?php echo get_template_directory_uri(); ?>/img/pam_noty.png" alt="" />
							</div>
							<div class="benefits__item-info">
								<div class="benefits__item-title">Notification</div>
								<div class="benefits__item-description">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</p>
									<ul>
										<li>View SoD conflict information / Statistics on interactive dashboards.</li>
										<li>Historical information view in dash boards.</li>
										<li>Export results option to PDF, EXCEL files and as a JPG.</li>
										<li>Summary drill down option like risks by business process, criticality ,number of active uses, expired users of a selected system.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
						<div class="benefits__item-number snake__number">5</div>
						<div class="benefits__item-content" data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-once="true">
							<div class="benefits__item-icon svg-icon" data-icon="zoom">
								<img src="<?php echo get_template_directory_uri(); ?>/img/pam_rtacl.png" alt="" />
							</div>
							<div class="benefits__item-info">
								<div class="benefits__item-title">Review Transaction and Change Loge</div>
								<div class="benefits__item-description">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</p>
									<ul>
										<li>View SoD conflict information / Statistics on interactive dashboards.</li>
										<li>Historical information view in dash boards.</li>
										<li>Export results option to PDF, EXCEL files and as a JPG.</li>
										<li>Summary drill down option like risks by business process, criticality ,number of active uses, expired users of a selected system.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
						<div class="benefits__item-number snake__number">6</div>
						<div class="benefits__item-content" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-once="true">
							<div class="benefits__item-icon svg-icon" data-icon="chart">
								<img src="<?php echo get_template_directory_uri(); ?>/img/pam_dash.png" alt="" />
							</div>
							<div class="benefits__item-info">
								<div class="benefits__item-title">Dashboards</div>
								<div class="benefits__item-description">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</p>
									<ul>
										<li>View SoD conflict information / Statistics on interactive dashboards.</li>
										<li>Historical information view in dash boards.</li>
										<li>Export results option to PDF, EXCEL files and as a JPG.</li>
										<li>Summary drill down option like risks by business process, criticality ,number of active uses, expired users of a selected system.</li>
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
