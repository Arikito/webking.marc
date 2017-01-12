<?php
/**
 * Template part for displaying posts
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package marctheme
 */

?>

<div class="updates-list__item">
	<div class="updates-list__image-block col-sm-4">
		<img class="updates-list__image" src="/wp-content/themes/marc/img/updates_image.png" alt="">
	</div>
	<div class="updates-list__descr col-sm-8">
		<?php	the_title( '<a href="' . esc_url( get_permalink() ) . '" class="updates-list__title" rel="bookmark">', '</a>' );?>

		<div class="updates-list__descr-text">
			<?php
				the_content( sprintf(
					/* translators: %s: Name of current post. */
					wp_kses( __( 'Continue reading %s <span class="meta-nav">&rarr;</span>', 'marctheme' ), array( 'span' => array( 'class' => array() ) ) ),
					the_title( '<span class="screen-reader-text">"', '"</span>', false )
				) );

				wp_link_pages( array(
					'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'marctheme' ),
					'after'  => '</div>',
				) );
			?>
		</div>
		<div class="updates-list__footer">
			<p class="updates-list__date"><?php marctheme_posted_on(); ?></p>
			<div class="updates-list__footer-decor-line"></div>
			<button class="updates-list__btn btn btn-primary"><?php read_more(); ?>  <span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></button>
		</div>
	</div>
</div>





<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<header class="entry-header">
		<?php
		if ( is_single() ) :
			the_title( '<h1 class="entry-title">', '</h1>' );
		else :
			the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
		endif;

		if ( 'post' === get_post_type() ) : ?>
		<div class="entry-meta">
			<?php marctheme_posted_on(); ?>
		</div><!-- .entry-meta -->
		<?php
		endif; ?>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php
			the_content( sprintf(
				/* translators: %s: Name of current post. */
				wp_kses( __( 'Continue reading %s <span class="meta-nav">&rarr;</span>', 'marctheme' ), array( 'span' => array( 'class' => array() ) ) ),
				the_title( '<span class="screen-reader-text">"', '"</span>', false )
			) );

			wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'marctheme' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->

	<footer class="entry-footer">
		<?php marctheme_entry_footer(); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-## -->
