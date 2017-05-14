<?php

/**

 * The template for displaying the footer

 *

 * Contains the closing of the #content div and all content after.

 *

 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials

 *

 * @package marcsolutions

 */



?>



	</div><!-- #content -->



	<footer class="footer container-fluid">

		<div class="row">

			<div class="container">

				<div class="row">

					<div class="col-sm-6 col-md-3">

						<div class="footer__logo">

							<img src="<?php echo get_template_directory_uri(); ?>/assets/images/Marc_Logo2.svg" alt="MARC logo">

						</div>

						<p class="footer__description">Reliable Compliance Solutions made Accessible</p>

						<?php wp_nav_menu(

							array(

								'theme_location' => 'socials',

								'menu_class' => 'footer__nav socials',

								'container' => '',

								'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>'

							)

						); ?>

					</div>

					<div class="col-sm-6 col-md-3">

						<div class="footer__nav-heading">Products</div>

						<nav class="footer__nav">

							<?php wp_nav_menu( array( 'theme_location' => 'products_menu', 'class_menu' => 'footer-menu' ) ); ?>

						</nav>

					</div>

					<div class="col-sm-6 col-md-3">

						<div class="footer__nav-heading">Services</div>

						<nav class="footer__nav">

							<?php wp_nav_menu( array( 'theme_location' => 'services_menu', 'class_menu' => 'footer-menu' ) ); ?>

						</nav>

					</div>

					<div class="col-sm-6 col-md-3">

						<div class="footer__nav-heading">About us</div>

						<nav class="footer__nav">

							<?php wp_nav_menu( array( 'theme_location' => 'about_us_menu', 'class_menu' => 'footer-menu') ); ?>

						</nav>

					</div>

				</div>

				<div class="row">

					<div class="col-md-12">

						<div class="footer__copyright-container">

							<div class="row">

								<div class="col-md-12">

									<div class="footer__copyright">&copy; <?php _e('Copyright by'); ?> M.A.R.C. <?php echo date('Y'); ?> <?php _e('All rights Reserved'); ?> </div>

								</div>

							</div>

						</div>

					</div>

				</div>

			</div>

		</div>

	</footer>

</div><!-- #page -->



<?php wp_footer(); ?>



</body>

</html>

