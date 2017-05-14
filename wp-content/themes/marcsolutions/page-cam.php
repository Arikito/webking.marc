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



get_header();

global $post;

$post_slug = $post->post_name; ?>



	<section class="image-page-header image-page-header_<?php echo $post_slug; ?> container-fluid">

		<div class="row">

			<?php the_title( '<h1 class="image-page-header__title">', '</h1>' )?>
			<?php if(get_post_meta(get_the_ID(), 'page_description', true)) : ?>
				<div class="image-page-header__subtitle"><?php echo get_post_meta(get_the_ID(), 'page_description', true); ?></div>
			<?php endif; ?>

		</div>

	</section>

	<div id="primary" class="content-area product-page">

		<main id="main" class="site-main" role="main">
			<section class="benefits">
				<p class="products__description section-description">Nullam sit amet odio eu est aliquet euismod a a urna. Nullam sit amet odio eu</p>
				<div class="section-separator"></div>

				<div class="benefits__list snake">

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">1</div>

						<div class="benefits__item-content" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="process">

								<img src="<?php echo get_template_directory_uri(); ?>/img/cam_cup.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Compliant User Provisioning</div>

								<div class="benefits__item-description">

									<p>Execute the risk analysis before provisioning any user changes in SAP to avoid introducing new risks.</p>

										<ul>

											<li>View SoD conflict information / Statistics on interactive dashboards.</li>

											<li>Historical information view in dash boards.</li>

											</li>

										</ul>

								</div>

							</div>

						</div>

					</div>

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">2</div>

						<div class="benefits__item-content" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="letter">

								<img src="<?php echo get_template_directory_uri(); ?>/img/cam_nt.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Notifications Templates</div>

								<div class="benefits__item-description">

									<p>Customize the approval, user notification emails according to the company Logo, signatures, policy information etc.</p>

									<ul>

										<li>View SoD conflict information / Statistics on interactive dashboards.</li>

										<li>Historical information view in dash boards.</li>

									</li>

									</ul>

								</div>

							</div>

						</div>

					</div>

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">3</div>

						<div class="benefits__item-content" data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="board">

								<img src="<?php echo get_template_directory_uri(); ?>/img/cam_dash.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Dashboards</div>

								<div class="benefits__item-description">

									<p>Execute the risk analysis before provisioning any user changes in SAP to avoid introducing new risks.</p>

									<ul>

										<li>View SoD conflict information / Statistics on interactive dashboards.</li>

										<li>Historical information view in dash boards.</li>

										</li>

									</ul>

								</div>

							</div>

						</div>

					</div>

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">4</div>

						<div class="benefits__item-content" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="chain">

								<img src="<?php echo get_template_directory_uri(); ?>/img/cam_wf.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Workflow</div>

								<div class="benefits__item-description">

									<p>Execute the risk analysis before provisioning any user changes in SAP to avoid introducing new risks.</p>

									<ul>

										<li>View SoD conflict information / Statistics on interactive dashboards.</li>

										<li>Historical information view in dash boards.</li>

										</li>

									</ul>

								</div>

							</div>

						</div>

					</div>

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">5</div>

						<div class="benefits__item-content" data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="lock">

								<img src="<?php echo get_template_directory_uri(); ?>/img/cam_pass.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Password Reset / Unlock</div>

								<div class="benefits__item-description">

									<p>Execute the risk analysis before provisioning any user changes in SAP to avoid introducing new risks.</p>

									<ul>

										<li>View SoD conflict information / Statistics on interactive dashboards.</li>

										<li>Historical information view in dash boards.</li>

										</li>

									</ul>

								</div>

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

