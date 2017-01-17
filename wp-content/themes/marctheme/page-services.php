<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package marctheme
 */

get_header(); ?>
	<section class="image-page-header image-page-header_<?php echo strtolower(get_the_title()); ?> container-fluid">
		<?php the_title( '<h1 class="image-page-header__title">', '</h1>' )?>
		<?php if(get_post_meta(get_the_ID(), 'page_description', true)){?>
			<p class="image-page-header__subtitle"><?php echo get_post_meta(get_the_ID(), 'page_description', true); ?></p>
		<?php }?>
	</section>
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			<div class="container">
				<div class="row">
					<div class="col-md-10 col-md-offset-2">
						<section class="services-list">
							<div class="services-list__item clearfix">
								<div class="services-list__icon services-list__icon_1">
									<img src="<?php echo get_template_directory_uri(); ?>/img/product_icons/1.svg" alt="">
								</div>
								<div class="services-list__content">
									<h2 class="services-list__title">M.A.R.C for SAP</h2>
									<p class="services-list__description">A perfect choice for supporting your:<br>A Powerful SOD identification and reporting application for SAP systems</p>
									<p class="services-list__description">Сompliance tool for SAP Control Monitoring</p>
									<p class="services-list__description">Risk Execution Monitor: it’s a M.A.R.C risk execution detection engine which helps you to identify potential business Sod risks executed by an SAP User</p>
									<p class="services-list__description">SAP Access, identity management services in a shared -service model which facilitate effective services at low-cost mode</p>
								</div>
							</div>
							<div class="services-list__item clearfix">
								<div class="services-list__icon services-list__icon_2">
									<img src="<?php echo get_template_directory_uri(); ?>/img/product_icons/2.svg" alt="">
								</div>
								<div class="services-list__content">
									<h2 class="services-list__title">M.A.R.C for Non - SAP</h2>
									<p class="services-list__description">We are open to customize M.A.R.C solution to adopt its capabilities to be extended to any Non SAP system as well.</p>
									<p class="services-list__description">A customizable SOD identification and reporting tool for Non - SAP systems</p>
									<p class="services-list__description">Customizable compliance tool for Non - SAP Control Monitoring for critical business configurations</p>
								</div>
							</div>
							<div class="services-list__item clearfix">
								<div class="services-list__icon services-list__icon_3">
									<img src="<?php echo get_template_directory_uri(); ?>/img/product_icons/3.svg" alt="">
								</div>
								<div class="services-list__content">
									<h2 class="services-list__title">Security and Authorization Scan, Implementation</h2>
									<p class="services-list__description">Let us help in your SAP authorization, role design implementations projects. We are committed to apply the best role design practices, automation processes in role design and build phase which drastically reduce the implementation time and increase accuracy.Leveraging M.A.R.C ACM would be more handy for organization to have a SOD risk free roles.</p>
									<p class="services-list__description">Leveraging M.A.R.C ACM would be more handy for organization to have a SOD risk free roles</p>
								</div>
							</div>
							<div class="services-list__item clearfix">
								<div class="services-list__icon services-list__icon_4">
									<img src="<?php echo get_template_directory_uri(); ?>/img/product_icons/4.svg" alt="">
								</div>
								<div class="services-list__content">
									<h2 class="services-list__title">GRC Access Control Implementation</h2>
									<p class="services-list__description">Proven experience in designing, deploying and operating access management solutions for organizations running SAP. With deep technical and business process expertise, our SAP Security and GRC specialists will ensure you optimize access provisioning, whilst removing segregation of duties (SoD) conflicts.</p>
									<p class="services-list__description">No matter what your starting point, we can help.</p>
								</div>
							</div>
							<div class="services-list__item clearfix">
								<div class="services-list__icon services-list__icon_5">
									<img src="<?php echo get_template_directory_uri(); ?>/img/product_icons/5.svg" alt="">
								</div>
								<div class="services-list__content">
									<h2 class="services-list__title">Access & Identity Management Support Services</h2>
									<p class="services-list__description">We have expertise and experience in managing SAP GRC governance services. As we follow shared service support model for GRC support services, your costs for the access, identity management comes down and increased efficient</p>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
			<?php
			while ( have_posts() ) : the_post();

				get_template_part( 'template-parts/content', 'page' );

				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;

			endwhile; // End of the loop.
			?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
