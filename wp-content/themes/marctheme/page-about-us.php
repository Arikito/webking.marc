<?php
/**
 * The template for displaying about us page
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

									<p> MARC represents the convergence of years of experience in the field of SAP and GRC consultancy. Our primary area of focus is Security and Access Controls, and their successful implementation. MARC's leading goal is simple: To allow our users to manage and control accesses efficiently and effectively. </p>

<p> We understand that our clients require the most up-to-date and relevant solutions, and as such, we continually strive to improve the services we offer. We achieve this through close liason with our customers finding that a strong working relationship not only improves their experience but also our own product. We couple this with an ongoing developmental phase. This allows us to stay ahead of trends within the industry and provide our end users with the highest possible security for their specific needs. </p>


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
													<a class="our-team__member-social-link" href="https://in.linkedin.com/in/jayasimhachandra">
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
