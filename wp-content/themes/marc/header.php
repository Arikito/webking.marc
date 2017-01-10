<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg">
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">

<script src="<?php echo get_template_directory_uri(); ?>/assets/jquery-3.1.0.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/assets/bootstrap/js/bootstrap.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/main.js"></script>

<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/bootstrap/css/bootstrap.min.css">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<header class="header">
		<div class="container">
			<div class="sub-header">
				<div class="logo-block">
					<a href="/"><img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt="logo"></a>
				</div>
				<div class="nav-menu visible-md-block visible-lg-block">
					<ul class="nav-menu__list">
						<li class="nav-menu__item">
							<a class="nav-menu__link" href="../about-us/">About Us</a>
						</li>
						<li class="nav-menu__item">
							<div class="dropdown nav-menu__link">
								<div class="dropdown-toggle" type="button" id="dropdown-menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Products<span class="caret"></span></div>
								<ul class="dropdown-menu box-shadow" aria-labelledby="dropdown-menu">
									<li><a href="../acm/">ACM</a></li>
									<li><a href="../icm/">ICM</a></li>
									<li><a href="../rem/">REM</a></li>
									<li><a href="../cam/">CAM</a></li>
									<li><a href="../pam/">PAM</a></li>
								</ul>
							</div>
						</li>
						<li class="nav-menu__item">
							<a class="nav-menu__link" href="../services/">Services</a>
						</li>
						<li class="nav-menu__item">
							<a class="nav-menu__link" href="../blog/">Blog</a>
						</li>
						<li class="nav-menu__item">
							<a class="nav-menu__link" href="../contacts/">Contact Us</a>
						</li>
						<li class="nav-menu__item">
							<a class="nav-menu__link nav-menu__item_support-btn" href="../support/">Support</a>
						</li>
					</ul>
				</div>
				<div class="dropdown nav-menu-mobile visible-xs-block visible-sm-block">
					<div class="dropdown-toggle" type="button" id="dropdown-mobile-menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span></div>
					<ul class="dropdown-menu box-shadow" aria-labelledby="dropdown-mobile-menu">
						<li><a tabindex="-1" href="../about-us/">About Us</a></li>
						<li class="dropdown-submenu">
							<a tabindex="-1" href="#">Products <span class="caret"></span></a>
							<ul class="dropdown-menu">
							  <li><a tabindex="-1" href="../acm/">ACM</a></li>
							  <li><a tabindex="-1" href="../icm/">ICM</a></li>
							  <li><a tabindex="-1" href="../rem/">REM</a></li>
							  <li><a tabindex="-1" href="../cam/">CAM</a></li>
							  <li><a tabindex="-1" href="../pam/">PAM</a></li>
							</ul>
						  </li>
						<li><a tabindex="-1" href="../services/">Services</a></li>
						<li><a tabindex="-1" href="../blog/">Blog</a></li>
						<li><a tabindex="-1" href="../contacts/">Contact Us</a></li>
						 <li><a  class="nav-menu__item_support-btn" href="../support/">Support</a></li>
					</ul>
				</div>
			</div>
		</div>
	</header>

	<?php
	// If a regular post or page, and not the front page, show the featured image.
	if ( has_post_thumbnail() && ( is_single() || ( is_page() && ! twentyseventeen_is_frontpage() ) ) ) :
		echo '<div class="single-featured-image-header">';
		the_post_thumbnail( 'twentyseventeen-featured-image' );
		echo '</div><!-- .single-featured-image-header -->';
	endif;
	?>

	<div class="site-content-contain">
		<div id="content" class="site-content">
