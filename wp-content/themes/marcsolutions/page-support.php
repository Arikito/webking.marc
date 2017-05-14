<?php
/**
 * The template for displaying support page
 * @package marctheme
 */

get_header();
global $post;
$post_slug = $post->post_name; ?>
	<section class="image-page-header image-page-header_<?php echo $post_slug; ?> container-fluid">
		<div class="row">
			<?php the_title( '<h1 class="image-page-header__title">', '</h1>' )?>
			<?php if(get_post_meta(get_the_ID(), 'page_description', true)){?>
				<div class="image-page-header__subtitle"><?php echo get_post_meta(get_the_ID(), 'page_description', true); ?></div>
			<?php }?>
		</div>
	</section>
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			<section id="support" class="support container-fluid">
				<div class="container">
					<div class="row">
						<h3 class="products__title section-title">Support</h3>
						<p class="products__description section-description">Nullam sit amet odio eu est aliquet euismod a a urna. Nullam sit amet odio eu</p>
						<div class="section-separator"></div>
						<nav class="support__list">
							<a href="<?php echo get_permalink( get_page_by_title( 'Videos' ) ) ?>" class="support__block">
								<div class="support__image">
									<img src="<?php echo get_template_directory_uri(); ?>/img/product_icons/6.svg" alt="img">
								</div>
								<div class="support__descr">
									<span class="support__descr-title">Videos</span>
									<span class="support__descr-text">Watch out help, how-to videos prepared on MARC application features.</span>
									<span class="support__icon-arrow icon-arrow_forward"></span>
								</div>
							</a>
							<a href="https://marc4grc.freshdesk.com/support/discussions/forums/8000042725" target="_blank" class="support__block">
								<div class="support__image">
									<img src="<?php echo get_template_directory_uri(); ?>/img/product_icons/7.svg" alt="img">
								</div>
								<div class="support__descr">
									<span class="support__descr-title">Ideas</span>
									<span class="support__descr-text">Do you have new ideas about new features to be included in MARC?</span>
									<span class="support__icon-arrow icon-arrow_forward"></span>
								</div>
							</a>
							<a href="https://marc4grc.freshdesk.com/support/tickets/new" target="_blank" class="support__block">
								<div class="support__image">
									<img src="<?php echo get_template_directory_uri(); ?>/img/product_icons/8.svg" alt="img">
								</div>
								<div class="support__descr">
									<span class="support__descr-title">Support</span>
									<span class="support__descr-text">Log a ticket or write to support@marc4grc.com to log a ticket</span>
									<span class="support__icon-arrow icon-arrow_forward"></span>
								</div>
							</a>
							<a href="https://marc4grc.freshdesk.com/support/discussions" target="_blank" class="support__block">
								<div class="support__image">
									<img src="<?php echo get_template_directory_uri(); ?>/img/product_icons/9.svg" alt="img">
								</div>
								<div class="support__descr">
									<span class="support__descr-title">Forums</span>
									<span class="support__descr-text">Access M.A.R.C forums and participate in all the discussion</span>
									<span class="support__icon-arrow icon-arrow_forward"></span>
								</div>
							</a>
						</nav>
					</div>
				</div>
			</section>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
