<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package marctheme
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico" />
<link rel="profile" href="http://gmpg.org/xfn/11">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<header id="masthead" class="site-header header" role="banner">
		<div class="container" data-aos="fade-down" data-aos-once="true">
			<div class="sub-header">
				<div class="logo-block">
					<a href="<?php echo home_url();?>" rel="home"><img src="<?php echo get_template_directory_uri(); ?>/img/Marc_Logo2.svg" alt="logo"></a>
				</div>
				<nav id="site-navigation" class="main-navigation" role="navigation">
					<button class="menu-toggle nav-menu-mobile" aria-controls="primary-menu" aria-expanded="false"><span class="icon-menu"></span></button>
					<?php wp_nav_menu(
						array(
							'container' => '',
							'echo' => true,
							'fallback_cb' => 'wp_page_menu',
							'items_wrap' => '<ul class="nav-menu__list">%3$s</ul>',
							'item_spacing' => 'preserve',
							'depth' => 0,
							'theme_location' => 'menu-1'
						)
					); ?>
				</nav><!-- #site-navigation -->
				<div class="clearfix"></div>
			</div>
		</div>
	</header><!-- #masthead -->

	<div id="content" class="site-content">
