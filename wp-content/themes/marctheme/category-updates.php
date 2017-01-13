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
				<h1 class="image-page-header__title"><?php echo get_queried_object()->name; ?></h1>
				<?php the_archive_description( '<div class="image-page-header__subtitle">', '</div>' ); ?>
			</section>
			<section class="updates-list">
				<div class="container">
					<div class="row">
						<div class="col-md-3 col-md-push-9">
							<div class="updates-list__menu box-shadow">
								<p class="updates-list__menu-title">Menu <span class="glyphicon glyphicon-filter updates-list__filter updates-list__filter_js visible-xs-block visible-sm-block" aria-hidden="true"></span></p>
								<ul>
									<li class="updates-list__menu-item <?php echo !isset($_GET['filter'])?'active':null?>"><a href="<?php echo get_category_link(get_queried_object()->term_id); ?>"><?php _e('All categories'); ?></a></li>
									<?php
									$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
									$filtered_category = get_the_archive_title();
									foreach(get_categories( array( 'child_of' => get_queried_object()->term_id ) ) as $category) :
										echo "<li class=\"updates-list__menu-item ".(isset($_GET['filter']) && $_GET['filter'] == $category->term_id?'active':null)."\"><a href=\"".add_query_arg( 'filter', $category->term_id, get_category_link(get_queried_object()->term_id) )."\">".$category->name."</a></li>";
										if(isset($_GET['filter']) && $_GET['filter'] == $category->term_id) :
											$filtered_category = $category->name;
										endif;
									endforeach;
									$query_args = array(
										'post_type' => 'post',
										'category_name' => $filtered_category,
										'paged' => $paged,
										'post_status' => 'publish',
										'order' => 'DESC',
									);
									$posts = new WP_Query( $query_args );
									?>
								</ul>
							</div>
						</div>

						<div class="col-md-9 col-md-pull-3">
							<div class="row">

								<?php if ( $posts->have_posts() ) : ?>
									<?php while ( $posts->have_posts() ) : $posts->the_post(); ?>
										<div class="updates-list__item">
											<div class="updates-list__image-block col-sm-4">
												<?php if(has_post_thumbnail()) :
													the_post_thumbnail();
												else :?>
													<img src="wp-content/themes/marctheme/img/videos-thumb.png" alt="img">
												<?php endif; ?>
											</div>
											<div class="updates-list__descr col-sm-8">
												<?php the_title( '<a href="'.esc_url( get_permalink() ).'" class="updates-list__title" rel="bookmark">', '</a>' );?>
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
									<?php endwhile; ?>
									<?php if ($posts->max_num_pages > 1) :?>
										<nav class="prev-next-posts">
											<div class="prev-posts-link">
												<?php echo get_next_posts_link( 'Older Entries', $posts->max_num_pages ); ?>
											</div>
											<div class="next-posts-link">
												<?php echo get_previous_posts_link( 'Newer Entries' ); ?>
											</div>
										</nav>
									<?php endif; ?>
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
