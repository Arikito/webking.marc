<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */

?>

		</div><!-- #content -->

		<footer id="colophon" class="site-footer" role="contentinfo">
			<div class="wrap">
				<?php
				get_template_part( 'template-parts/footer/footer', 'widgets' );

				if ( has_nav_menu( 'social' ) ) : ?>
					<nav class="social-navigation" role="navigation" aria-label="<?php _e( 'Footer Social Links Menu', 'twentyseventeen' ); ?>">
						<?php
							wp_nav_menu( array(
								'theme_location' => 'social',
								'menu_class'     => 'social-links-menu',
								'depth'          => 1,
								'link_before'    => '<span class="screen-reader-text">',
								'link_after'     => '</span>' . twentyseventeen_get_svg( array( 'icon' => 'chain' ) ),
							) );
						?>
					</nav><!-- .social-navigation -->
				<?php endif;

				// get_template_part( 'template-parts/footer/site', 'info' );
				?>
			</div><!-- .wrap -->
		</footer><!-- #colophon -->

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
							<a class="footer__nav-link" href="/">Home</a>
							<a class="footer__nav-link" href="../about-us/">About us</a>
							<a class="footer__nav-link" href="#">Products</a>
							<a class="footer__nav-link" href="../services/">Services</a>
							<a class="footer__nav-link" href="../blog/">Blog</a>
							<a class="footer__nav-link" href="../contacts/">Contact Us</a>
						</nav>
					</div>
					<div class="col-md-3">
						<div class="footer__socials">
							<a href="#" class="footer__socials-link"><img src="<?php echo get_template_directory_uri(); ?>/img/social-tw.png" alt="twitter social button"></a>
							<a href="#" class="footer__socials-link"><img src="<?php echo get_template_directory_uri(); ?>/img/social-in.png" alt="linkedin social button"></a>
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

	</div><!-- .site-content-contain -->
</div><!-- #page -->
<?php wp_footer(); ?>

</body>
</html>
