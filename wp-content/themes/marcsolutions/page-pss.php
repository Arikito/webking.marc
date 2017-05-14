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
			<?php the_title( '<h1 class="image-page-header__title">', '</h1>' )?>
			<?php if(get_post_meta(get_the_ID(), 'page_description', true)) : ?>
				<div class="image-page-header__subtitle"><?php echo get_post_meta(get_the_ID(), 'page_description', true); ?></div>
			<?php endif; ?>
		</div>
	</section>
	<div id="primary" class="content-area product-page">
		<main id="main" class="site-main" role="main">
			<section class="benefits">
				<p class="products__description section-description">Nullam sit amet odio eu est aliquet euismod a a urna. Nullam sit amet odio eu</p>
				<div class="section-separator"></div>
				<div class="benefits__list snake">
					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
						<div class="benefits__item-number snake__number">1</div>
						<div class="benefits__item-content" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-once="true">
							<div class="benefits__item-icon svg-icon" data-icon="share">
								<img src="<?php echo get_template_directory_uri(); ?>/img/rem_rer.png" alt="" />
							</div>
							<div class="benefits__item-info">
								<div class="benefits__item-title">Risk Execution Report</div>
								<div class="benefits__item-description">
									<p>Find and remediate SoD conflict and critical access violations. Analyze at the lowest authorization level</p>
									<ul>
										<li>Connect multiple SAP systems to ACM and perform online Risk Analysis to real-time reports.</li>
										<li>Prepare SoD, Critical access reports at User and Role level and publish.</li>
										<li>Reports are generated at blazing speed and stored in database and can be reviewed at later stages.</li>
										<li>Reports are generated at blazing speed and stored in database and can be reviewed at later stages.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
						<div class="benefits__item-number snake__number">2</div>
						<div class="benefits__item-content" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-once="true">
							<div class="benefits__item-icon svg-icon" data-icon="filter">
								<img src="<?php echo get_template_directory_uri(); ?>/img/rem_ds.png" alt="" />
							</div>
							<div class="benefits__item-info">
								<div class="benefits__item-title">Define Scope</div>
								<div class="benefits__item-description">
									<p>Perform risk analysis simulation before applying changes on user authorizations</p>
									<ul>
										<li>Select users and roles to be added, perform simulation to know future potential conflicts.</li>
										<li>Avoid introducing new SoD risk in SAP system by performing risk simulation</li>
										<li>Works as a preventive control.</li>
										<li>Possible to perform mass risk simulations.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
						<div class="benefits__item-number snake__number">3</div>
						<div class="benefits__item-content" data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-once="true">
							<div class="benefits__item-icon svg-icon" data-icon="time">
								<img src="<?php echo get_template_directory_uri(); ?>/img/rem_ds2.png" alt="" />
							</div>
							<div class="benefits__item-info">
								<div class="benefits__item-title">Define Scope</div>
								<div class="benefits__item-description">
									<p>Perform the risk analysis to view the user risk spread across the systems. Example : Shopping Cart Create (SRM) / PO Approval (ECC)</p>
									<ul>
										<li>Authorizations are distributed to several systems, example R/3 & SRM</li>
										<li>ACM helps to find the risks associated a user ID that spread across systems.</li>
										<li>Very few applications in the market are able to report the cross system analysis.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
						<div class="benefits__item-number snake__number">4</div>
						<div class="benefits__item-content" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-once="true">
							<div class="benefits__item-icon svg-icon" data-icon="puzzle">
								<img src="<?php echo get_template_directory_uri(); ?>/img/acm_int.png" alt="" />
							</div>
							<div class="benefits__item-info">
								<div class="benefits__item-title">Integration with ACM</div>
								<div class="benefits__item-description">
									<p>Perform Risk Analysis on Organizational Level.</p>
									<ul>
										<li>Organizational rule analysis can be enabled to avoid false positives.</li>
										<li>Flexible option of Mass upload, import of organizational rules in to ACM via excel.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
						<div class="benefits__item-number snake__number">5</div>
						<div class="benefits__item-content" data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-once="true">
							<div class="benefits__item-icon svg-icon" data-icon="board">
								<img src="<?php echo get_template_directory_uri(); ?>/img/cam_dash.png" alt="" />
							</div>
							<div class="benefits__item-info">
								<div class="benefits__item-title">REM Dashboard</div>
								<div class="benefits__item-description">
									<p>Master data for ACM are risk defenitions and are input for running risk analysis.</p>
									<ul>
										<li>Define SoD Conflict risks, Critical access risks in rulebook</li>
										<li>Direct upload of risks , rules in to application</li>
										<li>Best practice Rulebook has been incorporated.</li>
										<li>Audit trial for Master data changes</li>
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
