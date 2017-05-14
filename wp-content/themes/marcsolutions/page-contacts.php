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

	<section class="image-page-header image-page-header_contacts container-fluid">

		<?php the_title( '<h1 class="image-page-header__title">', '</h1>' )?>

		<?php if(get_post_meta(get_the_ID(), 'page_description', true)) { ?>

			<p class="image-page-header__subtitle"><?php echo get_post_meta(get_the_ID(), 'page_description', true); ?></p>

		<?php } ?>

	</section>

	<div id="primary" class="content-area">

		<main id="main" class="site-main" role="main">

			<section class="contacts container-fluid">

				<div class="container">

					<div class="contacts__flexbox">

						<div class="contacts__block">

							<div class="contacts__address-block address-block">

								<p class="address-block__title">Our adress</p>

								<p class="address-block__text">Prestige Omega, No-104, EPIP Zone Whitefield, Bangalore-560066</p>

							</div>

							<div class="contacts__address-block address-block">

								<p class="address-block__title">Call us</p>

								<p class="address-block__text">

									<a href="tel:+918067710603">+91 80 6771 0603</a><br>

									<a href="tel:+918067590400">+91 80 6759 0400</a>

								</p>

							</div>

							<div class="contacts__address-block address-block">

								<p class="address-block__title">Email us</p>

								<p class="address-block__text"><a href="mailto:enquiries@marc4grc.com">enquiries@marc4grc.com</a></p>

							</div>

						</div>

						<div class="contacts__block contacts__form">

							<?php echo do_shortcode('[contact-form-7 id="269" title="Contacts"]'); ?>

						</div>

					</div>

				</div>

			</section>

		</main><!-- #main -->

	</div><!-- #primary -->



<?php

get_sidebar();

get_footer();

