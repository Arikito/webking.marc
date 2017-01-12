<?php
/**
 * The template for displaying videos archive page
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package marctheme
 */

get_header(); ?>

	<?php
	$args = array(
	    'post_type'=> 'post',
	    'post_status' => 'publish',
	    'order' => 'DESC',
	    'tax_query' => array(
	        array(
	            'taxonomy' => 'post_format',
	            'field' => 'slug',
	            'terms' => array( 'post-format-video' )
	        )
	    )
	);
	$myposts = new WP_query($args);
	?>

	<section class="image-page-header image-page-header_videos container-fluid">
		<?php the_title( '<h1 class="image-page-header__title">', ' <span class="image-page-header__quantity"> ('.wp_count_terms( 'post_format', 'post-format-video' ).')</span></h1>' )?>
		<p class="image-page-header__subtitle"><?php echo get_post_meta(get_the_ID(), 'page_description', true); ?></p>
	</section>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			<section class="videos-list container">
				<div class="row">
					<?php if ( $myposts->have_posts() ) :
						while ( $myposts->have_posts() ) : $myposts->the_post();
							get_template_part( 'template-parts/content', 'video' );
						endwhile;
						$myposts->the_posts_navigation();
					else :
						$myposts->get_template_part( 'template-parts/content', 'none' );
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
