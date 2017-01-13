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
				<h1 class="image-page-header__title"><?php echo get_queried_object()->name; ?></h1>
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
							get_template_part( 'template-parts/content', 'category' );

						?>

						<?php
						endwhile;

						// the_posts_navigation();
						// echo paginate_links(array('format' => '?paged=%#%', 'show_all' => false, 'prev_next' => true));
						echo get_the_posts_pagination(
							array(
								'show_all'     => false, // показаны все страницы участвующие в пагинации
								'end_size'     => 1,     // количество страниц на концах
								'mid_size'     => 1,     // количество страниц вокруг текущей
								'prev_next'    => true,  // выводить ли боковые ссылки "предыдущая/следующая страница".
								'prev_text'    => html_entity_decode('<span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>'), //__('Previous'),
								'next_text'    => html_entity_decode('<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>'), //__('Next'),
								'add_args'     => false, // Массив аргументов (переменных запроса), которые нужно добавить к ссылкам.
								'add_fragment' => '',     // Текст который добавиться ко всем ссылкам.
								'screen_reader_text' => __( 'Posts navigation' ),
							)
						);

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
