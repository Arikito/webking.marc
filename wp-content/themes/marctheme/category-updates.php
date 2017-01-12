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
			<section class="image-page-header image-page-header_updates container-fluid">
				<?php the_archive_title( '<h1 class="image-page-header__title">', '</h1>' ); ?>
				<?php the_archive_description( '<div class="image-page-header__subtitle">', '</div>' ); ?>
			</section>
			<section class="updates-list">
				<div class="container">
					<div class="row">
						<div class="col-md-3 col-md-push-9">
							<div class="updates-list__menu box-shadow">
								<p class="updates-list__menu-title">Menu <span class="glyphicon glyphicon-filter updates-list__filter updates-list__filter_js visible-xs-block visible-sm-block" aria-hidden="true"></span></p>
								<ul>
									<li class="updates-list__menu-item"><a href="<?php echo get_category_link(get_queried_object()->term_id); ?>">All categories</a></li>
									<?php
									$categories = get_categories( array( 'child_of' => get_queried_object()->term_id ) );
									$cat = array();
									foreach($categories as $category) :
										$cat[] = $category->term_id;
										echo "<li class=\"updates-list__menu-item\"><a href=\"".esc_url( add_query_arg( 'filter', $category->term_id ) )."\">".$category->name."</a></li>";
									endforeach;
									$myposts = get_posts( array( 'category' => isset($_GET['filter'])?$_GET['filter']:implode(',', $cat) ) ); ?>
								</ul>
							</div>
						</div>

						<div class="col-md-9 col-md-pull-3">
							<div class="row">

								<?php
								if($myposts):
									foreach ($myposts as $post) :
										setup_postdata( $post ); ?>
										<div class="updates-list__item">
											<div class="updates-list__image-block col-sm-4">
												<?php if(has_post_thumbnail()) :
													the_post_thumbnail();
												else :?>
													<img src="/wp-content/themes/marctheme/img/videos-thumb.png" alt="img">
												<?php endif; ?>
											</div>
											<div class="updates-list__descr col-sm-8">
												<?php the_title( '<a href="' . esc_url( get_permalink() ) . '" class="updates-list__title" rel="bookmark">', '</a>' );?>
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
									<?php endforeach; ?>
								<?php endif; ?>
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
