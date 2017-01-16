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
				<section class="about-us">
					<div class="container">
						<p class="about-us__descr-title">About Us</p>

						<div class="row">
							<div class="col-md-5 col-md-push-7">
								<div class="about-us__descr-image-block box-shadow">
									<img class="about-us__descr-image" src="<?php echo get_template_directory_uri(); ?>/img/about.png" alt="acm_aim" />
								</div>
							</div>
							<div class="col-md-7 col-md-pull-5">
								<div class="about-us__descr">
									<div class="about-us__descr-text">

									10 + Years of GRC experience…. Proven Innovation experience…. 6 Long years of passion to build solutions ….collective result is M.A.R.C. Any company which is looking forward for SOD evaluation/Reporting solution and beyond to have their ERP environment fit and fine from risks/compliance threats.

									Cost, Time of implementation and Efficiency for M.A.R.C products are wisely considered while build. We are sure our products will bring smile on customers when they compare other solutions in the Market. M.A.R.C solution delivers what’s needed to be adequate to be compliant in the ERP environment …. We will definitely think about building solution make world better…for now we are working on making ERP systems to be compliant. We have witnessed room sized computers changing into sleek laptops, 1.44 MB floppy discs changing in to Terra bites compact pen drives….. Similarly compactness yet the adequacy ensured in M.A.R.C solutions…. Hope that explains

									We don't care about the space, focus is to gain the customer's acceptance. Passion towards GRC, would like to contribute something back to the GRC world where customers, consultants , auditors get benefitted. Automated SoD report generation is something many customers are looking for. We would like to encourage every customer to follow the compliance and to give a feeling that GRC doesn't mean that is is all about expensive solutions. Analytics. Yes, we are half-way now. A solution which is easy to find the transaction discrepencies , detection of possible frauds in huge transactional data. by using the simple interface and do the checks on real-time. Risk Execution Monitoring module in M.A.R.C portfolio can be used to monitor the risks executed and critical tasks executed, which does more or similar to Privilege Access Management.

									Privilige Access Management is coming soon.

									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="our-team">
					<div class="container">
						<p class="our-team__descr-title">Our team</p>

						<div class="row">
							<div class="col-md-6">
								<div class="our-team__member-block">
									<div class="row">
										<div class="col-sm-4">
											<div class="our-team__member-photo-block box-shadow">
												<img class="our-team__member-photo" src="<?php echo get_template_directory_uri(); ?>/img/chandra_photo.png" alt="chandra" />
											</div>
										</div>
										<div class="col-sm-8">
											<div class="our-team__member-info-block">
												<p class="our-team__member-name">Jayasimha Chandra</p>
												<p class="our-team__member-position">M.A.R.C founder</p>
												<p class="our-team__member-position">managment &amp; risk control</p>

												<div class="our-team__member-social-block">
													<a class="our-team__member-social-link" href="#">
														<img src="<?php echo get_template_directory_uri(); ?>/img/tw_gray_icon.png" alt="twitter" />
													</a>
													<a class="our-team__member-social-link" href="#">
														<img src="<?php echo get_template_directory_uri(); ?>/img/in_gray_icon.png" alt="linkedin" />
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="our-team__member-block">
									<div class="row">
										<div class="col-sm-4">
											<div class="our-team__member-photo-block box-shadow">
												<img class="our-team__member-photo" src="<?php echo get_template_directory_uri(); ?>/img/ramanna_photo.png" alt="ramanna" />
											</div>
										</div>
										<div class="col-sm-8">
											<div class="our-team__member-info-block">
												<p class="our-team__member-name">Ravitej Ramanna</p>
												<p class="our-team__member-position">M.A.R.C founder</p>
												<p class="our-team__member-position">managment &amp; risk control</p>

												<div class="our-team__member-social-block">
													<a class="our-team__member-social-link" href="#">
														<img src="<?php echo get_template_directory_uri(); ?>/img/in_gray_icon.png" alt="linkedin" />
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="partners">
					<div class="container">
						<p class="partners__descr-title">Partners</p>

						<div class="partners__parnter-block">
							<div class="row">
								<div class="col-md-3">
									<div class="partners__parnter-logo-block box-shadow">
										<img class="partners__parnter-logo-image" src="<?php echo get_template_directory_uri(); ?>/img/partner_2arc.png" alt="logo" />
									</div>
								</div>
								<div class="col-md-9">
									<div class="partners__parnter-descr-block">
										<p class="partners__parnter-descr-text">2ARC originated from CSI. CSI - founded in 1997 by Klaas Piet Meindertsma cs - was from its inception, focused on SAP-audit services. Because of the market came an increased demand for general audit support, has previously formed a separate unit within the group in 2004. This Unit developed into a strong expert group with a portfolio of customers in the financial sector, manufacturing, transportation, government and SRA audit firms.</p>

										<div class="partners__parnter-contacts-block">
											<div class="row">
												<div class="col-md-4">
													<a class="partners__parnter-link" href="tel:#"><img src="<?php echo get_template_directory_uri(); ?>/img/phone_icon.png" alt="phone" /> +31 35 52 33 856</a>
												</div>
												<div class="col-md-4">
													<a class="partners__parnter-link" href="mailto:#"><img src="<?php echo get_template_directory_uri(); ?>/img/email_icon.png" alt="email" /> info@2arc.eu</a>
												</div>
												<div class="col-md-4">
													<a class="partners__parnter-link" href="#"><img src="<?php echo get_template_directory_uri(); ?>/img/web_icon.png" alt="web" /> www.2arc.eu</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="partners__parnter-block">
							<div class="row">
								<div class="col-md-3">
									<div class="partners__parnter-logo-block box-shadow">
										<img class="partners__parnter-logo-image" src="<?php echo get_template_directory_uri(); ?>/img/partner_ibc.png" alt="logo" />
									</div>
								</div>
								<div class="col-md-9">
									<div class="partners__parnter-descr-block">
										<p class="partners__parnter-descr-text">IBC combines deep industry knowledge, SAP technical know-how and unsurpassed delivery capabilities to drive breakthrough results. We can help your SAP business leverage in areas such as analytics – SAP FIORI, SAP tUI5, GRC and Mobility, to deliver value and innovation on SAP, Oracle, Microsoft, Business Object, and many other applications…).</p>

										<div class="partners__parnter-contacts-block">
											<div class="row">
												<div class="col-md-4">
													<a class="partners__parnter-link" href="tel:#"><img src="<?php echo get_template_directory_uri(); ?>/img/phone_icon.png" alt="phone" /> +31 35 52 33 856</a>
												</div>
												<div class="col-md-4">
													<a class="partners__parnter-link" href="mailto:#"><img src="<?php echo get_template_directory_uri(); ?>/img/email_icon.png" alt="email" /> info@2arc.eu</a>
												</div>
												<div class="col-md-4">
													<a class="partners__parnter-link" href="#"><img src="<?php echo get_template_directory_uri(); ?>/img/web_icon.png" alt="web" /> www.2arc.eu</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
<?php

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
