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
			<section class="page-title container-fluid">
				<div class="container">
					<h1 class="page-title__title">Manage Access Risks and Controls</h1>
					<p class="page-title__descr">Reliable Compliance Solutions made Accessible</p>
					<div class="page-title__image" id="intro" data-icon="intro">
						<img src="<?php echo get_template_directory_uri(); ?>/img/illustrations/main.svg" alt="image" />
					</div>
				</div>
			</section>
			<section class="products-tabs container-fluid">
				<div class="container">
					<ul class="products-tabs__nav nav nav-tabs">
						<li class="products-tabs__nav-item active">
							<a class="products-tabs__nav-item-link" href="#access">Access Conflict Monitor</a>
						</li>
						<li class="products-tabs__nav-item">
							<a class="products-tabs__nav-item-link" href="#internal">Internal Control Monitor</a>
						</li>
						<li class="products-tabs__nav-item">
							<a class="products-tabs__nav-item-link" href="#risk">Risk Execution Monitor</a>
						</li>
						<li class="products-tabs__nav-item">
							<a class="products-tabs__nav-item-link" href="#compliant">Compliant Access Management</a>
						</li>
						<li class="products-tabs__nav-item">
							<a class="products-tabs__nav-item-link" href="#privielage">Privielage Access Management</a>
						</li>
					</ul>
					<div class="products-tabs__tab-content tab-content">
						<div class="products-tabs__tab-content-item tab-pane fade in active" id="access">
							<div class="row">
								<div class="col-md-6">
									<div class="products-tabs__descr-block clearfix">
										<p class="products-tabs__product-drscr-title">Access Conflict Monitor</p>
										<div class="products-tabs__descr-descr-text">
											<p>Find and remediate SoD conflict and critical access violations. Analyze at the lowest authorization level. Find and remediate SoD conflict and critical access violations. Analyze at the lowest authorization level</p>
											<p>Find and remediate SoD conflict and critical access violations. Analyze at the lowest authorization level</p>
											<ul>
												<li class="products-tabs__descr-list-item">Connect multiple SAP systems to ACM and perform online Risk Analysis to real-time reports.</li>
												<li class="products-tabs__descr-list-item">Prepare SoD, Critical access reports at User and Role level and publish</li>
												<li class="products-tabs__descr-list-item">Reports are generated at blazing speed and stored in database and can be reviewed at later stages.</li>
												<li class="products-tabs__descr-list-item">Facilitate to run the access check at function level and SoD level, no separate risks to be defined in order to run at function level.</li>
											</ul>
										</div>
										<a href="<?php echo get_permalink( get_page_by_title( 'acm' ) ) ?>" class="products-tabs__descr-btn btn btn-primary"><?php _e("Read more")?> <span class="icon-keyboard_arrow_right"></span></a>
									</div>
								</div>
								<div class="col-md-6">
									<div class="products-tabs__video-block"></div>
								</div>
							</div>
						</div>
						<div class="products-tabs__tab-content-item tab-pane fade" id="internal">
							<div class="row">
								<div class="col-md-6">
									<div class="products-tabs__descr-block clearfix">
										<p class="products-tabs__product-drscr-title">Internal Control Monitor</p>
										<div class="products-tabs__descr-descr-text">
											<p>Find and remediate SoD conflict and critical access violations. Analyze at the lowest authorization level. Find and remediate SoD conflict and critical access violations. Analyze at the lowest authorization level</p>
											<p>Find and remediate SoD conflict and critical access violations. Analyze at the lowest authorization level</p>
											<ul>
												<li class="products-tabs__descr-list-item">Connect multiple SAP systems to ACM and perform online Risk Analysis to real-time reports.</li>
												<li class="products-tabs__descr-list-item">Prepare SoD, Critical access reports at User and Role level and publish</li>
												<li class="products-tabs__descr-list-item">Reports are generated at blazing speed and stored in database and can be reviewed at later stages.</li>
												<li class="products-tabs__descr-list-item">Facilitate to run the access check at function level and SoD level, no separate risks to be defined in order to run at function level.</li>
											</ul>
										</div>
										<a href="<?php echo get_permalink( get_page_by_title( 'icm' ) ) ?>" class="products-tabs__descr-btn btn btn-primary"><?php _e("Read more")?> <span class="icon-keyboard_arrow_right"></span></a>
									</div>
								</div>
								<div class="col-md-6">
									<div class="products-tabs__video-block"></div>
								</div>
							</div>
						</div>
						<div class="products-tabs__tab-content-item tab-pane fade" id="risk">
							<div class="row">
								<div class="col-md-6">
									<div class="products-tabs__descr-block clearfix">
										<p class="products-tabs__product-drscr-title">Risk Execution Monitor</p>
										<div class="products-tabs__descr-descr-text">
											<p>Find and remediate SoD conflict and critical access violations. Analyze at the lowest authorization level. Find and remediate SoD conflict and critical access violations. Analyze at the lowest authorization level</p>
											<p>Find and remediate SoD conflict and critical access violations. Analyze at the lowest authorization level</p>
											<ul>
												<li class="products-tabs__descr-list-item">Connect multiple SAP systems to ACM and perform online Risk Analysis to real-time reports.</li>
												<li class="products-tabs__descr-list-item">Prepare SoD, Critical access reports at User and Role level and publish</li>
												<li class="products-tabs__descr-list-item">Reports are generated at blazing speed and stored in database and can be reviewed at later stages.</li>
												<li class="products-tabs__descr-list-item">Facilitate to run the access check at function level and SoD level, no separate risks to be defined in order to run at function level.</li>
											</ul>
										</div>
										<a href="<?php echo get_permalink( get_page_by_title( 'rem' ) ) ?>" class="products-tabs__descr-btn btn btn-primary"><?php _e("Read more")?> <span class="icon-keyboard_arrow_right"></span></a>
									</div>
								</div>
								<div class="col-md-6">
									<div class="products-tabs__video-block"></div>
								</div>
							</div>
						</div>
						<div class="products-tabs__tab-content-item tab-pane fade" id="compliant">
							<div class="row">
								<div class="col-md-6">
									<div class="products-tabs__descr-block clearfix">
										<p class="products-tabs__product-drscr-title">Compliant Access Management</p>
										<div class="products-tabs__descr-descr-text">
											<p>Find and remediate SoD conflict and critical access violations. Analyze at the lowest authorization level. Find and remediate SoD conflict and critical access violations. Analyze at the lowest authorization level</p>
											<p>Find and remediate SoD conflict and critical access violations. Analyze at the lowest authorization level</p>
											<ul>
												<li class="products-tabs__descr-list-item">Connect multiple SAP systems to ACM and perform online Risk Analysis to real-time reports.</li>
												<li class="products-tabs__descr-list-item">Prepare SoD, Critical access reports at User and Role level and publish</li>
												<li class="products-tabs__descr-list-item">Reports are generated at blazing speed and stored in database and can be reviewed at later stages.</li>
												<li class="products-tabs__descr-list-item">Facilitate to run the access check at function level and SoD level, no separate risks to be defined in order to run at function level.</li>
											</ul>
										</div>
										<a href="<?php echo get_permalink( get_page_by_title( 'cam' ) ) ?>" class="products-tabs__descr-btn btn btn-primary"><?php _e("Read more")?> <span class="icon-keyboard_arrow_right"></span></a>
									</div>
								</div>
								<div class="col-md-6">
									<div class="products-tabs__video-block"></div>
								</div>
							</div>
						</div>
						<div class="products-tabs__tab-content-item tab-pane fade" id="privielage">
							<div class="row">
								<div class="col-md-6">
									<div class="products-tabs__descr-block clearfix">
										<p class="products-tabs__product-drscr-title">Privielage Access Management</p>
										<div class="products-tabs__descr-descr-text">
											<p>Find and remediate SoD conflict and critical access violations. Analyze at the lowest authorization level. Find and remediate SoD conflict and critical access violations. Analyze at the lowest authorization level</p>
											<p>Find and remediate SoD conflict and critical access violations. Analyze at the lowest authorization level</p>
											<ul>
												<li class="products-tabs__descr-list-item">Connect multiple SAP systems to ACM and perform online Risk Analysis to real-time reports.</li>
												<li class="products-tabs__descr-list-item">Prepare SoD, Critical access reports at User and Role level and publish</li>
												<li class="products-tabs__descr-list-item">Reports are generated at blazing speed and stored in database and can be reviewed at later stages.</li>
												<li class="products-tabs__descr-list-item">Facilitate to run the access check at function level and SoD level, no separate risks to be defined in order to run at function level.</li>
											</ul>
										</div>
										<a href="<?php echo get_permalink( get_page_by_title( 'pam' ) ) ?>" class="products-tabs__descr-btn btn btn-primary"><?php _e("Read more")?> <span class="icon-keyboard_arrow_right"></span></a>
									</div>
								</div>
								<div class="col-md-6">
									<div class="products-tabs__video-block"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="benefits container">
				<div class="row">
					<h3 class="benefits__title">Benefits to you</h3>
					<div class="benefits__flex-container">
						<div class="col-sm-6">
							<div class="benefits__item" data-aos="fade-left" data-aos-anchor-placement="bottom-bottom">
								<div class="row">
									<div class="col-sm-12 col-md-4">
										<div class="benefits__item-icon">
											<img src="<?php echo get_template_directory_uri(); ?>/img/benefits-ic1.png" alt="" />
										</div>
									</div>
									<div class="col-sm-12 col-md-8">
										<div class="benefits__item-title">Rapid</div>
										<p class="benefits__item-description">Worlds fastest GRC solution deployment at your service. Bid it to end long-traditional GRC solution implementations.</p>
									</div>
								</div>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="benefits__item" data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">
								<div class="row">
									<div class="col-sm-12 col-md-4">
										<div class="benefits__item-icon">
											<img src="<?php echo get_template_directory_uri(); ?>/img/benefits-ic2.png" alt="" />
										</div>
									</div>
									<div class="col-sm-12 col-md-8">
										<div class="benefits__item-title">Cloud</div>
										<p class="benefits__item-description">Worlds fastest GRC solution deployment at your service. Bid it to end long-traditional GRC solution implementations.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="benefits__flex-container">
						<div class="col-sm-6">
							<div class="benefits__item" data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">
								<div class="row">
									<div class="col-sm-12 col-md-4">
										<div class="benefits__item-icon">
											<img src="<?php echo get_template_directory_uri(); ?>/img/benefits-ic3.png" alt="" />
										</div>
									</div>
									<div class="col-sm-12 col-md-8">
										<div class="benefits__item-title">Remote Secure Access</div>
										<p class="benefits__item-description">Worlds fastest GRC solution deployment at your service. Bid it to end long-traditional GRC solution implementations.</p>
									</div>
								</div>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="benefits__item" data-aos="fade-left" data-aos-anchor-placement="bottom-bottom">
								<div class="row">
									<div class="col-sm-12 col-md-4">
										<div class="benefits__item-icon">
											<img src="<?php echo get_template_directory_uri(); ?>/img/benefits-ic4.png" alt="" />
										</div>
									</div>
									<div class="col-sm-12 col-md-8">
										<div class="benefits__item-title">Choose What You Need</div>
										<p class="benefits__item-description">Worlds fastest GRC solution deployment at your service. Bid it to end long-traditional GRC solution implementations.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="benefits__flex-container">
						<div class="col-sm-6">
							<div class="benefits__item benefits__item_no-border" data-aos="fade-left" data-aos-anchor-placement="bottom-bottom">
								<div class="row">
									<div class="col-sm-12 col-md-4">
										<div class="benefits__item-icon">
											<img src="<?php echo get_template_directory_uri(); ?>/img/benefits-ic5.png" alt="" />
										</div>
									</div>
									<div class="col-sm-12 col-md-8">
										<div class="benefits__item-title">Support &amp; Product Updates</div>
										<p class="benefits__item-description">Worlds fastest GRC solution deployment at your service. Bid it to end long-traditional GRC solution implementations.</p>
									</div>
								</div>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="benefits__item benefits__item_no-border" data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">
								<div class="row">
									<div class="col-sm-12 col-md-4">
										<div class="benefits__item-icon">
											<img src="<?php echo get_template_directory_uri(); ?>/img/benefits-ic6.png" alt="" />
										</div>
									</div>
									<div class="col-sm-12 col-md-8">
										<div class="benefits__item-title">Your Ideas</div>
										<p class="benefits__item-description">Worlds fastest GRC solution deployment at your service. Bid it to end long-traditional GRC solution implementations.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="no-risks container-fluid">
				<div class="row">
					<div class="container">
						<div class="row">
							<div class="col-md-9 col-md-offset-3">
								<div class="no-risks__container" data-aos="fade" data-aos-anchor-placement="top-center">
									<h3 class="no-risks__title">No risks, no problems</h3>
									<p class="no-risks__subtitle">The application suite is built on open source frameworks thus facilitating easy integration with other products and applications utilized by a client.</p>
									<p class="no-risks__description">M.A.R.C. is vision and result of SAP GRC consultants with wide array of project experience focused on Security and Access Controls implementations. The secret ingredient of the M.A.R.C product suite is that we know how to manage, control and restrict accesses efficiently and effectively. Like any other technology that seeks to be relevant and up-to-date, M.A.R.C.’s development is an ongoing process, ensuring continual improvement.</p>
									<p class="no-risks__description">M.A.R.C. is committed to provide the highest standards of customer support by guaranteeing a quick turnaround and consultancy with regards to authorization support, control framework and risk analysis. The best part of it all, M.A.R.C. products and services are reasonably at low cost. This puts our product suite in a league of its own in a market currently saturated with higly paid applications.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="clients container-fluid">
				<div class="row">
					<div class="container">
						<!-- <?php if ( is_active_sidebar( 'our-clients' ) ) : ?>
							<div id="primary-sidebar" class="primary-sidebar widget-area" role="complementary">
								<?php dynamic_sidebar( 'our-clients' ); ?>
							</div>#primary-sidebar
						<?php endif; ?> -->
						<h3 class="clients__title">Our clients</h3>
						<ul class="clients__list">
							<li class="clients__item"><img src="<?php echo get_template_directory_uri(); ?>/img/clients-ic1.png" alt="" /></li>
							<li class="clients__item"><img src="<?php echo get_template_directory_uri(); ?>/img/clients-ic2.png" alt="" /></li>
							<li class="clients__item"><img src="<?php echo get_template_directory_uri(); ?>/img/clients-ic3.png" alt="" /></li>
							<li class="clients__item"><img src="<?php echo get_template_directory_uri(); ?>/img/clients-ic4.png" alt="" /></li>
							<li class="clients__item"><img src="<?php echo get_template_directory_uri(); ?>/img/clients-ic5.png" alt="" /></li>
						</ul>
					</div>
				</div>
			</section>
			<section class="benefit container-fluid">
				<div class="row">
					<div class="container">
						<div class="row">
							<div class="col-md-7 col-md-push-5">
								<h3 class="benefit__title">Who can benefit?</h3>
								<p class="benefit__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
							</div>
							<div class="col-md-5 col-md-pull-7">
								<div class="benefit__list">
									<div class="benefit__list-item">
										<div class="benefit__list-icon">
											<img src="<?php echo get_template_directory_uri(); ?>/img/benefit-ic1.png" alt="benefit icon" />
										</div>
										<div class="benefit__list-title">SAP Clients</div>
									</div>
									<div class="benefit__list-item">
										<div class="benefit__list-icon">
											<img src="<?php echo get_template_directory_uri(); ?>/img/benefit-ic2.png" alt="benefit icon" />
										</div>
										<div class="benefit__list-title">Independent Auditors and SAP Professionals</div>
									</div>
									<div class="benefit__list-item">
										<div class="benefit__list-icon">
											<img src="<?php echo get_template_directory_uri(); ?>/img/benefit-ic3.png" alt="benefit icon" />
										</div>
										<div class="benefit__list-title">SAP Consulting Service Companies</div>
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