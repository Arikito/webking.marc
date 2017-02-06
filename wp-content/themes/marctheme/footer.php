<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package marctheme
 */

?>

	</div><!-- #content -->

	<footer class="footer container-fluid">
		<div class="row">
			<div class="container">
				<div class="row">
					<div class="col-md-3">
						<div class="footer__logo">
							<img src="<?php echo get_template_directory_uri(); ?>/img/light-logo.png" alt="MARC logo">
						</div>
					</div>
					<div class="col-md-6">
						<nav class="footer__nav">
							<?php wp_nav_menu( array( 'theme_location' => 'menu-2', 'menu_id' => 'footer-menu' ) ); ?>
						</nav>
					</div>
					<div class="col-md-3">
						<div class="footer__socials">
							<?php wp_nav_menu( array( 'theme_location' => 'socials', 'class_menu' => 'footer__socials') ); ?>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<div class="footer__copyright-container">
							<div class="row">
								<div class="col-md-9 col-md-offset-3">
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
