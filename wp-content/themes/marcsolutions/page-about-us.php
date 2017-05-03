<?php
/**
 * The template for displaying about us page
 * @package marctheme
 */

get_header();
global $post;
$post_slug = $post->post_name; ?>
	<section class="image-page-header image-page-header_<?php echo $post_slug; ?> container-fluid">
		<?php the_title( '<h1 class="image-page-header__title">', '</h1>' )?>
		<?php if(get_post_meta(get_the_ID(), 'page_description', true)) : ?>
		<p class="image-page-header__subtitle"><?php echo get_post_meta(get_the_ID(), 'page_description', true); ?></p>
		<?php endif; ?>
	</section>
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			<section id="who-we-are" class="who-we-are container">
				<div class="row">
					<h3 class="benefits__title section-title">Who we are?</h3>
					<p class="products__description section-description">Nullam sit amet odio eu est aliquet euismod a a urna. Nullam sit amet odio eu</p>
					<div class="section-separator"></div>
					<div class="content">
						<p>MARC represents the convergence of years of experience in the field of SAP and GRC consultancy. Our primary area of focus is Security and Access Controls, and their successful implementation. MARC's leading goal is simple: To allow our users to manage and control accesses efficiently and effectively.</p>
						<p>We understand that our clients require the most up-to-date and relevant solutions, and as such, we continually strive to improve the services we offer. We achieve this through close liason with our customers finding that a strong working relationship not only improves their experience but also our own product. We couple this with an ongoing developmental phase. This allows us to stay ahead of trends within the industry and provide our end users with the highest possible security for their specific needs.</p>
					</div>
				</div>
			</section>
			<section id="our-team" class="our-team container-fluid">
				<div class="row">
					<h3 class="benefits__title section-title">Our team</h3>
					<p class="products__description section-description">Nullam sit amet odio eu est aliquet euismod a a urna. Nullam sit amet odio eu</p>
					<div class="section-separator"></div>
					<div class="persons-list">
						<div class="persons-list__person person">
							<img class="person__photo" src="<?php echo get_template_directory_uri(); ?>/img/team/person-1.png" />
							<div class="person__name">Jay Chandra</div>
							<div class="person__position">Consultant and Director</div>
							<div class="person__socials">
								<a href="https://twitter.com/jayasimha_c" class="person__social-link" target="_blank">
									<span class="icon-twitter"></span>
								</a>
								<!-- <a href="#" class="person__social-link" target="_blank">
									<span class="icon-facebook"></span>
								</a> -->
								<a href="https://in.linkedin.com/in/jayasimhachandra" class="person__social-link" target="_blank">
									<span class="icon-linkedin"></span>
								</a>
							</div>
						</div>
						<div class="persons-list__person person">
							<img class="person__photo" src="<?php echo get_template_directory_uri(); ?>/img/team/person-2.png" />
							<div class="person__name">Ravitej.R R</div>
							<div class="person__position">Consultant and Director</div>
							<div class="person__socials">
								<!-- <a href="#" class="person__social-link" target="_blank">
									<span class="icon-twitter"></span>
								</a> -->
								<!-- <a href="#" class="person__social-link" target="_blank">
									<span class="icon-facebook"></span>
								</a> -->
								<a href="https://www.linkedin.com/in/Ravitej-ramanna-5ba08522" class="person__social-link" target="_blank">
									<span class="icon-linkedin"></span>
								</a>
							</div>
						</div>
						<div class="persons-list__person person">
							<img class="person__photo" src="<?php echo get_template_directory_uri(); ?>/img/team/person-3.png" />
							<div class="person__name">Ram Allu</div>
							<div class="person__position">Java Technical Architect</div>
							<div class="person__socials">
								<!-- <a href="#" class="person__social-link" target="_blank">
									<span class="icon-twitter"></span>
								</a> -->
								<!-- <a href="#" class="person__social-link" target="_blank">
									<span class="icon-facebook"></span>
								</a> -->
								<a href="linkedin.com/in/ram-allu" class="person__social-link" target="_blank">
									<span class="icon-linkedin"></span>
								</a>
							</div>
						</div>
						<div class="persons-list__person person hidden">
							<img class="person__photo" src="<?php echo get_template_directory_uri(); ?>/img/team/person-4.png" />
							<div class="person__name">Ajay Sharma</div>
							<div class="person__position">Jr. GRC Consultant</div>
							<div class="person__socials">
								<!-- <a href="#" class="person__social-link" target="_blank">
									<span class="icon-twitter"></span>
								</a> -->
								<!-- <a href="#" class="person__social-link" target="_blank">
									<span class="icon-facebook"></span>
								</a> -->
								<!-- <a href="#" class="person__social-link" target="_blank">
									<span class="icon-linkedin"></span>
								</a> -->
							</div>
						</div>
						<div class="persons-list__person person">
							<img class="person__photo" src="<?php echo get_template_directory_uri(); ?>/img/team/person-5.png" />
							<div class="person__name">Manjoj R</div>
							<div class="person__position">Jr. GRC Consultant</div>
							<div class="person__socials">
								<!-- <a href="#" class="person__social-link" target="_blank">
									<span class="icon-twitter"></span>
								</a> -->
								<!-- <a href="#" class="person__social-link" target="_blank">
									<span class="icon-facebook"></span>
								</a> -->
								<a href="https://linkedin.com/in/manoj-ravi-62a220130" class="person__social-link" target="_blank">
									<span class="icon-linkedin"></span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="mentors" class="mentors container">
				<div class="row">
					<h3 class="benefits__title section-title">Our mentors &amp; advisor</h3>
					<p class="products__description section-description">Nullam sit amet odio eu est aliquet euismod a a urna. Nullam sit amet odio eu</p>
					<div class="section-separator"></div>
					<div class="mentors__list persons-list">
						<div class="person">
							<img class="person__photo" src="<?php echo get_template_directory_uri(); ?>/img/mentors/mentor-1.png" />
							<div class="person__name">Marcel Huijskens</div>
							<div class="person__position">Managing Director at XS Control</div>
							<div class="person__socials">
								<a href="https://linkedin.com/in/marcel-huyskens-0878391" class="person__social-link" target="_blank">
									<span class="icon-linkedin"></span>
								</a>
								<!-- <a href="#" class="person__social-link" target="_blank">
									<span class="icon-facebook"></span>
								</a>
								<a href="#" class="person__social-link" target="_blank">
									<span class="icon-pinterest"></span>
								</a> -->
							</div>
						</div>
						<div class="person">
							<img class="person__photo" src="<?php echo get_template_directory_uri(); ?>/img/mentors/mentor-2.png" />
							<div class="person__name">Jos de Waal</div>
							<div class="person__position">Director at 2ARC</div>
							<div class="person__socials">
								<a href="https://linkedin.com/in/jos-de-waal-08812a2" class="person__social-link" target="_blank">
									<span class="icon-linkedin"></span>
								</a>
								<!-- <a href="#" class="person__social-link" target="_blank">
									<span class="icon-facebook"></span>
								</a>
								<a href="#" class="person__social-link" target="_blank">
									<span class="icon-pinterest"></span>
								</a> -->
							</div>
						</div>
						<div class="person">
							<img class="person__photo" src="<?php echo get_template_directory_uri(); ?>/img/mentors/mentor-3.png" />
							<div class="person__name">Klaas Piet</div>
							<div class="person__position">Director at 2ARC</div>
							<div class="person__socials">
								<a href="https://linkedin.com/in/klaaspietmeindertsma" class="person__social-link" target="_blank">
									<span class="icon-linkedin"></span>
								</a>
								<!-- <a href="#" class="person__social-link" target="_blank">
									<span class="icon-facebook"></span>
								</a>
								<a href="#" class="person__social-link" target="_blank">
									<span class="icon-pinterest"></span>
								</a> -->
							</div>
						</div>
						<div class="person">
							<img class="person__photo" src="<?php echo get_template_directory_uri(); ?>/img/mentors/mentor-4.png" />
							<div class="person__name">Vikas Sahoo</div>
							<div class="person__position">Business Consulting Expert</div>
							<div class="person__socials">
								<a href="https://linkedin.com/in/vikassahoo" class="person__social-link" target="_blank">
									<span class="icon-linkedin"></span>
								</a>
								<!-- <a href="#" class="person__social-link" target="_blank">
									<span class="icon-facebook"></span>
								</a>
								<a href="#" class="person__social-link" target="_blank">
									<span class="icon-pinterest"></span>
								</a> -->
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
