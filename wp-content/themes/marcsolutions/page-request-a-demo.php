<?php

/**

 * The template for displaying services page

 * @package marcsolutions

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

			<section class="demo container-fluid">

				<div class="container">

					<div class="demo__flexbox">

						<div class="demo__block">

							<p class="block__title">Request a demo today!</p>

							<p class="block__text">Ready to take a deeper dive into the app? Fill out the form below to request a live demo from a M.A.R.C team member.</p>

							<img class="block__image" src="<?php echo get_template_directory_uri(); ?>/assets/images/demo.png" alt="">

						</div>

						<div class="demo__block demo__form">

							<p>Ready to take a deeper dive into the app? Fill out the form below to request a live demo from a M.A.R.C team member.</p>

							<?php echo do_shortcode('[contact-form-7 id="268" title="Demo request form"]'); ?>

						</div>

					</div>

				</div>

			</section>

		</main><!-- #main -->

	</div><!-- #primary -->



<?php

get_sidebar();

get_footer();

