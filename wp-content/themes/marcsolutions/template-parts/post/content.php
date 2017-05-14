<?php

/**

 * Template part for displaying posts

 *

 * @link https://codex.wordpress.org/Template_Hierarchy

 *

 * @package marcsolutions

 * @since 1.0

 * @version 1.0

 */

?>



<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<section class="image-page-header image-page-header_<?php echo strtolower(get_queried_object()->name); ?> container-fluid">

		<div class="row">

			<div class="col-md-12">

				<div class="image-page-header__title"><?php echo get_the_category(get_the_ID())[0]->name;?></div>

				<div class="image-page-header__subtitle"><?php echo get_the_category(get_the_ID())[0]->description;?></div>

			</div>

		</div>

	</section>

	<section class="article-content container">

		<div class="row">

			<div class="col-md-12">

				<h1 class="article__title"><?php the_title();?></h1>

				<div class="article__subtitle">

					<div class="article__date"><?php _e('Posted'); ?> <?php echo get_the_date(__( 'M j, Y' )); ?> <?php _e('by'); ?> <?php the_author_posts_link(); ?> </div>

				</div>

			</div>

			<div class="col-md-12">

				<div class="article-content__content"><?php the_content(); ?></div>

			</div>

		</div>

	</section>



</article><!-- #post-## -->