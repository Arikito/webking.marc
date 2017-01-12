<?php
/**
 * The template for displaying archive pages
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package marctheme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<section class="image-page-header image-page-header_blog container-fluid">
				<?php the_archive_title( '<h1 class="image-page-header__title">', '</h1>' ); ?>
				<?php the_archive_description( '<div class="image-page-header__subtitle">', '</div>' ); ?>
			</section>

			<section class="blog-list container">
				<div class="row">
					<?php
					if ( have_posts() ) : ?>

						<?php
						/* Start the Loop */
						while ( have_posts() ) : the_post();

							/*
							 * Include the Post-Format-specific template for the content.
							 * If you want to override this in a child theme, then include a file
							 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
							 */
							// get_template_part( 'template-parts/content', get_post_format() );

						?>

							<div class="blog-list__item">
								<div class="col-md-6 col-lg-7">
									<?php
									if( has_post_thumbnail() ) {
										$default_attr = array(
											'class' => 'blog-list__thumbnail'
										);
										the_post_thumbnail('full', $default_attr);
									}else{?>
										<img src="<?php echo get_template_directory_uri(); ?>/img/videos-thumb.png" alt="" class="blog-list__thumbnail">
									<?}
									?>
								</div>
								<div class="col-md-6 col-lg-5">
									<div class="blog-list__title"><?php	the_title( '<a href="' . esc_url( get_permalink() ) . '" class="updates-list__title" rel="bookmark">', '</a>' );?></div>
									<div class="blog-list__description"><?php if(has_excerpt()){ do_excerpt(get_the_excerpt(), 100); }?></div>
									<div class="blog-list__footer">
										<div class="blog-list__date"><img class="blog-list__date-icon" src="<?php echo get_template_directory_uri(); ?>/img/clock-icon.png" alt=""><?php marctheme_posted_on(); ?></div>
										<a href="<? echo get_permalink(); ?>"><button class="blog-list__read-more btn btn-primary">Read more <span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></button></a>
									</div>
								</div>
							</div>

						<?php
						endwhile;

						the_posts_navigation();

					else :

						get_template_part( 'template-parts/content', 'none' );

					endif; ?>
				</div>
			</section>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
