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
							<img src="../wp-content/themes/marc/img/light-logo.png" alt="MARC logo">
						</div>
					</div>
					<div class="col-md-6">
						<nav class="footer__nav">

							<?php wp_nav_menu( array( 'theme_location' => 'menu-2', 'menu_id' => 'footer-menu' ) ); ?>
							<!-- <a class="footer__nav-link" href="index.html">Home</a>
							<a class="footer__nav-link" href="about.html">About us</a>
							<a class="footer__nav-link" href="#">Products</a>
							<a class="footer__nav-link" href="services.html">Services</a>
							<a class="footer__nav-link" href="blog.html">Blog</a>
							<a class="footer__nav-link" href="#contacts.html">Contact Us</a> -->
						</nav>
					</div>
					<div class="col-md-3">
						<div class="footer__socials">
							<?php wp_nav_menu( array( 'theme_location' => 'socials', 'class_menu' => 'footer__socials') ); ?>
							<!-- <a href="#" class="footer__socials-link"><img src="../wp-content/themes/marc/img/social-tw.png" alt="twitter social button"></a>
							<a href="#" class="footer__socials-link"><img src="../wp-content/themes/marc/img/social-in.png" alt="linkedin social button"></a> -->
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<div class="footer__copyright-container">
							<div class="row">
								<div class="col-md-9 col-md-offset-3">
									<div class="footer__copyright">© Copyright by M.A.R.C. 2016 All rights Reserved </div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
	<!-- <footer id="colophon" class="site-footer" role="contentinfo">
		<div class="site-info">
			<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'marctheme' ) ); ?>"><?php printf( esc_html__( 'Proudly powered by %s', 'marctheme' ), 'WordPress' ); ?></a>
			<span class="sep"> | </span>
			<?php printf( esc_html__( 'Theme: %1$s by %2$s.', 'marctheme' ), 'marctheme', '<a href="https://automattic.com/" rel="designer">webking.studio</a>' ); ?>
		</div>.site-info
	</footer>#colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
