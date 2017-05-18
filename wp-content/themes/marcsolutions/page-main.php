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

get_header(); ?>
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			<section id="page-title" class="page-title container-fluid">
				<div class="row">
					<div class="container">
						<div class="col-md-12">
							<h1 class="page-title__title">Manage Access Risks and Controls</h1>
							<p class="page-title__descr">Reliable Compliance Solutions made Accessible</p>
							<a href="<?php echo get_permalink( get_page_by_path( 'request-a-demo' ) ) ?>" class="btn demo_cta">Request a Demo</a>
						</div>
					</div>
				</div>
			</section>
			<section id="clients" class="clients container-fluid">
				<div class="row">
					<div class="container">
						<?php echo do_shortcode( '[tc-owl-carousel carousel_cat="clients" order="ASC" loop="true"]' );?>
					</div>
				</div>
			</section>
			<section id="products" class="products container-fluid">
				<div class="container">
					<div class="row">
						<h3 class="products__title section-title">Our products</h3>
						<p class="products__description section-description">Intelligent SoD reporting and Compliance Management products</p>
						<div class="section-separator"></div>
						<ul class="products__list">
							<li class="products__item product-item col-md-4 col-sm-6">
								<div class="product-item__icon">
									<img src="<?php echo get_template_directory_uri(); ?>/assets/images/product_icons/Shape 172.png" alt="">
								</div>
								<div class="product-item__title">Access Conflict<br>Monitor</div>
								<div class="product-item__description">Find and remediate Segregation of Duties (SoD) conflicts and critical access violations. Analyse down to authorization object field level.</div>
							</li>
							<li class="products__item product-item col-md-4 col-sm-6">
								<div class="product-item__icon">
									<img src="<?php echo get_template_directory_uri(); ?>/assets/images/product_icons/Shape 173.png" alt="">
								</div>
								<div class="product-item__title">Compliant Access<br>Management</div>
								<div class="product-item__description">Provisions user accounts and access roles subject to integrated risk analysis and workflows to facilitate an accelerated approval process.</div>
							</li>
							<li class="products__item product-item col-md-4 col-sm-6">
								<div class="product-item__icon">
									<img src="<?php echo get_template_directory_uri(); ?>/assets/images/product_icons/Shape 174.png" alt="">
								</div>
								<div class="product-item__title">Internal Control<br>Monitor</div>
								<div class="product-item__description">Monitors effectiveness of SAP Configuration, Master Data and Transactional key controls and report the discrepancies to business process owners.</div>
							</li>
							<li class="products__item product-item col-md-4 col-sm-6">
								<div class="product-item__icon">
									<img src="<?php echo get_template_directory_uri(); ?>/assets/images/product_icons/Shape 176.png" alt="">
								</div>
								<div class="product-item__title">Risk Execution<br>Monitor</div>
								<div class="product-item__description">Analyses potential actual occurrence of SoD and Critical actions on user level and drill-down to details like transaction, user and when transactions were potentially executed.</div>
							</li>
							<li class="products__item product-item col-md-4 col-sm-6">
								<div class="product-item__icon">
									<img src="<?php echo get_template_directory_uri(); ?>/assets/images/product_icons/Shape 178.png" alt="">
								</div>
								<div class="product-item__title">Privilege Access<br>Management</div>
								<div class="product-item__description">Grants temporary broad access for emergency situations to privileged ID’s for support teams in a controlled way. All the transactions used by these Privileged ID’s are tracked and reviewed.</div>
							</li>
							<li class="products__item product-item col-md-4 col-sm-6">
								<div class="product-item__icon">
									<img src="<?php echo get_template_directory_uri(); ?>/assets/images/product_icons/Shape 179.png" alt="">
								</div>
								<div class="product-item__title">Unlock Password<br>ResetSelf</div>
								<div class="product-item__description">Automated unlock / reset password self-service for SAP accounts.</div>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section id="benefits" class="benefits container">
				<div class="row">
					<h3 class="benefits__title section-title">Benefits to you</h3>
					<p class="products__description section-description">See below how you benefit from MARC Solutions</p>
					<div class="section-separator"></div>
					<div class="benefits__list snake">
						<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
							<div class="benefits__item-number snake__number">1</div>
							<div class="benefits__item-content" data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-once="true">
								<div class="benefits__item-icon">
									<img src="<?php echo get_template_directory_uri(); ?>/assets/images/benefits-ic1.png" alt="" />
								</div>
								<div class="benefits__item-info">
									<div class="benefits__item-title">Rapid</div>
									<p class="benefits__item-description">Worlds fastest GRC solution deployment at your service. Bid it to end long-traditional GRC solution implementations.</p>
								</div>
							</div>
						</div>
						<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
							<div class="benefits__item-number snake__number">2</div>
							<div class="benefits__item-content" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-once="true">
								<div class="benefits__item-icon">
									<img src="<?php echo get_template_directory_uri(); ?>/assets/images/benefits-ic2.png" alt="" />
								</div>
								<div class="benefits__item-info">
									<div class="benefits__item-title">Cloud</div>
									<p class="benefits__item-description">Flexible installation options like cloud based to ease maintenance or also have an option to host it in-house.</p>
								</div>
							</div>
						</div>
						<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
							<div class="benefits__item-number snake__number">3</div>
							<div class="benefits__item-content" data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-once="true">
								<div class="benefits__item-icon">
									<img src="<?php echo get_template_directory_uri(); ?>/assets/images/benefits-ic3.png" alt="" />
								</div>
								<div class="benefits__item-info">
									<div class="benefits__item-title">Remote Secure Access</div>
									<p class="benefits__item-description">Secured access to application from anywhere in the world with 256 bit encryption in place.</p>
								</div>
							</div>
						</div>
						<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
							<div class="benefits__item-number snake__number">4</div>
							<div class="benefits__item-content" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-once="true">
								<div class="benefits__item-icon">
									<img src="<?php echo get_template_directory_uri(); ?>/assets/images/benefits-ic4.png" alt="" />
								</div>
								<div class="benefits__item-info">
									<div class="benefits__item-title">Choose What You Need</div>
									<p class="benefits__item-description">Option to install and activate services as per your business needs from MARC application portfolio.</p>
								</div>
							</div>
						</div>
						<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
							<div class="benefits__item-number snake__number">5</div>
							<div class="benefits__item-content" data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-once="true">
								<div class="benefits__item-icon">
									<img src="<?php echo get_template_directory_uri(); ?>/assets/images/benefits-ic5.png" alt="" />
								</div>
								<div class="benefits__item-info">
									<div class="benefits__item-title">Support &amp; Product Updates</div>
									<p class="benefits__item-description">Our support team is glad to help and support 24/5. Access our helpdesk portal to log a ticket, know the status, updates, etc.</p>
								</div>
							</div>
						</div>
						<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
							<div class="benefits__item-number snake__number">6</div>
							<div class="benefits__item-content" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-once="true">
								<div class="benefits__item-icon">
									<img src="<?php echo get_template_directory_uri(); ?>/assets/images/benefits-ic6.png" alt="" />
								</div>
								<div class="benefits__item-info">
									<div class="benefits__item-title">Your Ideas</div>
									<p class="benefits__item-description">Submit your ideas for any specific requirements, reporting needs. M.A.R.C. realize it for you.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="no-risks" class="no-risks container-fluid">
				<div class="row">
					<div class="container">
						<div class="row">
							<div class="col-md-6">
								<?php // echo do_shortcode( '[tc-owl-carousel carousel_cat="no-risks-slides" order="ASC" loop="true"]' );?>
								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/acm-dashboard-big.jpg" alt="">
							</div>
							<div class="col-md-6">
								<div class="no-risks__container">
									<h3 class="no-risks__title">No risks, no problems</h3>
									<p class="no-risks__description">M.A.R.C. is vision and result of SAP GRC consultants with wide array of project experience focused on Security and Access Controls implementations. The secret ingredient of the M.A.R.C product suite is that we know how to manage, control and restrict accesses efficiently and effectively. Like any other technology that seeks to be relevant and up-to-date, M.A.R.C.’s development is an ongoing process, ensuring continual improvement.</p>
									<a href="<?php echo get_permalink( get_page_by_path( 'request-a-demo' ) ) ?>" class="btn btn-primary">Request a Demo</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="benefit" class="benefit container">
				<div class="row">
					<div class="col-md-12">
						<h3 class="benefit__title section-title">Who can benefit</h3>
						
						<div class="section-separator"></div>
					</div>
					<div class="col-md-12">
						<div class="benefit__list row">
							<div class="col-md-4">
								<div class="benefit__list-item">
									<div class="benefit__list-icon">
										<img src="<?php echo get_template_directory_uri(); ?>/assets/images/benefit-ic3.png" alt="benefit icon" />
									</div>
									<div class="benefit__list-title-table">
										<div class="benefit__list-title">SAP Consulting Service Companies</div>
									</div>
									<p class="benefit__list-description">Performing IT services and user administration activities for their SAP clients</p>
									<p class="benefit__list-description"><strong>CAM</strong>: helps in realizing faster and better service response to client user access requests</p>
									<p class="benefit__list-description"><strong>PAM</strong>: helps in realizing system support service to the client which is SOD compliant and fully controllable/ auditable by the client</p>
								</div>
							</div>
							<div class="col-md-4">
								<div class="benefit__list-item">
									<div class="benefit__list-icon">
										<img src="<?php echo get_template_directory_uri(); ?>/assets/images/benefit-ic2.png" alt="benefit icon" />
									</div>
									<div class="benefit__list-title-table">
										<div class="benefit__list-title">Independent Auditors and SAP Professionals</div>
									</div>
									<p class="benefit__list-description">Auditing implementation of SAP application and user controls at their SAP clients</p>
									<p class="benefit__list-description"><strong>ACM</strong>: helps in effective substantive test of implemented SAP access controls – either in on-line or off-line mode</p>
									<p class="benefit__list-description"><strong>REM</strong>: helps in qualifying access risks in terms of actual occurrence of access violations – either in on-line or off-line mode</p>
									<p class="benefit__list-description"><strong>ICM</strong>: helps in effective substantive test of implemented SAP configuration controls and manual user controls (on-line mode only)</p>
								</div>
							</div>
							<div class="col-md-4">
								<div class="benefit__list-item">
									<div class="benefit__list-icon">
										<img src="<?php echo get_template_directory_uri(); ?>/assets/images/benefit-ic1.png" alt="benefit icon" />
									</div>
									<div class="benefit__list-title-table">
										<div class="benefit__list-title">SAP Clients</div>
									</div>
									<p class="benefit__list-description">Running SAP in a controlled manner</p>
									<p class="benefit__list-description"><strong>ACM</strong>: helps in effective continuous monitoring of implemented SAP access controls and related mitigation controls</p>
									<p class="benefit__list-description"><strong>REM</strong>: helps in monitoring actual occurrence of access violations, giving direction to defining risk mitigation controls</p>
									<p class="benefit__list-description"><strong>ICM</strong>: helps in effective continuous monitoring of implemented SAP configuration controls and manual user controls</p>
									<p class="benefit__list-description"><strong>CAM</strong>: helps in realizing faster and better follow-up of user access requests</p>
									<p class="benefit__list-description"><strong>PAM</strong>: helps in performing SOD compliant and fully controllable/ auditable activities by system support staff</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="latest_news" class="latest_news container-fluid">
				<div class="row">
					<div class="container">
						<div class="row">
							<h3 class="latest_news__title section-title">Latest news</h3>
							<p class="latest_news__description section-description">Feel our life, read our latest articles</p>
							<div class="section-separator"></div>
							<div class="col-md-12">
								<div class="latest_news__list">
									<?php $args = array(
										'posts_per_page' => 6,
										'category_name' => 0,
										'orderby' => 'post_date',
										'order' => 'DESC',
										'post_type' => 'post',
										'post_status' => 'publish',
										'suppress_filters' => true
									);
									$posts = new WP_Query( $args );
									if ( $posts->have_posts() ) : while ( $posts->have_posts() ) : $posts->the_post();
											get_template_part( 'template-parts/content', 'latest_news' );
										endwhile;
									endif; ?>
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
