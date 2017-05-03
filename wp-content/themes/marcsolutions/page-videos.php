<?php
/**
 * The template for displaying videos archive page
 * @package marctheme
 */

get_header(); ?>

	<?php
	$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
	$posts = new WP_query(
		array(
			'post_type'=> 'post',
			'post_status' => 'publish',
			'order' => 'DESC',
			'posts_per_page' => 6,
			'paged' => $paged,
			'tax_query' => array(
				array(
					'taxonomy' => 'post_format',
					'field' => 'slug',
					'terms' => array( 'post-format-video' )
				)
			)
		)
	);
	$count_posts = get_terms(
		array(
			'taxonomy' => 'post_format',
			'field' => 'count',
			'terms' => array( 'post-format-video' )
		)
	);

	?>

	<section class="image-page-header image-page-header_<?php echo strtolower(get_the_title()); ?> container-fluid">
		<?php the_title( '<h1 class="image-page-header__title">', ' <span class="image-page-header__quantity"> ('.$count_posts[0]->count.')</span></h1>' )?>
		<p class="image-page-header__subtitle"><?php echo get_post_meta(get_the_ID(), 'page_description', true); ?></p>
	</section>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			<section class="videos-list container">
				<div class="row">
					<?php if ( $posts->have_posts() ) :
						while ( $posts->have_posts() ) : $posts->the_post();
							get_template_part( 'template-parts/content', 'video' );
						endwhile;
						if ($posts->max_num_pages > 1) :?>
							<nav class="prev-next-posts">
								<div class="prev-posts-link">
									<?php echo get_next_posts_link( 'Older Entries', $posts->max_num_pages ); ?>
								</div>
								<div class="next-posts-link">
									<?php echo get_previous_posts_link( 'Newer Entries' ); ?>
								</div>
							</nav>
						<?php endif;
					else :
						$posts->get_template_part( 'template-parts/content', 'none' );
					endif;
					wp_reset_postdata();
					?>
				</div>
			</section>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
