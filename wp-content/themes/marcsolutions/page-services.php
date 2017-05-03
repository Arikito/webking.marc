<?php
/**
 * The template for displaying services page
 * @package marctheme
 */

get_header(); ?>
	<section class="image-page-header image-page-header_<?php echo strtolower(get_the_title()); ?> container-fluid">
		<div class="row">
			<?php the_title( '<h1 class="image-page-header__title">', '</h1>' )?>
			<?php if(get_post_meta(get_the_ID(), 'page_description', true)){?>
				<div class="image-page-header__subtitle"><?php echo get_post_meta(get_the_ID(), 'page_description', true); ?></div>
			<?php }?>
		</div>
	</section>
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			<section class="services-tabs">
				<div class="container">
					<ul class="services-tabs__nav nav nav-tabs">
						<li class="services-tabs__nav-item">
							<a class="services-tabs__nav-item-link" href="#access">
								<img src="<?php echo get_template_directory_uri(); ?>/img/product_icons/1.svg" alt="">
								<span class="services-tabs__nav-item-label">M.A.R.C for SAP</span>
							</a>
						</li>
						<li class="services-tabs__nav-item">
							<a class="services-tabs__nav-item-link" href="#internal">
								<img src="<?php echo get_template_directory_uri(); ?>/img/product_icons/2.svg" alt="">
								<span class="services-tabs__nav-item-label">M.A.R.C for Non - SAP</span>
							</a>
						</li>
						<li class="services-tabs__nav-item active">
							<a class="services-tabs__nav-item-link" href="#risk">
								<img src="<?php echo get_template_directory_uri(); ?>/img/product_icons/3.svg" alt="">
								<span class="services-tabs__nav-item-label">Security and Authorization Scan, Implementation</span>
							</a>
						</li>
						<li class="services-tabs__nav-item">
							<a class="services-tabs__nav-item-link" href="#compliant">
								<img src="<?php echo get_template_directory_uri(); ?>/img/product_icons/4.svg" alt="">
								<span class="services-tabs__nav-item-label">GRC Access Control Implementation</span>
							</a>
						</li>
						<li class="services-tabs__nav-item">
							<a class="services-tabs__nav-item-link" href="#privielage">
								<img src="<?php echo get_template_directory_uri(); ?>/img/product_icons/5.svg" alt="">
								<span class="services-tabs__nav-item-label">Access & Identity Management Support Services</span>
							</a>
						</li>
					</ul>
				</div>
				<div class="services-tabs__tab-content container-fluid">
					<div class="row">
						<div class="container">
							<div class="tab-content">
								<div class="services-tabs__tab-content-item tab-pane fade" id="access">
									<div class="row">
										<div class="col-md-12">
											<div class="services-tabs__descr-block clearfix">
												<p class="services-tabs__product-drscr-title">M.A.R.C for SAP</p>
												<div class="services-tabs__descr-descr-text">
													<p>A perfect choice for supporting your:<br>A Powerful SOD identification and reporting application for SAP systems</p>
													<p>Сompliance tool for SAP Control Monitoring</p>
													<p>Risk Execution Monitor: it’s a M.A.R.C risk execution detection engine which helps you to identify potential business Sod risks executed by an SAP User</p>
													<p>SAP Access, identity management services in a shared -service model which facilitate effective services at low-cost mode</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="services-tabs__tab-content-item tab-pane fade" id="internal">
									<div class="row">
										<div class="col-md-12">
											<div class="services-tabs__descr-block clearfix">
												<p class="services-tabs__product-drscr-title">M.A.R.C for Non - SAP</p>
												<div class="services-tabs__descr-descr-text">
													<p>We are open to customize M.A.R.C solution to adopt its capabilities to be extended to any Non SAP system as well.</p>
													<p>A customizable SOD identification and reporting tool for Non - SAP systems</p>
													<p>Customizable compliance tool for Non - SAP Control Monitoring for critical business configurations</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="services-tabs__tab-content-item tab-pane fade in active" id="risk">
									<div class="row">
										<div class="col-md-12">
											<div class="services-tabs__descr-block clearfix">
												<p class="services-tabs__product-drscr-title">Security and Authorization Scan, Implementation</p>
												<div class="services-tabs__descr-descr-text">
													<p>Let us help in your SAP authorization, role design implementations projects. We are committed to apply the best role design practices, automation processes in role design and build phase which drastically reduce the implementation time and increase accuracy.Leveraging M.A.R.C ACM would be more handy for organization to have a SOD risk free roles.</p>
													<p>Leveraging M.A.R.C ACM would be more handy for organization to have a SOD risk free roles</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="services-tabs__tab-content-item tab-pane fade" id="compliant">
									<div class="row">
										<div class="col-md-12">
											<div class="services-tabs__descr-block clearfix">
												<p class="services-tabs__product-drscr-title">GRC Access Control Implementation</p>
												<div class="services-tabs__descr-descr-text">
													<p>Proven experience in designing, deploying and operating access management solutions for organizations running SAP. With deep technical and business process expertise, our SAP Security and GRC specialists will ensure you optimize access provisioning, whilst removing segregation of duties (SoD) conflicts.</p>
													<p>No matter what your starting point, we can help.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="services-tabs__tab-content-item tab-pane fade" id="privielage">
									<div class="row">
										<div class="col-md-12">
											<div class="services-tabs__descr-block clearfix">
												<p class="services-tabs__product-drscr-title">Access & Identity Management Support Services</p>
												<div class="services-tabs__descr-descr-text">
													<p>We have expertise and experience in managing SAP GRC governance services. As we follow shared service support model for GRC support services, your costs for the access, identity management comes down and increased efficient</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<?php
			while ( have_posts() ) : the_post();

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
