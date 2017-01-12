<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package marctheme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<section class="image-page-header image-page-header_updates container-fluid">
			<h1 class="image-page-header__title">Updates Page</h1>
			<p class="image-page-header__subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
		</section>

		<section class="updates-list">
			<div class="container">
				<div class="row">
					<div class="col-md-3 col-md-push-9">
						<div class="updates-list__menu box-shadow">
							<p class="updates-list__menu-title">Menu <span class="glyphicon glyphicon-filter updates-list__filter updates-list__filter_js visible-xs-block visible-sm-block" aria-hidden="true"></span></p>
							<ul>
								<li class="updates-list__menu-item">All categories</li>
								<li class="updates-list__menu-item">News</li>
								<li class="updates-list__menu-item active">Events</li>
								<li class="updates-list__menu-item">Release Updates</li>
							</ul>
						</div>
					</div>
					<div class="col-md-9 col-md-pull-3">
						<div class="row">
							<!-- <?php
							if ( have_posts() ) :

								if ( is_home() && ! is_front_page() ) : ?>
									<header>
										<h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
									</header>

								<?php
								endif;

								/* Start the Loop */
								while ( have_posts() ) : the_post();

									/*
									 * Include the Post-Format-specific template for the content.
									 * If you want to override this in a child theme, then include a file
									 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
									 */
									get_template_part( 'template-parts/content', get_post_format() );

								endwhile;

								the_posts_navigation();

							else :

								get_template_part( 'template-parts/content', 'none' );

							endif; ?> -->

							<?php if(have_posts()){
								while(have_posts()){ ?>
									<?php the_post();?>
									<div class="updates-list__item">
										<div class="updates-list__image-block col-sm-4">
											<?php the_post_thumbnail();?>
										</div>
										<div class="updates-list__descr col-sm-8">
											<?php	the_title( '<a href="' . esc_url( get_permalink() ) . '" class="updates-list__title" rel="bookmark">', '</a>' );?>
											<div class="updates-list__descr-text">
												<?php the_excerpt();?>
											</div>
											<div class="updates-list__footer">
												<p class="updates-list__date"><?php marctheme_posted_on(); ?></p>
												<div class="updates-list__footer-decor-line"></div>
												<a href="<?php echo get_permalink(); ?>"><button class="updates-list__btn btn btn-primary">Read more <span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></button></a>
											</div>
										</div>
									</div>
								<?php }
								the_posts_navigation();
							}else{
								echo "Empty";
							}?>
						</div>
					</div>
				</div>
			</div>
		</section>




		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
