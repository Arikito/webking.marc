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
			<section class="image-page-header image-page-header_<?php echo strtolower(get_queried_object()->name); ?> container-fluid">
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
									$filtered_category = get_queried_object()->name;;
									foreach(get_categories( array( 'child_of' => get_queried_object()->term_id ) ) as $category) :
										echo "<li class=\"updates-list__menu-item ".(isset($_GET['filter']) && $_GET['filter'] == $category->term_id?'active':null)."\"><a href=\"".add_query_arg( 'filter', $category->term_id, get_category_link(get_queried_object()->term_id) )."\">".$category->name."</a></li>";
										if(isset($_GET['filter']) && $_GET['filter'] == $category->term_id) :
											$filtered_category = $category->name;
										endif;
									endforeach; ?>
								</ul>
							</div>
						</div>

						<div class="col-md-9 col-md-pull-3">
							<div class="row">

								<?php
									$query_args = array(
										'post_type' => 'post',
										'category_name' => $filtered_category,
										'paged' => $paged,
										'post_status' => 'publish',
										'order' => 'DESC',
									);
									$posts = new WP_Query( $query_args );

								if ( $posts->have_posts() ) : while ( $posts->have_posts() ) : $posts->the_post();
										get_template_part( 'template-parts/content', 'updates' );
									endwhile;
									if ($posts->max_num_pages > 1) :?>
										<nav class="prev-next-posts">
											<div class="prev-posts-link">
												<?php echo get_next_posts_link( 'Older Entries <span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>', $posts->max_num_pages ); ?>
											</div>
											<div class="next-posts-link">
												<?php echo get_previous_posts_link( '<span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span> Newer Entries' ); ?>
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
